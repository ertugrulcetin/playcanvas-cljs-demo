goog.provide('day8.re_frame_10x.fx.window');
goog.scope(function(){
  day8.re_frame_10x.fx.window.goog$module$goog$object = goog.module.get('goog.object');
});
day8.re_frame_10x.fx.window.m__GT_str = (function day8$re_frame_10x$fx$window$m__GT_str(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__20472){
var vec__20473 = p__20472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20473,(1),null);
var k__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):k);
var v__$1 = (((v instanceof cljs.core.Keyword))?cljs.core.name(v):v);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''));
}),cljs.core.PersistentVector.EMPTY,m));
});
/**
 * Originally copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.fx.window.open_debugger_window = (function day8$re_frame_10x$fx$window$open_debugger_window(p__20477){
var map__20478 = p__20477;
var map__20478__$1 = cljs.core.__destructure_map(map__20478);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var document_title = document.title;
var window_title = goog.string.escapeString(["re-frame-10x | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document_title)].join(''));
var window_html = ["<head><title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window_title),"</title></head><body style=\"margin: 0px;\"></body>"].join('');
var window_features = day8.re_frame_10x.fx.window.m__GT_str(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"directories","directories",-900278123),new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.Keyword(null,"scrollbars","scrollbars",1817245048),new cljs.core.Keyword(null,"menubar","menubar",1684613273),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[top,width,new cljs.core.Keyword(null,"yes","yes",182838819),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"yes","yes",182838819),new cljs.core.Keyword(null,"no","no",-390373634),height,left]));
var temp__5802__auto__ = window.open("about:blank","re-frame-10x-popout",window_features);
if(cljs.core.truth_(temp__5802__auto__)){
var w = temp__5802__auto__;
var d = w.document;
d.open();

d.write(window_html);

day8.re_frame_10x.fx.window.goog$module$goog$object.set(w,"onload",cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_load,w,d));

d.close();

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(on_success);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(on_failure);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.window","open-debugger-window","day8.re-frame-10x.fx.window/open-debugger-window",-30863444),day8.re_frame_10x.fx.window.open_debugger_window);

//# sourceMappingURL=day8.re_frame_10x.fx.window.js.map
