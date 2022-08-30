goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21839 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21840 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21840);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__21845 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21846 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21846);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21845);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21839);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21853 = arguments.length;
switch (G__21853) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__21864 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__21931_21977 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__21932_21978 = null;
var count__21933_21979 = (0);
var i__21934_21980 = (0);
while(true){
if((i__21934_21980 < count__21933_21979)){
var vec__21957_21981 = chunk__21932_21978.cljs$core$IIndexed$_nth$arity$2(null,i__21934_21980);
var container_21982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957_21981,(0),null);
var comp_21983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957_21981,(1),null);
reagent.dom.re_render_component(comp_21983,container_21982);


var G__21984 = seq__21931_21977;
var G__21985 = chunk__21932_21978;
var G__21986 = count__21933_21979;
var G__21987 = (i__21934_21980 + (1));
seq__21931_21977 = G__21984;
chunk__21932_21978 = G__21985;
count__21933_21979 = G__21986;
i__21934_21980 = G__21987;
continue;
} else {
var temp__5804__auto___21988 = cljs.core.seq(seq__21931_21977);
if(temp__5804__auto___21988){
var seq__21931_21989__$1 = temp__5804__auto___21988;
if(cljs.core.chunked_seq_QMARK_(seq__21931_21989__$1)){
var c__5565__auto___21990 = cljs.core.chunk_first(seq__21931_21989__$1);
var G__21991 = cljs.core.chunk_rest(seq__21931_21989__$1);
var G__21992 = c__5565__auto___21990;
var G__21993 = cljs.core.count(c__5565__auto___21990);
var G__21994 = (0);
seq__21931_21977 = G__21991;
chunk__21932_21978 = G__21992;
count__21933_21979 = G__21993;
i__21934_21980 = G__21994;
continue;
} else {
var vec__21963_21996 = cljs.core.first(seq__21931_21989__$1);
var container_21997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963_21996,(0),null);
var comp_21998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963_21996,(1),null);
reagent.dom.re_render_component(comp_21998,container_21997);


var G__22000 = cljs.core.next(seq__21931_21989__$1);
var G__22001 = null;
var G__22002 = (0);
var G__22003 = (0);
seq__21931_21977 = G__22000;
chunk__21932_21978 = G__22001;
count__21933_21979 = G__22002;
i__21934_21980 = G__22003;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
