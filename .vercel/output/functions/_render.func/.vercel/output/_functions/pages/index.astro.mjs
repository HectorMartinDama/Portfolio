/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_SzM1YHsw.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_e1SxYp7Q.mjs';
import { P as PROJECTS } from '../chunks/data_BWEk-W4o.mjs';
export { renderers } from '../renderers.mjs';

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-article"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M7 8h10"></path><path d="M7 12h10"></path><path d="M7 16h10"></path></svg>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/icons/Article.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex p-3 justify-between gap-2 rounded-2xl border border-b-8 overflow-hidden"> <div class="space-y-2 w-full tablet:w-3/5"> <a${addAttribute(project.deploy, "href")} target="_blank" class="space-y-2 group/link"> <div class="inline-flex items-center gap-1"> <div class="flex items-center gap-2 flex-wrap"> <h1 class="text-xl font-semibold">${project.title}</h1> <span class="text-xs px-2 py-1 rounded bg-[#F5F5F5]">${project.date}</span> </div> </div> <p class="text-sm max-w-md text-[#737373]">${project.description}</p> </a> <div class="flex flex-wrap items-center gap-2"> ${project.technologies.map((technology) => renderTemplate`<p class="px-2 py-1 text-xs rounded bg-[#F5F5F5]">${technology}</p>`)} </div> <div class="flex flex-wrap items-center gap-2"> ${project.repository && renderTemplate`<a${addAttribute(project.repository, "href")} target="_blank" class="flex items-center justify-center h-8 w-8 border rounded"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> </a>`} <a${addAttribute(project.deploy, "href")} target="_blank" class="flex items-center justify-center h-8 w-8 border rounded"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-unlink"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 22v-2"></path><path d="M9 15l6 -6"></path><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path><path d="M20 17h2"></path><path d="M2 7h2"></path><path d="M7 2v2"></path></svg> </a> ${project.article && renderTemplate`<a${addAttribute(project.article, "href")} target="_blank" class="flex items-center justify-center h-8 w-8 border rounded"> ${renderComponent($$result, "Article", $$Article, {})} </a>`} </div> </div> <div class="w-[400px] aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl tablet:block"> <img${addAttribute(project.image.src, "src")}${addAttribute(project.image.alt, "alt")} fetchpriority="high"> </div> </div>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/ProjectCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HectorDev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-10 space-y-6"> ${PROJECTS.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> ` })}`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/index.astro", void 0);

const $$file = "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
