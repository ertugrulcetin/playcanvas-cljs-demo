goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__29037,p__29038){
var map__29042 = p__29037;
var map__29042__$1 = cljs.core.__destructure_map(map__29042);
var svc = map__29042__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29042__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29042__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29042__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29043 = p__29038;
var map__29043__$1 = cljs.core.__destructure_map(map__29043);
var msg = map__29043__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29043__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29043__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29043__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29043__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__29054,p__29055){
var map__29057 = p__29054;
var map__29057__$1 = cljs.core.__destructure_map(map__29057);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29057__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__29058 = p__29055;
var map__29058__$1 = cljs.core.__destructure_map(map__29058);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29058__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__29079,p__29080){
var map__29083 = p__29079;
var map__29083__$1 = cljs.core.__destructure_map(map__29083);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29085 = p__29080;
var map__29085__$1 = cljs.core.__destructure_map(map__29085);
var msg = map__29085__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29085__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__29115,tid){
var map__29118 = p__29115;
var map__29118__$1 = cljs.core.__destructure_map(map__29118);
var svc = map__29118__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29118__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__29166 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__29167 = null;
var count__29168 = (0);
var i__29169 = (0);
while(true){
if((i__29169 < count__29168)){
var vec__29187 = chunk__29167.cljs$core$IIndexed$_nth$arity$2(null,i__29169);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29216 = seq__29166;
var G__29217 = chunk__29167;
var G__29218 = count__29168;
var G__29219 = (i__29169 + (1));
seq__29166 = G__29216;
chunk__29167 = G__29217;
count__29168 = G__29218;
i__29169 = G__29219;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29166);
if(temp__5804__auto__){
var seq__29166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29166__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29166__$1);
var G__29220 = cljs.core.chunk_rest(seq__29166__$1);
var G__29221 = c__5565__auto__;
var G__29222 = cljs.core.count(c__5565__auto__);
var G__29223 = (0);
seq__29166 = G__29220;
chunk__29167 = G__29221;
count__29168 = G__29222;
i__29169 = G__29223;
continue;
} else {
var vec__29192 = cljs.core.first(seq__29166__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29192,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29224 = cljs.core.next(seq__29166__$1);
var G__29225 = null;
var G__29226 = (0);
var G__29227 = (0);
seq__29166 = G__29224;
chunk__29167 = G__29225;
count__29168 = G__29226;
i__29169 = G__29227;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__29143_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__29143_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__29145_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__29145_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__29146_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__29146_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__29147_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__29147_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__29201){
var map__29202 = p__29201;
var map__29202__$1 = cljs.core.__destructure_map(map__29202);
var svc = map__29202__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29202__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29202__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
