/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_SzM1YHsw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_e1SxYp7Q.mjs';
import $$AllBlogPosts from '../chunks/AllBlogPosts_C5o76KyT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HectorDev - Articles" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AllBlogPosts", $$AllBlogPosts, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "/Users/hectormartindama/Dev/portfolio-minimal/src/components/AllBlogPosts.astro", "server:component-export": "default" })} ` })}`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/blogs/index.astro", void 0);

const $$file = "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
