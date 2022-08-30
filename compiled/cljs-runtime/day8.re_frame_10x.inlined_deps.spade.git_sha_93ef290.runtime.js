goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),goog.DEBUG], null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_ = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.defaults.create_container();
}
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.__GT_css_var = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$__GT_css_var(n){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction("var",n);
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$compile_css(elements){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_css_compile_flags_STAR_,elements], 0));
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$compose_names(p__19397){
var map__19398 = p__19397;
var map__19398__$1 = cljs.core.__destructure_map(map__19398);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var composed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"composes","composes",-378837833));
if(cljs.core.not(composed)){
return style_name;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (typeof new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style-name","style-name",977914017),style_name,new cljs.core.Keyword(null,"value","value",305978217),item], null));

}
}
}),((cljs.core.seq_QMARK_(composed))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$runtime$ensure_style_BANG_(mode,base_style_name,factory,params){
var map__19403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(factory,base_style_name,params,params);
var map__19403__$1 = cljs.core.__destructure_map(map__19403);
var info = map__19403__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime._STAR_style_container_STAR_,style_name,css);

var G__19404 = mode;
var G__19404__$1 = (((G__19404 instanceof cljs.core.Keyword))?G__19404.fqn:null);
switch (G__19404__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names(info)], null);

break;
case "class":
case "keyframes":
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compose_names(info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19404__$1)].join('')));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.js.map
