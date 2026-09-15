// Aggregates all page content modules into a single ordered list.
import { home } from "./pages/home.mjs";
import { services } from "./pages/services.mjs";
import { serviceDetail } from "./pages/service-detail.mjs";
import { rates } from "./pages/rates.mjs";
import { areas } from "./pages/areas.mjs";
import { about } from "./pages/about.mjs";
import { faqPage } from "./pages/faq-page.mjs";
import { contact } from "./pages/contact.mjs";
import { guides } from "./pages/guides.mjs";
import { cityPages } from "./pages/cities.mjs";
import { azFaqPage, azHomeLocale, azContactLocale } from "./pages/az.mjs";

// §61: the home and contact groups carry true 3-way hreflang (tr / zh-Hans / az).
// The AZ landing and AZ contact are the az alternates of those two groups.
home.locales.az = azHomeLocale;
contact.locales.az = azContactLocale;

export const pages = [
  home,
  services,
  ...serviceDetail,
  rates,
  areas,
  about,
  faqPage,
  contact,
  ...guides,
  ...cityPages,
  azFaqPage
];
