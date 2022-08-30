goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16831 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16832 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16832);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16947 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16947)){
var new_db_16948 = temp__5804__auto___16947;
var fexpr__16835_16949 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16835_16949.cljs$core$IFn$_invoke$arity$1 ? fexpr__16835_16949.cljs$core$IFn$_invoke$arity$1(new_db_16948) : fexpr__16835_16949.call(null,new_db_16948));
} else {
}

var seq__16836 = cljs.core.seq(effects_without_db);
var chunk__16837 = null;
var count__16838 = (0);
var i__16839 = (0);
while(true){
if((i__16839 < count__16838)){
var vec__16852 = chunk__16837.cljs$core$IIndexed$_nth$arity$2(null,i__16839);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852,(1),null);
var temp__5802__auto___16950 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16950)){
var effect_fn_16951 = temp__5802__auto___16950;
(effect_fn_16951.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16951.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16951.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16952 = seq__16836;
var G__16953 = chunk__16837;
var G__16954 = count__16838;
var G__16955 = (i__16839 + (1));
seq__16836 = G__16952;
chunk__16837 = G__16953;
count__16838 = G__16954;
i__16839 = G__16955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16836);
if(temp__5804__auto__){
var seq__16836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16836__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16836__$1);
var G__16956 = cljs.core.chunk_rest(seq__16836__$1);
var G__16957 = c__5565__auto__;
var G__16958 = cljs.core.count(c__5565__auto__);
var G__16959 = (0);
seq__16836 = G__16956;
chunk__16837 = G__16957;
count__16838 = G__16958;
i__16839 = G__16959;
continue;
} else {
var vec__16856 = cljs.core.first(seq__16836__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856,(1),null);
var temp__5802__auto___16960 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16960)){
var effect_fn_16961 = temp__5802__auto___16960;
(effect_fn_16961.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16961.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16961.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16962 = cljs.core.next(seq__16836__$1);
var G__16963 = null;
var G__16964 = (0);
var G__16965 = (0);
seq__16836 = G__16962;
chunk__16837 = G__16963;
count__16838 = G__16964;
i__16839 = G__16965;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16508__auto___16966 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__16509__auto___16967 = (end__16508__auto___16966 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16509__auto___16967,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__16508__auto___16966);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16831);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16968 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16968)){
var new_db_16969 = temp__5804__auto___16968;
var fexpr__16859_16970 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16859_16970.cljs$core$IFn$_invoke$arity$1 ? fexpr__16859_16970.cljs$core$IFn$_invoke$arity$1(new_db_16969) : fexpr__16859_16970.call(null,new_db_16969));
} else {
}

var seq__16863 = cljs.core.seq(effects_without_db);
var chunk__16864 = null;
var count__16865 = (0);
var i__16866 = (0);
while(true){
if((i__16866 < count__16865)){
var vec__16874 = chunk__16864.cljs$core$IIndexed$_nth$arity$2(null,i__16866);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16874,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16874,(1),null);
var temp__5802__auto___16971 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16971)){
var effect_fn_16972 = temp__5802__auto___16971;
(effect_fn_16972.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16972.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16972.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16973 = seq__16863;
var G__16974 = chunk__16864;
var G__16975 = count__16865;
var G__16976 = (i__16866 + (1));
seq__16863 = G__16973;
chunk__16864 = G__16974;
count__16865 = G__16975;
i__16866 = G__16976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16863);
if(temp__5804__auto__){
var seq__16863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16863__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16863__$1);
var G__16977 = cljs.core.chunk_rest(seq__16863__$1);
var G__16978 = c__5565__auto__;
var G__16979 = cljs.core.count(c__5565__auto__);
var G__16980 = (0);
seq__16863 = G__16977;
chunk__16864 = G__16978;
count__16865 = G__16979;
i__16866 = G__16980;
continue;
} else {
var vec__16889 = cljs.core.first(seq__16863__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(1),null);
var temp__5802__auto___16981 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16981)){
var effect_fn_16982 = temp__5802__auto___16981;
(effect_fn_16982.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16982.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16982.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16983 = cljs.core.next(seq__16863__$1);
var G__16984 = null;
var G__16985 = (0);
var G__16986 = (0);
seq__16863 = G__16983;
chunk__16864 = G__16984;
count__16865 = G__16985;
i__16866 = G__16986;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16892){
var map__16893 = p__16892;
var map__16893__$1 = cljs.core.__destructure_map(map__16893);
var effect = map__16893__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16893__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16893__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__16899 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16900 = null;
var count__16901 = (0);
var i__16902 = (0);
while(true){
if((i__16902 < count__16901)){
var effect = chunk__16900.cljs$core$IIndexed$_nth$arity$2(null,i__16902);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16987 = seq__16899;
var G__16988 = chunk__16900;
var G__16989 = count__16901;
var G__16990 = (i__16902 + (1));
seq__16899 = G__16987;
chunk__16900 = G__16988;
count__16901 = G__16989;
i__16902 = G__16990;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16899);
if(temp__5804__auto__){
var seq__16899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16899__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16899__$1);
var G__16991 = cljs.core.chunk_rest(seq__16899__$1);
var G__16992 = c__5565__auto__;
var G__16993 = cljs.core.count(c__5565__auto__);
var G__16994 = (0);
seq__16899 = G__16991;
chunk__16900 = G__16992;
count__16901 = G__16993;
i__16902 = G__16994;
continue;
} else {
var effect = cljs.core.first(seq__16899__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16995 = cljs.core.next(seq__16899__$1);
var G__16996 = null;
var G__16997 = (0);
var G__16998 = (0);
seq__16899 = G__16995;
chunk__16900 = G__16996;
count__16901 = G__16997;
i__16902 = G__16998;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16908 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16909 = null;
var count__16910 = (0);
var i__16911 = (0);
while(true){
if((i__16911 < count__16910)){
var vec__16918 = chunk__16909.cljs$core$IIndexed$_nth$arity$2(null,i__16911);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16918,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16918,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16999 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16999)){
var effect_fn_17000 = temp__5802__auto___16999;
(effect_fn_17000.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17000.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17000.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17001 = seq__16908;
var G__17002 = chunk__16909;
var G__17003 = count__16910;
var G__17004 = (i__16911 + (1));
seq__16908 = G__17001;
chunk__16909 = G__17002;
count__16910 = G__17003;
i__16911 = G__17004;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16908);
if(temp__5804__auto__){
var seq__16908__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16908__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16908__$1);
var G__17005 = cljs.core.chunk_rest(seq__16908__$1);
var G__17006 = c__5565__auto__;
var G__17007 = cljs.core.count(c__5565__auto__);
var G__17008 = (0);
seq__16908 = G__17005;
chunk__16909 = G__17006;
count__16910 = G__17007;
i__16911 = G__17008;
continue;
} else {
var vec__16921 = cljs.core.first(seq__16908__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17010 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17010)){
var effect_fn_17011 = temp__5802__auto___17010;
(effect_fn_17011.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17011.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17011.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17014 = cljs.core.next(seq__16908__$1);
var G__17015 = null;
var G__17016 = (0);
var G__17017 = (0);
seq__16908 = G__17014;
chunk__16909 = G__17015;
count__16910 = G__17016;
i__16911 = G__17017;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16929 = null;
var count__16930 = (0);
var i__16931 = (0);
while(true){
if((i__16931 < count__16930)){
var event = chunk__16929.cljs$core$IIndexed$_nth$arity$2(null,i__16931);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17020 = seq__16928;
var G__17022 = chunk__16929;
var G__17023 = count__16930;
var G__17024 = (i__16931 + (1));
seq__16928 = G__17020;
chunk__16929 = G__17022;
count__16930 = G__17023;
i__16931 = G__17024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16928);
if(temp__5804__auto__){
var seq__16928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16928__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16928__$1);
var G__17025 = cljs.core.chunk_rest(seq__16928__$1);
var G__17026 = c__5565__auto__;
var G__17027 = cljs.core.count(c__5565__auto__);
var G__17028 = (0);
seq__16928 = G__17025;
chunk__16929 = G__17026;
count__16930 = G__17027;
i__16931 = G__17028;
continue;
} else {
var event = cljs.core.first(seq__16928__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17029 = cljs.core.next(seq__16928__$1);
var G__17030 = null;
var G__17031 = (0);
var G__17032 = (0);
seq__16928 = G__17029;
chunk__16929 = G__17030;
count__16930 = G__17031;
i__16931 = G__17032;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16932 = cljs.core.seq(value);
var chunk__16933 = null;
var count__16934 = (0);
var i__16935 = (0);
while(true){
if((i__16935 < count__16934)){
var event = chunk__16933.cljs$core$IIndexed$_nth$arity$2(null,i__16935);
clear_event(event);


var G__17033 = seq__16932;
var G__17034 = chunk__16933;
var G__17035 = count__16934;
var G__17036 = (i__16935 + (1));
seq__16932 = G__17033;
chunk__16933 = G__17034;
count__16934 = G__17035;
i__16935 = G__17036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16932);
if(temp__5804__auto__){
var seq__16932__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16932__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16932__$1);
var G__17038 = cljs.core.chunk_rest(seq__16932__$1);
var G__17039 = c__5565__auto__;
var G__17040 = cljs.core.count(c__5565__auto__);
var G__17041 = (0);
seq__16932 = G__17038;
chunk__16933 = G__17039;
count__16934 = G__17040;
i__16935 = G__17041;
continue;
} else {
var event = cljs.core.first(seq__16932__$1);
clear_event(event);


var G__17042 = cljs.core.next(seq__16932__$1);
var G__17043 = null;
var G__17044 = (0);
var G__17045 = (0);
seq__16932 = G__17042;
chunk__16933 = G__17043;
count__16934 = G__17044;
i__16935 = G__17045;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
