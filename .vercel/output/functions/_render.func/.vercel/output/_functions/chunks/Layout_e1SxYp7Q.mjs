import { c as createComponent, r as renderTemplate, d as addAttribute, f as renderScript, b as createAstro, m as maybeRenderHead, a as renderComponent, g as renderHead, h as renderSlot } from './astro/server_SzM1YHsw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/hectormartindama/Dev/portfolio-minimal/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Email = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/icons/Email.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/icons/Github.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/icons/Linkedin.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 inline-flex items-center text-sm rounded-lg z-50 gap-5 w-full"> <a href="/" class="px-2 py-1 rounded transition-colors duration-150 hover:bg-[#F5F5F5]">Projects</a> <a href="/experience" class="px-2 py-1 rounded transition-colors duration-150 hover:bg-[#F5F5F5]">Experience</a> <a href="/blogs" class="px-2 py-1 rounded transition-colors duration-150 hover:bg-[#F5F5F5]">Blog</a> </nav>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="absolute w-full"> <main class="relative w-full lg:h-screen p-0 sm:p-5"> <div class="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x"> <div class="w-full lg:w-2/5 p-2 md:p-8"> <h1 class="text-3xl text-[#0A0A0A] leading-10 font-semibold -tracking-wider">Héctor Martin Dama</h1> <p class="my-6 max-w-2xl text-base text-[#0A0A0A]">Hey 👋 Héctor here! I am a full stack developer from Madrid, Spain. I build web applications and backend servers.</p> <div class="flex flex-wrap items-center gap-2"> <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border h-9 px-4 py-2 transition-colors duration-150 hover:bg-black hover:text-white"> <a href="https://drive.google.com/file/d/1WEEdMrY0lGpx_0qmsYKotSIakt3CQNiy/view?usp=sharing" target="_blank" class="font-semibold">Resume</a> </button> <a href="https://github.com/HectorMartinDama" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border h-9 w-9"> ${renderComponent($$result, "Github", $$Github, {})} </a> <a href="www.linkedin.com/in/héctor-martín-dama-a88a761a2" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border h-9 w-9"> ${renderComponent($$result, "Linkedin", $$Linkedin, {})} </a> <a href="mailto:info.hectormartindama@gmail.com" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border  h-9 w-9"> ${renderComponent($$result, "Email", $$Email, {})} </a> </div> <div class="mt-16 space-y-2 rounded-lg border-l-4 py-2 pl-4 max-w-2xl text-muted-foreground"> <p class="text-secondary"> <span class="font-semibold text-primary/90">Frontend: </span>
Sveltekit, Angular, Astro, Testing Library, Jest / Vitest and Cypress
</p> <p class="text-secondary"> <span class="font-semibold text-primary/90">Backend: </span>
NodeJS, Express, GraphQL, Microservices, RabbitMQ, DDD, Event-Drive Architecture
</p> <p class="text-secondary"> <span class="font-semibold text-primary/90">DevOps: </span>
Github Actions, CI, CD, Docker, AWS
</p> <p class="text-secondary"> <span class="font-semibold text-primary/90">Databases: </span>
MongoDB, SQL, SQLite and Redis
</p> </div> </div> <div class="relative w-full mt-6 max-w-4xl mx-auto lg:mt-0 lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll"> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} </div> </div> </main> </body></html>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
