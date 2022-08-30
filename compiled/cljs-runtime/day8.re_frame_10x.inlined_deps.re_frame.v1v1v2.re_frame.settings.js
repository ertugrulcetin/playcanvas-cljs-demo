goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.defaults);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.on_load((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
}));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.loaded_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$loaded_QMARK_(){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings._replace_global_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$_replace_global_interceptor(global_interceptors,interceptor){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,existing_interceptor){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing_interceptor))){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.not(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.loaded_QMARK_())){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: replacing duplicate global interceptor id: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor)], 0));
} else {
}
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,interceptor);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,existing_interceptor);
}
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue,global_interceptors);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.reg_global_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$reg_global_interceptor(p__16015){
var map__16016 = p__16015;
var map__16016__$1 = cljs.core.__destructure_map(map__16016);
var interceptor = map__16016__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),global_interceptors);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings._replace_global_interceptor(global_interceptors,interceptor);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(global_interceptors,interceptor);
}
}));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.get_global_interceptors = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$get_global_interceptors(){
return new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$settings$clear_global_interceptors(var_args){
var G__16030 = arguments.length;
switch (G__16030) {
case 0:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.assoc,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.empty_queue,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16024_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__16024_SHARP_));
}),global_interceptors));
}));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.js.map
