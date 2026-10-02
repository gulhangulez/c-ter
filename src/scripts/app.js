/* Çince Tercüman — client interaction layer (ES module).
 * Menu toggle, floating contact widget, quote-form preview/validation, copy.
 * No network requests and no request logging. prepareContactV13 lives in
 * contact.mjs (single source of truth for validation and the message).
 *
 * Measurement (plan §15.1): enum-only events are pushed to window.dataLayer
 * when a tag manager has created it, and dispatched as a DOM event otherwise.
 * Never sent: names, free text, city, dates, phone, the prepared message, or
 * wa.me/mailto URLs (their text/body carries the message).
 */
import { prepareContactV13 } from "./contact.mjs";

const body = document.body;
const PAGE_LANGUAGE = document.documentElement.lang || "tr";
const PAGE_ID = body?.dataset.pageId || "unknown";

const ENUMS = {
  channel: ["contact", "whatsapp", "email", "phone", "copy"],
  placement: ["header", "hero", "body", "footer", "mobile", "form", "widget"],
  service_id: ["china", "machine", "factory", "fair", "unsure", "none"],
  language_requirement: ["turkish-ok", "azerbaijani-required", "confirm-first"],
  error: ["invalid_service", "invalid_country", "service_country_mismatch", "invalid_city", "invalid_dates", "invalid_need", "invalid_name_company", "invalid_language_requirement", "invalid_source", "invalid_service_details"]
};
const pick = (key, value) => (ENUMS[key].includes(value) ? value : undefined);

function referrerCategory() {
  let host = "";
  try { host = document.referrer ? new URL(document.referrer).hostname : ""; } catch { return "unknown"; }
  if (!host) return "direct";
  if (host === location.hostname) return "internal";
  if (/(^|\.)google\./.test(host)) return "google";
  if (/(^|\.)bing\.com$/.test(host)) return "bing";
  if (/chatgpt\.com$|openai\.com$/.test(host)) return "chatgpt";
  if (/perplexity\.ai$/.test(host)) return "perplexity";
  return "other";
}

function emit(event, data = {}) {
  const payload = { event, page_id: PAGE_ID, page_language: PAGE_LANGUAGE, referrer_category: referrerCategory() };
  for (const [k, v] of Object.entries(data)) if (v !== undefined) payload[k] = v;
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
  document.dispatchEvent(new CustomEvent("ct:analytics", { detail: payload }));
}

/* ---- CTA clicks (intent only; never a sent request) ---- */
document.addEventListener("click", (e) => {
  const a = e.target.closest?.("[data-track]");
  if (!a) return;
  emit("contact_cta_click", {
    channel: pick("channel", a.dataset.channel),
    placement: pick("placement", a.dataset.placement)
  });
});

/* ---- Source page for the contact message (plan DEV07) ----
 * Every non-contact page remembers its own pathname for this tab. The contact
 * form uses it as "source page"; a direct visit keeps the contact path. Only a
 * same-site, query-free pathname is ever stored. */
const SOURCE_KEY = "ct:source";
const SAFE_PATH = /^\/[a-z0-9\-/]{0,120}$/;
const isContactPage = Boolean(document.querySelector("[data-quote-form]"));
function readSource() {
  try {
    const raw = JSON.parse(sessionStorage.getItem(SOURCE_KEY) || "null");
    if (raw && SAFE_PATH.test(raw.path)) return { path: raw.path, service: pick("service_id", raw.service) };
  } catch { /* storage blocked: treat as direct */ }
  return null;
}
if (!isContactPage) {
  try {
    if (SAFE_PATH.test(location.pathname)) {
      sessionStorage.setItem(SOURCE_KEY, JSON.stringify({ path: location.pathname, service: body?.dataset.serviceId || "none" }));
    }
  } catch { /* storage unavailable: nothing to remember */ }
}

/* ---- Mobile menu toggle ---- */
const toggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.getElementById("mobile-nav");
if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = mobileNav.hasAttribute("hidden");
    if (open) mobileNav.removeAttribute("hidden"); else mobileNav.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

/* ---- Floating contact widget: dismissible for this tab ---- */
const dock = document.querySelector("[data-dock]");
if (dock) {
  try { if (sessionStorage.getItem("ct:dock") === "closed") dock.hidden = true; } catch { /* ignore */ }
  dock.querySelector("[data-dock-close]")?.addEventListener("click", () => {
    dock.hidden = true;
    try { sessionStorage.setItem("ct:dock", "closed"); } catch { /* ignore */ }
  });
}

/* ---- Copyable working templates (guides) ---- */
for (const btn of document.querySelectorAll("[data-copy-target]")) {
  const idle = btn.textContent;
  btn.addEventListener("click", async () => {
    const target = document.getElementById(btn.getAttribute("data-copy-target"));
    if (!target || !navigator.clipboard?.writeText) return;
    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      btn.textContent = btn.getAttribute("data-copied") || idle;
      setTimeout(() => { btn.textContent = idle; }, 1600);
    } catch { /* no success message when the clipboard write fails */ }
  });
}

/* ---- Quote form (progressive enhancement; plan §12 T6.1 / DEV02) ---- */
const form = document.querySelector("[data-quote-form]");
if (form) {
  const locale = form.getAttribute("data-locale") || "tr";
  const preview = form.querySelector("[data-preview]");
  const errorSummary = form.querySelector("[data-error-summary]");
  const waLink = form.querySelector("[data-wa]");
  const mailLink = form.querySelector("[data-mail]");
  const copyBtn = form.querySelector("[data-copy]");
  const langNote = form.querySelector("[data-lang-note]");
  const contactPath = locale === "az" ? "/az/elaqe/" : locale === "zh-Hans" ? "/zh/contact/" : "/iletisim/";
  const source = readSource();

  // Preselect the service of the page the visitor came from, if the form is untouched.
  const serviceSelect = form.querySelector('[name="service"]');
  const countrySelect = form.querySelector('[name="country"]');
  const detailsDisclosure = form.querySelector('[data-details-disclosure]');
  const detailGroups = [...form.querySelectorAll('[data-service-details]')];
  const syncServiceDetails = () => {
    let hasDetails = false;
    for (const group of detailGroups) {
      const active = group.dataset.serviceDetails === serviceSelect?.value;
      group.hidden = !active;
      for (const field of group.querySelectorAll('input')) field.disabled = !active;
      if (active) hasDetails = true;
    }
    if (detailsDisclosure) detailsDisclosure.hidden = !hasDetails;
  };
  if (source?.service && source.service !== "none" && serviceSelect && !serviceSelect.value) {
    if ([...serviceSelect.options].some((o) => o.value === source.service)) {
      serviceSelect.value = source.service;
      if (countrySelect) countrySelect.value = source.service === "machine" ? "TR" : "CN";
    }
  }

  const collect = () => {
    const get = (n) => { const el = form.querySelector(`[name="${n}"]`); return el ? el.value : ""; };
    const langEl = form.querySelector('[name="languageRequirement"]:checked');
    const input = {
      locale,
      service: get("service"),
      country: get("country"),
      city: get("city"),
      dateLabel: get("dateLabel"),
      need: get("need"),
      nameCompany: get("nameCompany"),
      sourcePath: source?.path || contactPath
    };
    if (langEl) input.languageRequirement = langEl.value;
    if (locale === "tr") {
      input.serviceDetails = {};
      for (const field of form.querySelectorAll('[data-detail-key]:not(:disabled)')) {
        input.serviceDetails[field.dataset.detailKey] = field.value;
      }
    }
    return input;
  };

  const showErrors = (code) => {
    if (!errorSummary) return;
    errorSummary.textContent =
      form.getAttribute(`data-error-${code}`) ||
      form.getAttribute("data-error-generic") || code;
    errorSummary.hidden = false;
    errorSummary.setAttribute("tabindex", "-1");
    errorSummary.focus();
    emit("contact_validation_error", { error_code: pick("error", code) });
  };

  let started = false;
  let readySent = false;
  const update = ({ revealErrors = false } = {}) => {
    if (errorSummary) errorSummary.hidden = true;
    const input = collect();
    if (langNote) {
      langNote.hidden = !["azerbaijani-required", "confirm-first"].includes(input.languageRequirement);
    }
    try {
      const result = prepareContactV13(input);
      if (preview) preview.textContent = result.text; // textContent, never innerHTML
      if (waLink) waLink.href = result.whatsapp;
      if (mailLink) mailLink.href = result.mailto;
      for (const link of [waLink, mailLink]) link?.removeAttribute("aria-disabled");
      if (!readySent) {
        readySent = true;
        emit("contact_message_ready", {
          service_id: pick("service_id", input.service),
          language_requirement: pick("language_requirement", input.languageRequirement)
        });
      }
      return result;
    } catch (error) {
      if (preview) preview.textContent = "";
      // Never leave a previously valid message in the links. #muraciet is the
      // form section, so the links stay keyboard reachable.
      for (const link of [waLink, mailLink]) {
        if (!link) continue;
        link.setAttribute("href", "#muraciet");
        link.setAttribute("aria-disabled", "true");
      }
      if (revealErrors) showErrors(error.message);
      return null;
    }
  };

  // Re-evaluate on every change even while the error summary is visible;
  // focus never jumps to the summary while typing.
  const onEdit = (event) => {
    if (event.target === serviceSelect) {
      syncServiceDetails();
      if (locale === "tr" && countrySelect && ["china", "factory", "fair"].includes(serviceSelect.value)) countrySelect.value = "CN";
      if (locale === "tr" && countrySelect && serviceSelect.value === "machine") countrySelect.value = "TR";
    }
    if (!started) { started = true; emit("contact_form_start", { service_id: pick("service_id", serviceSelect?.value) }); }
    update();
  };
  form.addEventListener("input", onEdit);
  form.addEventListener("change", onEdit);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update({ revealErrors: true });
  });

  // Validate at the moment of the click; an invalid form never opens the app.
  for (const link of [waLink, mailLink]) {
    if (!link) continue;
    const validateBeforeOpen = (event) => {
      const result = update({ revealErrors: true });
      if (!result) { event.preventDefault(); return; }
      emit("contact_channel_open", { channel: link === waLink ? "whatsapp" : "email", service_id: pick("service_id", form.querySelector('[name="service"]')?.value) });
    };
    link.addEventListener("click", validateBeforeOpen);
    link.addEventListener("auxclick", validateBeforeOpen);
  }

  const copyIdleLabel = copyBtn?.textContent || "";
  let copyResetTimer;
  copyBtn?.addEventListener("click", async () => {
    const result = update({ revealErrors: true });
    if (!result || !navigator.clipboard?.writeText) return;
    try {
      await navigator.clipboard.writeText(result.text);
      clearTimeout(copyResetTimer);
      copyBtn.textContent = copyBtn.getAttribute("data-copied") || copyIdleLabel;
      copyResetTimer = setTimeout(() => { copyBtn.textContent = copyIdleLabel; }, 1600);
      emit("contact_message_copy", { channel: "copy" });
    } catch {
      // No success message when the clipboard write fails.
    }
  });

  // On first load an incomplete form must not carry an empty or stale message.
  syncServiceDetails();
  update();
}
