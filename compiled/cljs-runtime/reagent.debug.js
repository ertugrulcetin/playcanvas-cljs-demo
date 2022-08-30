goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__18691__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18692__i = 0, G__18692__a = new Array(arguments.length -  0);
while (G__18692__i < G__18692__a.length) {G__18692__a[G__18692__i] = arguments[G__18692__i + 0]; ++G__18692__i;}
  args = new cljs.core.IndexedSeq(G__18692__a,0,null);
} 
return G__18691__delegate.call(this,args);};
G__18691.cljs$lang$maxFixedArity = 0;
G__18691.cljs$lang$applyTo = (function (arglist__18693){
var args = cljs.core.seq(arglist__18693);
return G__18691__delegate(args);
});
G__18691.cljs$core$IFn$_invoke$arity$variadic = G__18691__delegate;
return G__18691;
})()
);

(o.error = (function() { 
var G__18694__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18695__i = 0, G__18695__a = new Array(arguments.length -  0);
while (G__18695__i < G__18695__a.length) {G__18695__a[G__18695__i] = arguments[G__18695__i + 0]; ++G__18695__i;}
  args = new cljs.core.IndexedSeq(G__18695__a,0,null);
} 
return G__18694__delegate.call(this,args);};
G__18694.cljs$lang$maxFixedArity = 0;
G__18694.cljs$lang$applyTo = (function (arglist__18696){
var args = cljs.core.seq(arglist__18696);
return G__18694__delegate(args);
});
G__18694.cljs$core$IFn$_invoke$arity$variadic = G__18694__delegate;
return G__18694;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
