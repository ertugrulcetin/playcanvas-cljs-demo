goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28172,res){
var map__28173 = p__28172;
var map__28173__$1 = cljs.core.__destructure_map(map__28173);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28173__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28173__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28174 = res;
var G__28174__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28174,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28174);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28174__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28174__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28181 = arguments.length;
switch (G__28181) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28193,msg,handlers,timeout_after_ms){
var map__28195 = p__28193;
var map__28195__$1 = cljs.core.__destructure_map(map__28195);
var runtime = map__28195__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28195__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28416 = arguments.length;
var i__5767__auto___28417 = (0);
while(true){
if((i__5767__auto___28417 < len__5766__auto___28416)){
args__5772__auto__.push((arguments[i__5767__auto___28417]));

var G__28419 = (i__5767__auto___28417 + (1));
i__5767__auto___28417 = G__28419;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28227,ev,args){
var map__28228 = p__28227;
var map__28228__$1 = cljs.core.__destructure_map(map__28228);
var runtime = map__28228__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28229 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28232 = null;
var count__28233 = (0);
var i__28234 = (0);
while(true){
if((i__28234 < count__28233)){
var ext = chunk__28232.cljs$core$IIndexed$_nth$arity$2(null,i__28234);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28426 = seq__28229;
var G__28427 = chunk__28232;
var G__28428 = count__28233;
var G__28429 = (i__28234 + (1));
seq__28229 = G__28426;
chunk__28232 = G__28427;
count__28233 = G__28428;
i__28234 = G__28429;
continue;
} else {
var G__28430 = seq__28229;
var G__28431 = chunk__28232;
var G__28432 = count__28233;
var G__28433 = (i__28234 + (1));
seq__28229 = G__28430;
chunk__28232 = G__28431;
count__28233 = G__28432;
i__28234 = G__28433;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28229);
if(temp__5804__auto__){
var seq__28229__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28229__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__28229__$1);
var G__28435 = cljs.core.chunk_rest(seq__28229__$1);
var G__28436 = c__5565__auto__;
var G__28437 = cljs.core.count(c__5565__auto__);
var G__28438 = (0);
seq__28229 = G__28435;
chunk__28232 = G__28436;
count__28233 = G__28437;
i__28234 = G__28438;
continue;
} else {
var ext = cljs.core.first(seq__28229__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28441 = cljs.core.next(seq__28229__$1);
var G__28442 = null;
var G__28443 = (0);
var G__28444 = (0);
seq__28229 = G__28441;
chunk__28232 = G__28442;
count__28233 = G__28443;
i__28234 = G__28444;
continue;
} else {
var G__28445 = cljs.core.next(seq__28229__$1);
var G__28446 = null;
var G__28447 = (0);
var G__28448 = (0);
seq__28229 = G__28445;
chunk__28232 = G__28446;
count__28233 = G__28447;
i__28234 = G__28448;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28211){
var G__28213 = cljs.core.first(seq28211);
var seq28211__$1 = cljs.core.next(seq28211);
var G__28214 = cljs.core.first(seq28211__$1);
var seq28211__$2 = cljs.core.next(seq28211__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28213,G__28214,seq28211__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28260,p__28261){
var map__28273 = p__28260;
var map__28273__$1 = cljs.core.__destructure_map(map__28273);
var runtime = map__28273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28274 = p__28261;
var map__28274__$1 = cljs.core.__destructure_map(map__28274);
var msg = map__28274__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28274__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__28279 = cljs.core.deref(state_ref);
var map__28279__$1 = cljs.core.__destructure_map(map__28279);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28279__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28279__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28287){
var map__28288 = p__28287;
var map__28288__$1 = cljs.core.__destructure_map(map__28288);
var runtime = map__28288__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28288__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28289,msg){
var map__28290 = p__28289;
var map__28290__$1 = cljs.core.__destructure_map(map__28290);
var runtime = map__28290__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28301,key,p__28302){
var map__28307 = p__28301;
var map__28307__$1 = cljs.core.__destructure_map(map__28307);
var state = map__28307__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28308 = p__28302;
var map__28308__$1 = cljs.core.__destructure_map(map__28308);
var spec = map__28308__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28308__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28314,key,spec){
var map__28315 = p__28314;
var map__28315__$1 = cljs.core.__destructure_map(map__28315);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28315__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28322_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28322_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28323_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28323_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28324_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28324_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28325_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28325_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28326_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28326_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28343,key){
var map__28345 = p__28343;
var map__28345__$1 = cljs.core.__destructure_map(map__28345);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28345__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28348,msg){
var map__28349 = p__28348;
var map__28349__$1 = cljs.core.__destructure_map(map__28349);
var runtime = map__28349__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28349__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28350,p__28351){
var map__28352 = p__28350;
var map__28352__$1 = cljs.core.__destructure_map(map__28352);
var runtime = map__28352__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28352__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28353 = p__28351;
var map__28353__$1 = cljs.core.__destructure_map(map__28353);
var msg = map__28353__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28353__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28353__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28364 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28366 = null;
var count__28367 = (0);
var i__28368 = (0);
while(true){
if((i__28368 < count__28367)){
var map__28378 = chunk__28366.cljs$core$IIndexed$_nth$arity$2(null,i__28368);
var map__28378__$1 = cljs.core.__destructure_map(map__28378);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28506 = seq__28364;
var G__28507 = chunk__28366;
var G__28508 = count__28367;
var G__28509 = (i__28368 + (1));
seq__28364 = G__28506;
chunk__28366 = G__28507;
count__28367 = G__28508;
i__28368 = G__28509;
continue;
} else {
var G__28510 = seq__28364;
var G__28511 = chunk__28366;
var G__28512 = count__28367;
var G__28513 = (i__28368 + (1));
seq__28364 = G__28510;
chunk__28366 = G__28511;
count__28367 = G__28512;
i__28368 = G__28513;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28364);
if(temp__5804__auto__){
var seq__28364__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28364__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__28364__$1);
var G__28520 = cljs.core.chunk_rest(seq__28364__$1);
var G__28521 = c__5565__auto__;
var G__28522 = cljs.core.count(c__5565__auto__);
var G__28523 = (0);
seq__28364 = G__28520;
chunk__28366 = G__28521;
count__28367 = G__28522;
i__28368 = G__28523;
continue;
} else {
var map__28383 = cljs.core.first(seq__28364__$1);
var map__28383__$1 = cljs.core.__destructure_map(map__28383);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28383__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28541 = cljs.core.next(seq__28364__$1);
var G__28542 = null;
var G__28543 = (0);
var G__28544 = (0);
seq__28364 = G__28541;
chunk__28366 = G__28542;
count__28367 = G__28543;
i__28368 = G__28544;
continue;
} else {
var G__28545 = cljs.core.next(seq__28364__$1);
var G__28546 = null;
var G__28547 = (0);
var G__28548 = (0);
seq__28364 = G__28545;
chunk__28366 = G__28546;
count__28367 = G__28547;
i__28368 = G__28548;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
