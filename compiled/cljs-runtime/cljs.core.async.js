goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28060 = arguments.length;
switch (G__28060) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28061 = (function (f,blockable,meta28062){
this.f = f;
this.blockable = blockable;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28063,meta28062__$1){
var self__ = this;
var _28063__$1 = this;
return (new cljs.core.async.t_cljs$core$async28061(self__.f,self__.blockable,meta28062__$1));
}));

(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28063){
var self__ = this;
var _28063__$1 = this;
return self__.meta28062;
}));

(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28062","meta28062",2037030123,null)], null);
}));

(cljs.core.async.t_cljs$core$async28061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28061");

(cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28061.
 */
cljs.core.async.__GT_t_cljs$core$async28061 = (function cljs$core$async$__GT_t_cljs$core$async28061(f__$1,blockable__$1,meta28062){
return (new cljs.core.async.t_cljs$core$async28061(f__$1,blockable__$1,meta28062));
});

}

return (new cljs.core.async.t_cljs$core$async28061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28086 = arguments.length;
switch (G__28086) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28090 = arguments.length;
switch (G__28090) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28100 = arguments.length;
switch (G__28100) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30307 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30307) : fn1.call(null,val_30307));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30307) : fn1.call(null,val_30307));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28106 = arguments.length;
switch (G__28106) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___30314 = n;
var x_30315 = (0);
while(true){
if((x_30315 < n__5633__auto___30314)){
(a[x_30315] = x_30315);

var G__30316 = (x_30315 + (1));
x_30315 = G__30316;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28109 = (function (flag,meta28110){
this.flag = flag;
this.meta28110 = meta28110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28111,meta28110__$1){
var self__ = this;
var _28111__$1 = this;
return (new cljs.core.async.t_cljs$core$async28109(self__.flag,meta28110__$1));
}));

(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28111){
var self__ = this;
var _28111__$1 = this;
return self__.meta28110;
}));

(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28110","meta28110",-1970570069,null)], null);
}));

(cljs.core.async.t_cljs$core$async28109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28109");

(cljs.core.async.t_cljs$core$async28109.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28109.
 */
cljs.core.async.__GT_t_cljs$core$async28109 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28109(flag__$1,meta28110){
return (new cljs.core.async.t_cljs$core$async28109(flag__$1,meta28110));
});

}

return (new cljs.core.async.t_cljs$core$async28109(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28112 = (function (flag,cb,meta28113){
this.flag = flag;
this.cb = cb;
this.meta28113 = meta28113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28114,meta28113__$1){
var self__ = this;
var _28114__$1 = this;
return (new cljs.core.async.t_cljs$core$async28112(self__.flag,self__.cb,meta28113__$1));
}));

(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28114){
var self__ = this;
var _28114__$1 = this;
return self__.meta28113;
}));

(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28113","meta28113",438714145,null)], null);
}));

(cljs.core.async.t_cljs$core$async28112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28112");

(cljs.core.async.t_cljs$core$async28112.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28112.
 */
cljs.core.async.__GT_t_cljs$core$async28112 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28112(flag__$1,cb__$1,meta28113){
return (new cljs.core.async.t_cljs$core$async28112(flag__$1,cb__$1,meta28113));
});

}

return (new cljs.core.async.t_cljs$core$async28112(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28141_SHARP_){
var G__28145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28141_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28145) : fret.call(null,G__28145));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28142_SHARP_){
var G__28146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28142_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28146) : fret.call(null,G__28146));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30342 = (i + (1));
i = G__30342;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30343 = arguments.length;
var i__5767__auto___30344 = (0);
while(true){
if((i__5767__auto___30344 < len__5766__auto___30343)){
args__5772__auto__.push((arguments[i__5767__auto___30344]));

var G__30345 = (i__5767__auto___30344 + (1));
i__5767__auto___30344 = G__30345;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28170){
var map__28171 = p__28170;
var map__28171__$1 = cljs.core.__destructure_map(map__28171);
var opts = map__28171__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28158){
var G__28159 = cljs.core.first(seq28158);
var seq28158__$1 = cljs.core.next(seq28158);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28159,seq28158__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28205 = arguments.length;
switch (G__28205) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27998__auto___30352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28281){
var state_val_28282 = (state_28281[(1)]);
if((state_val_28282 === (7))){
var inst_28272 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28291_30353 = state_28281__$1;
(statearr_28291_30353[(2)] = inst_28272);

(statearr_28291_30353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (1))){
var state_28281__$1 = state_28281;
var statearr_28292_30354 = state_28281__$1;
(statearr_28292_30354[(2)] = null);

(statearr_28292_30354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (4))){
var inst_28240 = (state_28281[(7)]);
var inst_28240__$1 = (state_28281[(2)]);
var inst_28241 = (inst_28240__$1 == null);
var state_28281__$1 = (function (){var statearr_28293 = state_28281;
(statearr_28293[(7)] = inst_28240__$1);

return statearr_28293;
})();
if(cljs.core.truth_(inst_28241)){
var statearr_28294_30355 = state_28281__$1;
(statearr_28294_30355[(1)] = (5));

} else {
var statearr_28295_30357 = state_28281__$1;
(statearr_28295_30357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (13))){
var state_28281__$1 = state_28281;
var statearr_28300_30359 = state_28281__$1;
(statearr_28300_30359[(2)] = null);

(statearr_28300_30359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (6))){
var inst_28240 = (state_28281[(7)]);
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28281__$1,(11),to,inst_28240);
} else {
if((state_val_28282 === (3))){
var inst_28277 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28281__$1,inst_28277);
} else {
if((state_val_28282 === (12))){
var state_28281__$1 = state_28281;
var statearr_28313_30362 = state_28281__$1;
(statearr_28313_30362[(2)] = null);

(statearr_28313_30362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (2))){
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28281__$1,(4),from);
} else {
if((state_val_28282 === (11))){
var inst_28258 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28258)){
var statearr_28316_30363 = state_28281__$1;
(statearr_28316_30363[(1)] = (12));

} else {
var statearr_28317_30364 = state_28281__$1;
(statearr_28317_30364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (9))){
var state_28281__$1 = state_28281;
var statearr_28327_30365 = state_28281__$1;
(statearr_28327_30365[(2)] = null);

(statearr_28327_30365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (5))){
var state_28281__$1 = state_28281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28328_30366 = state_28281__$1;
(statearr_28328_30366[(1)] = (8));

} else {
var statearr_28329_30367 = state_28281__$1;
(statearr_28329_30367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (14))){
var inst_28269 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28330_30368 = state_28281__$1;
(statearr_28330_30368[(2)] = inst_28269);

(statearr_28330_30368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (10))){
var inst_28255 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28335_30370 = state_28281__$1;
(statearr_28335_30370[(2)] = inst_28255);

(statearr_28335_30370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (8))){
var inst_28248 = cljs.core.async.close_BANG_(to);
var state_28281__$1 = state_28281;
var statearr_28336_30371 = state_28281__$1;
(statearr_28336_30371[(2)] = inst_28248);

(statearr_28336_30371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28341 = [null,null,null,null,null,null,null,null];
(statearr_28341[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28341[(1)] = (1));

return statearr_28341;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28281){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28281);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28342){var ex__27849__auto__ = e28342;
var statearr_28344_30374 = state_28281;
(statearr_28344_30374[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28281[(4)]))){
var statearr_28346_30375 = state_28281;
(statearr_28346_30375[(1)] = cljs.core.first((state_28281[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_28281;
state_28281 = G__30378;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28347 = f__27999__auto__();
(statearr_28347[(6)] = c__27998__auto___30352);

return statearr_28347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28354){
var vec__28355 = p__28354;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(1),null);
var job = vec__28355;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27998__auto___30380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28362){
var state_val_28363 = (state_28362[(1)]);
if((state_val_28363 === (1))){
var state_28362__$1 = state_28362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28362__$1,(2),res,v);
} else {
if((state_val_28363 === (2))){
var inst_28359 = (state_28362[(2)]);
var inst_28360 = cljs.core.async.close_BANG_(res);
var state_28362__$1 = (function (){var statearr_28370 = state_28362;
(statearr_28370[(7)] = inst_28359);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28362__$1,inst_28360);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28372 = [null,null,null,null,null,null,null,null];
(statearr_28372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28372[(1)] = (1));

return statearr_28372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28362){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28362);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28373){var ex__27849__auto__ = e28373;
var statearr_28374_30382 = state_28362;
(statearr_28374_30382[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28362[(4)]))){
var statearr_28376_30383 = state_28362;
(statearr_28376_30383[(1)] = cljs.core.first((state_28362[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30384 = state_28362;
state_28362 = G__30384;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28377 = f__27999__auto__();
(statearr_28377[(6)] = c__27998__auto___30380);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28379){
var vec__28380 = p__28379;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(1),null);
var job = vec__28380;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___30386 = n;
var __30387 = (0);
while(true){
if((__30387 < n__5633__auto___30386)){
var G__28384_30388 = type;
var G__28384_30389__$1 = (((G__28384_30388 instanceof cljs.core.Keyword))?G__28384_30388.fqn:null);
switch (G__28384_30389__$1) {
case "compute":
var c__27998__auto___30391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30387,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = ((function (__30387,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function (state_28400){
var state_val_28403 = (state_28400[(1)]);
if((state_val_28403 === (1))){
var state_28400__$1 = state_28400;
var statearr_28406_30392 = state_28400__$1;
(statearr_28406_30392[(2)] = null);

(statearr_28406_30392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (2))){
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28400__$1,(4),jobs);
} else {
if((state_val_28403 === (3))){
var inst_28397 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28400__$1,inst_28397);
} else {
if((state_val_28403 === (4))){
var inst_28389 = (state_28400[(2)]);
var inst_28390 = process__$1(inst_28389);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28390)){
var statearr_28411_30394 = state_28400__$1;
(statearr_28411_30394[(1)] = (5));

} else {
var statearr_28412_30395 = state_28400__$1;
(statearr_28412_30395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (5))){
var state_28400__$1 = state_28400;
var statearr_28414_30396 = state_28400__$1;
(statearr_28414_30396[(2)] = null);

(statearr_28414_30396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (6))){
var state_28400__$1 = state_28400;
var statearr_28418_30398 = state_28400__$1;
(statearr_28418_30398[(2)] = null);

(statearr_28418_30398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (7))){
var inst_28395 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28420_30400 = state_28400__$1;
(statearr_28420_30400[(2)] = inst_28395);

(statearr_28420_30400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30387,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
;
return ((function (__30387,switch__27845__auto__,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null];
(statearr_28425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28400){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28400);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28434){var ex__27849__auto__ = e28434;
var statearr_28439_30411 = state_28400;
(statearr_28439_30411[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28400[(4)]))){
var statearr_28440_30412 = state_28400;
(statearr_28440_30412[(1)] = cljs.core.first((state_28400[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30413 = state_28400;
state_28400 = G__30413;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
;})(__30387,switch__27845__auto__,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
})();
var state__28000__auto__ = (function (){var statearr_28452 = f__27999__auto__();
(statearr_28452[(6)] = c__27998__auto___30391);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
});})(__30387,c__27998__auto___30391,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
);


break;
case "async":
var c__27998__auto___30414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30387,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = ((function (__30387,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function (state_28467){
var state_val_28468 = (state_28467[(1)]);
if((state_val_28468 === (1))){
var state_28467__$1 = state_28467;
var statearr_28469_30415 = state_28467__$1;
(statearr_28469_30415[(2)] = null);

(statearr_28469_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (2))){
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28467__$1,(4),jobs);
} else {
if((state_val_28468 === (3))){
var inst_28465 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28467__$1,inst_28465);
} else {
if((state_val_28468 === (4))){
var inst_28456 = (state_28467[(2)]);
var inst_28458 = async(inst_28456);
var state_28467__$1 = state_28467;
if(cljs.core.truth_(inst_28458)){
var statearr_28472_30418 = state_28467__$1;
(statearr_28472_30418[(1)] = (5));

} else {
var statearr_28473_30419 = state_28467__$1;
(statearr_28473_30419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (5))){
var state_28467__$1 = state_28467;
var statearr_28476_30420 = state_28467__$1;
(statearr_28476_30420[(2)] = null);

(statearr_28476_30420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (6))){
var state_28467__$1 = state_28467;
var statearr_28477_30421 = state_28467__$1;
(statearr_28477_30421[(2)] = null);

(statearr_28477_30421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (7))){
var inst_28463 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28478_30422 = state_28467__$1;
(statearr_28478_30422[(2)] = inst_28463);

(statearr_28478_30422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30387,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
;
return ((function (__30387,switch__27845__auto__,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28479 = [null,null,null,null,null,null,null];
(statearr_28479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28479[(1)] = (1));

return statearr_28479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28467){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28467);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28481){var ex__27849__auto__ = e28481;
var statearr_28482_30423 = state_28467;
(statearr_28482_30423[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28467[(4)]))){
var statearr_28487_30424 = state_28467;
(statearr_28487_30424[(1)] = cljs.core.first((state_28467[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30426 = state_28467;
state_28467 = G__30426;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
;})(__30387,switch__27845__auto__,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
})();
var state__28000__auto__ = (function (){var statearr_28492 = f__27999__auto__();
(statearr_28492[(6)] = c__27998__auto___30414);

return statearr_28492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
});})(__30387,c__27998__auto___30414,G__28384_30388,G__28384_30389__$1,n__5633__auto___30386,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28384_30389__$1)].join('')));

}

var G__30428 = (__30387 + (1));
__30387 = G__30428;
continue;
} else {
}
break;
}

var c__27998__auto___30429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28553){
var state_val_28554 = (state_28553[(1)]);
if((state_val_28554 === (7))){
var inst_28537 = (state_28553[(2)]);
var state_28553__$1 = state_28553;
var statearr_28564_30430 = state_28553__$1;
(statearr_28564_30430[(2)] = inst_28537);

(statearr_28564_30430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (1))){
var state_28553__$1 = state_28553;
var statearr_28565_30432 = state_28553__$1;
(statearr_28565_30432[(2)] = null);

(statearr_28565_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (4))){
var inst_28495 = (state_28553[(7)]);
var inst_28495__$1 = (state_28553[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28553__$1 = (function (){var statearr_28566 = state_28553;
(statearr_28566[(7)] = inst_28495__$1);

return statearr_28566;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28567_30433 = state_28553__$1;
(statearr_28567_30433[(1)] = (5));

} else {
var statearr_28568_30434 = state_28553__$1;
(statearr_28568_30434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (6))){
var inst_28505 = (state_28553[(8)]);
var inst_28495 = (state_28553[(7)]);
var inst_28505__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28529 = [inst_28495,inst_28505__$1];
var inst_28530 = (new cljs.core.PersistentVector(null,2,(5),inst_28519,inst_28529,null));
var state_28553__$1 = (function (){var statearr_28569 = state_28553;
(statearr_28569[(8)] = inst_28505__$1);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28553__$1,(8),jobs,inst_28530);
} else {
if((state_val_28554 === (3))){
var inst_28539 = (state_28553[(2)]);
var state_28553__$1 = state_28553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28553__$1,inst_28539);
} else {
if((state_val_28554 === (2))){
var state_28553__$1 = state_28553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28553__$1,(4),from);
} else {
if((state_val_28554 === (9))){
var inst_28534 = (state_28553[(2)]);
var state_28553__$1 = (function (){var statearr_28570 = state_28553;
(statearr_28570[(9)] = inst_28534);

return statearr_28570;
})();
var statearr_28571_30435 = state_28553__$1;
(statearr_28571_30435[(2)] = null);

(statearr_28571_30435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (5))){
var inst_28503 = cljs.core.async.close_BANG_(jobs);
var state_28553__$1 = state_28553;
var statearr_28572_30438 = state_28553__$1;
(statearr_28572_30438[(2)] = inst_28503);

(statearr_28572_30438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28554 === (8))){
var inst_28505 = (state_28553[(8)]);
var inst_28532 = (state_28553[(2)]);
var state_28553__$1 = (function (){var statearr_28582 = state_28553;
(statearr_28582[(10)] = inst_28532);

return statearr_28582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28553__$1,(9),results,inst_28505);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28553){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28553);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28597){var ex__27849__auto__ = e28597;
var statearr_28598_30441 = state_28553;
(statearr_28598_30441[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28553[(4)]))){
var statearr_28599_30442 = state_28553;
(statearr_28599_30442[(1)] = cljs.core.first((state_28553[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30443 = state_28553;
state_28553 = G__30443;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28610 = f__27999__auto__();
(statearr_28610[(6)] = c__27998__auto___30429);

return statearr_28610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


var c__27998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28690){
var state_val_28691 = (state_28690[(1)]);
if((state_val_28691 === (7))){
var inst_28682 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28695_30447 = state_28690__$1;
(statearr_28695_30447[(2)] = inst_28682);

(statearr_28695_30447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (20))){
var state_28690__$1 = state_28690;
var statearr_28696_30449 = state_28690__$1;
(statearr_28696_30449[(2)] = null);

(statearr_28696_30449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (1))){
var state_28690__$1 = state_28690;
var statearr_28698_30451 = state_28690__$1;
(statearr_28698_30451[(2)] = null);

(statearr_28698_30451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (4))){
var inst_28630 = (state_28690[(7)]);
var inst_28630__$1 = (state_28690[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28690__$1 = (function (){var statearr_28702 = state_28690;
(statearr_28702[(7)] = inst_28630__$1);

return statearr_28702;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28703_30452 = state_28690__$1;
(statearr_28703_30452[(1)] = (5));

} else {
var statearr_28704_30453 = state_28690__$1;
(statearr_28704_30453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (15))){
var inst_28651 = (state_28690[(8)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28690__$1,(18),to,inst_28651);
} else {
if((state_val_28691 === (21))){
var inst_28677 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28706_30454 = state_28690__$1;
(statearr_28706_30454[(2)] = inst_28677);

(statearr_28706_30454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (13))){
var inst_28679 = (state_28690[(2)]);
var state_28690__$1 = (function (){var statearr_28707 = state_28690;
(statearr_28707[(9)] = inst_28679);

return statearr_28707;
})();
var statearr_28708_30455 = state_28690__$1;
(statearr_28708_30455[(2)] = null);

(statearr_28708_30455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (6))){
var inst_28630 = (state_28690[(7)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(11),inst_28630);
} else {
if((state_val_28691 === (17))){
var inst_28670 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
if(cljs.core.truth_(inst_28670)){
var statearr_28709_30458 = state_28690__$1;
(statearr_28709_30458[(1)] = (19));

} else {
var statearr_28710_30459 = state_28690__$1;
(statearr_28710_30459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (3))){
var inst_28684 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28690__$1,inst_28684);
} else {
if((state_val_28691 === (12))){
var inst_28648 = (state_28690[(10)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(14),inst_28648);
} else {
if((state_val_28691 === (2))){
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(4),results);
} else {
if((state_val_28691 === (19))){
var state_28690__$1 = state_28690;
var statearr_28711_30461 = state_28690__$1;
(statearr_28711_30461[(2)] = null);

(statearr_28711_30461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (11))){
var inst_28648 = (state_28690[(2)]);
var state_28690__$1 = (function (){var statearr_28712 = state_28690;
(statearr_28712[(10)] = inst_28648);

return statearr_28712;
})();
var statearr_28713_30462 = state_28690__$1;
(statearr_28713_30462[(2)] = null);

(statearr_28713_30462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (9))){
var state_28690__$1 = state_28690;
var statearr_28714_30463 = state_28690__$1;
(statearr_28714_30463[(2)] = null);

(statearr_28714_30463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (5))){
var state_28690__$1 = state_28690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28715_30464 = state_28690__$1;
(statearr_28715_30464[(1)] = (8));

} else {
var statearr_28716_30465 = state_28690__$1;
(statearr_28716_30465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (14))){
var inst_28651 = (state_28690[(8)]);
var inst_28660 = (state_28690[(11)]);
var inst_28651__$1 = (state_28690[(2)]);
var inst_28659 = (inst_28651__$1 == null);
var inst_28660__$1 = cljs.core.not(inst_28659);
var state_28690__$1 = (function (){var statearr_28718 = state_28690;
(statearr_28718[(8)] = inst_28651__$1);

(statearr_28718[(11)] = inst_28660__$1);

return statearr_28718;
})();
if(inst_28660__$1){
var statearr_28719_30470 = state_28690__$1;
(statearr_28719_30470[(1)] = (15));

} else {
var statearr_28720_30471 = state_28690__$1;
(statearr_28720_30471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (16))){
var inst_28660 = (state_28690[(11)]);
var state_28690__$1 = state_28690;
var statearr_28724_30474 = state_28690__$1;
(statearr_28724_30474[(2)] = inst_28660);

(statearr_28724_30474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (10))){
var inst_28641 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28725_30475 = state_28690__$1;
(statearr_28725_30475[(2)] = inst_28641);

(statearr_28725_30475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (18))){
var inst_28667 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28730_30477 = state_28690__$1;
(statearr_28730_30477[(2)] = inst_28667);

(statearr_28730_30477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (8))){
var inst_28634 = cljs.core.async.close_BANG_(to);
var state_28690__$1 = state_28690;
var statearr_28732_30478 = state_28690__$1;
(statearr_28732_30478[(2)] = inst_28634);

(statearr_28732_30478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28733[(1)] = (1));

return statearr_28733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28690){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28690);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28734){var ex__27849__auto__ = e28734;
var statearr_28735_30480 = state_28690;
(statearr_28735_30480[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28690[(4)]))){
var statearr_28736_30481 = state_28690;
(statearr_28736_30481[(1)] = cljs.core.first((state_28690[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_28690;
state_28690 = G__30483;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28742 = f__27999__auto__();
(statearr_28742[(6)] = c__27998__auto__);

return statearr_28742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

return c__27998__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28744 = arguments.length;
switch (G__28744) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28746 = arguments.length;
switch (G__28746) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28753 = arguments.length;
switch (G__28753) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27998__auto___30495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28783){
var state_val_28784 = (state_28783[(1)]);
if((state_val_28784 === (7))){
var inst_28779 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
var statearr_28785_30496 = state_28783__$1;
(statearr_28785_30496[(2)] = inst_28779);

(statearr_28785_30496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (1))){
var state_28783__$1 = state_28783;
var statearr_28786_30497 = state_28783__$1;
(statearr_28786_30497[(2)] = null);

(statearr_28786_30497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (4))){
var inst_28758 = (state_28783[(7)]);
var inst_28758__$1 = (state_28783[(2)]);
var inst_28759 = (inst_28758__$1 == null);
var state_28783__$1 = (function (){var statearr_28787 = state_28783;
(statearr_28787[(7)] = inst_28758__$1);

return statearr_28787;
})();
if(cljs.core.truth_(inst_28759)){
var statearr_28788_30500 = state_28783__$1;
(statearr_28788_30500[(1)] = (5));

} else {
var statearr_28789_30501 = state_28783__$1;
(statearr_28789_30501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (13))){
var state_28783__$1 = state_28783;
var statearr_28790_30502 = state_28783__$1;
(statearr_28790_30502[(2)] = null);

(statearr_28790_30502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (6))){
var inst_28758 = (state_28783[(7)]);
var inst_28765 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28758) : p.call(null,inst_28758));
var state_28783__$1 = state_28783;
if(cljs.core.truth_(inst_28765)){
var statearr_28791_30503 = state_28783__$1;
(statearr_28791_30503[(1)] = (9));

} else {
var statearr_28792_30504 = state_28783__$1;
(statearr_28792_30504[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (3))){
var inst_28781 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28783__$1,inst_28781);
} else {
if((state_val_28784 === (12))){
var state_28783__$1 = state_28783;
var statearr_28793_30505 = state_28783__$1;
(statearr_28793_30505[(2)] = null);

(statearr_28793_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (2))){
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28783__$1,(4),ch);
} else {
if((state_val_28784 === (11))){
var inst_28758 = (state_28783[(7)]);
var inst_28770 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28783__$1,(8),inst_28770,inst_28758);
} else {
if((state_val_28784 === (9))){
var state_28783__$1 = state_28783;
var statearr_28794_30507 = state_28783__$1;
(statearr_28794_30507[(2)] = tc);

(statearr_28794_30507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (5))){
var inst_28762 = cljs.core.async.close_BANG_(tc);
var inst_28763 = cljs.core.async.close_BANG_(fc);
var state_28783__$1 = (function (){var statearr_28795 = state_28783;
(statearr_28795[(8)] = inst_28762);

return statearr_28795;
})();
var statearr_28796_30508 = state_28783__$1;
(statearr_28796_30508[(2)] = inst_28763);

(statearr_28796_30508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (14))){
var inst_28777 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
var statearr_28798_30511 = state_28783__$1;
(statearr_28798_30511[(2)] = inst_28777);

(statearr_28798_30511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (10))){
var state_28783__$1 = state_28783;
var statearr_28799_30512 = state_28783__$1;
(statearr_28799_30512[(2)] = fc);

(statearr_28799_30512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (8))){
var inst_28772 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
if(cljs.core.truth_(inst_28772)){
var statearr_28800_30515 = state_28783__$1;
(statearr_28800_30515[(1)] = (12));

} else {
var statearr_28801_30516 = state_28783__$1;
(statearr_28801_30516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28803 = [null,null,null,null,null,null,null,null,null];
(statearr_28803[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28803[(1)] = (1));

return statearr_28803;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28783){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28783);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28804){var ex__27849__auto__ = e28804;
var statearr_28805_30518 = state_28783;
(statearr_28805_30518[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28783[(4)]))){
var statearr_28806_30519 = state_28783;
(statearr_28806_30519[(1)] = cljs.core.first((state_28783[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30521 = state_28783;
state_28783 = G__30521;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28808 = f__27999__auto__();
(statearr_28808[(6)] = c__27998__auto___30495);

return statearr_28808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28835){
var state_val_28836 = (state_28835[(1)]);
if((state_val_28836 === (7))){
var inst_28831 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28839_30522 = state_28835__$1;
(statearr_28839_30522[(2)] = inst_28831);

(statearr_28839_30522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (1))){
var inst_28812 = init;
var inst_28814 = inst_28812;
var state_28835__$1 = (function (){var statearr_28840 = state_28835;
(statearr_28840[(7)] = inst_28814);

return statearr_28840;
})();
var statearr_28841_30523 = state_28835__$1;
(statearr_28841_30523[(2)] = null);

(statearr_28841_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (4))){
var inst_28818 = (state_28835[(8)]);
var inst_28818__$1 = (state_28835[(2)]);
var inst_28819 = (inst_28818__$1 == null);
var state_28835__$1 = (function (){var statearr_28846 = state_28835;
(statearr_28846[(8)] = inst_28818__$1);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28819)){
var statearr_28847_30525 = state_28835__$1;
(statearr_28847_30525[(1)] = (5));

} else {
var statearr_28848_30526 = state_28835__$1;
(statearr_28848_30526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (6))){
var inst_28818 = (state_28835[(8)]);
var inst_28822 = (state_28835[(9)]);
var inst_28814 = (state_28835[(7)]);
var inst_28822__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28814,inst_28818) : f.call(null,inst_28814,inst_28818));
var inst_28823 = cljs.core.reduced_QMARK_(inst_28822__$1);
var state_28835__$1 = (function (){var statearr_28851 = state_28835;
(statearr_28851[(9)] = inst_28822__$1);

return statearr_28851;
})();
if(inst_28823){
var statearr_28852_30527 = state_28835__$1;
(statearr_28852_30527[(1)] = (8));

} else {
var statearr_28853_30528 = state_28835__$1;
(statearr_28853_30528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (3))){
var inst_28833 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28835__$1,inst_28833);
} else {
if((state_val_28836 === (2))){
var state_28835__$1 = state_28835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28835__$1,(4),ch);
} else {
if((state_val_28836 === (9))){
var inst_28822 = (state_28835[(9)]);
var inst_28814 = inst_28822;
var state_28835__$1 = (function (){var statearr_28856 = state_28835;
(statearr_28856[(7)] = inst_28814);

return statearr_28856;
})();
var statearr_28857_30529 = state_28835__$1;
(statearr_28857_30529[(2)] = null);

(statearr_28857_30529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (5))){
var inst_28814 = (state_28835[(7)]);
var state_28835__$1 = state_28835;
var statearr_28860_30530 = state_28835__$1;
(statearr_28860_30530[(2)] = inst_28814);

(statearr_28860_30530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (10))){
var inst_28829 = (state_28835[(2)]);
var state_28835__$1 = state_28835;
var statearr_28863_30535 = state_28835__$1;
(statearr_28863_30535[(2)] = inst_28829);

(statearr_28863_30535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28836 === (8))){
var inst_28822 = (state_28835[(9)]);
var inst_28825 = cljs.core.deref(inst_28822);
var state_28835__$1 = state_28835;
var statearr_28864_30536 = state_28835__$1;
(statearr_28864_30536[(2)] = inst_28825);

(statearr_28864_30536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27846__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27846__auto____0 = (function (){
var statearr_28865 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28865[(0)] = cljs$core$async$reduce_$_state_machine__27846__auto__);

(statearr_28865[(1)] = (1));

return statearr_28865;
});
var cljs$core$async$reduce_$_state_machine__27846__auto____1 = (function (state_28835){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28835);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28866){var ex__27849__auto__ = e28866;
var statearr_28867_30539 = state_28835;
(statearr_28867_30539[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28835[(4)]))){
var statearr_28870_30541 = state_28835;
(statearr_28870_30541[(1)] = cljs.core.first((state_28835[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30542 = state_28835;
state_28835 = G__30542;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27846__auto__ = function(state_28835){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27846__auto____1.call(this,state_28835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27846__auto____0;
cljs$core$async$reduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27846__auto____1;
return cljs$core$async$reduce_$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28871 = f__27999__auto__();
(statearr_28871[(6)] = c__27998__auto__);

return statearr_28871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

return c__27998__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (1))){
var inst_28876 = cljs.core.async.reduce(f__$1,init,ch);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28881__$1,(2),inst_28876);
} else {
if((state_val_28882 === (2))){
var inst_28878 = (state_28881[(2)]);
var inst_28879 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28878) : f__$1.call(null,inst_28878));
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28881__$1,inst_28879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27846__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27846__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$transduce_$_state_machine__27846__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$transduce_$_state_machine__27846__auto____1 = (function (state_28881){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28881);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28888){var ex__27849__auto__ = e28888;
var statearr_28889_30547 = state_28881;
(statearr_28889_30547[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28881[(4)]))){
var statearr_28890_30548 = state_28881;
(statearr_28890_30548[(1)] = cljs.core.first((state_28881[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_28881;
state_28881 = G__30549;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27846__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27846__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27846__auto____0;
cljs$core$async$transduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27846__auto____1;
return cljs$core$async$transduce_$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28891 = f__27999__auto__();
(statearr_28891[(6)] = c__27998__auto__);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

return c__27998__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28894 = arguments.length;
switch (G__28894) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_28921){
var state_val_28922 = (state_28921[(1)]);
if((state_val_28922 === (7))){
var inst_28903 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28925_30551 = state_28921__$1;
(statearr_28925_30551[(2)] = inst_28903);

(statearr_28925_30551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (1))){
var inst_28897 = cljs.core.seq(coll);
var inst_28898 = inst_28897;
var state_28921__$1 = (function (){var statearr_28926 = state_28921;
(statearr_28926[(7)] = inst_28898);

return statearr_28926;
})();
var statearr_28927_30552 = state_28921__$1;
(statearr_28927_30552[(2)] = null);

(statearr_28927_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (4))){
var inst_28898 = (state_28921[(7)]);
var inst_28901 = cljs.core.first(inst_28898);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28921__$1,(7),ch,inst_28901);
} else {
if((state_val_28922 === (13))){
var inst_28915 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28933_30553 = state_28921__$1;
(statearr_28933_30553[(2)] = inst_28915);

(statearr_28933_30553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (6))){
var inst_28906 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
if(cljs.core.truth_(inst_28906)){
var statearr_28934_30554 = state_28921__$1;
(statearr_28934_30554[(1)] = (8));

} else {
var statearr_28935_30555 = state_28921__$1;
(statearr_28935_30555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (3))){
var inst_28919 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28921__$1,inst_28919);
} else {
if((state_val_28922 === (12))){
var state_28921__$1 = state_28921;
var statearr_28937_30556 = state_28921__$1;
(statearr_28937_30556[(2)] = null);

(statearr_28937_30556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (2))){
var inst_28898 = (state_28921[(7)]);
var state_28921__$1 = state_28921;
if(cljs.core.truth_(inst_28898)){
var statearr_28938_30557 = state_28921__$1;
(statearr_28938_30557[(1)] = (4));

} else {
var statearr_28939_30558 = state_28921__$1;
(statearr_28939_30558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (11))){
var inst_28912 = cljs.core.async.close_BANG_(ch);
var state_28921__$1 = state_28921;
var statearr_28940_30559 = state_28921__$1;
(statearr_28940_30559[(2)] = inst_28912);

(statearr_28940_30559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (9))){
var state_28921__$1 = state_28921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28941_30560 = state_28921__$1;
(statearr_28941_30560[(1)] = (11));

} else {
var statearr_28942_30561 = state_28921__$1;
(statearr_28942_30561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (5))){
var inst_28898 = (state_28921[(7)]);
var state_28921__$1 = state_28921;
var statearr_28943_30562 = state_28921__$1;
(statearr_28943_30562[(2)] = inst_28898);

(statearr_28943_30562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (10))){
var inst_28917 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28946_30563 = state_28921__$1;
(statearr_28946_30563[(2)] = inst_28917);

(statearr_28946_30563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (8))){
var inst_28898 = (state_28921[(7)]);
var inst_28908 = cljs.core.next(inst_28898);
var inst_28898__$1 = inst_28908;
var state_28921__$1 = (function (){var statearr_28947 = state_28921;
(statearr_28947[(7)] = inst_28898__$1);

return statearr_28947;
})();
var statearr_28948_30564 = state_28921__$1;
(statearr_28948_30564[(2)] = null);

(statearr_28948_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28951 = [null,null,null,null,null,null,null,null];
(statearr_28951[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28951[(1)] = (1));

return statearr_28951;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28921){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28921);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28952){var ex__27849__auto__ = e28952;
var statearr_28953_30572 = state_28921;
(statearr_28953_30572[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28921[(4)]))){
var statearr_28954_30573 = state_28921;
(statearr_28954_30573[(1)] = cljs.core.first((state_28921[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30575 = state_28921;
state_28921 = G__30575;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_28957 = f__27999__auto__();
(statearr_28957[(6)] = c__27998__auto__);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

return c__27998__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28961 = arguments.length;
switch (G__28961) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_30583 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_30583(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30585 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_30585(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30590 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_30590(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30593 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_30593(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28990 = (function (ch,cs,meta28991){
this.ch = ch;
this.cs = cs;
this.meta28991 = meta28991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28992,meta28991__$1){
var self__ = this;
var _28992__$1 = this;
return (new cljs.core.async.t_cljs$core$async28990(self__.ch,self__.cs,meta28991__$1));
}));

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28992){
var self__ = this;
var _28992__$1 = this;
return self__.meta28991;
}));

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28991","meta28991",1626505302,null)], null);
}));

(cljs.core.async.t_cljs$core$async28990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28990");

(cljs.core.async.t_cljs$core$async28990.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28990.
 */
cljs.core.async.__GT_t_cljs$core$async28990 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28990(ch__$1,cs__$1,meta28991){
return (new cljs.core.async.t_cljs$core$async28990(ch__$1,cs__$1,meta28991));
});

}

return (new cljs.core.async.t_cljs$core$async28990(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27998__auto___30602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29155 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29175_30604 = state_29163__$1;
(statearr_29175_30604[(2)] = inst_29155);

(statearr_29175_30604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (20))){
var inst_29030 = (state_29163[(7)]);
var inst_29051 = cljs.core.first(inst_29030);
var inst_29052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29051,(0),null);
var inst_29053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29051,(1),null);
var state_29163__$1 = (function (){var statearr_29176 = state_29163;
(statearr_29176[(8)] = inst_29052);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29053)){
var statearr_29177_30607 = state_29163__$1;
(statearr_29177_30607[(1)] = (22));

} else {
var statearr_29178_30608 = state_29163__$1;
(statearr_29178_30608[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (27))){
var inst_29094 = (state_29163[(9)]);
var inst_29096 = (state_29163[(10)]);
var inst_28999 = (state_29163[(11)]);
var inst_29102 = (state_29163[(12)]);
var inst_29102__$1 = cljs.core._nth(inst_29094,inst_29096);
var inst_29104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29102__$1,inst_28999,done);
var state_29163__$1 = (function (){var statearr_29182 = state_29163;
(statearr_29182[(12)] = inst_29102__$1);

return statearr_29182;
})();
if(cljs.core.truth_(inst_29104)){
var statearr_29185_30609 = state_29163__$1;
(statearr_29185_30609[(1)] = (30));

} else {
var statearr_29186_30610 = state_29163__$1;
(statearr_29186_30610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var state_29163__$1 = state_29163;
var statearr_29190_30611 = state_29163__$1;
(statearr_29190_30611[(2)] = null);

(statearr_29190_30611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (24))){
var inst_29030 = (state_29163[(7)]);
var inst_29065 = (state_29163[(2)]);
var inst_29067 = cljs.core.next(inst_29030);
var inst_29008 = inst_29067;
var inst_29009 = null;
var inst_29010 = (0);
var inst_29011 = (0);
var state_29163__$1 = (function (){var statearr_29191 = state_29163;
(statearr_29191[(13)] = inst_29008);

(statearr_29191[(14)] = inst_29065);

(statearr_29191[(15)] = inst_29009);

(statearr_29191[(16)] = inst_29011);

(statearr_29191[(17)] = inst_29010);

return statearr_29191;
})();
var statearr_29195_30613 = state_29163__$1;
(statearr_29195_30613[(2)] = null);

(statearr_29195_30613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (39))){
var state_29163__$1 = state_29163;
var statearr_29200_30614 = state_29163__$1;
(statearr_29200_30614[(2)] = null);

(statearr_29200_30614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_28999 = (state_29163[(11)]);
var inst_28999__$1 = (state_29163[(2)]);
var inst_29000 = (inst_28999__$1 == null);
var state_29163__$1 = (function (){var statearr_29203 = state_29163;
(statearr_29203[(11)] = inst_28999__$1);

return statearr_29203;
})();
if(cljs.core.truth_(inst_29000)){
var statearr_29204_30615 = state_29163__$1;
(statearr_29204_30615[(1)] = (5));

} else {
var statearr_29205_30616 = state_29163__$1;
(statearr_29205_30616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (15))){
var inst_29008 = (state_29163[(13)]);
var inst_29009 = (state_29163[(15)]);
var inst_29011 = (state_29163[(16)]);
var inst_29010 = (state_29163[(17)]);
var inst_29026 = (state_29163[(2)]);
var inst_29027 = (inst_29011 + (1));
var tmp29196 = inst_29008;
var tmp29197 = inst_29009;
var tmp29198 = inst_29010;
var inst_29008__$1 = tmp29196;
var inst_29009__$1 = tmp29197;
var inst_29010__$1 = tmp29198;
var inst_29011__$1 = inst_29027;
var state_29163__$1 = (function (){var statearr_29206 = state_29163;
(statearr_29206[(13)] = inst_29008__$1);

(statearr_29206[(15)] = inst_29009__$1);

(statearr_29206[(16)] = inst_29011__$1);

(statearr_29206[(18)] = inst_29026);

(statearr_29206[(17)] = inst_29010__$1);

return statearr_29206;
})();
var statearr_29210_30620 = state_29163__$1;
(statearr_29210_30620[(2)] = null);

(statearr_29210_30620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (21))){
var inst_29070 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29214_30622 = state_29163__$1;
(statearr_29214_30622[(2)] = inst_29070);

(statearr_29214_30622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (31))){
var inst_29102 = (state_29163[(12)]);
var inst_29107 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29102);
var state_29163__$1 = state_29163;
var statearr_29215_30624 = state_29163__$1;
(statearr_29215_30624[(2)] = inst_29107);

(statearr_29215_30624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (32))){
var inst_29094 = (state_29163[(9)]);
var inst_29096 = (state_29163[(10)]);
var inst_29093 = (state_29163[(19)]);
var inst_29095 = (state_29163[(20)]);
var inst_29109 = (state_29163[(2)]);
var inst_29110 = (inst_29096 + (1));
var tmp29211 = inst_29094;
var tmp29212 = inst_29093;
var tmp29213 = inst_29095;
var inst_29093__$1 = tmp29212;
var inst_29094__$1 = tmp29211;
var inst_29095__$1 = tmp29213;
var inst_29096__$1 = inst_29110;
var state_29163__$1 = (function (){var statearr_29228 = state_29163;
(statearr_29228[(21)] = inst_29109);

(statearr_29228[(9)] = inst_29094__$1);

(statearr_29228[(10)] = inst_29096__$1);

(statearr_29228[(19)] = inst_29093__$1);

(statearr_29228[(20)] = inst_29095__$1);

return statearr_29228;
})();
var statearr_29229_30625 = state_29163__$1;
(statearr_29229_30625[(2)] = null);

(statearr_29229_30625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (40))){
var inst_29124 = (state_29163[(22)]);
var inst_29128 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29124);
var state_29163__$1 = state_29163;
var statearr_29230_30626 = state_29163__$1;
(statearr_29230_30626[(2)] = inst_29128);

(statearr_29230_30626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (33))){
var inst_29113 = (state_29163[(23)]);
var inst_29116 = cljs.core.chunked_seq_QMARK_(inst_29113);
var state_29163__$1 = state_29163;
if(inst_29116){
var statearr_29231_30628 = state_29163__$1;
(statearr_29231_30628[(1)] = (36));

} else {
var statearr_29232_30629 = state_29163__$1;
(statearr_29232_30629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (13))){
var inst_29020 = (state_29163[(24)]);
var inst_29023 = cljs.core.async.close_BANG_(inst_29020);
var state_29163__$1 = state_29163;
var statearr_29233_30630 = state_29163__$1;
(statearr_29233_30630[(2)] = inst_29023);

(statearr_29233_30630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (22))){
var inst_29052 = (state_29163[(8)]);
var inst_29062 = cljs.core.async.close_BANG_(inst_29052);
var state_29163__$1 = state_29163;
var statearr_29234_30631 = state_29163__$1;
(statearr_29234_30631[(2)] = inst_29062);

(statearr_29234_30631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (36))){
var inst_29113 = (state_29163[(23)]);
var inst_29119 = cljs.core.chunk_first(inst_29113);
var inst_29120 = cljs.core.chunk_rest(inst_29113);
var inst_29121 = cljs.core.count(inst_29119);
var inst_29093 = inst_29120;
var inst_29094 = inst_29119;
var inst_29095 = inst_29121;
var inst_29096 = (0);
var state_29163__$1 = (function (){var statearr_29235 = state_29163;
(statearr_29235[(9)] = inst_29094);

(statearr_29235[(10)] = inst_29096);

(statearr_29235[(19)] = inst_29093);

(statearr_29235[(20)] = inst_29095);

return statearr_29235;
})();
var statearr_29236_30635 = state_29163__$1;
(statearr_29236_30635[(2)] = null);

(statearr_29236_30635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (41))){
var inst_29113 = (state_29163[(23)]);
var inst_29130 = (state_29163[(2)]);
var inst_29131 = cljs.core.next(inst_29113);
var inst_29093 = inst_29131;
var inst_29094 = null;
var inst_29095 = (0);
var inst_29096 = (0);
var state_29163__$1 = (function (){var statearr_29237 = state_29163;
(statearr_29237[(9)] = inst_29094);

(statearr_29237[(25)] = inst_29130);

(statearr_29237[(10)] = inst_29096);

(statearr_29237[(19)] = inst_29093);

(statearr_29237[(20)] = inst_29095);

return statearr_29237;
})();
var statearr_29238_30637 = state_29163__$1;
(statearr_29238_30637[(2)] = null);

(statearr_29238_30637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (43))){
var state_29163__$1 = state_29163;
var statearr_29239_30638 = state_29163__$1;
(statearr_29239_30638[(2)] = null);

(statearr_29239_30638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (29))){
var inst_29139 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29240_30639 = state_29163__$1;
(statearr_29240_30639[(2)] = inst_29139);

(statearr_29240_30639[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (44))){
var inst_29152 = (state_29163[(2)]);
var state_29163__$1 = (function (){var statearr_29241 = state_29163;
(statearr_29241[(26)] = inst_29152);

return statearr_29241;
})();
var statearr_29242_30641 = state_29163__$1;
(statearr_29242_30641[(2)] = null);

(statearr_29242_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29082 = (state_29163[(27)]);
var inst_29081 = cljs.core.deref(cs);
var inst_29082__$1 = cljs.core.keys(inst_29081);
var inst_29086 = cljs.core.count(inst_29082__$1);
var inst_29087 = cljs.core.reset_BANG_(dctr,inst_29086);
var inst_29092 = cljs.core.seq(inst_29082__$1);
var inst_29093 = inst_29092;
var inst_29094 = null;
var inst_29095 = (0);
var inst_29096 = (0);
var state_29163__$1 = (function (){var statearr_29243 = state_29163;
(statearr_29243[(9)] = inst_29094);

(statearr_29243[(27)] = inst_29082__$1);

(statearr_29243[(28)] = inst_29087);

(statearr_29243[(10)] = inst_29096);

(statearr_29243[(19)] = inst_29093);

(statearr_29243[(20)] = inst_29095);

return statearr_29243;
})();
var statearr_29244_30642 = state_29163__$1;
(statearr_29244_30642[(2)] = null);

(statearr_29244_30642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (28))){
var inst_29113 = (state_29163[(23)]);
var inst_29093 = (state_29163[(19)]);
var inst_29113__$1 = cljs.core.seq(inst_29093);
var state_29163__$1 = (function (){var statearr_29245 = state_29163;
(statearr_29245[(23)] = inst_29113__$1);

return statearr_29245;
})();
if(inst_29113__$1){
var statearr_29246_30643 = state_29163__$1;
(statearr_29246_30643[(1)] = (33));

} else {
var statearr_29247_30644 = state_29163__$1;
(statearr_29247_30644[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (25))){
var inst_29096 = (state_29163[(10)]);
var inst_29095 = (state_29163[(20)]);
var inst_29099 = (inst_29096 < inst_29095);
var inst_29100 = inst_29099;
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29100)){
var statearr_29248_30645 = state_29163__$1;
(statearr_29248_30645[(1)] = (27));

} else {
var statearr_29249_30646 = state_29163__$1;
(statearr_29249_30646[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (34))){
var state_29163__$1 = state_29163;
var statearr_29250_30648 = state_29163__$1;
(statearr_29250_30648[(2)] = null);

(statearr_29250_30648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (17))){
var state_29163__$1 = state_29163;
var statearr_29251_30649 = state_29163__$1;
(statearr_29251_30649[(2)] = null);

(statearr_29251_30649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var inst_29157 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29163__$1,inst_29157);
} else {
if((state_val_29164 === (12))){
var inst_29075 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29252_30650 = state_29163__$1;
(statearr_29252_30650[(2)] = inst_29075);

(statearr_29252_30650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29163__$1,(4),ch);
} else {
if((state_val_29164 === (23))){
var state_29163__$1 = state_29163;
var statearr_29253_30651 = state_29163__$1;
(statearr_29253_30651[(2)] = null);

(statearr_29253_30651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (35))){
var inst_29137 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29254_30654 = state_29163__$1;
(statearr_29254_30654[(2)] = inst_29137);

(statearr_29254_30654[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (19))){
var inst_29030 = (state_29163[(7)]);
var inst_29035 = cljs.core.chunk_first(inst_29030);
var inst_29036 = cljs.core.chunk_rest(inst_29030);
var inst_29039 = cljs.core.count(inst_29035);
var inst_29008 = inst_29036;
var inst_29009 = inst_29035;
var inst_29010 = inst_29039;
var inst_29011 = (0);
var state_29163__$1 = (function (){var statearr_29255 = state_29163;
(statearr_29255[(13)] = inst_29008);

(statearr_29255[(15)] = inst_29009);

(statearr_29255[(16)] = inst_29011);

(statearr_29255[(17)] = inst_29010);

return statearr_29255;
})();
var statearr_29256_30657 = state_29163__$1;
(statearr_29256_30657[(2)] = null);

(statearr_29256_30657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (11))){
var inst_29008 = (state_29163[(13)]);
var inst_29030 = (state_29163[(7)]);
var inst_29030__$1 = cljs.core.seq(inst_29008);
var state_29163__$1 = (function (){var statearr_29257 = state_29163;
(statearr_29257[(7)] = inst_29030__$1);

return statearr_29257;
})();
if(inst_29030__$1){
var statearr_29258_30658 = state_29163__$1;
(statearr_29258_30658[(1)] = (16));

} else {
var statearr_29259_30659 = state_29163__$1;
(statearr_29259_30659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (9))){
var inst_29077 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29260_30660 = state_29163__$1;
(statearr_29260_30660[(2)] = inst_29077);

(statearr_29260_30660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var inst_29006 = cljs.core.deref(cs);
var inst_29007 = cljs.core.seq(inst_29006);
var inst_29008 = inst_29007;
var inst_29009 = null;
var inst_29010 = (0);
var inst_29011 = (0);
var state_29163__$1 = (function (){var statearr_29261 = state_29163;
(statearr_29261[(13)] = inst_29008);

(statearr_29261[(15)] = inst_29009);

(statearr_29261[(16)] = inst_29011);

(statearr_29261[(17)] = inst_29010);

return statearr_29261;
})();
var statearr_29262_30662 = state_29163__$1;
(statearr_29262_30662[(2)] = null);

(statearr_29262_30662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (14))){
var state_29163__$1 = state_29163;
var statearr_29263_30663 = state_29163__$1;
(statearr_29263_30663[(2)] = null);

(statearr_29263_30663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (45))){
var inst_29149 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29264_30664 = state_29163__$1;
(statearr_29264_30664[(2)] = inst_29149);

(statearr_29264_30664[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (26))){
var inst_29082 = (state_29163[(27)]);
var inst_29141 = (state_29163[(2)]);
var inst_29142 = cljs.core.seq(inst_29082);
var state_29163__$1 = (function (){var statearr_29265 = state_29163;
(statearr_29265[(29)] = inst_29141);

return statearr_29265;
})();
if(inst_29142){
var statearr_29266_30665 = state_29163__$1;
(statearr_29266_30665[(1)] = (42));

} else {
var statearr_29267_30666 = state_29163__$1;
(statearr_29267_30666[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (16))){
var inst_29030 = (state_29163[(7)]);
var inst_29033 = cljs.core.chunked_seq_QMARK_(inst_29030);
var state_29163__$1 = state_29163;
if(inst_29033){
var statearr_29268_30667 = state_29163__$1;
(statearr_29268_30667[(1)] = (19));

} else {
var statearr_29269_30668 = state_29163__$1;
(statearr_29269_30668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (38))){
var inst_29134 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29270_30671 = state_29163__$1;
(statearr_29270_30671[(2)] = inst_29134);

(statearr_29270_30671[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (30))){
var state_29163__$1 = state_29163;
var statearr_29271_30672 = state_29163__$1;
(statearr_29271_30672[(2)] = null);

(statearr_29271_30672[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (10))){
var inst_29009 = (state_29163[(15)]);
var inst_29011 = (state_29163[(16)]);
var inst_29019 = cljs.core._nth(inst_29009,inst_29011);
var inst_29020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29019,(0),null);
var inst_29021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29019,(1),null);
var state_29163__$1 = (function (){var statearr_29272 = state_29163;
(statearr_29272[(24)] = inst_29020);

return statearr_29272;
})();
if(cljs.core.truth_(inst_29021)){
var statearr_29273_30675 = state_29163__$1;
(statearr_29273_30675[(1)] = (13));

} else {
var statearr_29274_30676 = state_29163__$1;
(statearr_29274_30676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (18))){
var inst_29073 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29275_30677 = state_29163__$1;
(statearr_29275_30677[(2)] = inst_29073);

(statearr_29275_30677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (42))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29163__$1,(45),dchan);
} else {
if((state_val_29164 === (37))){
var inst_29113 = (state_29163[(23)]);
var inst_29124 = (state_29163[(22)]);
var inst_28999 = (state_29163[(11)]);
var inst_29124__$1 = cljs.core.first(inst_29113);
var inst_29125 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29124__$1,inst_28999,done);
var state_29163__$1 = (function (){var statearr_29278 = state_29163;
(statearr_29278[(22)] = inst_29124__$1);

return statearr_29278;
})();
if(cljs.core.truth_(inst_29125)){
var statearr_29279_30680 = state_29163__$1;
(statearr_29279_30680[(1)] = (39));

} else {
var statearr_29280_30681 = state_29163__$1;
(statearr_29280_30681[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29011 = (state_29163[(16)]);
var inst_29010 = (state_29163[(17)]);
var inst_29013 = (inst_29011 < inst_29010);
var inst_29014 = inst_29013;
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29014)){
var statearr_29281_30682 = state_29163__$1;
(statearr_29281_30682[(1)] = (10));

} else {
var statearr_29282_30683 = state_29163__$1;
(statearr_29282_30683[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27846__auto__ = null;
var cljs$core$async$mult_$_state_machine__27846__auto____0 = (function (){
var statearr_29284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29284[(0)] = cljs$core$async$mult_$_state_machine__27846__auto__);

(statearr_29284[(1)] = (1));

return statearr_29284;
});
var cljs$core$async$mult_$_state_machine__27846__auto____1 = (function (state_29163){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29163);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29286){var ex__27849__auto__ = e29286;
var statearr_29287_30685 = state_29163;
(statearr_29287_30685[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29163[(4)]))){
var statearr_29288_30686 = state_29163;
(statearr_29288_30686[(1)] = cljs.core.first((state_29163[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30687 = state_29163;
state_29163 = G__30687;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27846__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27846__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27846__auto____0;
cljs$core$async$mult_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27846__auto____1;
return cljs$core$async$mult_$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29290 = f__27999__auto__();
(statearr_29290[(6)] = c__27998__auto___30602);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29293 = arguments.length;
switch (G__29293) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30695 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30695(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30697 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30697(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30700 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30700(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30703 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30703(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30706 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30706(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30708 = arguments.length;
var i__5767__auto___30709 = (0);
while(true){
if((i__5767__auto___30709 < len__5766__auto___30708)){
args__5772__auto__.push((arguments[i__5767__auto___30709]));

var G__30710 = (i__5767__auto___30709 + (1));
i__5767__auto___30709 = G__30710;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29312){
var map__29313 = p__29312;
var map__29313__$1 = cljs.core.__destructure_map(map__29313);
var opts = map__29313__$1;
var statearr_29315_30711 = state;
(statearr_29315_30711[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29316_30712 = state;
(statearr_29316_30712[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29317_30715 = state;
(statearr_29317_30715[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29304){
var G__29305 = cljs.core.first(seq29304);
var seq29304__$1 = cljs.core.next(seq29304);
var G__29306 = cljs.core.first(seq29304__$1);
var seq29304__$2 = cljs.core.next(seq29304__$1);
var G__29307 = cljs.core.first(seq29304__$2);
var seq29304__$3 = cljs.core.next(seq29304__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29305,G__29306,G__29307,seq29304__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29326 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29327){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29327 = meta29327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29328,meta29327__$1){
var self__ = this;
var _29328__$1 = this;
return (new cljs.core.async.t_cljs$core$async29326(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29327__$1));
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29328){
var self__ = this;
var _29328__$1 = this;
return self__.meta29327;
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29327","meta29327",1201493245,null)], null);
}));

(cljs.core.async.t_cljs$core$async29326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29326");

(cljs.core.async.t_cljs$core$async29326.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29326.
 */
cljs.core.async.__GT_t_cljs$core$async29326 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29326(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29327){
return (new cljs.core.async.t_cljs$core$async29326(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29327));
});

}

return (new cljs.core.async.t_cljs$core$async29326(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27998__auto___30732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29408){
var state_val_29409 = (state_29408[(1)]);
if((state_val_29409 === (7))){
var inst_29364 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
if(cljs.core.truth_(inst_29364)){
var statearr_29410_30733 = state_29408__$1;
(statearr_29410_30733[(1)] = (8));

} else {
var statearr_29411_30734 = state_29408__$1;
(statearr_29411_30734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (20))){
var inst_29357 = (state_29408[(7)]);
var state_29408__$1 = state_29408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29408__$1,(23),out,inst_29357);
} else {
if((state_val_29409 === (1))){
var inst_29339 = calc_state();
var inst_29340 = cljs.core.__destructure_map(inst_29339);
var inst_29341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29344 = inst_29339;
var state_29408__$1 = (function (){var statearr_29412 = state_29408;
(statearr_29412[(8)] = inst_29341);

(statearr_29412[(9)] = inst_29344);

(statearr_29412[(10)] = inst_29343);

(statearr_29412[(11)] = inst_29342);

return statearr_29412;
})();
var statearr_29413_30735 = state_29408__$1;
(statearr_29413_30735[(2)] = null);

(statearr_29413_30735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (24))){
var inst_29348 = (state_29408[(12)]);
var inst_29344 = inst_29348;
var state_29408__$1 = (function (){var statearr_29414 = state_29408;
(statearr_29414[(9)] = inst_29344);

return statearr_29414;
})();
var statearr_29415_30736 = state_29408__$1;
(statearr_29415_30736[(2)] = null);

(statearr_29415_30736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (4))){
var inst_29357 = (state_29408[(7)]);
var inst_29359 = (state_29408[(13)]);
var inst_29356 = (state_29408[(2)]);
var inst_29357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29356,(0),null);
var inst_29358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29356,(1),null);
var inst_29359__$1 = (inst_29357__$1 == null);
var state_29408__$1 = (function (){var statearr_29416 = state_29408;
(statearr_29416[(7)] = inst_29357__$1);

(statearr_29416[(13)] = inst_29359__$1);

(statearr_29416[(14)] = inst_29358);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29359__$1)){
var statearr_29417_30737 = state_29408__$1;
(statearr_29417_30737[(1)] = (5));

} else {
var statearr_29418_30738 = state_29408__$1;
(statearr_29418_30738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (15))){
var inst_29382 = (state_29408[(15)]);
var inst_29349 = (state_29408[(16)]);
var inst_29382__$1 = cljs.core.empty_QMARK_(inst_29349);
var state_29408__$1 = (function (){var statearr_29419 = state_29408;
(statearr_29419[(15)] = inst_29382__$1);

return statearr_29419;
})();
if(inst_29382__$1){
var statearr_29420_30739 = state_29408__$1;
(statearr_29420_30739[(1)] = (17));

} else {
var statearr_29421_30740 = state_29408__$1;
(statearr_29421_30740[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (21))){
var inst_29348 = (state_29408[(12)]);
var inst_29344 = inst_29348;
var state_29408__$1 = (function (){var statearr_29424 = state_29408;
(statearr_29424[(9)] = inst_29344);

return statearr_29424;
})();
var statearr_29425_30741 = state_29408__$1;
(statearr_29425_30741[(2)] = null);

(statearr_29425_30741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (13))){
var inst_29375 = (state_29408[(2)]);
var inst_29376 = calc_state();
var inst_29344 = inst_29376;
var state_29408__$1 = (function (){var statearr_29427 = state_29408;
(statearr_29427[(17)] = inst_29375);

(statearr_29427[(9)] = inst_29344);

return statearr_29427;
})();
var statearr_29429_30742 = state_29408__$1;
(statearr_29429_30742[(2)] = null);

(statearr_29429_30742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (22))){
var inst_29402 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
var statearr_29430_30743 = state_29408__$1;
(statearr_29430_30743[(2)] = inst_29402);

(statearr_29430_30743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (6))){
var inst_29358 = (state_29408[(14)]);
var inst_29362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29358,change);
var state_29408__$1 = state_29408;
var statearr_29431_30745 = state_29408__$1;
(statearr_29431_30745[(2)] = inst_29362);

(statearr_29431_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (25))){
var state_29408__$1 = state_29408;
var statearr_29432_30746 = state_29408__$1;
(statearr_29432_30746[(2)] = null);

(statearr_29432_30746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (17))){
var inst_29350 = (state_29408[(18)]);
var inst_29358 = (state_29408[(14)]);
var inst_29384 = (inst_29350.cljs$core$IFn$_invoke$arity$1 ? inst_29350.cljs$core$IFn$_invoke$arity$1(inst_29358) : inst_29350.call(null,inst_29358));
var inst_29385 = cljs.core.not(inst_29384);
var state_29408__$1 = state_29408;
var statearr_29433_30749 = state_29408__$1;
(statearr_29433_30749[(2)] = inst_29385);

(statearr_29433_30749[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (3))){
var inst_29406 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29408__$1,inst_29406);
} else {
if((state_val_29409 === (12))){
var state_29408__$1 = state_29408;
var statearr_29434_30752 = state_29408__$1;
(statearr_29434_30752[(2)] = null);

(statearr_29434_30752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (2))){
var inst_29348 = (state_29408[(12)]);
var inst_29344 = (state_29408[(9)]);
var inst_29348__$1 = cljs.core.__destructure_map(inst_29344);
var inst_29349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29348__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29348__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29348__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29408__$1 = (function (){var statearr_29436 = state_29408;
(statearr_29436[(12)] = inst_29348__$1);

(statearr_29436[(18)] = inst_29350);

(statearr_29436[(16)] = inst_29349);

return statearr_29436;
})();
return cljs.core.async.ioc_alts_BANG_(state_29408__$1,(4),inst_29351);
} else {
if((state_val_29409 === (23))){
var inst_29393 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
if(cljs.core.truth_(inst_29393)){
var statearr_29438_30759 = state_29408__$1;
(statearr_29438_30759[(1)] = (24));

} else {
var statearr_29439_30760 = state_29408__$1;
(statearr_29439_30760[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (19))){
var inst_29388 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
var statearr_29440_30761 = state_29408__$1;
(statearr_29440_30761[(2)] = inst_29388);

(statearr_29440_30761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (11))){
var inst_29358 = (state_29408[(14)]);
var inst_29372 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29358);
var state_29408__$1 = state_29408;
var statearr_29441_30766 = state_29408__$1;
(statearr_29441_30766[(2)] = inst_29372);

(statearr_29441_30766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (9))){
var inst_29379 = (state_29408[(19)]);
var inst_29358 = (state_29408[(14)]);
var inst_29349 = (state_29408[(16)]);
var inst_29379__$1 = (inst_29349.cljs$core$IFn$_invoke$arity$1 ? inst_29349.cljs$core$IFn$_invoke$arity$1(inst_29358) : inst_29349.call(null,inst_29358));
var state_29408__$1 = (function (){var statearr_29442 = state_29408;
(statearr_29442[(19)] = inst_29379__$1);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29379__$1)){
var statearr_29443_30768 = state_29408__$1;
(statearr_29443_30768[(1)] = (14));

} else {
var statearr_29444_30769 = state_29408__$1;
(statearr_29444_30769[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (5))){
var inst_29359 = (state_29408[(13)]);
var state_29408__$1 = state_29408;
var statearr_29446_30770 = state_29408__$1;
(statearr_29446_30770[(2)] = inst_29359);

(statearr_29446_30770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (14))){
var inst_29379 = (state_29408[(19)]);
var state_29408__$1 = state_29408;
var statearr_29447_30774 = state_29408__$1;
(statearr_29447_30774[(2)] = inst_29379);

(statearr_29447_30774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (26))){
var inst_29398 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
var statearr_29451_30776 = state_29408__$1;
(statearr_29451_30776[(2)] = inst_29398);

(statearr_29451_30776[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (16))){
var inst_29390 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
if(cljs.core.truth_(inst_29390)){
var statearr_29452_30780 = state_29408__$1;
(statearr_29452_30780[(1)] = (20));

} else {
var statearr_29453_30781 = state_29408__$1;
(statearr_29453_30781[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (10))){
var inst_29404 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
var statearr_29454_30784 = state_29408__$1;
(statearr_29454_30784[(2)] = inst_29404);

(statearr_29454_30784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (18))){
var inst_29382 = (state_29408[(15)]);
var state_29408__$1 = state_29408;
var statearr_29455_30786 = state_29408__$1;
(statearr_29455_30786[(2)] = inst_29382);

(statearr_29455_30786[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (8))){
var inst_29357 = (state_29408[(7)]);
var inst_29367 = (inst_29357 == null);
var state_29408__$1 = state_29408;
if(cljs.core.truth_(inst_29367)){
var statearr_29456_30787 = state_29408__$1;
(statearr_29456_30787[(1)] = (11));

} else {
var statearr_29457_30789 = state_29408__$1;
(statearr_29457_30789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27846__auto__ = null;
var cljs$core$async$mix_$_state_machine__27846__auto____0 = (function (){
var statearr_29458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29458[(0)] = cljs$core$async$mix_$_state_machine__27846__auto__);

(statearr_29458[(1)] = (1));

return statearr_29458;
});
var cljs$core$async$mix_$_state_machine__27846__auto____1 = (function (state_29408){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29408);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29459){var ex__27849__auto__ = e29459;
var statearr_29460_30793 = state_29408;
(statearr_29460_30793[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29408[(4)]))){
var statearr_29461_30794 = state_29408;
(statearr_29461_30794[(1)] = cljs.core.first((state_29408[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30795 = state_29408;
state_29408 = G__30795;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27846__auto__ = function(state_29408){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27846__auto____1.call(this,state_29408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27846__auto____0;
cljs$core$async$mix_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27846__auto____1;
return cljs$core$async$mix_$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29463 = f__27999__auto__();
(statearr_29463[(6)] = c__27998__auto___30732);

return statearr_29463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30798 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30798(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30806 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30806(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30809 = (function() {
var G__30810 = null;
var G__30810__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30810__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30810 = function(p,v){
switch(arguments.length){
case 1:
return G__30810__1.call(this,p);
case 2:
return G__30810__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30810.cljs$core$IFn$_invoke$arity$1 = G__30810__1;
G__30810.cljs$core$IFn$_invoke$arity$2 = G__30810__2;
return G__30810;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29476 = arguments.length;
switch (G__29476) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30809(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30809(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29490 = arguments.length;
switch (G__29490) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29484_SHARP_){
if(cljs.core.truth_((p1__29484_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29484_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29484_SHARP_.call(null,topic)))){
return p1__29484_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29484_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29491 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29492){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29492 = meta29492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29493,meta29492__$1){
var self__ = this;
var _29493__$1 = this;
return (new cljs.core.async.t_cljs$core$async29491(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29492__$1));
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29493){
var self__ = this;
var _29493__$1 = this;
return self__.meta29492;
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29492","meta29492",1970580373,null)], null);
}));

(cljs.core.async.t_cljs$core$async29491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29491");

(cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29491.
 */
cljs.core.async.__GT_t_cljs$core$async29491 = (function cljs$core$async$__GT_t_cljs$core$async29491(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29492){
return (new cljs.core.async.t_cljs$core$async29491(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29492));
});

}

return (new cljs.core.async.t_cljs$core$async29491(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27998__auto___30834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29572){
var state_val_29573 = (state_29572[(1)]);
if((state_val_29573 === (7))){
var inst_29568 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29575_30836 = state_29572__$1;
(statearr_29575_30836[(2)] = inst_29568);

(statearr_29575_30836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (20))){
var state_29572__$1 = state_29572;
var statearr_29576_30838 = state_29572__$1;
(statearr_29576_30838[(2)] = null);

(statearr_29576_30838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (1))){
var state_29572__$1 = state_29572;
var statearr_29580_30839 = state_29572__$1;
(statearr_29580_30839[(2)] = null);

(statearr_29580_30839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (24))){
var inst_29551 = (state_29572[(7)]);
var inst_29560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29551);
var state_29572__$1 = state_29572;
var statearr_29581_30840 = state_29572__$1;
(statearr_29581_30840[(2)] = inst_29560);

(statearr_29581_30840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (4))){
var inst_29501 = (state_29572[(8)]);
var inst_29501__$1 = (state_29572[(2)]);
var inst_29503 = (inst_29501__$1 == null);
var state_29572__$1 = (function (){var statearr_29587 = state_29572;
(statearr_29587[(8)] = inst_29501__$1);

return statearr_29587;
})();
if(cljs.core.truth_(inst_29503)){
var statearr_29588_30841 = state_29572__$1;
(statearr_29588_30841[(1)] = (5));

} else {
var statearr_29589_30842 = state_29572__$1;
(statearr_29589_30842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (15))){
var inst_29545 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29590_30843 = state_29572__$1;
(statearr_29590_30843[(2)] = inst_29545);

(statearr_29590_30843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (21))){
var inst_29565 = (state_29572[(2)]);
var state_29572__$1 = (function (){var statearr_29591 = state_29572;
(statearr_29591[(9)] = inst_29565);

return statearr_29591;
})();
var statearr_29592_30844 = state_29572__$1;
(statearr_29592_30844[(2)] = null);

(statearr_29592_30844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (13))){
var inst_29527 = (state_29572[(10)]);
var inst_29529 = cljs.core.chunked_seq_QMARK_(inst_29527);
var state_29572__$1 = state_29572;
if(inst_29529){
var statearr_29593_30845 = state_29572__$1;
(statearr_29593_30845[(1)] = (16));

} else {
var statearr_29594_30846 = state_29572__$1;
(statearr_29594_30846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (22))){
var inst_29557 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
if(cljs.core.truth_(inst_29557)){
var statearr_29595_30847 = state_29572__$1;
(statearr_29595_30847[(1)] = (23));

} else {
var statearr_29596_30848 = state_29572__$1;
(statearr_29596_30848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (6))){
var inst_29501 = (state_29572[(8)]);
var inst_29551 = (state_29572[(7)]);
var inst_29553 = (state_29572[(11)]);
var inst_29551__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29501) : topic_fn.call(null,inst_29501));
var inst_29552 = cljs.core.deref(mults);
var inst_29553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29552,inst_29551__$1);
var state_29572__$1 = (function (){var statearr_29598 = state_29572;
(statearr_29598[(7)] = inst_29551__$1);

(statearr_29598[(11)] = inst_29553__$1);

return statearr_29598;
})();
if(cljs.core.truth_(inst_29553__$1)){
var statearr_29599_30851 = state_29572__$1;
(statearr_29599_30851[(1)] = (19));

} else {
var statearr_29600_30852 = state_29572__$1;
(statearr_29600_30852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (25))){
var inst_29562 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29601_30853 = state_29572__$1;
(statearr_29601_30853[(2)] = inst_29562);

(statearr_29601_30853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (17))){
var inst_29527 = (state_29572[(10)]);
var inst_29536 = cljs.core.first(inst_29527);
var inst_29537 = cljs.core.async.muxch_STAR_(inst_29536);
var inst_29538 = cljs.core.async.close_BANG_(inst_29537);
var inst_29539 = cljs.core.next(inst_29527);
var inst_29512 = inst_29539;
var inst_29513 = null;
var inst_29514 = (0);
var inst_29515 = (0);
var state_29572__$1 = (function (){var statearr_29602 = state_29572;
(statearr_29602[(12)] = inst_29538);

(statearr_29602[(13)] = inst_29513);

(statearr_29602[(14)] = inst_29512);

(statearr_29602[(15)] = inst_29515);

(statearr_29602[(16)] = inst_29514);

return statearr_29602;
})();
var statearr_29603_30859 = state_29572__$1;
(statearr_29603_30859[(2)] = null);

(statearr_29603_30859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (3))){
var inst_29570 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29572__$1,inst_29570);
} else {
if((state_val_29573 === (12))){
var inst_29547 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29604_30861 = state_29572__$1;
(statearr_29604_30861[(2)] = inst_29547);

(statearr_29604_30861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (2))){
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29572__$1,(4),ch);
} else {
if((state_val_29573 === (23))){
var state_29572__$1 = state_29572;
var statearr_29605_30863 = state_29572__$1;
(statearr_29605_30863[(2)] = null);

(statearr_29605_30863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (19))){
var inst_29501 = (state_29572[(8)]);
var inst_29553 = (state_29572[(11)]);
var inst_29555 = cljs.core.async.muxch_STAR_(inst_29553);
var state_29572__$1 = state_29572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29572__$1,(22),inst_29555,inst_29501);
} else {
if((state_val_29573 === (11))){
var inst_29512 = (state_29572[(14)]);
var inst_29527 = (state_29572[(10)]);
var inst_29527__$1 = cljs.core.seq(inst_29512);
var state_29572__$1 = (function (){var statearr_29606 = state_29572;
(statearr_29606[(10)] = inst_29527__$1);

return statearr_29606;
})();
if(inst_29527__$1){
var statearr_29607_30864 = state_29572__$1;
(statearr_29607_30864[(1)] = (13));

} else {
var statearr_29608_30865 = state_29572__$1;
(statearr_29608_30865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (9))){
var inst_29549 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29609_30867 = state_29572__$1;
(statearr_29609_30867[(2)] = inst_29549);

(statearr_29609_30867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (5))){
var inst_29509 = cljs.core.deref(mults);
var inst_29510 = cljs.core.vals(inst_29509);
var inst_29511 = cljs.core.seq(inst_29510);
var inst_29512 = inst_29511;
var inst_29513 = null;
var inst_29514 = (0);
var inst_29515 = (0);
var state_29572__$1 = (function (){var statearr_29610 = state_29572;
(statearr_29610[(13)] = inst_29513);

(statearr_29610[(14)] = inst_29512);

(statearr_29610[(15)] = inst_29515);

(statearr_29610[(16)] = inst_29514);

return statearr_29610;
})();
var statearr_29611_30868 = state_29572__$1;
(statearr_29611_30868[(2)] = null);

(statearr_29611_30868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (14))){
var state_29572__$1 = state_29572;
var statearr_29615_30869 = state_29572__$1;
(statearr_29615_30869[(2)] = null);

(statearr_29615_30869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (16))){
var inst_29527 = (state_29572[(10)]);
var inst_29531 = cljs.core.chunk_first(inst_29527);
var inst_29532 = cljs.core.chunk_rest(inst_29527);
var inst_29533 = cljs.core.count(inst_29531);
var inst_29512 = inst_29532;
var inst_29513 = inst_29531;
var inst_29514 = inst_29533;
var inst_29515 = (0);
var state_29572__$1 = (function (){var statearr_29617 = state_29572;
(statearr_29617[(13)] = inst_29513);

(statearr_29617[(14)] = inst_29512);

(statearr_29617[(15)] = inst_29515);

(statearr_29617[(16)] = inst_29514);

return statearr_29617;
})();
var statearr_29618_30870 = state_29572__$1;
(statearr_29618_30870[(2)] = null);

(statearr_29618_30870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (10))){
var inst_29513 = (state_29572[(13)]);
var inst_29512 = (state_29572[(14)]);
var inst_29515 = (state_29572[(15)]);
var inst_29514 = (state_29572[(16)]);
var inst_29520 = cljs.core._nth(inst_29513,inst_29515);
var inst_29521 = cljs.core.async.muxch_STAR_(inst_29520);
var inst_29522 = cljs.core.async.close_BANG_(inst_29521);
var inst_29524 = (inst_29515 + (1));
var tmp29612 = inst_29513;
var tmp29613 = inst_29512;
var tmp29614 = inst_29514;
var inst_29512__$1 = tmp29613;
var inst_29513__$1 = tmp29612;
var inst_29514__$1 = tmp29614;
var inst_29515__$1 = inst_29524;
var state_29572__$1 = (function (){var statearr_29619 = state_29572;
(statearr_29619[(13)] = inst_29513__$1);

(statearr_29619[(17)] = inst_29522);

(statearr_29619[(14)] = inst_29512__$1);

(statearr_29619[(15)] = inst_29515__$1);

(statearr_29619[(16)] = inst_29514__$1);

return statearr_29619;
})();
var statearr_29620_30872 = state_29572__$1;
(statearr_29620_30872[(2)] = null);

(statearr_29620_30872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (18))){
var inst_29542 = (state_29572[(2)]);
var state_29572__$1 = state_29572;
var statearr_29621_30876 = state_29572__$1;
(statearr_29621_30876[(2)] = inst_29542);

(statearr_29621_30876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29573 === (8))){
var inst_29515 = (state_29572[(15)]);
var inst_29514 = (state_29572[(16)]);
var inst_29517 = (inst_29515 < inst_29514);
var inst_29518 = inst_29517;
var state_29572__$1 = state_29572;
if(cljs.core.truth_(inst_29518)){
var statearr_29622_30877 = state_29572__$1;
(statearr_29622_30877[(1)] = (10));

} else {
var statearr_29623_30879 = state_29572__$1;
(statearr_29623_30879[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29624[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29624[(1)] = (1));

return statearr_29624;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29572){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29572);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29625){var ex__27849__auto__ = e29625;
var statearr_29626_30882 = state_29572;
(statearr_29626_30882[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29572[(4)]))){
var statearr_29627_30883 = state_29572;
(statearr_29627_30883[(1)] = cljs.core.first((state_29572[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30884 = state_29572;
state_29572 = G__30884;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29628 = f__27999__auto__();
(statearr_29628[(6)] = c__27998__auto___30834);

return statearr_29628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29630 = arguments.length;
switch (G__29630) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29633 = arguments.length;
switch (G__29633) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29637 = arguments.length;
switch (G__29637) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27998__auto___30893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29680){
var state_val_29681 = (state_29680[(1)]);
if((state_val_29681 === (7))){
var state_29680__$1 = state_29680;
var statearr_29682_30895 = state_29680__$1;
(statearr_29682_30895[(2)] = null);

(statearr_29682_30895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (1))){
var state_29680__$1 = state_29680;
var statearr_29683_30896 = state_29680__$1;
(statearr_29683_30896[(2)] = null);

(statearr_29683_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (4))){
var inst_29641 = (state_29680[(7)]);
var inst_29640 = (state_29680[(8)]);
var inst_29643 = (inst_29641 < inst_29640);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29643)){
var statearr_29684_30897 = state_29680__$1;
(statearr_29684_30897[(1)] = (6));

} else {
var statearr_29685_30898 = state_29680__$1;
(statearr_29685_30898[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (15))){
var inst_29666 = (state_29680[(9)]);
var inst_29671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29666);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29680__$1,(17),out,inst_29671);
} else {
if((state_val_29681 === (13))){
var inst_29666 = (state_29680[(9)]);
var inst_29666__$1 = (state_29680[(2)]);
var inst_29667 = cljs.core.some(cljs.core.nil_QMARK_,inst_29666__$1);
var state_29680__$1 = (function (){var statearr_29686 = state_29680;
(statearr_29686[(9)] = inst_29666__$1);

return statearr_29686;
})();
if(cljs.core.truth_(inst_29667)){
var statearr_29687_30901 = state_29680__$1;
(statearr_29687_30901[(1)] = (14));

} else {
var statearr_29688_30904 = state_29680__$1;
(statearr_29688_30904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (6))){
var state_29680__$1 = state_29680;
var statearr_29689_30905 = state_29680__$1;
(statearr_29689_30905[(2)] = null);

(statearr_29689_30905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (17))){
var inst_29673 = (state_29680[(2)]);
var state_29680__$1 = (function (){var statearr_29691 = state_29680;
(statearr_29691[(10)] = inst_29673);

return statearr_29691;
})();
var statearr_29692_30906 = state_29680__$1;
(statearr_29692_30906[(2)] = null);

(statearr_29692_30906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (3))){
var inst_29678 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29680__$1,inst_29678);
} else {
if((state_val_29681 === (12))){
var _ = (function (){var statearr_29693 = state_29680;
(statearr_29693[(4)] = cljs.core.rest((state_29680[(4)])));

return statearr_29693;
})();
var state_29680__$1 = state_29680;
var ex29690 = (state_29680__$1[(2)]);
var statearr_29694_30908 = state_29680__$1;
(statearr_29694_30908[(5)] = ex29690);


if((ex29690 instanceof Object)){
var statearr_29695_30909 = state_29680__$1;
(statearr_29695_30909[(1)] = (11));

(statearr_29695_30909[(5)] = null);

} else {
throw ex29690;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (2))){
var inst_29639 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29640 = cnt;
var inst_29641 = (0);
var state_29680__$1 = (function (){var statearr_29696 = state_29680;
(statearr_29696[(7)] = inst_29641);

(statearr_29696[(11)] = inst_29639);

(statearr_29696[(8)] = inst_29640);

return statearr_29696;
})();
var statearr_29697_30914 = state_29680__$1;
(statearr_29697_30914[(2)] = null);

(statearr_29697_30914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (11))){
var inst_29645 = (state_29680[(2)]);
var inst_29646 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29680__$1 = (function (){var statearr_29698 = state_29680;
(statearr_29698[(12)] = inst_29645);

return statearr_29698;
})();
var statearr_29699_30915 = state_29680__$1;
(statearr_29699_30915[(2)] = inst_29646);

(statearr_29699_30915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (9))){
var inst_29641 = (state_29680[(7)]);
var _ = (function (){var statearr_29700 = state_29680;
(statearr_29700[(4)] = cljs.core.cons((12),(state_29680[(4)])));

return statearr_29700;
})();
var inst_29652 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29641) : chs__$1.call(null,inst_29641));
var inst_29653 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29641) : done.call(null,inst_29641));
var inst_29654 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29652,inst_29653);
var ___$1 = (function (){var statearr_29701 = state_29680;
(statearr_29701[(4)] = cljs.core.rest((state_29680[(4)])));

return statearr_29701;
})();
var state_29680__$1 = state_29680;
var statearr_29702_30919 = state_29680__$1;
(statearr_29702_30919[(2)] = inst_29654);

(statearr_29702_30919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (5))){
var inst_29664 = (state_29680[(2)]);
var state_29680__$1 = (function (){var statearr_29703 = state_29680;
(statearr_29703[(13)] = inst_29664);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29680__$1,(13),dchan);
} else {
if((state_val_29681 === (14))){
var inst_29669 = cljs.core.async.close_BANG_(out);
var state_29680__$1 = state_29680;
var statearr_29704_30922 = state_29680__$1;
(statearr_29704_30922[(2)] = inst_29669);

(statearr_29704_30922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (16))){
var inst_29676 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29705_30923 = state_29680__$1;
(statearr_29705_30923[(2)] = inst_29676);

(statearr_29705_30923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (10))){
var inst_29641 = (state_29680[(7)]);
var inst_29657 = (state_29680[(2)]);
var inst_29658 = (inst_29641 + (1));
var inst_29641__$1 = inst_29658;
var state_29680__$1 = (function (){var statearr_29706 = state_29680;
(statearr_29706[(14)] = inst_29657);

(statearr_29706[(7)] = inst_29641__$1);

return statearr_29706;
})();
var statearr_29707_30924 = state_29680__$1;
(statearr_29707_30924[(2)] = null);

(statearr_29707_30924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (8))){
var inst_29662 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29708_30925 = state_29680__$1;
(statearr_29708_30925[(2)] = inst_29662);

(statearr_29708_30925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29709[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29709[(1)] = (1));

return statearr_29709;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29680){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29680);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29710){var ex__27849__auto__ = e29710;
var statearr_29711_30929 = state_29680;
(statearr_29711_30929[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29680[(4)]))){
var statearr_29712_30930 = state_29680;
(statearr_29712_30930[(1)] = cljs.core.first((state_29680[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30931 = state_29680;
state_29680 = G__30931;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29713 = f__27999__auto__();
(statearr_29713[(6)] = c__27998__auto___30893);

return statearr_29713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29716 = arguments.length;
switch (G__29716) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___30937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29748){
var state_val_29749 = (state_29748[(1)]);
if((state_val_29749 === (7))){
var inst_29727 = (state_29748[(7)]);
var inst_29728 = (state_29748[(8)]);
var inst_29727__$1 = (state_29748[(2)]);
var inst_29728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29727__$1,(0),null);
var inst_29729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29727__$1,(1),null);
var inst_29730 = (inst_29728__$1 == null);
var state_29748__$1 = (function (){var statearr_29750 = state_29748;
(statearr_29750[(9)] = inst_29729);

(statearr_29750[(7)] = inst_29727__$1);

(statearr_29750[(8)] = inst_29728__$1);

return statearr_29750;
})();
if(cljs.core.truth_(inst_29730)){
var statearr_29751_30938 = state_29748__$1;
(statearr_29751_30938[(1)] = (8));

} else {
var statearr_29752_30940 = state_29748__$1;
(statearr_29752_30940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (1))){
var inst_29717 = cljs.core.vec(chs);
var inst_29718 = inst_29717;
var state_29748__$1 = (function (){var statearr_29753 = state_29748;
(statearr_29753[(10)] = inst_29718);

return statearr_29753;
})();
var statearr_29754_30943 = state_29748__$1;
(statearr_29754_30943[(2)] = null);

(statearr_29754_30943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (4))){
var inst_29718 = (state_29748[(10)]);
var state_29748__$1 = state_29748;
return cljs.core.async.ioc_alts_BANG_(state_29748__$1,(7),inst_29718);
} else {
if((state_val_29749 === (6))){
var inst_29744 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29755_30944 = state_29748__$1;
(statearr_29755_30944[(2)] = inst_29744);

(statearr_29755_30944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (3))){
var inst_29746 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29748__$1,inst_29746);
} else {
if((state_val_29749 === (2))){
var inst_29718 = (state_29748[(10)]);
var inst_29720 = cljs.core.count(inst_29718);
var inst_29721 = (inst_29720 > (0));
var state_29748__$1 = state_29748;
if(cljs.core.truth_(inst_29721)){
var statearr_29757_30946 = state_29748__$1;
(statearr_29757_30946[(1)] = (4));

} else {
var statearr_29758_30947 = state_29748__$1;
(statearr_29758_30947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (11))){
var inst_29718 = (state_29748[(10)]);
var inst_29737 = (state_29748[(2)]);
var tmp29756 = inst_29718;
var inst_29718__$1 = tmp29756;
var state_29748__$1 = (function (){var statearr_29759 = state_29748;
(statearr_29759[(11)] = inst_29737);

(statearr_29759[(10)] = inst_29718__$1);

return statearr_29759;
})();
var statearr_29760_30948 = state_29748__$1;
(statearr_29760_30948[(2)] = null);

(statearr_29760_30948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (9))){
var inst_29728 = (state_29748[(8)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29748__$1,(11),out,inst_29728);
} else {
if((state_val_29749 === (5))){
var inst_29742 = cljs.core.async.close_BANG_(out);
var state_29748__$1 = state_29748;
var statearr_29761_30949 = state_29748__$1;
(statearr_29761_30949[(2)] = inst_29742);

(statearr_29761_30949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (10))){
var inst_29740 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29762_30950 = state_29748__$1;
(statearr_29762_30950[(2)] = inst_29740);

(statearr_29762_30950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (8))){
var inst_29718 = (state_29748[(10)]);
var inst_29729 = (state_29748[(9)]);
var inst_29727 = (state_29748[(7)]);
var inst_29728 = (state_29748[(8)]);
var inst_29732 = (function (){var cs = inst_29718;
var vec__29723 = inst_29727;
var v = inst_29728;
var c = inst_29729;
return (function (p1__29714_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29714_SHARP_);
});
})();
var inst_29733 = cljs.core.filterv(inst_29732,inst_29718);
var inst_29718__$1 = inst_29733;
var state_29748__$1 = (function (){var statearr_29763 = state_29748;
(statearr_29763[(10)] = inst_29718__$1);

return statearr_29763;
})();
var statearr_29764_30953 = state_29748__$1;
(statearr_29764_30953[(2)] = null);

(statearr_29764_30953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29748){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29748);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29766){var ex__27849__auto__ = e29766;
var statearr_29767_30957 = state_29748;
(statearr_29767_30957[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29748[(4)]))){
var statearr_29768_30960 = state_29748;
(statearr_29768_30960[(1)] = cljs.core.first((state_29748[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30961 = state_29748;
state_29748 = G__30961;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29769 = f__27999__auto__();
(statearr_29769[(6)] = c__27998__auto___30937);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29771 = arguments.length;
switch (G__29771) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___30967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29795){
var state_val_29796 = (state_29795[(1)]);
if((state_val_29796 === (7))){
var inst_29777 = (state_29795[(7)]);
var inst_29777__$1 = (state_29795[(2)]);
var inst_29778 = (inst_29777__$1 == null);
var inst_29779 = cljs.core.not(inst_29778);
var state_29795__$1 = (function (){var statearr_29797 = state_29795;
(statearr_29797[(7)] = inst_29777__$1);

return statearr_29797;
})();
if(inst_29779){
var statearr_29798_30968 = state_29795__$1;
(statearr_29798_30968[(1)] = (8));

} else {
var statearr_29799_30969 = state_29795__$1;
(statearr_29799_30969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (1))){
var inst_29772 = (0);
var state_29795__$1 = (function (){var statearr_29800 = state_29795;
(statearr_29800[(8)] = inst_29772);

return statearr_29800;
})();
var statearr_29801_30970 = state_29795__$1;
(statearr_29801_30970[(2)] = null);

(statearr_29801_30970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (4))){
var state_29795__$1 = state_29795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29795__$1,(7),ch);
} else {
if((state_val_29796 === (6))){
var inst_29790 = (state_29795[(2)]);
var state_29795__$1 = state_29795;
var statearr_29802_30971 = state_29795__$1;
(statearr_29802_30971[(2)] = inst_29790);

(statearr_29802_30971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (3))){
var inst_29792 = (state_29795[(2)]);
var inst_29793 = cljs.core.async.close_BANG_(out);
var state_29795__$1 = (function (){var statearr_29803 = state_29795;
(statearr_29803[(9)] = inst_29792);

return statearr_29803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29795__$1,inst_29793);
} else {
if((state_val_29796 === (2))){
var inst_29772 = (state_29795[(8)]);
var inst_29774 = (inst_29772 < n);
var state_29795__$1 = state_29795;
if(cljs.core.truth_(inst_29774)){
var statearr_29804_30974 = state_29795__$1;
(statearr_29804_30974[(1)] = (4));

} else {
var statearr_29805_30975 = state_29795__$1;
(statearr_29805_30975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (11))){
var inst_29772 = (state_29795[(8)]);
var inst_29782 = (state_29795[(2)]);
var inst_29783 = (inst_29772 + (1));
var inst_29772__$1 = inst_29783;
var state_29795__$1 = (function (){var statearr_29806 = state_29795;
(statearr_29806[(10)] = inst_29782);

(statearr_29806[(8)] = inst_29772__$1);

return statearr_29806;
})();
var statearr_29807_30976 = state_29795__$1;
(statearr_29807_30976[(2)] = null);

(statearr_29807_30976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (9))){
var state_29795__$1 = state_29795;
var statearr_29808_30977 = state_29795__$1;
(statearr_29808_30977[(2)] = null);

(statearr_29808_30977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (5))){
var state_29795__$1 = state_29795;
var statearr_29809_30978 = state_29795__$1;
(statearr_29809_30978[(2)] = null);

(statearr_29809_30978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (10))){
var inst_29787 = (state_29795[(2)]);
var state_29795__$1 = state_29795;
var statearr_29810_30979 = state_29795__$1;
(statearr_29810_30979[(2)] = inst_29787);

(statearr_29810_30979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (8))){
var inst_29777 = (state_29795[(7)]);
var state_29795__$1 = state_29795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29795__$1,(11),out,inst_29777);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29795){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29795);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29812){var ex__27849__auto__ = e29812;
var statearr_29813_30980 = state_29795;
(statearr_29813_30980[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29795[(4)]))){
var statearr_29814_30981 = state_29795;
(statearr_29814_30981[(1)] = cljs.core.first((state_29795[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30982 = state_29795;
state_29795 = G__30982;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29815 = f__27999__auto__();
(statearr_29815[(6)] = c__27998__auto___30967);

return statearr_29815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29817 = (function (f,ch,meta29818){
this.f = f;
this.ch = ch;
this.meta29818 = meta29818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29819,meta29818__$1){
var self__ = this;
var _29819__$1 = this;
return (new cljs.core.async.t_cljs$core$async29817(self__.f,self__.ch,meta29818__$1));
}));

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29819){
var self__ = this;
var _29819__$1 = this;
return self__.meta29818;
}));

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29820 = (function (f,ch,meta29818,_,fn1,meta29821){
this.f = f;
this.ch = ch;
this.meta29818 = meta29818;
this._ = _;
this.fn1 = fn1;
this.meta29821 = meta29821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29822,meta29821__$1){
var self__ = this;
var _29822__$1 = this;
return (new cljs.core.async.t_cljs$core$async29820(self__.f,self__.ch,self__.meta29818,self__._,self__.fn1,meta29821__$1));
}));

(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29822){
var self__ = this;
var _29822__$1 = this;
return self__.meta29821;
}));

(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29816_SHARP_){
var G__29823 = (((p1__29816_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29816_SHARP_) : self__.f.call(null,p1__29816_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29823) : f1.call(null,G__29823));
});
}));

(cljs.core.async.t_cljs$core$async29820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29818","meta29818",1553108492,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29817","cljs.core.async/t_cljs$core$async29817",-527097178,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29821","meta29821",1045878427,null)], null);
}));

(cljs.core.async.t_cljs$core$async29820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29820");

(cljs.core.async.t_cljs$core$async29820.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29820.
 */
cljs.core.async.__GT_t_cljs$core$async29820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29820(f__$1,ch__$1,meta29818__$1,___$2,fn1__$1,meta29821){
return (new cljs.core.async.t_cljs$core$async29820(f__$1,ch__$1,meta29818__$1,___$2,fn1__$1,meta29821));
});

}

return (new cljs.core.async.t_cljs$core$async29820(self__.f,self__.ch,self__.meta29818,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29824 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29824) : self__.f.call(null,G__29824));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29818","meta29818",1553108492,null)], null);
}));

(cljs.core.async.t_cljs$core$async29817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29817");

(cljs.core.async.t_cljs$core$async29817.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29817.
 */
cljs.core.async.__GT_t_cljs$core$async29817 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29817(f__$1,ch__$1,meta29818){
return (new cljs.core.async.t_cljs$core$async29817(f__$1,ch__$1,meta29818));
});

}

return (new cljs.core.async.t_cljs$core$async29817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29825 = (function (f,ch,meta29826){
this.f = f;
this.ch = ch;
this.meta29826 = meta29826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29827,meta29826__$1){
var self__ = this;
var _29827__$1 = this;
return (new cljs.core.async.t_cljs$core$async29825(self__.f,self__.ch,meta29826__$1));
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29827){
var self__ = this;
var _29827__$1 = this;
return self__.meta29826;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29826","meta29826",1522954689,null)], null);
}));

(cljs.core.async.t_cljs$core$async29825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29825");

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29825.
 */
cljs.core.async.__GT_t_cljs$core$async29825 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29825(f__$1,ch__$1,meta29826){
return (new cljs.core.async.t_cljs$core$async29825(f__$1,ch__$1,meta29826));
});

}

return (new cljs.core.async.t_cljs$core$async29825(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29828 = (function (p,ch,meta29829){
this.p = p;
this.ch = ch;
this.meta29829 = meta29829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29830,meta29829__$1){
var self__ = this;
var _29830__$1 = this;
return (new cljs.core.async.t_cljs$core$async29828(self__.p,self__.ch,meta29829__$1));
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29830){
var self__ = this;
var _29830__$1 = this;
return self__.meta29829;
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29829","meta29829",924907357,null)], null);
}));

(cljs.core.async.t_cljs$core$async29828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29828");

(cljs.core.async.t_cljs$core$async29828.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29828.
 */
cljs.core.async.__GT_t_cljs$core$async29828 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29828(p__$1,ch__$1,meta29829){
return (new cljs.core.async.t_cljs$core$async29828(p__$1,ch__$1,meta29829));
});

}

return (new cljs.core.async.t_cljs$core$async29828(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29832 = arguments.length;
switch (G__29832) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___30992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29853){
var state_val_29854 = (state_29853[(1)]);
if((state_val_29854 === (7))){
var inst_29849 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29855_30993 = state_29853__$1;
(statearr_29855_30993[(2)] = inst_29849);

(statearr_29855_30993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (1))){
var state_29853__$1 = state_29853;
var statearr_29856_30994 = state_29853__$1;
(statearr_29856_30994[(2)] = null);

(statearr_29856_30994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (4))){
var inst_29835 = (state_29853[(7)]);
var inst_29835__$1 = (state_29853[(2)]);
var inst_29836 = (inst_29835__$1 == null);
var state_29853__$1 = (function (){var statearr_29857 = state_29853;
(statearr_29857[(7)] = inst_29835__$1);

return statearr_29857;
})();
if(cljs.core.truth_(inst_29836)){
var statearr_29858_30995 = state_29853__$1;
(statearr_29858_30995[(1)] = (5));

} else {
var statearr_29859_30996 = state_29853__$1;
(statearr_29859_30996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (6))){
var inst_29835 = (state_29853[(7)]);
var inst_29840 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29835) : p.call(null,inst_29835));
var state_29853__$1 = state_29853;
if(cljs.core.truth_(inst_29840)){
var statearr_29860_30997 = state_29853__$1;
(statearr_29860_30997[(1)] = (8));

} else {
var statearr_29861_30998 = state_29853__$1;
(statearr_29861_30998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (3))){
var inst_29851 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29853__$1,inst_29851);
} else {
if((state_val_29854 === (2))){
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29853__$1,(4),ch);
} else {
if((state_val_29854 === (11))){
var inst_29843 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29862_31001 = state_29853__$1;
(statearr_29862_31001[(2)] = inst_29843);

(statearr_29862_31001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (9))){
var state_29853__$1 = state_29853;
var statearr_29863_31002 = state_29853__$1;
(statearr_29863_31002[(2)] = null);

(statearr_29863_31002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (5))){
var inst_29838 = cljs.core.async.close_BANG_(out);
var state_29853__$1 = state_29853;
var statearr_29864_31003 = state_29853__$1;
(statearr_29864_31003[(2)] = inst_29838);

(statearr_29864_31003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (10))){
var inst_29846 = (state_29853[(2)]);
var state_29853__$1 = (function (){var statearr_29865 = state_29853;
(statearr_29865[(8)] = inst_29846);

return statearr_29865;
})();
var statearr_29866_31006 = state_29853__$1;
(statearr_29866_31006[(2)] = null);

(statearr_29866_31006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (8))){
var inst_29835 = (state_29853[(7)]);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29853__$1,(11),out,inst_29835);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29867 = [null,null,null,null,null,null,null,null,null];
(statearr_29867[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29867[(1)] = (1));

return statearr_29867;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29853){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29853);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29868){var ex__27849__auto__ = e29868;
var statearr_29869_31007 = state_29853;
(statearr_29869_31007[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29853[(4)]))){
var statearr_29870_31009 = state_29853;
(statearr_29870_31009[(1)] = cljs.core.first((state_29853[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31011 = state_29853;
state_29853 = G__31011;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29871 = f__27999__auto__();
(statearr_29871[(6)] = c__27998__auto___30992);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29873 = arguments.length;
switch (G__29873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_29935){
var state_val_29936 = (state_29935[(1)]);
if((state_val_29936 === (7))){
var inst_29931 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29937_31024 = state_29935__$1;
(statearr_29937_31024[(2)] = inst_29931);

(statearr_29937_31024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (20))){
var inst_29901 = (state_29935[(7)]);
var inst_29912 = (state_29935[(2)]);
var inst_29913 = cljs.core.next(inst_29901);
var inst_29887 = inst_29913;
var inst_29888 = null;
var inst_29889 = (0);
var inst_29890 = (0);
var state_29935__$1 = (function (){var statearr_29938 = state_29935;
(statearr_29938[(8)] = inst_29912);

(statearr_29938[(9)] = inst_29888);

(statearr_29938[(10)] = inst_29887);

(statearr_29938[(11)] = inst_29890);

(statearr_29938[(12)] = inst_29889);

return statearr_29938;
})();
var statearr_29939_31026 = state_29935__$1;
(statearr_29939_31026[(2)] = null);

(statearr_29939_31026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (1))){
var state_29935__$1 = state_29935;
var statearr_29940_31027 = state_29935__$1;
(statearr_29940_31027[(2)] = null);

(statearr_29940_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (4))){
var inst_29876 = (state_29935[(13)]);
var inst_29876__$1 = (state_29935[(2)]);
var inst_29877 = (inst_29876__$1 == null);
var state_29935__$1 = (function (){var statearr_29941 = state_29935;
(statearr_29941[(13)] = inst_29876__$1);

return statearr_29941;
})();
if(cljs.core.truth_(inst_29877)){
var statearr_29942_31028 = state_29935__$1;
(statearr_29942_31028[(1)] = (5));

} else {
var statearr_29943_31030 = state_29935__$1;
(statearr_29943_31030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (15))){
var state_29935__$1 = state_29935;
var statearr_29947_31031 = state_29935__$1;
(statearr_29947_31031[(2)] = null);

(statearr_29947_31031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (21))){
var state_29935__$1 = state_29935;
var statearr_29948_31033 = state_29935__$1;
(statearr_29948_31033[(2)] = null);

(statearr_29948_31033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (13))){
var inst_29888 = (state_29935[(9)]);
var inst_29887 = (state_29935[(10)]);
var inst_29890 = (state_29935[(11)]);
var inst_29889 = (state_29935[(12)]);
var inst_29897 = (state_29935[(2)]);
var inst_29898 = (inst_29890 + (1));
var tmp29944 = inst_29888;
var tmp29945 = inst_29887;
var tmp29946 = inst_29889;
var inst_29887__$1 = tmp29945;
var inst_29888__$1 = tmp29944;
var inst_29889__$1 = tmp29946;
var inst_29890__$1 = inst_29898;
var state_29935__$1 = (function (){var statearr_29949 = state_29935;
(statearr_29949[(9)] = inst_29888__$1);

(statearr_29949[(10)] = inst_29887__$1);

(statearr_29949[(14)] = inst_29897);

(statearr_29949[(11)] = inst_29890__$1);

(statearr_29949[(12)] = inst_29889__$1);

return statearr_29949;
})();
var statearr_29950_31034 = state_29935__$1;
(statearr_29950_31034[(2)] = null);

(statearr_29950_31034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (22))){
var state_29935__$1 = state_29935;
var statearr_29951_31035 = state_29935__$1;
(statearr_29951_31035[(2)] = null);

(statearr_29951_31035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (6))){
var inst_29876 = (state_29935[(13)]);
var inst_29885 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29876) : f.call(null,inst_29876));
var inst_29886 = cljs.core.seq(inst_29885);
var inst_29887 = inst_29886;
var inst_29888 = null;
var inst_29889 = (0);
var inst_29890 = (0);
var state_29935__$1 = (function (){var statearr_29952 = state_29935;
(statearr_29952[(9)] = inst_29888);

(statearr_29952[(10)] = inst_29887);

(statearr_29952[(11)] = inst_29890);

(statearr_29952[(12)] = inst_29889);

return statearr_29952;
})();
var statearr_29953_31037 = state_29935__$1;
(statearr_29953_31037[(2)] = null);

(statearr_29953_31037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (17))){
var inst_29901 = (state_29935[(7)]);
var inst_29905 = cljs.core.chunk_first(inst_29901);
var inst_29906 = cljs.core.chunk_rest(inst_29901);
var inst_29907 = cljs.core.count(inst_29905);
var inst_29887 = inst_29906;
var inst_29888 = inst_29905;
var inst_29889 = inst_29907;
var inst_29890 = (0);
var state_29935__$1 = (function (){var statearr_29954 = state_29935;
(statearr_29954[(9)] = inst_29888);

(statearr_29954[(10)] = inst_29887);

(statearr_29954[(11)] = inst_29890);

(statearr_29954[(12)] = inst_29889);

return statearr_29954;
})();
var statearr_29955_31039 = state_29935__$1;
(statearr_29955_31039[(2)] = null);

(statearr_29955_31039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (3))){
var inst_29933 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29935__$1,inst_29933);
} else {
if((state_val_29936 === (12))){
var inst_29921 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29956_31041 = state_29935__$1;
(statearr_29956_31041[(2)] = inst_29921);

(statearr_29956_31041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (2))){
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29935__$1,(4),in$);
} else {
if((state_val_29936 === (23))){
var inst_29929 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29957_31044 = state_29935__$1;
(statearr_29957_31044[(2)] = inst_29929);

(statearr_29957_31044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (19))){
var inst_29916 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29958_31045 = state_29935__$1;
(statearr_29958_31045[(2)] = inst_29916);

(statearr_29958_31045[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (11))){
var inst_29887 = (state_29935[(10)]);
var inst_29901 = (state_29935[(7)]);
var inst_29901__$1 = cljs.core.seq(inst_29887);
var state_29935__$1 = (function (){var statearr_29959 = state_29935;
(statearr_29959[(7)] = inst_29901__$1);

return statearr_29959;
})();
if(inst_29901__$1){
var statearr_29960_31046 = state_29935__$1;
(statearr_29960_31046[(1)] = (14));

} else {
var statearr_29961_31048 = state_29935__$1;
(statearr_29961_31048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (9))){
var inst_29923 = (state_29935[(2)]);
var inst_29924 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29935__$1 = (function (){var statearr_29962 = state_29935;
(statearr_29962[(15)] = inst_29923);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29924)){
var statearr_29963_31050 = state_29935__$1;
(statearr_29963_31050[(1)] = (21));

} else {
var statearr_29964_31051 = state_29935__$1;
(statearr_29964_31051[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (5))){
var inst_29879 = cljs.core.async.close_BANG_(out);
var state_29935__$1 = state_29935;
var statearr_29965_31052 = state_29935__$1;
(statearr_29965_31052[(2)] = inst_29879);

(statearr_29965_31052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (14))){
var inst_29901 = (state_29935[(7)]);
var inst_29903 = cljs.core.chunked_seq_QMARK_(inst_29901);
var state_29935__$1 = state_29935;
if(inst_29903){
var statearr_29966_31053 = state_29935__$1;
(statearr_29966_31053[(1)] = (17));

} else {
var statearr_29967_31054 = state_29935__$1;
(statearr_29967_31054[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (16))){
var inst_29919 = (state_29935[(2)]);
var state_29935__$1 = state_29935;
var statearr_29968_31055 = state_29935__$1;
(statearr_29968_31055[(2)] = inst_29919);

(statearr_29968_31055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29936 === (10))){
var inst_29888 = (state_29935[(9)]);
var inst_29890 = (state_29935[(11)]);
var inst_29895 = cljs.core._nth(inst_29888,inst_29890);
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29935__$1,(13),out,inst_29895);
} else {
if((state_val_29936 === (18))){
var inst_29901 = (state_29935[(7)]);
var inst_29910 = cljs.core.first(inst_29901);
var state_29935__$1 = state_29935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29935__$1,(20),out,inst_29910);
} else {
if((state_val_29936 === (8))){
var inst_29890 = (state_29935[(11)]);
var inst_29889 = (state_29935[(12)]);
var inst_29892 = (inst_29890 < inst_29889);
var inst_29893 = inst_29892;
var state_29935__$1 = state_29935;
if(cljs.core.truth_(inst_29893)){
var statearr_29971_31058 = state_29935__$1;
(statearr_29971_31058[(1)] = (10));

} else {
var statearr_29973_31059 = state_29935__$1;
(statearr_29973_31059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_29976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__);

(statearr_29976[(1)] = (1));

return statearr_29976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1 = (function (state_29935){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29935);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29977){var ex__27849__auto__ = e29977;
var statearr_29978_31060 = state_29935;
(statearr_29978_31060[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29935[(4)]))){
var statearr_29979_31061 = state_29935;
(statearr_29979_31061[(1)] = cljs.core.first((state_29935[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31062 = state_29935;
state_29935 = G__31062;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__ = function(state_29935){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1.call(this,state_29935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_29980 = f__27999__auto__();
(statearr_29980[(6)] = c__27998__auto__);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

return c__27998__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29983 = arguments.length;
switch (G__29983) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29989 = arguments.length;
switch (G__29989) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29996 = arguments.length;
switch (G__29996) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___31068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30020 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30028_31070 = state_30025__$1;
(statearr_30028_31070[(2)] = inst_30020);

(statearr_30028_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_30000 = null;
var state_30025__$1 = (function (){var statearr_30029 = state_30025;
(statearr_30029[(7)] = inst_30000);

return statearr_30029;
})();
var statearr_30030_31071 = state_30025__$1;
(statearr_30030_31071[(2)] = null);

(statearr_30030_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_30003 = (state_30025[(8)]);
var inst_30003__$1 = (state_30025[(2)]);
var inst_30004 = (inst_30003__$1 == null);
var inst_30005 = cljs.core.not(inst_30004);
var state_30025__$1 = (function (){var statearr_30031 = state_30025;
(statearr_30031[(8)] = inst_30003__$1);

return statearr_30031;
})();
if(inst_30005){
var statearr_30034_31072 = state_30025__$1;
(statearr_30034_31072[(1)] = (5));

} else {
var statearr_30037_31073 = state_30025__$1;
(statearr_30037_31073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var state_30025__$1 = state_30025;
var statearr_30039_31074 = state_30025__$1;
(statearr_30039_31074[(2)] = null);

(statearr_30039_31074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30022 = (state_30025[(2)]);
var inst_30023 = cljs.core.async.close_BANG_(out);
var state_30025__$1 = (function (){var statearr_30040 = state_30025;
(statearr_30040[(9)] = inst_30022);

return statearr_30040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30025__$1,(4),ch);
} else {
if((state_val_30026 === (11))){
var inst_30003 = (state_30025[(8)]);
var inst_30013 = (state_30025[(2)]);
var inst_30000 = inst_30003;
var state_30025__$1 = (function (){var statearr_30042 = state_30025;
(statearr_30042[(10)] = inst_30013);

(statearr_30042[(7)] = inst_30000);

return statearr_30042;
})();
var statearr_30044_31075 = state_30025__$1;
(statearr_30044_31075[(2)] = null);

(statearr_30044_31075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var inst_30003 = (state_30025[(8)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30025__$1,(11),out,inst_30003);
} else {
if((state_val_30026 === (5))){
var inst_30003 = (state_30025[(8)]);
var inst_30000 = (state_30025[(7)]);
var inst_30007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30003,inst_30000);
var state_30025__$1 = state_30025;
if(inst_30007){
var statearr_30048_31076 = state_30025__$1;
(statearr_30048_31076[(1)] = (8));

} else {
var statearr_30049_31077 = state_30025__$1;
(statearr_30049_31077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30017 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30051_31078 = state_30025__$1;
(statearr_30051_31078[(2)] = inst_30017);

(statearr_30051_31078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30000 = (state_30025[(7)]);
var tmp30046 = inst_30000;
var inst_30000__$1 = tmp30046;
var state_30025__$1 = (function (){var statearr_30053 = state_30025;
(statearr_30053[(7)] = inst_30000__$1);

return statearr_30053;
})();
var statearr_30054_31079 = state_30025__$1;
(statearr_30054_31079[(2)] = null);

(statearr_30054_31079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_30056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30056[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_30056[(1)] = (1));

return statearr_30056;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_30025){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_30025);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e30059){var ex__27849__auto__ = e30059;
var statearr_30060_31086 = state_30025;
(statearr_30060_31086[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_30025[(4)]))){
var statearr_30061_31087 = state_30025;
(statearr_30061_31087[(1)] = cljs.core.first((state_30025[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31088 = state_30025;
state_30025 = G__31088;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_30065 = f__27999__auto__();
(statearr_30065[(6)] = c__27998__auto___31068);

return statearr_30065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30071 = arguments.length;
switch (G__30071) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___31090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_30117){
var state_val_30118 = (state_30117[(1)]);
if((state_val_30118 === (7))){
var inst_30113 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30122_31095 = state_30117__$1;
(statearr_30122_31095[(2)] = inst_30113);

(statearr_30122_31095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (1))){
var inst_30076 = (new Array(n));
var inst_30077 = inst_30076;
var inst_30078 = (0);
var state_30117__$1 = (function (){var statearr_30123 = state_30117;
(statearr_30123[(7)] = inst_30078);

(statearr_30123[(8)] = inst_30077);

return statearr_30123;
})();
var statearr_30125_31099 = state_30117__$1;
(statearr_30125_31099[(2)] = null);

(statearr_30125_31099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (4))){
var inst_30081 = (state_30117[(9)]);
var inst_30081__$1 = (state_30117[(2)]);
var inst_30084 = (inst_30081__$1 == null);
var inst_30085 = cljs.core.not(inst_30084);
var state_30117__$1 = (function (){var statearr_30128 = state_30117;
(statearr_30128[(9)] = inst_30081__$1);

return statearr_30128;
})();
if(inst_30085){
var statearr_30129_31103 = state_30117__$1;
(statearr_30129_31103[(1)] = (5));

} else {
var statearr_30130_31104 = state_30117__$1;
(statearr_30130_31104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (15))){
var inst_30107 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30133_31105 = state_30117__$1;
(statearr_30133_31105[(2)] = inst_30107);

(statearr_30133_31105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (13))){
var state_30117__$1 = state_30117;
var statearr_30134_31106 = state_30117__$1;
(statearr_30134_31106[(2)] = null);

(statearr_30134_31106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (6))){
var inst_30078 = (state_30117[(7)]);
var inst_30103 = (inst_30078 > (0));
var state_30117__$1 = state_30117;
if(cljs.core.truth_(inst_30103)){
var statearr_30137_31107 = state_30117__$1;
(statearr_30137_31107[(1)] = (12));

} else {
var statearr_30139_31108 = state_30117__$1;
(statearr_30139_31108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (3))){
var inst_30115 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30117__$1,inst_30115);
} else {
if((state_val_30118 === (12))){
var inst_30077 = (state_30117[(8)]);
var inst_30105 = cljs.core.vec(inst_30077);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30117__$1,(15),out,inst_30105);
} else {
if((state_val_30118 === (2))){
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30117__$1,(4),ch);
} else {
if((state_val_30118 === (11))){
var inst_30097 = (state_30117[(2)]);
var inst_30098 = (new Array(n));
var inst_30077 = inst_30098;
var inst_30078 = (0);
var state_30117__$1 = (function (){var statearr_30141 = state_30117;
(statearr_30141[(7)] = inst_30078);

(statearr_30141[(10)] = inst_30097);

(statearr_30141[(8)] = inst_30077);

return statearr_30141;
})();
var statearr_30143_31109 = state_30117__$1;
(statearr_30143_31109[(2)] = null);

(statearr_30143_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (9))){
var inst_30077 = (state_30117[(8)]);
var inst_30095 = cljs.core.vec(inst_30077);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30117__$1,(11),out,inst_30095);
} else {
if((state_val_30118 === (5))){
var inst_30078 = (state_30117[(7)]);
var inst_30089 = (state_30117[(11)]);
var inst_30081 = (state_30117[(9)]);
var inst_30077 = (state_30117[(8)]);
var inst_30088 = (inst_30077[inst_30078] = inst_30081);
var inst_30089__$1 = (inst_30078 + (1));
var inst_30090 = (inst_30089__$1 < n);
var state_30117__$1 = (function (){var statearr_30147 = state_30117;
(statearr_30147[(11)] = inst_30089__$1);

(statearr_30147[(12)] = inst_30088);

return statearr_30147;
})();
if(cljs.core.truth_(inst_30090)){
var statearr_30148_31116 = state_30117__$1;
(statearr_30148_31116[(1)] = (8));

} else {
var statearr_30149_31117 = state_30117__$1;
(statearr_30149_31117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (14))){
var inst_30110 = (state_30117[(2)]);
var inst_30111 = cljs.core.async.close_BANG_(out);
var state_30117__$1 = (function (){var statearr_30151 = state_30117;
(statearr_30151[(13)] = inst_30110);

return statearr_30151;
})();
var statearr_30152_31118 = state_30117__$1;
(statearr_30152_31118[(2)] = inst_30111);

(statearr_30152_31118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (10))){
var inst_30101 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30154_31119 = state_30117__$1;
(statearr_30154_31119[(2)] = inst_30101);

(statearr_30154_31119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (8))){
var inst_30089 = (state_30117[(11)]);
var inst_30077 = (state_30117[(8)]);
var tmp30150 = inst_30077;
var inst_30077__$1 = tmp30150;
var inst_30078 = inst_30089;
var state_30117__$1 = (function (){var statearr_30156 = state_30117;
(statearr_30156[(7)] = inst_30078);

(statearr_30156[(8)] = inst_30077__$1);

return statearr_30156;
})();
var statearr_30157_31120 = state_30117__$1;
(statearr_30157_31120[(2)] = null);

(statearr_30157_31120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_30117){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_30117);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e30164){var ex__27849__auto__ = e30164;
var statearr_30165_31121 = state_30117;
(statearr_30165_31121[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_30117[(4)]))){
var statearr_30170_31122 = state_30117;
(statearr_30170_31122[(1)] = cljs.core.first((state_30117[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31123 = state_30117;
state_30117 = G__31123;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_30117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_30117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_30173 = f__27999__auto__();
(statearr_30173[(6)] = c__27998__auto___31090);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30179 = arguments.length;
switch (G__30179) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27998__auto___31125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_30224){
var state_val_30225 = (state_30224[(1)]);
if((state_val_30225 === (7))){
var inst_30220 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30231_31130 = state_30224__$1;
(statearr_30231_31130[(2)] = inst_30220);

(statearr_30231_31130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (1))){
var inst_30180 = [];
var inst_30181 = inst_30180;
var inst_30182 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30224__$1 = (function (){var statearr_30232 = state_30224;
(statearr_30232[(7)] = inst_30182);

(statearr_30232[(8)] = inst_30181);

return statearr_30232;
})();
var statearr_30233_31131 = state_30224__$1;
(statearr_30233_31131[(2)] = null);

(statearr_30233_31131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (4))){
var inst_30185 = (state_30224[(9)]);
var inst_30185__$1 = (state_30224[(2)]);
var inst_30186 = (inst_30185__$1 == null);
var inst_30187 = cljs.core.not(inst_30186);
var state_30224__$1 = (function (){var statearr_30235 = state_30224;
(statearr_30235[(9)] = inst_30185__$1);

return statearr_30235;
})();
if(inst_30187){
var statearr_30236_31132 = state_30224__$1;
(statearr_30236_31132[(1)] = (5));

} else {
var statearr_30239_31133 = state_30224__$1;
(statearr_30239_31133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (15))){
var inst_30181 = (state_30224[(8)]);
var inst_30212 = cljs.core.vec(inst_30181);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30224__$1,(18),out,inst_30212);
} else {
if((state_val_30225 === (13))){
var inst_30207 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30241_31134 = state_30224__$1;
(statearr_30241_31134[(2)] = inst_30207);

(statearr_30241_31134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (6))){
var inst_30181 = (state_30224[(8)]);
var inst_30209 = inst_30181.length;
var inst_30210 = (inst_30209 > (0));
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30210)){
var statearr_30242_31135 = state_30224__$1;
(statearr_30242_31135[(1)] = (15));

} else {
var statearr_30243_31136 = state_30224__$1;
(statearr_30243_31136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (17))){
var inst_30217 = (state_30224[(2)]);
var inst_30218 = cljs.core.async.close_BANG_(out);
var state_30224__$1 = (function (){var statearr_30244 = state_30224;
(statearr_30244[(10)] = inst_30217);

return statearr_30244;
})();
var statearr_30245_31137 = state_30224__$1;
(statearr_30245_31137[(2)] = inst_30218);

(statearr_30245_31137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (3))){
var inst_30222 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30224__$1,inst_30222);
} else {
if((state_val_30225 === (12))){
var inst_30181 = (state_30224[(8)]);
var inst_30200 = cljs.core.vec(inst_30181);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30224__$1,(14),out,inst_30200);
} else {
if((state_val_30225 === (2))){
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30224__$1,(4),ch);
} else {
if((state_val_30225 === (11))){
var inst_30189 = (state_30224[(11)]);
var inst_30181 = (state_30224[(8)]);
var inst_30185 = (state_30224[(9)]);
var inst_30197 = inst_30181.push(inst_30185);
var tmp30246 = inst_30181;
var inst_30181__$1 = tmp30246;
var inst_30182 = inst_30189;
var state_30224__$1 = (function (){var statearr_30249 = state_30224;
(statearr_30249[(12)] = inst_30197);

(statearr_30249[(7)] = inst_30182);

(statearr_30249[(8)] = inst_30181__$1);

return statearr_30249;
})();
var statearr_30250_31146 = state_30224__$1;
(statearr_30250_31146[(2)] = null);

(statearr_30250_31146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (9))){
var inst_30182 = (state_30224[(7)]);
var inst_30193 = cljs.core.keyword_identical_QMARK_(inst_30182,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30224__$1 = state_30224;
var statearr_30253_31151 = state_30224__$1;
(statearr_30253_31151[(2)] = inst_30193);

(statearr_30253_31151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (5))){
var inst_30190 = (state_30224[(13)]);
var inst_30189 = (state_30224[(11)]);
var inst_30182 = (state_30224[(7)]);
var inst_30185 = (state_30224[(9)]);
var inst_30189__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30185) : f.call(null,inst_30185));
var inst_30190__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30189__$1,inst_30182);
var state_30224__$1 = (function (){var statearr_30256 = state_30224;
(statearr_30256[(13)] = inst_30190__$1);

(statearr_30256[(11)] = inst_30189__$1);

return statearr_30256;
})();
if(inst_30190__$1){
var statearr_30257_31152 = state_30224__$1;
(statearr_30257_31152[(1)] = (8));

} else {
var statearr_30258_31153 = state_30224__$1;
(statearr_30258_31153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (14))){
var inst_30189 = (state_30224[(11)]);
var inst_30185 = (state_30224[(9)]);
var inst_30202 = (state_30224[(2)]);
var inst_30203 = [];
var inst_30204 = inst_30203.push(inst_30185);
var inst_30181 = inst_30203;
var inst_30182 = inst_30189;
var state_30224__$1 = (function (){var statearr_30259 = state_30224;
(statearr_30259[(14)] = inst_30204);

(statearr_30259[(15)] = inst_30202);

(statearr_30259[(7)] = inst_30182);

(statearr_30259[(8)] = inst_30181);

return statearr_30259;
})();
var statearr_30260_31157 = state_30224__$1;
(statearr_30260_31157[(2)] = null);

(statearr_30260_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (16))){
var state_30224__$1 = state_30224;
var statearr_30261_31158 = state_30224__$1;
(statearr_30261_31158[(2)] = null);

(statearr_30261_31158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (10))){
var inst_30195 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30195)){
var statearr_30263_31159 = state_30224__$1;
(statearr_30263_31159[(1)] = (11));

} else {
var statearr_30265_31163 = state_30224__$1;
(statearr_30265_31163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (18))){
var inst_30214 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30267_31164 = state_30224__$1;
(statearr_30267_31164[(2)] = inst_30214);

(statearr_30267_31164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (8))){
var inst_30190 = (state_30224[(13)]);
var state_30224__$1 = state_30224;
var statearr_30269_31169 = state_30224__$1;
(statearr_30269_31169[(2)] = inst_30190);

(statearr_30269_31169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_30224){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_30224);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e30271){var ex__27849__auto__ = e30271;
var statearr_30272_31170 = state_30224;
(statearr_30272_31170[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_30224[(4)]))){
var statearr_30273_31171 = state_30224;
(statearr_30273_31171[(1)] = cljs.core.first((state_30224[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_30224;
state_30224 = G__31175;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_30224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_30224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_30275 = f__27999__auto__();
(statearr_30275[(6)] = c__27998__auto___31125);

return statearr_30275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
