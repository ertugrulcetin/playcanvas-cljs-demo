goog.provide('devtools.formatters.state');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return (!((devtools.formatters.state._STAR_current_state_STAR_ == null)));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(devtools.formatters.state.valid_current_state_QMARK_()){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12528 = arguments.length;
var i__5767__auto___12529 = (0);
while(true){
if((i__5767__auto___12529 < len__5766__auto___12528)){
args__5772__auto__.push((arguments[i__5767__auto___12529]));

var G__12530 = (i__5767__auto___12529 + (1));
i__5767__auto___12529 = G__12530;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(devtools.formatters.state.valid_current_state_QMARK_()){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return (devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.formatters.state._STAR_current_state_STAR_,args));
}));

(devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq12421){
var G__12422 = cljs.core.first(seq12421);
var seq12421__$1 = cljs.core.next(seq12421);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12422,seq12421__$1);
}));

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object], 0));
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history__$1 = devtools.formatters.state.get_current_history();
return cljs.core.some((function (p1__12427_SHARP_){
return (p1__12427_SHARP_ === object);
}),history__$1);
});
devtools.formatters.state.get_last_object_from_current_history = (function devtools$formatters$state$get_last_object_from_current_history(){
return cljs.core.first(devtools.formatters.state.get_current_history());
});
devtools.formatters.state.get_second_last_object_from_current_history = (function devtools$formatters$state$get_second_last_object_from_current_history(){
return cljs.core.second(devtools.formatters.state.get_current_history());
});
devtools.formatters.state.present_path_segment = (function devtools$formatters$state$present_path_segment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12531 = arguments.length;
var i__5767__auto___12532 = (0);
while(true){
if((i__5767__auto___12532 < len__5766__auto___12531)){
args__5772__auto__.push((arguments[i__5767__auto___12532]));

var G__12533 = (i__5767__auto___12532 + (1));
i__5767__auto___12532 = G__12533;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.present_path_segment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.formatters.state.present_path_segment.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__12436){
var vec__12437 = p__12436;
var starting_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
if(typeof v === 'string'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return v;
} else {
if(((typeof v === 'number') && (typeof starting_index === 'number'))){
return (v + starting_index);
} else {
if(typeof v === 'number'){
return v;
} else {
return "?";

}
}
}
}
}));

(devtools.formatters.state.present_path_segment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.present_path_segment.cljs$lang$applyTo = (function (seq12434){
var G__12435 = cljs.core.first(seq12434);
var seq12434__$1 = cljs.core.next(seq12434);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12435,seq12434__$1);
}));

devtools.formatters.state.seek_path_segment = (function devtools$formatters$state$seek_path_segment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12538 = arguments.length;
var i__5767__auto___12539 = (0);
while(true){
if((i__5767__auto___12539 < len__5766__auto___12538)){
args__5772__auto__.push((arguments[i__5767__auto___12539]));

var G__12540 = (i__5767__auto___12539 + (1));
i__5767__auto___12539 = G__12540;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return devtools.formatters.state.seek_path_segment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(devtools.formatters.state.seek_path_segment.cljs$core$IFn$_invoke$arity$variadic = (function (coll,val,p__12455){
var vec__12462 = p__12455;
var seq_SINGLEQUOTE_d_map_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(0),null);
var starting_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(devtools.formatters.state.get_last_object_from_current_history()));
var _STAR_ = (function (p__12466){
var vec__12467 = p__12466;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = seq_SINGLEQUOTE_d_map_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (k === val);
} else {
return and__5041__auto__;
}
})())){
return devtools.formatters.state.present_path_segment(k);
} else {
if((v === val)){
return devtools.formatters.state.present_path_segment.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([starting_index], 0));
} else {
return null;
}
}
});
return cljs.core.some(_STAR_,coll);
}));

(devtools.formatters.state.seek_path_segment.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.state.seek_path_segment.cljs$lang$applyTo = (function (seq12446){
var G__12450 = cljs.core.first(seq12446);
var seq12446__$1 = cljs.core.next(seq12446);
var G__12451 = cljs.core.first(seq12446__$1);
var seq12446__$2 = cljs.core.next(seq12446__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12450,G__12451,seq12446__$2);
}));

devtools.formatters.state.build_path_segment = (function devtools$formatters$state$build_path_segment(parent_object,object){
if(cljs.core.map_QMARK_(parent_object)){
return devtools.formatters.state.seek_path_segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(parent_object),object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
} else {
if(cljs.core.sequential_QMARK_(parent_object)){
return devtools.formatters.state.seek_path_segment(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
}),parent_object),object);
} else {
if(((cljs.core.set_QMARK_(parent_object)) && (((cljs.core.contains_QMARK_(parent_object,object)) && (((typeof object === 'string') || ((((object instanceof cljs.core.Keyword)) || (cljs.core.integer_QMARK_(object)))))))))){
return object;
} else {
if(((cljs.core.set_QMARK_(parent_object)) && (cljs.core.contains_QMARK_(parent_object,object)))){
return devtools.formatters.state.seek_path_segment(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
}),parent_object),object);
} else {
return null;
}
}
}
}
});
devtools.formatters.state.mapping_QMARK_ = (function devtools$formatters$state$mapping_QMARK_(history,obj){
var first_kw = ((((cljs.core.vector_QMARK_(obj)) && (cljs.core.map_QMARK_(history))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$3(obj,(0),null):null);
var valid_kw_QMARK_ = (function (){var and__5041__auto__ = first_kw;
if(cljs.core.truth_(and__5041__auto__)){
return (((((first_kw instanceof cljs.core.Keyword)) || (((typeof first_kw === 'string') || (typeof first_kw === 'number'))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(obj),(2))));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(valid_kw_QMARK_)){
return cljs.core.contains_QMARK_(history,first_kw);
} else {
return null;
}
});
devtools.formatters.state.ignore_path_in_fake_vector = (function devtools$formatters$state$ignore_path_in_fake_vector(history,obj,path){
if(cljs.core.truth_(devtools.formatters.state.mapping_QMARK_(history,obj))){
var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return null;
}
});
devtools.formatters.state.find_path_in_fake_vector = (function devtools$formatters$state$find_path_in_fake_vector(history,path){
var second_last_history = devtools.formatters.state.get_second_last_object_from_current_history();
if(cljs.core.truth_(devtools.formatters.state.mapping_QMARK_(second_last_history,history))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(history,(0),null));
} else {
return null;
}
});
devtools.formatters.state.find_path = (function devtools$formatters$state$find_path(history,obj,path){
var path_segment = devtools.formatters.state.build_path_segment(history,obj);
if((!((path_segment == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),path_segment);
} else {
return null;
}
});
devtools.formatters.state.extend_path_info = (function devtools$formatters$state$extend_path_info(path_info,object){
var parent_object = devtools.formatters.state.get_last_object_from_current_history();
var or__5043__auto__ = devtools.formatters.state.ignore_path_in_fake_vector(parent_object,object,path_info);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = devtools.formatters.state.find_path_in_fake_vector(parent_object,path_info);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = devtools.formatters.state.find_path(parent_object,object,path_info);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return path_info;
}
}
}
});
devtools.formatters.state.add_object_to_current_path_info_BANG_ = (function devtools$formatters$state$add_object_to_current_path_info_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-info","path-info",-1932254250),devtools.formatters.state.extend_path_info,object], 0));
});
devtools.formatters.state.get_current_path_info = (function devtools$formatters$state$get_current_path_info(){
return new cljs.core.Keyword(null,"path-info","path-info",-1932254250).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$(new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state()));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606));
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473),val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473));
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888),val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888));
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level(devtools.formatters.state.set_depth_budget(state,null),null);
});

//# sourceMappingURL=devtools.formatters.state.js.map
