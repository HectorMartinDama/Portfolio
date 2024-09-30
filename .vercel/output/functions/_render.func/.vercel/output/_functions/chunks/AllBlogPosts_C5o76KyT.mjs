import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from './astro/server_SzM1YHsw.mjs';
import 'kleur/colors';
import 'clsx';
import { U as URL_BLOG } from './data_BWEk-W4o.mjs';
import { g as getEnv, c as createInvalidVariablesError, s as setOnSetGetEnv } from './setup_DLmRkRPo.mjs';

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const formatIsoDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const formatUrlBlogPost = (slug, collection) => {
    return URL_BLOG + slug.split("/")[0] + "/" + collection + "/" + slug.split("/")[1];
  };
  const { entry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(formatUrlBlogPost(entry.slug, entry.collection), "href")} target="_blank"> <div class="w-full h-full max-w-lg rounded-xl overflow-hidden border hover:border-black duration-100 transition-all ease-in-out"> <img${addAttribute(URL_BLOG + entry.data.image.src, "src")}${addAttribute(entry.data.image.alt, "alt")} height="111" width="200" fetchpriority="high" class="w-full aspect-[8/5] object-contain"> <div class="p-3"> <h1 class="text-xl font-semibold">${entry.data.title}</h1> <div class="flex items-center gap-2 flex-wrap mt-2"> <p class="px-2 py-1 rounded-lg bg-muted text-xs cursor-pointer bg-[#F5F5F5]">${entry.data.category}</p> </div> <p class="text-sm mt-2 text-[#737373]">${entry.data.description}</p> <div class="w-full flex justify-end"> <p class="text-xs text-muted-foreground mt-2 px-2 py-1 rounded bg-[#F5F5F5]">${formatIsoDate(entry.data.date)}</p> </div> </div> </div> </a>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/BlogCard.astro", void 0);

const schema = {"BLOG_API_ENDPOINT":{"context":"server","access":"secret","type":"string"}};

// @ts-check

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

// used while generating the virtual module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setOnSetGetEnv((reset) => {
	BLOG_API_ENDPOINT = reset ? undefined : _internalGetSecret("BLOG_API_ENDPOINT");

});
let BLOG_API_ENDPOINT = _internalGetSecret("BLOG_API_ENDPOINT");

const $$AllBlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const getAllPosts = async () => {
    const response = await fetch(BLOG_API_ENDPOINT);
    if (!response.ok) throw new Error(`Error fetching posts: ${response.statusText}`);
    const data = await response.json();
    return data.englishDocsEntries;
  };
  const englishDocsEntries = await getAllPosts();
  return renderTemplate`${maybeRenderHead()}<div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8"> ${englishDocsEntries.map((entry) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "entry": entry })}`)} </div>`;
}, "/Users/hectormartindama/Dev/portfolio-minimal/src/components/AllBlogPosts.astro", void 0);

const $$file = "/Users/hectormartindama/Dev/portfolio-minimal/src/components/AllBlogPosts.astro";
const $$url = undefined;

export { $$AllBlogPosts as default, $$file as file, $$url as url };
