goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5772__auto__ = [];
var len__5766__auto___24581 = arguments.length;
var i__5767__auto___24582 = (0);
while(true){
if((i__5767__auto___24582 < len__5766__auto___24581)){
args__5772__auto__.push((arguments[i__5767__auto___24582]));

var G__24583 = (i__5767__auto___24582 + (1));
i__5767__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__24565){
var vec__24566 = p__24565;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24566,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq24561){
var G__24562 = cljs.core.first(seq24561);
var seq24561__$1 = cljs.core.next(seq24561);
var G__24563 = cljs.core.first(seq24561__$1);
var seq24561__$2 = cljs.core.next(seq24561__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24562,G__24563,seq24561__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___24588 = arguments.length;
var i__5767__auto___24589 = (0);
while(true){
if((i__5767__auto___24589 < len__5766__auto___24588)){
args__5772__auto__.push((arguments[i__5767__auto___24589]));

var G__24590 = (i__5767__auto___24589 + (1));
i__5767__auto___24589 = G__24590;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__24577){
var vec__24578 = p__24577;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq24574){
var G__24575 = cljs.core.first(seq24574);
var seq24574__$1 = cljs.core.next(seq24574);
var G__24576 = cljs.core.first(seq24574__$1);
var seq24574__$2 = cljs.core.next(seq24574__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24575,G__24576,seq24574__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
