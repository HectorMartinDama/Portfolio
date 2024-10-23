import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CObzXdkp.mjs';
import { manifest } from './manifest_CJxRTMaH.mjs';

const serverIslandMap = new Map([
	['AllBlogPosts', () => import('./chunks/AllBlogPosts_C5o76KyT.mjs')],
]);;

const _page0 = () => import('./pages/blogs.astro.mjs');
const _page1 = () => import('./pages/experience.astro.mjs');
const _page2 = () => import('./pages/til.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const _page4 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/blogs/index.astro", _page0],
    ["src/pages/experience/index.astro", _page1],
    ["src/pages/til/index.astro", _page2],
    ["src/pages/index.astro", _page3],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "60fd7e47-edd9-4275-831a-89ffd857c1dd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
