goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28270){
var map__28275 = p__28270;
var map__28275__$1 = cljs.core.__destructure_map(map__28275);
var m = map__28275__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28275__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28275__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28283_28573 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28284_28574 = null;
var count__28285_28575 = (0);
var i__28286_28576 = (0);
while(true){
if((i__28286_28576 < count__28285_28575)){
var f_28577 = chunk__28284_28574.cljs$core$IIndexed$_nth$arity$2(null,i__28286_28576);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28577], 0));


var G__28578 = seq__28283_28573;
var G__28579 = chunk__28284_28574;
var G__28580 = count__28285_28575;
var G__28581 = (i__28286_28576 + (1));
seq__28283_28573 = G__28578;
chunk__28284_28574 = G__28579;
count__28285_28575 = G__28580;
i__28286_28576 = G__28581;
continue;
} else {
var temp__5804__auto___28583 = cljs.core.seq(seq__28283_28573);
if(temp__5804__auto___28583){
var seq__28283_28584__$1 = temp__5804__auto___28583;
if(cljs.core.chunked_seq_QMARK_(seq__28283_28584__$1)){
var c__5565__auto___28585 = cljs.core.chunk_first(seq__28283_28584__$1);
var G__28586 = cljs.core.chunk_rest(seq__28283_28584__$1);
var G__28587 = c__5565__auto___28585;
var G__28588 = cljs.core.count(c__5565__auto___28585);
var G__28589 = (0);
seq__28283_28573 = G__28586;
chunk__28284_28574 = G__28587;
count__28285_28575 = G__28588;
i__28286_28576 = G__28589;
continue;
} else {
var f_28590 = cljs.core.first(seq__28283_28584__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28590], 0));


var G__28591 = cljs.core.next(seq__28283_28584__$1);
var G__28592 = null;
var G__28593 = (0);
var G__28594 = (0);
seq__28283_28573 = G__28591;
chunk__28284_28574 = G__28592;
count__28285_28575 = G__28593;
i__28286_28576 = G__28594;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28595], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28595)))?cljs.core.second(arglists_28595):arglists_28595)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28296_28600 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28297_28601 = null;
var count__28298_28602 = (0);
var i__28299_28603 = (0);
while(true){
if((i__28299_28603 < count__28298_28602)){
var vec__28318_28604 = chunk__28297_28601.cljs$core$IIndexed$_nth$arity$2(null,i__28299_28603);
var name_28605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318_28604,(0),null);
var map__28321_28606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318_28604,(1),null);
var map__28321_28607__$1 = cljs.core.__destructure_map(map__28321_28606);
var doc_28608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28321_28607__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28321_28607__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28605], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28609], 0));

if(cljs.core.truth_(doc_28608)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28608], 0));
} else {
}


var G__28611 = seq__28296_28600;
var G__28612 = chunk__28297_28601;
var G__28613 = count__28298_28602;
var G__28614 = (i__28299_28603 + (1));
seq__28296_28600 = G__28611;
chunk__28297_28601 = G__28612;
count__28298_28602 = G__28613;
i__28299_28603 = G__28614;
continue;
} else {
var temp__5804__auto___28615 = cljs.core.seq(seq__28296_28600);
if(temp__5804__auto___28615){
var seq__28296_28616__$1 = temp__5804__auto___28615;
if(cljs.core.chunked_seq_QMARK_(seq__28296_28616__$1)){
var c__5565__auto___28617 = cljs.core.chunk_first(seq__28296_28616__$1);
var G__28618 = cljs.core.chunk_rest(seq__28296_28616__$1);
var G__28619 = c__5565__auto___28617;
var G__28620 = cljs.core.count(c__5565__auto___28617);
var G__28621 = (0);
seq__28296_28600 = G__28618;
chunk__28297_28601 = G__28619;
count__28298_28602 = G__28620;
i__28299_28603 = G__28621;
continue;
} else {
var vec__28331_28623 = cljs.core.first(seq__28296_28616__$1);
var name_28624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331_28623,(0),null);
var map__28334_28625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331_28623,(1),null);
var map__28334_28626__$1 = cljs.core.__destructure_map(map__28334_28625);
var doc_28627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28334_28626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28334_28626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28628], 0));

if(cljs.core.truth_(doc_28627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28627], 0));
} else {
}


var G__28635 = cljs.core.next(seq__28296_28616__$1);
var G__28636 = null;
var G__28637 = (0);
var G__28638 = (0);
seq__28296_28600 = G__28635;
chunk__28297_28601 = G__28636;
count__28298_28602 = G__28637;
i__28299_28603 = G__28638;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28337 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28338 = null;
var count__28339 = (0);
var i__28340 = (0);
while(true){
if((i__28340 < count__28339)){
var role = chunk__28338.cljs$core$IIndexed$_nth$arity$2(null,i__28340);
var temp__5804__auto___28652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28652__$1)){
var spec_28653 = temp__5804__auto___28652__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28653)], 0));
} else {
}


var G__28654 = seq__28337;
var G__28655 = chunk__28338;
var G__28656 = count__28339;
var G__28657 = (i__28340 + (1));
seq__28337 = G__28654;
chunk__28338 = G__28655;
count__28339 = G__28656;
i__28340 = G__28657;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__28337);
if(temp__5804__auto____$1){
var seq__28337__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28337__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__28337__$1);
var G__28661 = cljs.core.chunk_rest(seq__28337__$1);
var G__28662 = c__5565__auto__;
var G__28663 = cljs.core.count(c__5565__auto__);
var G__28664 = (0);
seq__28337 = G__28661;
chunk__28338 = G__28662;
count__28339 = G__28663;
i__28340 = G__28664;
continue;
} else {
var role = cljs.core.first(seq__28337__$1);
var temp__5804__auto___28671__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28671__$2)){
var spec_28675 = temp__5804__auto___28671__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28675)], 0));
} else {
}


var G__28686 = cljs.core.next(seq__28337__$1);
var G__28687 = null;
var G__28688 = (0);
var G__28689 = (0);
seq__28337 = G__28686;
chunk__28338 = G__28687;
count__28339 = G__28688;
i__28340 = G__28689;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28692 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28693 = cljs.core.ex_cause(t);
via = G__28692;
t = G__28693;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28399 = datafied_throwable;
var map__28399__$1 = cljs.core.__destructure_map(map__28399);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28399__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28399__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28399__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28401 = cljs.core.last(via);
var map__28401__$1 = cljs.core.__destructure_map(map__28401);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28402 = data;
var map__28402__$1 = cljs.core.__destructure_map(map__28402);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28402__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28402__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28402__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28404 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28404__$1 = cljs.core.__destructure_map(map__28404);
var top_data = map__28404__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28404__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28405 = phase;
var G__28405__$1 = (((G__28405 instanceof cljs.core.Keyword))?G__28405.fqn:null);
switch (G__28405__$1) {
case "read-source":
var map__28408 = data;
var map__28408__$1 = cljs.core.__destructure_map(map__28408);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28409__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28409,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28409);
var G__28409__$2 = (cljs.core.truth_((function (){var fexpr__28410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28410.cljs$core$IFn$_invoke$arity$1 ? fexpr__28410.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28410.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28409__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28409__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28409__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28413 = top_data;
var G__28413__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28413,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28413);
var G__28413__$2 = (cljs.core.truth_((function (){var fexpr__28415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28415.cljs$core$IFn$_invoke$arity$1 ? fexpr__28415.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28415.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28413__$1);
var G__28413__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28413__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28413__$2);
var G__28413__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28413__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28413__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28413__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28413__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28421 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(3),null);
var G__28424 = top_data;
var G__28424__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28424,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28424);
var G__28424__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28424__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28424__$1);
var G__28424__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28424__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28424__$2);
var G__28424__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28424__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28424__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28424__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28424__$4;
}

break;
case "execution":
var vec__28449 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28449,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28386_SHARP_){
var or__5043__auto__ = (p1__28386_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__28453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28453.cljs$core$IFn$_invoke$arity$1 ? fexpr__28453.cljs$core$IFn$_invoke$arity$1(p1__28386_SHARP_) : fexpr__28453.call(null,p1__28386_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__28457 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28457__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28457,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28457);
var G__28457__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28457__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28457__$1);
var G__28457__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28457__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28457__$2);
var G__28457__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28457__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28457__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28457__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28457__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28405__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28474){
var map__28475 = p__28474;
var map__28475__$1 = cljs.core.__destructure_map(map__28475);
var triage_data = map__28475__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28475__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28480 = phase;
var G__28480__$1 = (((G__28480 instanceof cljs.core.Keyword))?G__28480.fqn:null);
switch (G__28480__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28483 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28484 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28485 = loc;
var G__28486 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28488_28727 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28489_28728 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28490_28729 = true;
var _STAR_print_fn_STAR__temp_val__28491_28731 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28490_28729);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28491_28731);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28470_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28470_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28489_28728);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28488_28727);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28483,G__28484,G__28485,G__28486) : format.call(null,G__28483,G__28484,G__28485,G__28486));

break;
case "macroexpansion":
var G__28497 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28498 = cause_type;
var G__28500 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28501 = loc;
var G__28502 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28497,G__28498,G__28500,G__28501,G__28502) : format.call(null,G__28497,G__28498,G__28500,G__28501,G__28502));

break;
case "compile-syntax-check":
var G__28514 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28515 = cause_type;
var G__28516 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28517 = loc;
var G__28518 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28514,G__28515,G__28516,G__28517,G__28518) : format.call(null,G__28514,G__28515,G__28516,G__28517,G__28518));

break;
case "compilation":
var G__28524 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28525 = cause_type;
var G__28526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28527 = loc;
var G__28528 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28524,G__28525,G__28526,G__28527,G__28528) : format.call(null,G__28524,G__28525,G__28526,G__28527,G__28528));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28549 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28550 = symbol;
var G__28551 = loc;
var G__28552 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28555_28737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28556_28738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28557_28739 = true;
var _STAR_print_fn_STAR__temp_val__28558_28740 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28557_28739);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28558_28740);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28471_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28471_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28556_28738);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28555_28737);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28549,G__28550,G__28551,G__28552) : format.call(null,G__28549,G__28550,G__28551,G__28552));
} else {
var G__28559 = "Execution error%s at %s(%s).\n%s\n";
var G__28560 = cause_type;
var G__28561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28562 = loc;
var G__28563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28559,G__28560,G__28561,G__28562,G__28563) : format.call(null,G__28559,G__28560,G__28561,G__28562,G__28563));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28480__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
