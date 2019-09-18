import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-2191ed9d.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["stencil-async-content",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]],["stencil-route-title",[[0,"stencil-route-title",{"titleSuffix":[1,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router-prompt",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[16],"unblock":[32]}]]],["stencil-router-redirect",[[0,"stencil-router-redirect",{"history":[16],"root":[1],"url":[1]}]]],["stencil-route",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[16],"location":[16],"history":[16],"historyType":[1,"history-type"]}]]],["stencil-route-switch",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16],"routeViewsUpdated":[16]}]]],["stencil-router",[[4,"stencil-router",{"root":[1],"historyType":[1,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["footer-bar",[[0,"footer-bar"]]],["icon-search",[[0,"icon-search",{"query":[1],"size":[1],"autofocus":[1],"showClearCtrl":[32]},[[0,"keyup","searchListener"]]]]],["stencil-route-link",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[16],"location":[16],"root":[1],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["landing-page",[[0,"landing-page",{"query":[1],"data":[8]}]]],["notfound-page",[[0,"notfound-page"]]],["header-bar",[[0,"header-bar",{"query":[1],"version":[1],"isSearchVisible":[4,"is-search-visible"],"isSticky":[32],"isMobileMenuShown":[32]},[[9,"scroll","handleScroll"],[9,"resize","handleResize"]]]]],["ionicons-site",[[0,"ionicons-site",{"data":[32],"query":[32],"isHeaderSearchVisible":[32]},[[9,"scroll","handleScroll"],[0,"hasSearched","searchHandler"],[0,"toggleHeaderSearch","toggleHandler"]]]]],["usage-page",[[0,"usage-page",{"match":[16],"data":[8],"exampleType":[32],"exampleIcon":[32]}]]],["toast-bar",[[0,"toast-bar",{"selectedIcon":[16],"selectedIconType":[1,"selected-icon-type"],"showCopiedConfirm":[32],"hadIconOnce":[32],"touchStartY":[32],"touchEndY":[32]}]]],["icon-list",[[0,"icon-list",{"query":[1],"data":[8],"selectedIcon":[32],"selectedIconType":[32],"isHeaderSearchVisible":[32]},[[32,"keyup","escListener"],[32,"click","handleBodyClicked"],[0,"clearToast","handleClearToast"],[9,"scroll","handleScroll"]]]]]], options);
});
