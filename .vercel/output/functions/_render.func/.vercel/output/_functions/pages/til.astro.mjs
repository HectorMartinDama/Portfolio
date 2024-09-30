/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_BssNRSjG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DOv18Vrp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." })}`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/til/index.astro", void 0);

const $$file = "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/til/index.astro";
const $$url = "/til";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
