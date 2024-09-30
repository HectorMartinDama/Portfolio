import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_knihh90Q.mjs';
import { manifest } from './manifest_BVInyTjR.mjs';

const serverIslandMap = new Map([
	['AllBlogPosts', () => import('./chunks/AllBlogPosts_CkGkE2Dr.mjs')],
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
    "middlewareSecret": "7966d598-7c3d-49f4-880f-1c3552d395e3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
