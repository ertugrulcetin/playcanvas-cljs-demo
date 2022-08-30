goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate');

/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.IStyleContainer}
*/
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer = (function (get_preferred,fallback){
this.get_preferred = get_preferred;
this.fallback = fallback;
});
(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.prototype.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.prototype.day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$IStyleContainer$mount_style_BANG_$arity$3 = (function (_,style_name,css){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = (function (){var temp__5804__auto__ = (self__.get_preferred.cljs$core$IFn$_invoke$arity$0 ? self__.get_preferred.cljs$core$IFn$_invoke$arity$0() : self__.get_preferred.call(null));
if(cljs.core.truth_(temp__5804__auto__)){
var preferred = temp__5804__auto__;
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_(preferred,style_name,css);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.mount_style_BANG_(self__.fallback,style_name,css);
}
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"get-preferred","get-preferred",-940205889,null),new cljs.core.Symbol(null,"fallback","fallback",-1892797840,null)], null);
}));

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.alternate/AlternateStyleContainer");

(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.alternate/AlternateStyleContainer");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.container.alternate/AlternateStyleContainer.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.__GT_AlternateStyleContainer = (function day8$re_frame_10x$inlined_deps$spade$git_sha_93ef290$container$alternate$__GT_AlternateStyleContainer(get_preferred,fallback){
return (new day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.AlternateStyleContainer(get_preferred,fallback));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.container.alternate.js.map
