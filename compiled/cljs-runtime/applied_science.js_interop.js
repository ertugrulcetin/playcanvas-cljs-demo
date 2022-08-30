goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31269 = arguments.length;
var i__5767__auto___31270 = (0);
while(true){
if((i__5767__auto___31270 < len__5766__auto___31269)){
args__5772__auto__.push((arguments[i__5767__auto___31270]));

var G__31271 = (i__5767__auto___31270 + (1));
i__5767__auto___31270 = G__31271;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__31015_31273 = keyvals;
var vec__31016_31274 = G__31015_31273;
var seq__31017_31275 = cljs.core.seq(vec__31016_31274);
var first__31018_31276 = cljs.core.first(seq__31017_31275);
var seq__31017_31277__$1 = cljs.core.next(seq__31017_31275);
var k_31278 = first__31018_31276;
var first__31018_31279__$1 = cljs.core.first(seq__31017_31277__$1);
var seq__31017_31280__$2 = cljs.core.next(seq__31017_31277__$1);
var v_31281 = first__31018_31279__$1;
var keyvals_31282__$1 = seq__31017_31280__$2;
var G__31015_31285__$1 = G__31015_31273;
while(true){
var vec__31020_31286 = G__31015_31285__$1;
var seq__31021_31287 = cljs.core.seq(vec__31020_31286);
var first__31022_31288 = cljs.core.first(seq__31021_31287);
var seq__31021_31289__$1 = cljs.core.next(seq__31021_31287);
var k_31290__$1 = first__31022_31288;
var first__31022_31291__$1 = cljs.core.first(seq__31021_31289__$1);
var seq__31021_31292__$2 = cljs.core.next(seq__31021_31289__$1);
var v_31293__$1 = first__31022_31291__$1;
var keyvals_31294__$2 = seq__31021_31292__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_31290__$1)] = v_31293__$1);

if(keyvals_31294__$2){
var G__31296 = keyvals_31294__$2;
G__31015_31285__$1 = G__31296;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq31004){
var G__31005 = cljs.core.first(seq31004);
var seq31004__$1 = cljs.core.next(seq31004);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31005,seq31004__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__31032 = arguments.length;
switch (G__31032) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj31036 = obj;
if((!((obj31036 == null)))){
return (obj31036[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj31038 = obj;
if((!((obj31038 == null)))){
return (obj31038[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__30379__auto__ = (function (){var obj31043 = obj;
if((!((obj31043 == null)))){
return (obj31043[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__30379__auto__)){
return not_found;
} else {
return val__30379__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__31049 = arguments.length;
switch (G__31049) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj31065 = self__.obj;
if((!((obj31065 == null)))){
return (obj31065[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__30379__auto__ = (function (){var obj31069 = self__.obj;
if((!((obj31069 == null)))){
return (obj31069[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__30379__auto__)){
return not_found;
} else {
return val__30379__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31315 = arguments.length;
var i__5767__auto___31316 = (0);
while(true){
if((i__5767__auto___31316 < len__5766__auto___31315)){
args__5772__auto__.push((arguments[i__5767__auto___31316]));

var G__31317 = (i__5767__auto___31316 + (1));
i__5767__auto___31316 = G__31317;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__31094 = keyvals;
var vec__31096 = G__31094;
var seq__31097 = cljs.core.seq(vec__31096);
var first__31098 = cljs.core.first(seq__31097);
var seq__31097__$1 = cljs.core.next(seq__31097);
var k = first__31098;
var first__31098__$1 = cljs.core.first(seq__31097__$1);
var seq__31097__$2 = cljs.core.next(seq__31097__$1);
var v = first__31098__$1;
var kvs = seq__31097__$2;
var G__31094__$1 = G__31094;
while(true){
var vec__31100 = G__31094__$1;
var seq__31101 = cljs.core.seq(vec__31100);
var first__31102 = cljs.core.first(seq__31101);
var seq__31101__$1 = cljs.core.next(seq__31101);
var k__$1 = first__31102;
var first__31102__$1 = cljs.core.first(seq__31101__$1);
var seq__31101__$2 = cljs.core.next(seq__31101__$1);
var v__$1 = first__31102__$1;
var kvs__$1 = seq__31101__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__31319 = kvs__$1;
G__31094__$1 = G__31319;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq31084){
var G__31085 = cljs.core.first(seq31084);
var seq31084__$1 = cljs.core.next(seq31084);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31085,seq31084__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31326 = arguments.length;
var i__5767__auto___31327 = (0);
while(true){
if((i__5767__auto___31327 < len__5766__auto___31326)){
args__5772__auto__.push((arguments[i__5767__auto___31327]));

var G__31328 = (i__5767__auto___31327 + (1));
i__5767__auto___31327 = G__31328;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq31111){
var G__31112 = cljs.core.first(seq31111);
var seq31111__$1 = cljs.core.next(seq31111);
var G__31113 = cljs.core.first(seq31111__$1);
var seq31111__$2 = cljs.core.next(seq31111__$1);
var G__31114 = cljs.core.first(seq31111__$2);
var seq31111__$3 = cljs.core.next(seq31111__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31112,G__31113,G__31114,seq31111__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31330 = arguments.length;
var i__5767__auto___31331 = (0);
while(true){
if((i__5767__auto___31331 < len__5766__auto___31330)){
args__5772__auto__.push((arguments[i__5767__auto___31331]));

var G__31332 = (i__5767__auto___31331 + (1));
i__5767__auto___31331 = G__31332;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq31126){
var G__31127 = cljs.core.first(seq31126);
var seq31126__$1 = cljs.core.next(seq31126);
var G__31128 = cljs.core.first(seq31126__$1);
var seq31126__$2 = cljs.core.next(seq31126__$1);
var G__31129 = cljs.core.first(seq31126__$2);
var seq31126__$3 = cljs.core.next(seq31126__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31127,G__31128,G__31129,seq31126__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__31147 = arguments.length;
switch (G__31147) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___31334 = arguments.length;
var i__5767__auto___31335 = (0);
while(true){
if((i__5767__auto___31335 < len__5766__auto___31334)){
args_arr__5791__auto__.push((arguments[i__5767__auto___31335]));

var G__31336 = (i__5767__auto___31335 + (1));
i__5767__auto___31335 = G__31336;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__31165_31344 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__31166_31345 = null;
var count__31167_31346 = (0);
var i__31168_31347 = (0);
while(true){
if((i__31168_31347 < count__31167_31346)){
var k_31348 = chunk__31166_31345.cljs$core$IIndexed$_nth$arity$2(null,i__31168_31347);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31348,applied_science.js_interop.unchecked_get(x,k_31348)], 0));


var G__31349 = seq__31165_31344;
var G__31350 = chunk__31166_31345;
var G__31351 = count__31167_31346;
var G__31352 = (i__31168_31347 + (1));
seq__31165_31344 = G__31349;
chunk__31166_31345 = G__31350;
count__31167_31346 = G__31351;
i__31168_31347 = G__31352;
continue;
} else {
var temp__5804__auto___31353 = cljs.core.seq(seq__31165_31344);
if(temp__5804__auto___31353){
var seq__31165_31354__$1 = temp__5804__auto___31353;
if(cljs.core.chunked_seq_QMARK_(seq__31165_31354__$1)){
var c__5565__auto___31355 = cljs.core.chunk_first(seq__31165_31354__$1);
var G__31356 = cljs.core.chunk_rest(seq__31165_31354__$1);
var G__31357 = c__5565__auto___31355;
var G__31358 = cljs.core.count(c__5565__auto___31355);
var G__31359 = (0);
seq__31165_31344 = G__31356;
chunk__31166_31345 = G__31357;
count__31167_31346 = G__31358;
i__31168_31347 = G__31359;
continue;
} else {
var k_31360 = cljs.core.first(seq__31165_31354__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31360,applied_science.js_interop.unchecked_get(x,k_31360)], 0));


var G__31361 = cljs.core.next(seq__31165_31354__$1);
var G__31362 = null;
var G__31363 = (0);
var G__31364 = (0);
seq__31165_31344 = G__31361;
chunk__31166_31345 = G__31362;
count__31167_31346 = G__31363;
i__31168_31347 = G__31364;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq31143){
var G__31144 = cljs.core.first(seq31143);
var seq31143__$1 = cljs.core.next(seq31143);
var G__31145 = cljs.core.first(seq31143__$1);
var seq31143__$2 = cljs.core.next(seq31143__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31144,G__31145,seq31143__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__31189 = array;
G__31189.push(x);

return G__31189;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__31190 = array;
G__31190.unshift(x);

return G__31190;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31367 = arguments.length;
var i__5767__auto___31368 = (0);
while(true){
if((i__5767__auto___31368 < len__5766__auto___31367)){
args__5772__auto__.push((arguments[i__5767__auto___31368]));

var G__31369 = (i__5767__auto___31368 + (1));
i__5767__auto___31368 = G__31369;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj31198 = obj;
if((!((obj31198 == null)))){
return (obj31198[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq31194){
var G__31195 = cljs.core.first(seq31194);
var seq31194__$1 = cljs.core.next(seq31194);
var G__31196 = cljs.core.first(seq31194__$1);
var seq31194__$2 = cljs.core.next(seq31194__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31195,G__31196,seq31194__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj31199 = obj;
if((!((obj31199 == null)))){
return (obj31199[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31377 = arguments.length;
var i__5767__auto___31378 = (0);
while(true){
if((i__5767__auto___31378 < len__5766__auto___31377)){
args__5772__auto__.push((arguments[i__5767__auto___31378]));

var G__31379 = (i__5767__auto___31378 + (1));
i__5767__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
var G__31202 = cljs.core.first(seq31200__$1);
var seq31200__$2 = cljs.core.next(seq31200__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31201,G__31202,seq31200__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31386 = arguments.length;
var i__5767__auto___31387 = (0);
while(true){
if((i__5767__auto___31387 < len__5766__auto___31386)){
args__5772__auto__.push((arguments[i__5767__auto___31387]));

var G__31388 = (i__5767__auto___31387 + (1));
i__5767__auto___31387 = G__31388;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__31206_31389 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__31207_31390 = null;
var count__31208_31391 = (0);
var i__31209_31392 = (0);
while(true){
if((i__31209_31392 < count__31208_31391)){
var vec__31232_31393 = chunk__31207_31390.cljs$core$IIndexed$_nth$arity$2(null,i__31209_31392);
var k_31394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232_31393,(0),null);
var v_31395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232_31393,(1),null);
var obj31235_31396 = obj;
var obj31237_31397 = (((!((obj31235_31396 == null))))?obj31235_31396:({}));
(obj31237_31397[applied_science.js_interop.impl.wrap_key(k_31394)] = v_31395);



var G__31398 = seq__31206_31389;
var G__31399 = chunk__31207_31390;
var G__31400 = count__31208_31391;
var G__31401 = (i__31209_31392 + (1));
seq__31206_31389 = G__31398;
chunk__31207_31390 = G__31399;
count__31208_31391 = G__31400;
i__31209_31392 = G__31401;
continue;
} else {
var temp__5804__auto___31402 = cljs.core.seq(seq__31206_31389);
if(temp__5804__auto___31402){
var seq__31206_31403__$1 = temp__5804__auto___31402;
if(cljs.core.chunked_seq_QMARK_(seq__31206_31403__$1)){
var c__5565__auto___31404 = cljs.core.chunk_first(seq__31206_31403__$1);
var G__31405 = cljs.core.chunk_rest(seq__31206_31403__$1);
var G__31406 = c__5565__auto___31404;
var G__31407 = cljs.core.count(c__5565__auto___31404);
var G__31408 = (0);
seq__31206_31389 = G__31405;
chunk__31207_31390 = G__31406;
count__31208_31391 = G__31407;
i__31209_31392 = G__31408;
continue;
} else {
var vec__31247_31409 = cljs.core.first(seq__31206_31403__$1);
var k_31410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247_31409,(0),null);
var v_31411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247_31409,(1),null);
var obj31250_31412 = obj;
var obj31251_31413 = (((!((obj31250_31412 == null))))?obj31250_31412:({}));
(obj31251_31413[applied_science.js_interop.impl.wrap_key(k_31410)] = v_31411);



var G__31417 = cljs.core.next(seq__31206_31403__$1);
var G__31418 = null;
var G__31419 = (0);
var G__31420 = (0);
seq__31206_31389 = G__31417;
chunk__31207_31390 = G__31418;
count__31208_31391 = G__31419;
i__31209_31392 = G__31420;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq31203){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31203));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
