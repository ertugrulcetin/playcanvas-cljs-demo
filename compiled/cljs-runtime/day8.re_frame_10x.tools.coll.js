goog.provide('day8.re_frame_10x.tools.coll');
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.tools.coll.last_in_vec = (function day8$re_frame_10x$tools$coll$last_in_vec(v){
var num = cljs.core.count(v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.tools.coll.find_all_indexes_in_vec = (function day8$re_frame_10x$tools$coll$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20323_SHARP_,p2__20322_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__20322_SHARP_) : pred.call(null,p2__20322_SHARP_)))){
return p1__20323_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.tools.coll.find_index_in_vec = (function day8$re_frame_10x$tools$coll$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame_10x.tools.coll.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.tools.coll.id_between_xf = (function day8$re_frame_10x$tools$coll$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__20327_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20327_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20327_SHARP_) <= ending)));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.tools.coll.dissoc_in = (function day8$re_frame_10x$tools$coll$dissoc_in(m,p__20331){
var vec__20332 = p__20331;
var seq__20333 = cljs.core.seq(vec__20332);
var first__20334 = cljs.core.first(seq__20333);
var seq__20333__$1 = cljs.core.next(seq__20333);
var k = first__20334;
var ks = seq__20333__$1;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (day8.re_frame_10x.tools.coll.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.tools.coll.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.tools.coll.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * cljs.core/get-in with support for index access of lists and sets
 */
day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets = (function day8$re_frame_10x$tools$coll$get_in_with_lists_and_sets(m,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,k){
if(((cljs.core.list_QMARK_(ret)) || ((ret instanceof cljs.core.LazySeq)))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ret,k);
} else {
if(cljs.core.set_QMARK_(ret)){
if(typeof k === 'number'){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ret),k);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,k);
}
} else {
if(cljs.core.map_QMARK_(ret)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,k);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,k);

}
}
}
}),m,ks);
});

//# sourceMappingURL=day8.re_frame_10x.tools.coll.js.map
