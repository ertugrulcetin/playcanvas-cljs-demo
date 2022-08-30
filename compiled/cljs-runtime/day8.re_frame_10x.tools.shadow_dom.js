goog.provide('day8.re_frame_10x.tools.shadow_dom');
/**
 * Creates a new div element with the id attached to the js-document <body>,
 * attaches a shadow DOM tree and returns a reference to its ShadowRoot.
 */
day8.re_frame_10x.tools.shadow_dom.shadow_root = (function day8$re_frame_10x$tools$shadow_dom$shadow_root(js_document,id){
var container = js_document.getElementById(id);
if(cljs.core.truth_(container)){
return container.shadowRoot;
} else {
var body = js_document.body;
var container__$1 = js_document.createElement("div");
var shadow_root = container__$1.attachShadow(({"mode": "open"}));
container__$1.setAttribute("id",id);

body.appendChild(container__$1);

window.focus(container__$1);

return shadow_root;
}
});

//# sourceMappingURL=day8.re_frame_10x.tools.shadow_dom.js.map
