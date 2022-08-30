goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_31650 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_31650(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_31651 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_31651(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30983 = coll;
var G__30984 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30983,G__30984) : shadow.dom.lazy_native_coll_seq.call(null,G__30983,G__30984));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30991 = arguments.length;
switch (G__30991) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31000 = arguments.length;
switch (G__31000) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31010 = arguments.length;
switch (G__31010) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31025 = arguments.length;
switch (G__31025) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31042 = arguments.length;
switch (G__31042) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31057 = arguments.length;
switch (G__31057) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31066){if((e31066 instanceof Object)){
var e = e31066;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31066;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31080 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31081 = null;
var count__31082 = (0);
var i__31083 = (0);
while(true){
if((i__31083 < count__31082)){
var el = chunk__31081.cljs$core$IIndexed$_nth$arity$2(null,i__31083);
var handler_31658__$1 = ((function (seq__31080,chunk__31081,count__31082,i__31083,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31080,chunk__31081,count__31082,i__31083,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31658__$1);


var G__31659 = seq__31080;
var G__31660 = chunk__31081;
var G__31661 = count__31082;
var G__31662 = (i__31083 + (1));
seq__31080 = G__31659;
chunk__31081 = G__31660;
count__31082 = G__31661;
i__31083 = G__31662;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31080);
if(temp__5804__auto__){
var seq__31080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31080__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31080__$1);
var G__31663 = cljs.core.chunk_rest(seq__31080__$1);
var G__31664 = c__5565__auto__;
var G__31665 = cljs.core.count(c__5565__auto__);
var G__31666 = (0);
seq__31080 = G__31663;
chunk__31081 = G__31664;
count__31082 = G__31665;
i__31083 = G__31666;
continue;
} else {
var el = cljs.core.first(seq__31080__$1);
var handler_31667__$1 = ((function (seq__31080,chunk__31081,count__31082,i__31083,el,seq__31080__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31080,chunk__31081,count__31082,i__31083,el,seq__31080__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31667__$1);


var G__31668 = cljs.core.next(seq__31080__$1);
var G__31669 = null;
var G__31670 = (0);
var G__31671 = (0);
seq__31080 = G__31668;
chunk__31081 = G__31669;
count__31082 = G__31670;
i__31083 = G__31671;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31115 = arguments.length;
switch (G__31115) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31139 = cljs.core.seq(events);
var chunk__31140 = null;
var count__31141 = (0);
var i__31142 = (0);
while(true){
if((i__31142 < count__31141)){
var vec__31160 = chunk__31140.cljs$core$IIndexed$_nth$arity$2(null,i__31142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31673 = seq__31139;
var G__31674 = chunk__31140;
var G__31675 = count__31141;
var G__31676 = (i__31142 + (1));
seq__31139 = G__31673;
chunk__31140 = G__31674;
count__31141 = G__31675;
i__31142 = G__31676;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31139);
if(temp__5804__auto__){
var seq__31139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31139__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31139__$1);
var G__31677 = cljs.core.chunk_rest(seq__31139__$1);
var G__31678 = c__5565__auto__;
var G__31679 = cljs.core.count(c__5565__auto__);
var G__31680 = (0);
seq__31139 = G__31677;
chunk__31140 = G__31678;
count__31141 = G__31679;
i__31142 = G__31680;
continue;
} else {
var vec__31172 = cljs.core.first(seq__31139__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31172,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31681 = cljs.core.next(seq__31139__$1);
var G__31682 = null;
var G__31683 = (0);
var G__31684 = (0);
seq__31139 = G__31681;
chunk__31140 = G__31682;
count__31141 = G__31683;
i__31142 = G__31684;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__31176 = cljs.core.seq(styles);
var chunk__31177 = null;
var count__31178 = (0);
var i__31179 = (0);
while(true){
if((i__31179 < count__31178)){
var vec__31186 = chunk__31177.cljs$core$IIndexed$_nth$arity$2(null,i__31179);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31685 = seq__31176;
var G__31686 = chunk__31177;
var G__31687 = count__31178;
var G__31688 = (i__31179 + (1));
seq__31176 = G__31685;
chunk__31177 = G__31686;
count__31178 = G__31687;
i__31179 = G__31688;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31176);
if(temp__5804__auto__){
var seq__31176__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31176__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31176__$1);
var G__31689 = cljs.core.chunk_rest(seq__31176__$1);
var G__31690 = c__5565__auto__;
var G__31691 = cljs.core.count(c__5565__auto__);
var G__31692 = (0);
seq__31176 = G__31689;
chunk__31177 = G__31690;
count__31178 = G__31691;
i__31179 = G__31692;
continue;
} else {
var vec__31191 = cljs.core.first(seq__31176__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31191,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31693 = cljs.core.next(seq__31176__$1);
var G__31694 = null;
var G__31695 = (0);
var G__31696 = (0);
seq__31176 = G__31693;
chunk__31177 = G__31694;
count__31178 = G__31695;
i__31179 = G__31696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__31197_31697 = key;
var G__31197_31698__$1 = (((G__31197_31697 instanceof cljs.core.Keyword))?G__31197_31697.fqn:null);
switch (G__31197_31698__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_31701 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_31701,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_31701,"aria-");
}
})())){
el.setAttribute(ks_31701,value);
} else {
(el[ks_31701] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31213){
var map__31214 = p__31213;
var map__31214__$1 = cljs.core.__destructure_map(map__31214);
var props = map__31214__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31214__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31216 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31220 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31220,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31220;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31227 = arguments.length;
switch (G__31227) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31236){
var vec__31238 = p__31236;
var seq__31239 = cljs.core.seq(vec__31238);
var first__31240 = cljs.core.first(seq__31239);
var seq__31239__$1 = cljs.core.next(seq__31239);
var nn = first__31240;
var first__31240__$1 = cljs.core.first(seq__31239__$1);
var seq__31239__$2 = cljs.core.next(seq__31239__$1);
var np = first__31240__$1;
var nc = seq__31239__$2;
var node = vec__31238;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31243 = nn;
var G__31244 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31243,G__31244) : create_fn.call(null,G__31243,G__31244));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31245 = nn;
var G__31246 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31245,G__31246) : create_fn.call(null,G__31245,G__31246));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31254 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(1),null);
var seq__31257_31704 = cljs.core.seq(node_children);
var chunk__31258_31705 = null;
var count__31259_31706 = (0);
var i__31260_31707 = (0);
while(true){
if((i__31260_31707 < count__31259_31706)){
var child_struct_31709 = chunk__31258_31705.cljs$core$IIndexed$_nth$arity$2(null,i__31260_31707);
var children_31710 = shadow.dom.dom_node(child_struct_31709);
if(cljs.core.seq_QMARK_(children_31710)){
var seq__31320_31711 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31710));
var chunk__31322_31712 = null;
var count__31323_31713 = (0);
var i__31324_31714 = (0);
while(true){
if((i__31324_31714 < count__31323_31713)){
var child_31715 = chunk__31322_31712.cljs$core$IIndexed$_nth$arity$2(null,i__31324_31714);
if(cljs.core.truth_(child_31715)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31715);


var G__31716 = seq__31320_31711;
var G__31717 = chunk__31322_31712;
var G__31718 = count__31323_31713;
var G__31719 = (i__31324_31714 + (1));
seq__31320_31711 = G__31716;
chunk__31322_31712 = G__31717;
count__31323_31713 = G__31718;
i__31324_31714 = G__31719;
continue;
} else {
var G__31720 = seq__31320_31711;
var G__31721 = chunk__31322_31712;
var G__31722 = count__31323_31713;
var G__31723 = (i__31324_31714 + (1));
seq__31320_31711 = G__31720;
chunk__31322_31712 = G__31721;
count__31323_31713 = G__31722;
i__31324_31714 = G__31723;
continue;
}
} else {
var temp__5804__auto___31724 = cljs.core.seq(seq__31320_31711);
if(temp__5804__auto___31724){
var seq__31320_31725__$1 = temp__5804__auto___31724;
if(cljs.core.chunked_seq_QMARK_(seq__31320_31725__$1)){
var c__5565__auto___31726 = cljs.core.chunk_first(seq__31320_31725__$1);
var G__31727 = cljs.core.chunk_rest(seq__31320_31725__$1);
var G__31728 = c__5565__auto___31726;
var G__31729 = cljs.core.count(c__5565__auto___31726);
var G__31730 = (0);
seq__31320_31711 = G__31727;
chunk__31322_31712 = G__31728;
count__31323_31713 = G__31729;
i__31324_31714 = G__31730;
continue;
} else {
var child_31731 = cljs.core.first(seq__31320_31725__$1);
if(cljs.core.truth_(child_31731)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31731);


var G__31732 = cljs.core.next(seq__31320_31725__$1);
var G__31733 = null;
var G__31734 = (0);
var G__31735 = (0);
seq__31320_31711 = G__31732;
chunk__31322_31712 = G__31733;
count__31323_31713 = G__31734;
i__31324_31714 = G__31735;
continue;
} else {
var G__31736 = cljs.core.next(seq__31320_31725__$1);
var G__31737 = null;
var G__31738 = (0);
var G__31739 = (0);
seq__31320_31711 = G__31736;
chunk__31322_31712 = G__31737;
count__31323_31713 = G__31738;
i__31324_31714 = G__31739;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31710);
}


var G__31740 = seq__31257_31704;
var G__31741 = chunk__31258_31705;
var G__31742 = count__31259_31706;
var G__31743 = (i__31260_31707 + (1));
seq__31257_31704 = G__31740;
chunk__31258_31705 = G__31741;
count__31259_31706 = G__31742;
i__31260_31707 = G__31743;
continue;
} else {
var temp__5804__auto___31744 = cljs.core.seq(seq__31257_31704);
if(temp__5804__auto___31744){
var seq__31257_31745__$1 = temp__5804__auto___31744;
if(cljs.core.chunked_seq_QMARK_(seq__31257_31745__$1)){
var c__5565__auto___31747 = cljs.core.chunk_first(seq__31257_31745__$1);
var G__31748 = cljs.core.chunk_rest(seq__31257_31745__$1);
var G__31749 = c__5565__auto___31747;
var G__31750 = cljs.core.count(c__5565__auto___31747);
var G__31751 = (0);
seq__31257_31704 = G__31748;
chunk__31258_31705 = G__31749;
count__31259_31706 = G__31750;
i__31260_31707 = G__31751;
continue;
} else {
var child_struct_31752 = cljs.core.first(seq__31257_31745__$1);
var children_31753 = shadow.dom.dom_node(child_struct_31752);
if(cljs.core.seq_QMARK_(children_31753)){
var seq__31338_31754 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31753));
var chunk__31340_31755 = null;
var count__31341_31756 = (0);
var i__31342_31757 = (0);
while(true){
if((i__31342_31757 < count__31341_31756)){
var child_31758 = chunk__31340_31755.cljs$core$IIndexed$_nth$arity$2(null,i__31342_31757);
if(cljs.core.truth_(child_31758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31758);


var G__31759 = seq__31338_31754;
var G__31760 = chunk__31340_31755;
var G__31761 = count__31341_31756;
var G__31762 = (i__31342_31757 + (1));
seq__31338_31754 = G__31759;
chunk__31340_31755 = G__31760;
count__31341_31756 = G__31761;
i__31342_31757 = G__31762;
continue;
} else {
var G__31763 = seq__31338_31754;
var G__31764 = chunk__31340_31755;
var G__31765 = count__31341_31756;
var G__31766 = (i__31342_31757 + (1));
seq__31338_31754 = G__31763;
chunk__31340_31755 = G__31764;
count__31341_31756 = G__31765;
i__31342_31757 = G__31766;
continue;
}
} else {
var temp__5804__auto___31768__$1 = cljs.core.seq(seq__31338_31754);
if(temp__5804__auto___31768__$1){
var seq__31338_31769__$1 = temp__5804__auto___31768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31338_31769__$1)){
var c__5565__auto___31770 = cljs.core.chunk_first(seq__31338_31769__$1);
var G__31771 = cljs.core.chunk_rest(seq__31338_31769__$1);
var G__31772 = c__5565__auto___31770;
var G__31773 = cljs.core.count(c__5565__auto___31770);
var G__31774 = (0);
seq__31338_31754 = G__31771;
chunk__31340_31755 = G__31772;
count__31341_31756 = G__31773;
i__31342_31757 = G__31774;
continue;
} else {
var child_31775 = cljs.core.first(seq__31338_31769__$1);
if(cljs.core.truth_(child_31775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31775);


var G__31776 = cljs.core.next(seq__31338_31769__$1);
var G__31777 = null;
var G__31778 = (0);
var G__31779 = (0);
seq__31338_31754 = G__31776;
chunk__31340_31755 = G__31777;
count__31341_31756 = G__31778;
i__31342_31757 = G__31779;
continue;
} else {
var G__31780 = cljs.core.next(seq__31338_31769__$1);
var G__31781 = null;
var G__31782 = (0);
var G__31783 = (0);
seq__31338_31754 = G__31780;
chunk__31340_31755 = G__31781;
count__31341_31756 = G__31782;
i__31342_31757 = G__31783;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31753);
}


var G__31784 = cljs.core.next(seq__31257_31745__$1);
var G__31785 = null;
var G__31786 = (0);
var G__31787 = (0);
seq__31257_31704 = G__31784;
chunk__31258_31705 = G__31785;
count__31259_31706 = G__31786;
i__31260_31707 = G__31787;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__31431 = cljs.core.seq(node);
var chunk__31432 = null;
var count__31433 = (0);
var i__31434 = (0);
while(true){
if((i__31434 < count__31433)){
var n = chunk__31432.cljs$core$IIndexed$_nth$arity$2(null,i__31434);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31788 = seq__31431;
var G__31789 = chunk__31432;
var G__31790 = count__31433;
var G__31791 = (i__31434 + (1));
seq__31431 = G__31788;
chunk__31432 = G__31789;
count__31433 = G__31790;
i__31434 = G__31791;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31431);
if(temp__5804__auto__){
var seq__31431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31431__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31431__$1);
var G__31792 = cljs.core.chunk_rest(seq__31431__$1);
var G__31793 = c__5565__auto__;
var G__31794 = cljs.core.count(c__5565__auto__);
var G__31795 = (0);
seq__31431 = G__31792;
chunk__31432 = G__31793;
count__31433 = G__31794;
i__31434 = G__31795;
continue;
} else {
var n = cljs.core.first(seq__31431__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31796 = cljs.core.next(seq__31431__$1);
var G__31797 = null;
var G__31798 = (0);
var G__31799 = (0);
seq__31431 = G__31796;
chunk__31432 = G__31797;
count__31433 = G__31798;
i__31434 = G__31799;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__31446 = arguments.length;
switch (G__31446) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__31452 = arguments.length;
switch (G__31452) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31463 = arguments.length;
switch (G__31463) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31806 = arguments.length;
var i__5767__auto___31807 = (0);
while(true){
if((i__5767__auto___31807 < len__5766__auto___31806)){
args__5772__auto__.push((arguments[i__5767__auto___31807]));

var G__31808 = (i__5767__auto___31807 + (1));
i__5767__auto___31807 = G__31808;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31477_31809 = cljs.core.seq(nodes);
var chunk__31478_31810 = null;
var count__31479_31811 = (0);
var i__31480_31812 = (0);
while(true){
if((i__31480_31812 < count__31479_31811)){
var node_31813 = chunk__31478_31810.cljs$core$IIndexed$_nth$arity$2(null,i__31480_31812);
fragment.appendChild(shadow.dom._to_dom(node_31813));


var G__31815 = seq__31477_31809;
var G__31816 = chunk__31478_31810;
var G__31817 = count__31479_31811;
var G__31818 = (i__31480_31812 + (1));
seq__31477_31809 = G__31815;
chunk__31478_31810 = G__31816;
count__31479_31811 = G__31817;
i__31480_31812 = G__31818;
continue;
} else {
var temp__5804__auto___31819 = cljs.core.seq(seq__31477_31809);
if(temp__5804__auto___31819){
var seq__31477_31820__$1 = temp__5804__auto___31819;
if(cljs.core.chunked_seq_QMARK_(seq__31477_31820__$1)){
var c__5565__auto___31821 = cljs.core.chunk_first(seq__31477_31820__$1);
var G__31822 = cljs.core.chunk_rest(seq__31477_31820__$1);
var G__31823 = c__5565__auto___31821;
var G__31824 = cljs.core.count(c__5565__auto___31821);
var G__31825 = (0);
seq__31477_31809 = G__31822;
chunk__31478_31810 = G__31823;
count__31479_31811 = G__31824;
i__31480_31812 = G__31825;
continue;
} else {
var node_31826 = cljs.core.first(seq__31477_31820__$1);
fragment.appendChild(shadow.dom._to_dom(node_31826));


var G__31827 = cljs.core.next(seq__31477_31820__$1);
var G__31828 = null;
var G__31829 = (0);
var G__31830 = (0);
seq__31477_31809 = G__31827;
chunk__31478_31810 = G__31828;
count__31479_31811 = G__31829;
i__31480_31812 = G__31830;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31471){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31471));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31515_31831 = cljs.core.seq(scripts);
var chunk__31516_31832 = null;
var count__31517_31833 = (0);
var i__31518_31834 = (0);
while(true){
if((i__31518_31834 < count__31517_31833)){
var vec__31525_31835 = chunk__31516_31832.cljs$core$IIndexed$_nth$arity$2(null,i__31518_31834);
var script_tag_31836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31525_31835,(0),null);
var script_body_31837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31525_31835,(1),null);
eval(script_body_31837);


var G__31838 = seq__31515_31831;
var G__31839 = chunk__31516_31832;
var G__31840 = count__31517_31833;
var G__31841 = (i__31518_31834 + (1));
seq__31515_31831 = G__31838;
chunk__31516_31832 = G__31839;
count__31517_31833 = G__31840;
i__31518_31834 = G__31841;
continue;
} else {
var temp__5804__auto___31842 = cljs.core.seq(seq__31515_31831);
if(temp__5804__auto___31842){
var seq__31515_31844__$1 = temp__5804__auto___31842;
if(cljs.core.chunked_seq_QMARK_(seq__31515_31844__$1)){
var c__5565__auto___31846 = cljs.core.chunk_first(seq__31515_31844__$1);
var G__31847 = cljs.core.chunk_rest(seq__31515_31844__$1);
var G__31848 = c__5565__auto___31846;
var G__31849 = cljs.core.count(c__5565__auto___31846);
var G__31850 = (0);
seq__31515_31831 = G__31847;
chunk__31516_31832 = G__31848;
count__31517_31833 = G__31849;
i__31518_31834 = G__31850;
continue;
} else {
var vec__31528_31851 = cljs.core.first(seq__31515_31844__$1);
var script_tag_31852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31528_31851,(0),null);
var script_body_31853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31528_31851,(1),null);
eval(script_body_31853);


var G__31854 = cljs.core.next(seq__31515_31844__$1);
var G__31855 = null;
var G__31856 = (0);
var G__31857 = (0);
seq__31515_31831 = G__31854;
chunk__31516_31832 = G__31855;
count__31517_31833 = G__31856;
i__31518_31834 = G__31857;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31531){
var vec__31532 = p__31531;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31532,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31532,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31536 = arguments.length;
switch (G__31536) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31537 = cljs.core.seq(style_keys);
var chunk__31538 = null;
var count__31539 = (0);
var i__31540 = (0);
while(true){
if((i__31540 < count__31539)){
var it = chunk__31538.cljs$core$IIndexed$_nth$arity$2(null,i__31540);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31862 = seq__31537;
var G__31863 = chunk__31538;
var G__31864 = count__31539;
var G__31865 = (i__31540 + (1));
seq__31537 = G__31862;
chunk__31538 = G__31863;
count__31539 = G__31864;
i__31540 = G__31865;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31537);
if(temp__5804__auto__){
var seq__31537__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31537__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31537__$1);
var G__31866 = cljs.core.chunk_rest(seq__31537__$1);
var G__31867 = c__5565__auto__;
var G__31868 = cljs.core.count(c__5565__auto__);
var G__31869 = (0);
seq__31537 = G__31866;
chunk__31538 = G__31867;
count__31539 = G__31868;
i__31540 = G__31869;
continue;
} else {
var it = cljs.core.first(seq__31537__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31870 = cljs.core.next(seq__31537__$1);
var G__31871 = null;
var G__31872 = (0);
var G__31873 = (0);
seq__31537 = G__31870;
chunk__31538 = G__31871;
count__31539 = G__31872;
i__31540 = G__31873;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k31542,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__31546 = k31542;
var G__31546__$1 = (((G__31546 instanceof cljs.core.Keyword))?G__31546.fqn:null);
switch (G__31546__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31542,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__31547){
var vec__31548 = p__31547;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31548,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31548,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31541){
var self__ = this;
var G__31541__$1 = this;
return (new cljs.core.RecordIter((0),G__31541__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31543,other31544){
var self__ = this;
var this31543__$1 = this;
return (((!((other31544 == null)))) && ((((this31543__$1.constructor === other31544.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31543__$1.x,other31544.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31543__$1.y,other31544.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31543__$1.__extmap,other31544.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k31542){
var self__ = this;
var this__5347__auto____$1 = this;
var G__31551 = k31542;
var G__31551__$1 = (((G__31551 instanceof cljs.core.Keyword))?G__31551.fqn:null);
switch (G__31551__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31542);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__31541){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__31552 = cljs.core.keyword_identical_QMARK_;
var expr__31553 = k__5349__auto__;
if(cljs.core.truth_((pred__31552.cljs$core$IFn$_invoke$arity$2 ? pred__31552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31553) : pred__31552.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31553)))){
return (new shadow.dom.Coordinate(G__31541,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31552.cljs$core$IFn$_invoke$arity$2 ? pred__31552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31553) : pred__31552.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31553)))){
return (new shadow.dom.Coordinate(self__.x,G__31541,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__31541),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__31541){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31541,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31545){
var extmap__5382__auto__ = (function (){var G__31555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31545,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31555);
} else {
return G__31555;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31545),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31545),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k31557,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__31561 = k31557;
var G__31561__$1 = (((G__31561 instanceof cljs.core.Keyword))?G__31561.fqn:null);
switch (G__31561__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31557,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__31562){
var vec__31563 = p__31562;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31563,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31563,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31556){
var self__ = this;
var G__31556__$1 = this;
return (new cljs.core.RecordIter((0),G__31556__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31558,other31559){
var self__ = this;
var this31558__$1 = this;
return (((!((other31559 == null)))) && ((((this31558__$1.constructor === other31559.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31558__$1.w,other31559.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31558__$1.h,other31559.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31558__$1.__extmap,other31559.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k31557){
var self__ = this;
var this__5347__auto____$1 = this;
var G__31566 = k31557;
var G__31566__$1 = (((G__31566 instanceof cljs.core.Keyword))?G__31566.fqn:null);
switch (G__31566__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31557);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__31556){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__31567 = cljs.core.keyword_identical_QMARK_;
var expr__31568 = k__5349__auto__;
if(cljs.core.truth_((pred__31567.cljs$core$IFn$_invoke$arity$2 ? pred__31567.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31568) : pred__31567.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__31568)))){
return (new shadow.dom.Size(G__31556,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31567.cljs$core$IFn$_invoke$arity$2 ? pred__31567.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31568) : pred__31567.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__31568)))){
return (new shadow.dom.Size(self__.w,G__31556,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__31556),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__31556){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31556,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31560){
var extmap__5382__auto__ = (function (){var G__31570 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31560,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31560)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31570);
} else {
return G__31570;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31560),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31560),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__31892 = (i + (1));
var G__31893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31892;
ret = G__31893;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31575){
var vec__31576 = p__31575;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31576,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31580 = arguments.length;
switch (G__31580) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31895 = ps;
var G__31896 = (i + (1));
el__$1 = G__31895;
i = G__31896;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31581 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31581,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31581,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31581,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31584_31900 = cljs.core.seq(props);
var chunk__31585_31901 = null;
var count__31586_31902 = (0);
var i__31587_31903 = (0);
while(true){
if((i__31587_31903 < count__31586_31902)){
var vec__31594_31904 = chunk__31585_31901.cljs$core$IIndexed$_nth$arity$2(null,i__31587_31903);
var k_31905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31594_31904,(0),null);
var v_31906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31594_31904,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_31905);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31905),v_31906);


var G__31907 = seq__31584_31900;
var G__31908 = chunk__31585_31901;
var G__31909 = count__31586_31902;
var G__31910 = (i__31587_31903 + (1));
seq__31584_31900 = G__31907;
chunk__31585_31901 = G__31908;
count__31586_31902 = G__31909;
i__31587_31903 = G__31910;
continue;
} else {
var temp__5804__auto___31911 = cljs.core.seq(seq__31584_31900);
if(temp__5804__auto___31911){
var seq__31584_31912__$1 = temp__5804__auto___31911;
if(cljs.core.chunked_seq_QMARK_(seq__31584_31912__$1)){
var c__5565__auto___31913 = cljs.core.chunk_first(seq__31584_31912__$1);
var G__31914 = cljs.core.chunk_rest(seq__31584_31912__$1);
var G__31915 = c__5565__auto___31913;
var G__31916 = cljs.core.count(c__5565__auto___31913);
var G__31917 = (0);
seq__31584_31900 = G__31914;
chunk__31585_31901 = G__31915;
count__31586_31902 = G__31916;
i__31587_31903 = G__31917;
continue;
} else {
var vec__31597_31918 = cljs.core.first(seq__31584_31912__$1);
var k_31919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31597_31918,(0),null);
var v_31920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31597_31918,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_31919);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31919),v_31920);


var G__31921 = cljs.core.next(seq__31584_31912__$1);
var G__31922 = null;
var G__31923 = (0);
var G__31924 = (0);
seq__31584_31900 = G__31921;
chunk__31585_31901 = G__31922;
count__31586_31902 = G__31923;
i__31587_31903 = G__31924;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31601 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31601,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31601,(1),null);
var seq__31604_31928 = cljs.core.seq(node_children);
var chunk__31606_31929 = null;
var count__31607_31930 = (0);
var i__31608_31931 = (0);
while(true){
if((i__31608_31931 < count__31607_31930)){
var child_struct_31932 = chunk__31606_31929.cljs$core$IIndexed$_nth$arity$2(null,i__31608_31931);
if((!((child_struct_31932 == null)))){
if(typeof child_struct_31932 === 'string'){
var text_31933 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31933),child_struct_31932].join(''));
} else {
var children_31934 = shadow.dom.svg_node(child_struct_31932);
if(cljs.core.seq_QMARK_(children_31934)){
var seq__31622_31935 = cljs.core.seq(children_31934);
var chunk__31624_31936 = null;
var count__31625_31937 = (0);
var i__31626_31938 = (0);
while(true){
if((i__31626_31938 < count__31625_31937)){
var child_31939 = chunk__31624_31936.cljs$core$IIndexed$_nth$arity$2(null,i__31626_31938);
if(cljs.core.truth_(child_31939)){
node.appendChild(child_31939);


var G__31940 = seq__31622_31935;
var G__31941 = chunk__31624_31936;
var G__31942 = count__31625_31937;
var G__31943 = (i__31626_31938 + (1));
seq__31622_31935 = G__31940;
chunk__31624_31936 = G__31941;
count__31625_31937 = G__31942;
i__31626_31938 = G__31943;
continue;
} else {
var G__31944 = seq__31622_31935;
var G__31945 = chunk__31624_31936;
var G__31946 = count__31625_31937;
var G__31947 = (i__31626_31938 + (1));
seq__31622_31935 = G__31944;
chunk__31624_31936 = G__31945;
count__31625_31937 = G__31946;
i__31626_31938 = G__31947;
continue;
}
} else {
var temp__5804__auto___31948 = cljs.core.seq(seq__31622_31935);
if(temp__5804__auto___31948){
var seq__31622_31949__$1 = temp__5804__auto___31948;
if(cljs.core.chunked_seq_QMARK_(seq__31622_31949__$1)){
var c__5565__auto___31950 = cljs.core.chunk_first(seq__31622_31949__$1);
var G__31951 = cljs.core.chunk_rest(seq__31622_31949__$1);
var G__31952 = c__5565__auto___31950;
var G__31953 = cljs.core.count(c__5565__auto___31950);
var G__31954 = (0);
seq__31622_31935 = G__31951;
chunk__31624_31936 = G__31952;
count__31625_31937 = G__31953;
i__31626_31938 = G__31954;
continue;
} else {
var child_31955 = cljs.core.first(seq__31622_31949__$1);
if(cljs.core.truth_(child_31955)){
node.appendChild(child_31955);


var G__31956 = cljs.core.next(seq__31622_31949__$1);
var G__31957 = null;
var G__31958 = (0);
var G__31959 = (0);
seq__31622_31935 = G__31956;
chunk__31624_31936 = G__31957;
count__31625_31937 = G__31958;
i__31626_31938 = G__31959;
continue;
} else {
var G__31960 = cljs.core.next(seq__31622_31949__$1);
var G__31961 = null;
var G__31962 = (0);
var G__31963 = (0);
seq__31622_31935 = G__31960;
chunk__31624_31936 = G__31961;
count__31625_31937 = G__31962;
i__31626_31938 = G__31963;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31934);
}
}


var G__31964 = seq__31604_31928;
var G__31965 = chunk__31606_31929;
var G__31966 = count__31607_31930;
var G__31967 = (i__31608_31931 + (1));
seq__31604_31928 = G__31964;
chunk__31606_31929 = G__31965;
count__31607_31930 = G__31966;
i__31608_31931 = G__31967;
continue;
} else {
var G__31968 = seq__31604_31928;
var G__31969 = chunk__31606_31929;
var G__31970 = count__31607_31930;
var G__31971 = (i__31608_31931 + (1));
seq__31604_31928 = G__31968;
chunk__31606_31929 = G__31969;
count__31607_31930 = G__31970;
i__31608_31931 = G__31971;
continue;
}
} else {
var temp__5804__auto___31972 = cljs.core.seq(seq__31604_31928);
if(temp__5804__auto___31972){
var seq__31604_31973__$1 = temp__5804__auto___31972;
if(cljs.core.chunked_seq_QMARK_(seq__31604_31973__$1)){
var c__5565__auto___31974 = cljs.core.chunk_first(seq__31604_31973__$1);
var G__31975 = cljs.core.chunk_rest(seq__31604_31973__$1);
var G__31976 = c__5565__auto___31974;
var G__31977 = cljs.core.count(c__5565__auto___31974);
var G__31978 = (0);
seq__31604_31928 = G__31975;
chunk__31606_31929 = G__31976;
count__31607_31930 = G__31977;
i__31608_31931 = G__31978;
continue;
} else {
var child_struct_31979 = cljs.core.first(seq__31604_31973__$1);
if((!((child_struct_31979 == null)))){
if(typeof child_struct_31979 === 'string'){
var text_31980 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31980),child_struct_31979].join(''));
} else {
var children_31981 = shadow.dom.svg_node(child_struct_31979);
if(cljs.core.seq_QMARK_(children_31981)){
var seq__31628_31982 = cljs.core.seq(children_31981);
var chunk__31630_31983 = null;
var count__31631_31984 = (0);
var i__31632_31985 = (0);
while(true){
if((i__31632_31985 < count__31631_31984)){
var child_31986 = chunk__31630_31983.cljs$core$IIndexed$_nth$arity$2(null,i__31632_31985);
if(cljs.core.truth_(child_31986)){
node.appendChild(child_31986);


var G__31987 = seq__31628_31982;
var G__31988 = chunk__31630_31983;
var G__31989 = count__31631_31984;
var G__31990 = (i__31632_31985 + (1));
seq__31628_31982 = G__31987;
chunk__31630_31983 = G__31988;
count__31631_31984 = G__31989;
i__31632_31985 = G__31990;
continue;
} else {
var G__31991 = seq__31628_31982;
var G__31992 = chunk__31630_31983;
var G__31993 = count__31631_31984;
var G__31994 = (i__31632_31985 + (1));
seq__31628_31982 = G__31991;
chunk__31630_31983 = G__31992;
count__31631_31984 = G__31993;
i__31632_31985 = G__31994;
continue;
}
} else {
var temp__5804__auto___31995__$1 = cljs.core.seq(seq__31628_31982);
if(temp__5804__auto___31995__$1){
var seq__31628_31996__$1 = temp__5804__auto___31995__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31628_31996__$1)){
var c__5565__auto___31997 = cljs.core.chunk_first(seq__31628_31996__$1);
var G__31998 = cljs.core.chunk_rest(seq__31628_31996__$1);
var G__31999 = c__5565__auto___31997;
var G__32000 = cljs.core.count(c__5565__auto___31997);
var G__32001 = (0);
seq__31628_31982 = G__31998;
chunk__31630_31983 = G__31999;
count__31631_31984 = G__32000;
i__31632_31985 = G__32001;
continue;
} else {
var child_32002 = cljs.core.first(seq__31628_31996__$1);
if(cljs.core.truth_(child_32002)){
node.appendChild(child_32002);


var G__32003 = cljs.core.next(seq__31628_31996__$1);
var G__32004 = null;
var G__32005 = (0);
var G__32006 = (0);
seq__31628_31982 = G__32003;
chunk__31630_31983 = G__32004;
count__31631_31984 = G__32005;
i__31632_31985 = G__32006;
continue;
} else {
var G__32007 = cljs.core.next(seq__31628_31996__$1);
var G__32008 = null;
var G__32009 = (0);
var G__32010 = (0);
seq__31628_31982 = G__32007;
chunk__31630_31983 = G__32008;
count__31631_31984 = G__32009;
i__31632_31985 = G__32010;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31981);
}
}


var G__32011 = cljs.core.next(seq__31604_31973__$1);
var G__32012 = null;
var G__32013 = (0);
var G__32014 = (0);
seq__31604_31928 = G__32011;
chunk__31606_31929 = G__32012;
count__31607_31930 = G__32013;
i__31608_31931 = G__32014;
continue;
} else {
var G__32015 = cljs.core.next(seq__31604_31973__$1);
var G__32016 = null;
var G__32017 = (0);
var G__32018 = (0);
seq__31604_31928 = G__32015;
chunk__31606_31929 = G__32016;
count__31607_31930 = G__32017;
i__31608_31931 = G__32018;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32019 = arguments.length;
var i__5767__auto___32020 = (0);
while(true){
if((i__5767__auto___32020 < len__5766__auto___32019)){
args__5772__auto__.push((arguments[i__5767__auto___32020]));

var G__32021 = (i__5767__auto___32020 + (1));
i__5767__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31634){
var G__31635 = cljs.core.first(seq31634);
var seq31634__$1 = cljs.core.next(seq31634);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31635,seq31634__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__31637 = arguments.length;
switch (G__31637) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__27998__auto___32025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27999__auto__ = (function (){var switch__27845__auto__ = (function (state_31642){
var state_val_31643 = (state_31642[(1)]);
if((state_val_31643 === (1))){
var state_31642__$1 = state_31642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31642__$1,(2),once_or_cleanup);
} else {
if((state_val_31643 === (2))){
var inst_31639 = (state_31642[(2)]);
var inst_31640 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31642__$1 = (function (){var statearr_31644 = state_31642;
(statearr_31644[(7)] = inst_31639);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31642__$1,inst_31640);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27846__auto__ = null;
var shadow$dom$state_machine__27846__auto____0 = (function (){
var statearr_31645 = [null,null,null,null,null,null,null,null];
(statearr_31645[(0)] = shadow$dom$state_machine__27846__auto__);

(statearr_31645[(1)] = (1));

return statearr_31645;
});
var shadow$dom$state_machine__27846__auto____1 = (function (state_31642){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_31642);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e31646){var ex__27849__auto__ = e31646;
var statearr_31647_32028 = state_31642;
(statearr_31647_32028[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_31642[(4)]))){
var statearr_31648_32029 = state_31642;
(statearr_31648_32029[(1)] = cljs.core.first((state_31642[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32030 = state_31642;
state_31642 = G__32030;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
shadow$dom$state_machine__27846__auto__ = function(state_31642){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27846__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27846__auto____1.call(this,state_31642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27846__auto____0;
shadow$dom$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27846__auto____1;
return shadow$dom$state_machine__27846__auto__;
})()
})();
var state__28000__auto__ = (function (){var statearr_31649 = f__27999__auto__();
(statearr_31649[(6)] = c__27998__auto___32025);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28000__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
