goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20242 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20243 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20243);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20343 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20343)){
var new_db_20344 = temp__5804__auto___20343;
var fexpr__20246_20345 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20246_20345.cljs$core$IFn$_invoke$arity$1 ? fexpr__20246_20345.cljs$core$IFn$_invoke$arity$1(new_db_20344) : fexpr__20246_20345.call(null,new_db_20344));
} else {
}

var seq__20248 = cljs.core.seq(effects_without_db);
var chunk__20249 = null;
var count__20250 = (0);
var i__20251 = (0);
while(true){
if((i__20251 < count__20250)){
var vec__20262 = chunk__20249.cljs$core$IIndexed$_nth$arity$2(null,i__20251);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(1),null);
var temp__5802__auto___20346 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20346)){
var effect_fn_20347 = temp__5802__auto___20346;
(effect_fn_20347.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20347.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20347.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20348 = seq__20248;
var G__20349 = chunk__20249;
var G__20350 = count__20250;
var G__20351 = (i__20251 + (1));
seq__20248 = G__20348;
chunk__20249 = G__20349;
count__20250 = G__20350;
i__20251 = G__20351;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20248);
if(temp__5804__auto__){
var seq__20248__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20248__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20248__$1);
var G__20352 = cljs.core.chunk_rest(seq__20248__$1);
var G__20353 = c__5565__auto__;
var G__20354 = cljs.core.count(c__5565__auto__);
var G__20355 = (0);
seq__20248 = G__20352;
chunk__20249 = G__20353;
count__20250 = G__20354;
i__20251 = G__20355;
continue;
} else {
var vec__20265 = cljs.core.first(seq__20248__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(1),null);
var temp__5802__auto___20356 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20356)){
var effect_fn_20357 = temp__5802__auto___20356;
(effect_fn_20357.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20357.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20357.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20358 = cljs.core.next(seq__20248__$1);
var G__20359 = null;
var G__20360 = (0);
var G__20361 = (0);
seq__20248 = G__20358;
chunk__20249 = G__20359;
count__20250 = G__20360;
i__20251 = G__20361;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19844__auto___20362 = re_frame.interop.now();
var duration__19845__auto___20363 = (end__19844__auto___20362 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19845__auto___20363,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19844__auto___20362);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20242);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20364 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20364)){
var new_db_20365 = temp__5804__auto___20364;
var fexpr__20269_20366 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20269_20366.cljs$core$IFn$_invoke$arity$1 ? fexpr__20269_20366.cljs$core$IFn$_invoke$arity$1(new_db_20365) : fexpr__20269_20366.call(null,new_db_20365));
} else {
}

var seq__20270 = cljs.core.seq(effects_without_db);
var chunk__20271 = null;
var count__20272 = (0);
var i__20273 = (0);
while(true){
if((i__20273 < count__20272)){
var vec__20281 = chunk__20271.cljs$core$IIndexed$_nth$arity$2(null,i__20273);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20281,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20281,(1),null);
var temp__5802__auto___20367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20367)){
var effect_fn_20368 = temp__5802__auto___20367;
(effect_fn_20368.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20368.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20368.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20369 = seq__20270;
var G__20370 = chunk__20271;
var G__20371 = count__20272;
var G__20372 = (i__20273 + (1));
seq__20270 = G__20369;
chunk__20271 = G__20370;
count__20272 = G__20371;
i__20273 = G__20372;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20270);
if(temp__5804__auto__){
var seq__20270__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20270__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20270__$1);
var G__20373 = cljs.core.chunk_rest(seq__20270__$1);
var G__20374 = c__5565__auto__;
var G__20375 = cljs.core.count(c__5565__auto__);
var G__20376 = (0);
seq__20270 = G__20373;
chunk__20271 = G__20374;
count__20272 = G__20375;
i__20273 = G__20376;
continue;
} else {
var vec__20286 = cljs.core.first(seq__20270__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20286,(1),null);
var temp__5802__auto___20377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20377)){
var effect_fn_20378 = temp__5802__auto___20377;
(effect_fn_20378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20379 = cljs.core.next(seq__20270__$1);
var G__20380 = null;
var G__20381 = (0);
var G__20382 = (0);
seq__20270 = G__20379;
chunk__20271 = G__20380;
count__20272 = G__20381;
i__20273 = G__20382;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20289){
var map__20291 = p__20289;
var map__20291__$1 = cljs.core.__destructure_map(map__20291);
var effect = map__20291__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20292 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20293 = null;
var count__20294 = (0);
var i__20295 = (0);
while(true){
if((i__20295 < count__20294)){
var effect = chunk__20293.cljs$core$IIndexed$_nth$arity$2(null,i__20295);
re_frame.fx.dispatch_later(effect);


var G__20384 = seq__20292;
var G__20385 = chunk__20293;
var G__20386 = count__20294;
var G__20387 = (i__20295 + (1));
seq__20292 = G__20384;
chunk__20293 = G__20385;
count__20294 = G__20386;
i__20295 = G__20387;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20292);
if(temp__5804__auto__){
var seq__20292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20292__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20292__$1);
var G__20388 = cljs.core.chunk_rest(seq__20292__$1);
var G__20389 = c__5565__auto__;
var G__20390 = cljs.core.count(c__5565__auto__);
var G__20391 = (0);
seq__20292 = G__20388;
chunk__20293 = G__20389;
count__20294 = G__20390;
i__20295 = G__20391;
continue;
} else {
var effect = cljs.core.first(seq__20292__$1);
re_frame.fx.dispatch_later(effect);


var G__20392 = cljs.core.next(seq__20292__$1);
var G__20393 = null;
var G__20394 = (0);
var G__20395 = (0);
seq__20292 = G__20392;
chunk__20293 = G__20393;
count__20294 = G__20394;
i__20295 = G__20395;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20312 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20313 = null;
var count__20314 = (0);
var i__20315 = (0);
while(true){
if((i__20315 < count__20314)){
var vec__20324 = chunk__20313.cljs$core$IIndexed$_nth$arity$2(null,i__20315);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20396 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20396)){
var effect_fn_20397 = temp__5802__auto___20396;
(effect_fn_20397.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20397.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20397.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20398 = seq__20312;
var G__20399 = chunk__20313;
var G__20400 = count__20314;
var G__20401 = (i__20315 + (1));
seq__20312 = G__20398;
chunk__20313 = G__20399;
count__20314 = G__20400;
i__20315 = G__20401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20312);
if(temp__5804__auto__){
var seq__20312__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20312__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20312__$1);
var G__20402 = cljs.core.chunk_rest(seq__20312__$1);
var G__20403 = c__5565__auto__;
var G__20404 = cljs.core.count(c__5565__auto__);
var G__20405 = (0);
seq__20312 = G__20402;
chunk__20313 = G__20403;
count__20314 = G__20404;
i__20315 = G__20405;
continue;
} else {
var vec__20328 = cljs.core.first(seq__20312__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20328,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20407 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20407)){
var effect_fn_20408 = temp__5802__auto___20407;
(effect_fn_20408.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20408.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20408.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20409 = cljs.core.next(seq__20312__$1);
var G__20410 = null;
var G__20411 = (0);
var G__20412 = (0);
seq__20312 = G__20409;
chunk__20313 = G__20410;
count__20314 = G__20411;
i__20315 = G__20412;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20335 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20336 = null;
var count__20337 = (0);
var i__20338 = (0);
while(true){
if((i__20338 < count__20337)){
var event = chunk__20336.cljs$core$IIndexed$_nth$arity$2(null,i__20338);
re_frame.router.dispatch(event);


var G__20413 = seq__20335;
var G__20414 = chunk__20336;
var G__20415 = count__20337;
var G__20416 = (i__20338 + (1));
seq__20335 = G__20413;
chunk__20336 = G__20414;
count__20337 = G__20415;
i__20338 = G__20416;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20335);
if(temp__5804__auto__){
var seq__20335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20335__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20335__$1);
var G__20418 = cljs.core.chunk_rest(seq__20335__$1);
var G__20419 = c__5565__auto__;
var G__20420 = cljs.core.count(c__5565__auto__);
var G__20421 = (0);
seq__20335 = G__20418;
chunk__20336 = G__20419;
count__20337 = G__20420;
i__20338 = G__20421;
continue;
} else {
var event = cljs.core.first(seq__20335__$1);
re_frame.router.dispatch(event);


var G__20423 = cljs.core.next(seq__20335__$1);
var G__20424 = null;
var G__20425 = (0);
var G__20426 = (0);
seq__20335 = G__20423;
chunk__20336 = G__20424;
count__20337 = G__20425;
i__20338 = G__20426;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20339 = cljs.core.seq(value);
var chunk__20340 = null;
var count__20341 = (0);
var i__20342 = (0);
while(true){
if((i__20342 < count__20341)){
var event = chunk__20340.cljs$core$IIndexed$_nth$arity$2(null,i__20342);
clear_event(event);


var G__20427 = seq__20339;
var G__20428 = chunk__20340;
var G__20429 = count__20341;
var G__20430 = (i__20342 + (1));
seq__20339 = G__20427;
chunk__20340 = G__20428;
count__20341 = G__20429;
i__20342 = G__20430;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20339);
if(temp__5804__auto__){
var seq__20339__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20339__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20339__$1);
var G__20431 = cljs.core.chunk_rest(seq__20339__$1);
var G__20432 = c__5565__auto__;
var G__20433 = cljs.core.count(c__5565__auto__);
var G__20434 = (0);
seq__20339 = G__20431;
chunk__20340 = G__20432;
count__20341 = G__20433;
i__20342 = G__20434;
continue;
} else {
var event = cljs.core.first(seq__20339__$1);
clear_event(event);


var G__20435 = cljs.core.next(seq__20339__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__20339 = G__20435;
chunk__20340 = G__20436;
count__20341 = G__20437;
i__20342 = G__20438;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
