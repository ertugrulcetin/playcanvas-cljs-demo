goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom._STAR_injected_styles_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom._STAR_injected_styles_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.perform_update_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$perform_update_BANG_(obj,css){
return (new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(obj).innerHTML = css);
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.update_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$update_BANG_(styles_container,id,css){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(styles_container,cljs.core.update,id,(function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$update_BANG__$_update_injected_style(obj){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(obj),css)){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.perform_update_BANG_(obj,css);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"source","source",-433931539),css);
}));
});
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.inject_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$inject_BANG_(target_dom,styles_container,id,css){
var element = (function (){var G__16815 = document.createElement("style");
G__16815.setAttribute("spade-id",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

return G__16815;
})();
var obj = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"source","source",-433931539),css,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
if((!((target_dom == null)))){
} else {
throw (new Error(["Assert failed: ","An <head> element or target DOM is required to inject the style.","\n","(some? target-dom)"].join('')));
}

target_dom.appendChild(element);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(styles_container,cljs.core.assoc,id,obj);

return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.perform_update_BANG_(obj,css);
});

/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.IStyleContainer}
*/
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer = (function (target_dom,styles){
this.target_dom = target_dom;
this.styles = styles;
});
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.prototype.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.prototype.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$arity$3 = (function (_,style_name,css){
var self__ = this;
var ___$1 = this;
var resolved_container = (function (){var or__5043__auto__ = self__.styles;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom._STAR_injected_styles_STAR_;
}
})();
if(cljs.core.contains_QMARK_(cljs.core.deref(resolved_container),style_name)){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.update_BANG_(resolved_container,style_name,css);
} else {
var resolved_dom = (function (){var or__5043__auto__ = ((cljs.core.ifn_QMARK_(self__.target_dom))?(self__.target_dom.cljs$core$IFn$_invoke$arity$0 ? self__.target_dom.cljs$core$IFn$_invoke$arity$0() : self__.target_dom.call(null)):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = self__.target_dom;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return document.head;
}
}
})();
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.inject_BANG_(resolved_dom,resolved_container,style_name,css);
}
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target-dom","target-dom",-1966178879,null),new cljs.core.Symbol(null,"styles","styles",-699955394,null)], null);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.dom/DomStyleContainer");

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.dom/DomStyleContainer");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.dom/DomStyleContainer.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.__GT_DomStyleContainer = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$__GT_DomStyleContainer(target_dom,styles){
return (new day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.DomStyleContainer(target_dom,styles));
});

/**
 * Create a DomStyleContainer. With no args, the default is created, which
 * renders into the `document.head` element. For rendering into a custom
 * target, such as when using Shadow DOM, you may provide a custom
 * `target-dom`: this may either be the element itself, or a function which
 * returns that element.
 * 
 * If you also wish to provide your own storage for the style references, you
 * may use the 3-arity version and provide an atom.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$dom$create_container(var_args){
var G__16824 = arguments.length;
switch (G__16824) {
case 0:
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1(null);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$1 = (function (target_dom){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$2(target_dom,(cljs.core.truth_(target_dom)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null):null));
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$core$IFn$_invoke$arity$2 = (function (target_dom,styles_container){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.__GT_DomStyleContainer(target_dom,styles_container);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.create_container.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.dom.js.map
