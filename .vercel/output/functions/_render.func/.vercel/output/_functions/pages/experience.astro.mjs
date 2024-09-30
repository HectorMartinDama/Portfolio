/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as renderComponent } from '../chunks/astro/server_BssNRSjG.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_DOv18Vrp.mjs';
import { E as EXPERIENCE } from '../chunks/data_DIwx83PH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex justify-between flex-wrap"> <p class="font-semibold"> <a href="https://www.3nitram.com/" target="_blank" class="hover:underline text-lg font-semibold">3nitram</a> <span class="text-xs px-2 py-1 ml-2  rounded bg-[#F5F5F5] font-semibold">Remote</span> </p> <p class="text-xs text-secondary">November, 2023 - January, 2023</p> </div> <p class="-tracking-wide">Junior Salesforce Developer</p> <ul class="list-disc pl-5 text-sm text-muted-foreground text-secondary"> <li>Developing custom components in Salesforce with JavaScript</li> <li>Component testing with Jest and TDD</li> <li>Work with Scrum methodology</li> <li>Trainer of our product to customers</li> </ul> </div>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/ExperienceCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HectorDev - Experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-xl space-y-10 mt-10"> ${EXPERIENCE.map((experience) => renderTemplate`${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "experience": experience })}`)} </div> ` })}`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/experience/index.astro", void 0);

const $$file = "/Users/hectormartindama/Dev/portfolio-minimal/src/pages/experience/index.astro";
const $$url = "/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
