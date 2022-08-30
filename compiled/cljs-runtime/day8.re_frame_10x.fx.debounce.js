goog.provide('day8.re_frame_10x.fx.debounce');
day8.re_frame_10x.fx.debounce.now = (function day8$re_frame_10x$fx$debounce$now(){
return (new Date()).getTime();
});
day8.re_frame_10x.fx.debounce.registered_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded = (function day8$re_frame_10x$fx$debounce$dispatch_if_not_superceded(p__20163){
var map__20164 = p__20163;
var map__20164__$1 = cljs.core.__destructure_map(map__20164);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time_received = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,new cljs.core.Keyword(null,"time-received","time-received",1643766907));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time_received,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.fx.debounce.registered_keys),key))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(event);
} else {
return null;
}
});
day8.re_frame_10x.fx.debounce.dispatch_later = (function day8$re_frame_10x$fx$debounce$dispatch_later(p__20170){
var map__20172 = p__20170;
var map__20172__$1 = cljs.core.__destructure_map(map__20172);
var debounce = map__20172__$1;
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20172__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return setTimeout((function (){
return day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded(debounce);
}),delay);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.debounce","dispatch","day8.re-frame-10x.fx.debounce/dispatch",-293096343),(function day8$re_frame_10x$fx$debounce$dispatch_debounce(p__20174){
var map__20175 = p__20174;
var map__20175__$1 = cljs.core.__destructure_map(map__20175);
var debounce = map__20175__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20175__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20175__$1,new cljs.core.Keyword(null,"event","event",301435442));
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20175__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
if((!((((key instanceof cljs.core.Keyword)) && (((cljs.core.vector_QMARK_(event)) && (cljs.core.integer_QMARK_(delay)))))))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame-10x ::debounce/dispatch invalid argument"], 0));
} else {
}

var ts = day8.re_frame_10x.fx.debounce.now();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.fx.debounce.registered_keys,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(debounce),ts);

return day8.re_frame_10x.fx.debounce.dispatch_later(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(debounce,new cljs.core.Keyword(null,"time-received","time-received",1643766907),ts));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.debounce.js.map
