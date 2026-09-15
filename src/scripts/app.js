/* Çince Tercüman — client interaction layer (ES module).
 * Menu toggle, quote-form preview, copy. No network requests, no request
 * logging. prepareContactV13 lives in contact.mjs (single source of truth).
 */
import { prepareContactV13 } from "./contact.mjs";

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

/* ---- Quote form wiring (progressive enhancement) ---- */
const form = document.querySelector("[data-quote-form]");
if (form) {
  const locale = form.getAttribute("data-locale") || "tr";
  const preview = form.querySelector("[data-preview]");
  const errorSummary = form.querySelector("[data-error-summary]");
  const waLink = form.querySelector("[data-wa]");
  const mailLink = form.querySelector("[data-mail]");
  const copyBtn = form.querySelector("[data-copy]");
  const langNote = form.querySelector("[data-lang-note]");

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
      nameCompany: get("nameCompany")
    };
    if (langEl) input.languageRequirement = langEl.value;
    return input;
  };

  const showErrors = (code) => {
    if (!errorSummary) return;
    errorSummary.textContent = form.getAttribute(`data-error-${code}`) || form.getAttribute("data-error-generic") || code;
    errorSummary.hidden = false;
    errorSummary.setAttribute("tabindex", "-1");
    errorSummary.focus();
  };

  const update = (e) => {
    if (e) e.preventDefault();
    if (errorSummary) errorSummary.hidden = true;
    let result;
    try {
      result = prepareContactV13(collect());
    } catch (err) {
      if (preview) preview.textContent = "";
      showErrors(err.message);
      return null;
    }
    if (preview) preview.textContent = result.text; // safe: textContent, never innerHTML
    if (waLink) waLink.href = result.whatsapp;
    if (mailLink) mailLink.href = result.mailto;
    if (langNote) langNote.hidden = !result.requiresLanguageConfirmation;
    return result;
  };

  form.addEventListener("submit", update);
  form.addEventListener("input", () => { if (errorSummary && errorSummary.hidden) update(); });

  if (copyBtn && preview) {
    copyBtn.addEventListener("click", () => {
      const res = update();
      const text = res ? res.text : preview.textContent;
      if (!text) return;
      const done = () => {
        const old = copyBtn.textContent;
        copyBtn.textContent = copyBtn.getAttribute("data-copied") || old;
        setTimeout(() => { copyBtn.textContent = old; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, () => {});
      }
    });
  }
}
