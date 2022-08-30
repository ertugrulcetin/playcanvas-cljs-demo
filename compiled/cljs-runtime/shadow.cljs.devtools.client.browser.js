goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32909 = arguments.length;
var i__5767__auto___32910 = (0);
while(true){
if((i__5767__auto___32910 < len__5766__auto___32909)){
args__5772__auto__.push((arguments[i__5767__auto___32910]));

var G__32911 = (i__5767__auto___32910 + (1));
i__5767__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32620){
var G__32622 = cljs.core.first(seq32620);
var seq32620__$1 = cljs.core.next(seq32620);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32622,seq32620__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32626 = cljs.core.seq(sources);
var chunk__32627 = null;
var count__32628 = (0);
var i__32629 = (0);
while(true){
if((i__32629 < count__32628)){
var map__32637 = chunk__32627.cljs$core$IIndexed$_nth$arity$2(null,i__32629);
var map__32637__$1 = cljs.core.__destructure_map(map__32637);
var src = map__32637__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32638){var e_32912 = e32638;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32912);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32912.message)].join('')));
}

var G__32913 = seq__32626;
var G__32914 = chunk__32627;
var G__32915 = count__32628;
var G__32916 = (i__32629 + (1));
seq__32626 = G__32913;
chunk__32627 = G__32914;
count__32628 = G__32915;
i__32629 = G__32916;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32626);
if(temp__5804__auto__){
var seq__32626__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32626__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32626__$1);
var G__32917 = cljs.core.chunk_rest(seq__32626__$1);
var G__32918 = c__5565__auto__;
var G__32919 = cljs.core.count(c__5565__auto__);
var G__32920 = (0);
seq__32626 = G__32917;
chunk__32627 = G__32918;
count__32628 = G__32919;
i__32629 = G__32920;
continue;
} else {
var map__32639 = cljs.core.first(seq__32626__$1);
var map__32639__$1 = cljs.core.__destructure_map(map__32639);
var src = map__32639__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32640){var e_32921 = e32640;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32921);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32921.message)].join('')));
}

var G__32922 = cljs.core.next(seq__32626__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32626 = G__32922;
chunk__32627 = G__32923;
count__32628 = G__32924;
i__32629 = G__32925;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32643 = cljs.core.seq(js_requires);
var chunk__32644 = null;
var count__32645 = (0);
var i__32646 = (0);
while(true){
if((i__32646 < count__32645)){
var js_ns = chunk__32644.cljs$core$IIndexed$_nth$arity$2(null,i__32646);
var require_str_32926 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32926);


var G__32927 = seq__32643;
var G__32928 = chunk__32644;
var G__32929 = count__32645;
var G__32930 = (i__32646 + (1));
seq__32643 = G__32927;
chunk__32644 = G__32928;
count__32645 = G__32929;
i__32646 = G__32930;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32643);
if(temp__5804__auto__){
var seq__32643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32643__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32643__$1);
var G__32931 = cljs.core.chunk_rest(seq__32643__$1);
var G__32932 = c__5565__auto__;
var G__32933 = cljs.core.count(c__5565__auto__);
var G__32934 = (0);
seq__32643 = G__32931;
chunk__32644 = G__32932;
count__32645 = G__32933;
i__32646 = G__32934;
continue;
} else {
var js_ns = cljs.core.first(seq__32643__$1);
var require_str_32935 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32935);


var G__32936 = cljs.core.next(seq__32643__$1);
var G__32937 = null;
var G__32938 = (0);
var G__32939 = (0);
seq__32643 = G__32936;
chunk__32644 = G__32937;
count__32645 = G__32938;
i__32646 = G__32939;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__32648){
var map__32649 = p__32648;
var map__32649__$1 = cljs.core.__destructure_map(map__32649);
var msg = map__32649__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32650(s__32651){
return (new cljs.core.LazySeq(null,(function (){
var s__32651__$1 = s__32651;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32651__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__32656 = cljs.core.first(xs__6360__auto__);
var map__32656__$1 = cljs.core.__destructure_map(map__32656);
var src = map__32656__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32656__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__32651__$1,map__32656,map__32656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32649,map__32649__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32650_$_iter__32652(s__32653){
return (new cljs.core.LazySeq(null,((function (s__32651__$1,map__32656,map__32656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32649,map__32649__$1,msg,info,reload_info){
return (function (){
var s__32653__$1 = s__32653;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__32653__$1);
if(temp__5804__auto____$1){
var s__32653__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32653__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__32653__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__32655 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__32654 = (0);
while(true){
if((i__32654 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__32654);
cljs.core.chunk_append(b__32655,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32940 = (i__32654 + (1));
i__32654 = G__32940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32655),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32650_$_iter__32652(cljs.core.chunk_rest(s__32653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32655),null);
}
} else {
var warning = cljs.core.first(s__32653__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32650_$_iter__32652(cljs.core.rest(s__32653__$2)));
}
} else {
return null;
}
break;
}
});})(s__32651__$1,map__32656,map__32656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32649,map__32649__$1,msg,info,reload_info))
,null,null));
});})(s__32651__$1,map__32656,map__32656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32649,map__32649__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32650(cljs.core.rest(s__32651__$1)));
} else {
var G__32941 = cljs.core.rest(s__32651__$1);
s__32651__$1 = G__32941;
continue;
}
} else {
var G__32942 = cljs.core.rest(s__32651__$1);
s__32651__$1 = G__32942;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__32657_32943 = cljs.core.seq(warnings);
var chunk__32658_32944 = null;
var count__32659_32945 = (0);
var i__32660_32946 = (0);
while(true){
if((i__32660_32946 < count__32659_32945)){
var map__32663_32947 = chunk__32658_32944.cljs$core$IIndexed$_nth$arity$2(null,i__32660_32946);
var map__32663_32948__$1 = cljs.core.__destructure_map(map__32663_32947);
var w_32949 = map__32663_32948__$1;
var msg_32950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663_32948__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663_32948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663_32948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663_32948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32953)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32951),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32952),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32950__$1)].join(''));


var G__32954 = seq__32657_32943;
var G__32955 = chunk__32658_32944;
var G__32956 = count__32659_32945;
var G__32957 = (i__32660_32946 + (1));
seq__32657_32943 = G__32954;
chunk__32658_32944 = G__32955;
count__32659_32945 = G__32956;
i__32660_32946 = G__32957;
continue;
} else {
var temp__5804__auto___32958 = cljs.core.seq(seq__32657_32943);
if(temp__5804__auto___32958){
var seq__32657_32959__$1 = temp__5804__auto___32958;
if(cljs.core.chunked_seq_QMARK_(seq__32657_32959__$1)){
var c__5565__auto___32960 = cljs.core.chunk_first(seq__32657_32959__$1);
var G__32961 = cljs.core.chunk_rest(seq__32657_32959__$1);
var G__32962 = c__5565__auto___32960;
var G__32963 = cljs.core.count(c__5565__auto___32960);
var G__32964 = (0);
seq__32657_32943 = G__32961;
chunk__32658_32944 = G__32962;
count__32659_32945 = G__32963;
i__32660_32946 = G__32964;
continue;
} else {
var map__32664_32965 = cljs.core.first(seq__32657_32959__$1);
var map__32664_32966__$1 = cljs.core.__destructure_map(map__32664_32965);
var w_32967 = map__32664_32966__$1;
var msg_32968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664_32966__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664_32966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664_32966__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664_32966__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32971)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32969),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32970),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32968__$1)].join(''));


var G__32972 = cljs.core.next(seq__32657_32959__$1);
var G__32973 = null;
var G__32974 = (0);
var G__32975 = (0);
seq__32657_32943 = G__32972;
chunk__32658_32944 = G__32973;
count__32659_32945 = G__32974;
i__32660_32946 = G__32975;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__32647_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32647_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__32665){
var map__32666 = p__32665;
var map__32666__$1 = cljs.core.__destructure_map(map__32666);
var msg = map__32666__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32666__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32666__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__32667 = cljs.core.seq(updates);
var chunk__32669 = null;
var count__32670 = (0);
var i__32671 = (0);
while(true){
if((i__32671 < count__32670)){
var path = chunk__32669.cljs$core$IIndexed$_nth$arity$2(null,i__32671);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32781_32976 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32785_32977 = null;
var count__32786_32978 = (0);
var i__32787_32979 = (0);
while(true){
if((i__32787_32979 < count__32786_32978)){
var node_32980 = chunk__32785_32977.cljs$core$IIndexed$_nth$arity$2(null,i__32787_32979);
if(cljs.core.not(node_32980.shadow$old)){
var path_match_32981 = shadow.cljs.devtools.client.browser.match_paths(node_32980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32981)){
var new_link_32982 = (function (){var G__32813 = node_32980.cloneNode(true);
G__32813.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32813;
})();
(node_32980.shadow$old = true);

(new_link_32982.onload = ((function (seq__32781_32976,chunk__32785_32977,count__32786_32978,i__32787_32979,seq__32667,chunk__32669,count__32670,i__32671,new_link_32982,path_match_32981,node_32980,path,map__32666,map__32666__$1,msg,updates,reload_info){
return (function (e){
var seq__32814_32983 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32816_32984 = null;
var count__32817_32985 = (0);
var i__32818_32986 = (0);
while(true){
if((i__32818_32986 < count__32817_32985)){
var map__32822_32987 = chunk__32816_32984.cljs$core$IIndexed$_nth$arity$2(null,i__32818_32986);
var map__32822_32988__$1 = cljs.core.__destructure_map(map__32822_32987);
var task_32989 = map__32822_32988__$1;
var fn_str_32990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32822_32988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32822_32988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32992 = goog.getObjectByName(fn_str_32990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32991)].join(''));

(fn_obj_32992.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32992.cljs$core$IFn$_invoke$arity$2(path,new_link_32982) : fn_obj_32992.call(null,path,new_link_32982));


var G__32993 = seq__32814_32983;
var G__32994 = chunk__32816_32984;
var G__32995 = count__32817_32985;
var G__32996 = (i__32818_32986 + (1));
seq__32814_32983 = G__32993;
chunk__32816_32984 = G__32994;
count__32817_32985 = G__32995;
i__32818_32986 = G__32996;
continue;
} else {
var temp__5804__auto___32997 = cljs.core.seq(seq__32814_32983);
if(temp__5804__auto___32997){
var seq__32814_32998__$1 = temp__5804__auto___32997;
if(cljs.core.chunked_seq_QMARK_(seq__32814_32998__$1)){
var c__5565__auto___32999 = cljs.core.chunk_first(seq__32814_32998__$1);
var G__33000 = cljs.core.chunk_rest(seq__32814_32998__$1);
var G__33001 = c__5565__auto___32999;
var G__33002 = cljs.core.count(c__5565__auto___32999);
var G__33003 = (0);
seq__32814_32983 = G__33000;
chunk__32816_32984 = G__33001;
count__32817_32985 = G__33002;
i__32818_32986 = G__33003;
continue;
} else {
var map__32823_33004 = cljs.core.first(seq__32814_32998__$1);
var map__32823_33005__$1 = cljs.core.__destructure_map(map__32823_33004);
var task_33006 = map__32823_33005__$1;
var fn_str_33007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823_33005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823_33005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33009 = goog.getObjectByName(fn_str_33007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33008)].join(''));

(fn_obj_33009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33009.cljs$core$IFn$_invoke$arity$2(path,new_link_32982) : fn_obj_33009.call(null,path,new_link_32982));


var G__33010 = cljs.core.next(seq__32814_32998__$1);
var G__33011 = null;
var G__33012 = (0);
var G__33013 = (0);
seq__32814_32983 = G__33010;
chunk__32816_32984 = G__33011;
count__32817_32985 = G__33012;
i__32818_32986 = G__33013;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32980);
});})(seq__32781_32976,chunk__32785_32977,count__32786_32978,i__32787_32979,seq__32667,chunk__32669,count__32670,i__32671,new_link_32982,path_match_32981,node_32980,path,map__32666,map__32666__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32981], 0));

goog.dom.insertSiblingAfter(new_link_32982,node_32980);


var G__33014 = seq__32781_32976;
var G__33015 = chunk__32785_32977;
var G__33016 = count__32786_32978;
var G__33017 = (i__32787_32979 + (1));
seq__32781_32976 = G__33014;
chunk__32785_32977 = G__33015;
count__32786_32978 = G__33016;
i__32787_32979 = G__33017;
continue;
} else {
var G__33018 = seq__32781_32976;
var G__33019 = chunk__32785_32977;
var G__33020 = count__32786_32978;
var G__33021 = (i__32787_32979 + (1));
seq__32781_32976 = G__33018;
chunk__32785_32977 = G__33019;
count__32786_32978 = G__33020;
i__32787_32979 = G__33021;
continue;
}
} else {
var G__33022 = seq__32781_32976;
var G__33023 = chunk__32785_32977;
var G__33024 = count__32786_32978;
var G__33025 = (i__32787_32979 + (1));
seq__32781_32976 = G__33022;
chunk__32785_32977 = G__33023;
count__32786_32978 = G__33024;
i__32787_32979 = G__33025;
continue;
}
} else {
var temp__5804__auto___33026 = cljs.core.seq(seq__32781_32976);
if(temp__5804__auto___33026){
var seq__32781_33027__$1 = temp__5804__auto___33026;
if(cljs.core.chunked_seq_QMARK_(seq__32781_33027__$1)){
var c__5565__auto___33028 = cljs.core.chunk_first(seq__32781_33027__$1);
var G__33029 = cljs.core.chunk_rest(seq__32781_33027__$1);
var G__33030 = c__5565__auto___33028;
var G__33031 = cljs.core.count(c__5565__auto___33028);
var G__33032 = (0);
seq__32781_32976 = G__33029;
chunk__32785_32977 = G__33030;
count__32786_32978 = G__33031;
i__32787_32979 = G__33032;
continue;
} else {
var node_33033 = cljs.core.first(seq__32781_33027__$1);
if(cljs.core.not(node_33033.shadow$old)){
var path_match_33034 = shadow.cljs.devtools.client.browser.match_paths(node_33033.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33034)){
var new_link_33035 = (function (){var G__32824 = node_33033.cloneNode(true);
G__32824.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32824;
})();
(node_33033.shadow$old = true);

(new_link_33035.onload = ((function (seq__32781_32976,chunk__32785_32977,count__32786_32978,i__32787_32979,seq__32667,chunk__32669,count__32670,i__32671,new_link_33035,path_match_33034,node_33033,seq__32781_33027__$1,temp__5804__auto___33026,path,map__32666,map__32666__$1,msg,updates,reload_info){
return (function (e){
var seq__32825_33036 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32827_33037 = null;
var count__32828_33038 = (0);
var i__32829_33039 = (0);
while(true){
if((i__32829_33039 < count__32828_33038)){
var map__32833_33040 = chunk__32827_33037.cljs$core$IIndexed$_nth$arity$2(null,i__32829_33039);
var map__32833_33041__$1 = cljs.core.__destructure_map(map__32833_33040);
var task_33042 = map__32833_33041__$1;
var fn_str_33043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833_33041__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833_33041__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33045 = goog.getObjectByName(fn_str_33043,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33044)].join(''));

(fn_obj_33045.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33045.cljs$core$IFn$_invoke$arity$2(path,new_link_33035) : fn_obj_33045.call(null,path,new_link_33035));


var G__33046 = seq__32825_33036;
var G__33047 = chunk__32827_33037;
var G__33048 = count__32828_33038;
var G__33049 = (i__32829_33039 + (1));
seq__32825_33036 = G__33046;
chunk__32827_33037 = G__33047;
count__32828_33038 = G__33048;
i__32829_33039 = G__33049;
continue;
} else {
var temp__5804__auto___33050__$1 = cljs.core.seq(seq__32825_33036);
if(temp__5804__auto___33050__$1){
var seq__32825_33051__$1 = temp__5804__auto___33050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32825_33051__$1)){
var c__5565__auto___33052 = cljs.core.chunk_first(seq__32825_33051__$1);
var G__33053 = cljs.core.chunk_rest(seq__32825_33051__$1);
var G__33054 = c__5565__auto___33052;
var G__33055 = cljs.core.count(c__5565__auto___33052);
var G__33056 = (0);
seq__32825_33036 = G__33053;
chunk__32827_33037 = G__33054;
count__32828_33038 = G__33055;
i__32829_33039 = G__33056;
continue;
} else {
var map__32834_33057 = cljs.core.first(seq__32825_33051__$1);
var map__32834_33058__$1 = cljs.core.__destructure_map(map__32834_33057);
var task_33059 = map__32834_33058__$1;
var fn_str_33060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32834_33058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32834_33058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33062 = goog.getObjectByName(fn_str_33060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33061)].join(''));

(fn_obj_33062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33062.cljs$core$IFn$_invoke$arity$2(path,new_link_33035) : fn_obj_33062.call(null,path,new_link_33035));


var G__33063 = cljs.core.next(seq__32825_33051__$1);
var G__33064 = null;
var G__33065 = (0);
var G__33066 = (0);
seq__32825_33036 = G__33063;
chunk__32827_33037 = G__33064;
count__32828_33038 = G__33065;
i__32829_33039 = G__33066;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33033);
});})(seq__32781_32976,chunk__32785_32977,count__32786_32978,i__32787_32979,seq__32667,chunk__32669,count__32670,i__32671,new_link_33035,path_match_33034,node_33033,seq__32781_33027__$1,temp__5804__auto___33026,path,map__32666,map__32666__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33034], 0));

goog.dom.insertSiblingAfter(new_link_33035,node_33033);


var G__33067 = cljs.core.next(seq__32781_33027__$1);
var G__33068 = null;
var G__33069 = (0);
var G__33070 = (0);
seq__32781_32976 = G__33067;
chunk__32785_32977 = G__33068;
count__32786_32978 = G__33069;
i__32787_32979 = G__33070;
continue;
} else {
var G__33071 = cljs.core.next(seq__32781_33027__$1);
var G__33072 = null;
var G__33073 = (0);
var G__33074 = (0);
seq__32781_32976 = G__33071;
chunk__32785_32977 = G__33072;
count__32786_32978 = G__33073;
i__32787_32979 = G__33074;
continue;
}
} else {
var G__33075 = cljs.core.next(seq__32781_33027__$1);
var G__33076 = null;
var G__33077 = (0);
var G__33078 = (0);
seq__32781_32976 = G__33075;
chunk__32785_32977 = G__33076;
count__32786_32978 = G__33077;
i__32787_32979 = G__33078;
continue;
}
}
} else {
}
}
break;
}


var G__33079 = seq__32667;
var G__33080 = chunk__32669;
var G__33081 = count__32670;
var G__33082 = (i__32671 + (1));
seq__32667 = G__33079;
chunk__32669 = G__33080;
count__32670 = G__33081;
i__32671 = G__33082;
continue;
} else {
var G__33083 = seq__32667;
var G__33084 = chunk__32669;
var G__33085 = count__32670;
var G__33086 = (i__32671 + (1));
seq__32667 = G__33083;
chunk__32669 = G__33084;
count__32670 = G__33085;
i__32671 = G__33086;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32667);
if(temp__5804__auto__){
var seq__32667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32667__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32667__$1);
var G__33087 = cljs.core.chunk_rest(seq__32667__$1);
var G__33088 = c__5565__auto__;
var G__33089 = cljs.core.count(c__5565__auto__);
var G__33090 = (0);
seq__32667 = G__33087;
chunk__32669 = G__33088;
count__32670 = G__33089;
i__32671 = G__33090;
continue;
} else {
var path = cljs.core.first(seq__32667__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32835_33091 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32839_33092 = null;
var count__32840_33093 = (0);
var i__32841_33094 = (0);
while(true){
if((i__32841_33094 < count__32840_33093)){
var node_33095 = chunk__32839_33092.cljs$core$IIndexed$_nth$arity$2(null,i__32841_33094);
if(cljs.core.not(node_33095.shadow$old)){
var path_match_33096 = shadow.cljs.devtools.client.browser.match_paths(node_33095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33096)){
var new_link_33097 = (function (){var G__32867 = node_33095.cloneNode(true);
G__32867.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32867;
})();
(node_33095.shadow$old = true);

(new_link_33097.onload = ((function (seq__32835_33091,chunk__32839_33092,count__32840_33093,i__32841_33094,seq__32667,chunk__32669,count__32670,i__32671,new_link_33097,path_match_33096,node_33095,path,seq__32667__$1,temp__5804__auto__,map__32666,map__32666__$1,msg,updates,reload_info){
return (function (e){
var seq__32868_33098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32870_33099 = null;
var count__32871_33100 = (0);
var i__32872_33101 = (0);
while(true){
if((i__32872_33101 < count__32871_33100)){
var map__32876_33102 = chunk__32870_33099.cljs$core$IIndexed$_nth$arity$2(null,i__32872_33101);
var map__32876_33103__$1 = cljs.core.__destructure_map(map__32876_33102);
var task_33104 = map__32876_33103__$1;
var fn_str_33105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32876_33103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32876_33103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33107 = goog.getObjectByName(fn_str_33105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33106)].join(''));

(fn_obj_33107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33107.cljs$core$IFn$_invoke$arity$2(path,new_link_33097) : fn_obj_33107.call(null,path,new_link_33097));


var G__33108 = seq__32868_33098;
var G__33109 = chunk__32870_33099;
var G__33110 = count__32871_33100;
var G__33111 = (i__32872_33101 + (1));
seq__32868_33098 = G__33108;
chunk__32870_33099 = G__33109;
count__32871_33100 = G__33110;
i__32872_33101 = G__33111;
continue;
} else {
var temp__5804__auto___33112__$1 = cljs.core.seq(seq__32868_33098);
if(temp__5804__auto___33112__$1){
var seq__32868_33113__$1 = temp__5804__auto___33112__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32868_33113__$1)){
var c__5565__auto___33114 = cljs.core.chunk_first(seq__32868_33113__$1);
var G__33115 = cljs.core.chunk_rest(seq__32868_33113__$1);
var G__33116 = c__5565__auto___33114;
var G__33117 = cljs.core.count(c__5565__auto___33114);
var G__33118 = (0);
seq__32868_33098 = G__33115;
chunk__32870_33099 = G__33116;
count__32871_33100 = G__33117;
i__32872_33101 = G__33118;
continue;
} else {
var map__32877_33119 = cljs.core.first(seq__32868_33113__$1);
var map__32877_33120__$1 = cljs.core.__destructure_map(map__32877_33119);
var task_33121 = map__32877_33120__$1;
var fn_str_33122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32877_33120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32877_33120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33124 = goog.getObjectByName(fn_str_33122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33123)].join(''));

(fn_obj_33124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33124.cljs$core$IFn$_invoke$arity$2(path,new_link_33097) : fn_obj_33124.call(null,path,new_link_33097));


var G__33125 = cljs.core.next(seq__32868_33113__$1);
var G__33126 = null;
var G__33127 = (0);
var G__33128 = (0);
seq__32868_33098 = G__33125;
chunk__32870_33099 = G__33126;
count__32871_33100 = G__33127;
i__32872_33101 = G__33128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33095);
});})(seq__32835_33091,chunk__32839_33092,count__32840_33093,i__32841_33094,seq__32667,chunk__32669,count__32670,i__32671,new_link_33097,path_match_33096,node_33095,path,seq__32667__$1,temp__5804__auto__,map__32666,map__32666__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33096], 0));

goog.dom.insertSiblingAfter(new_link_33097,node_33095);


var G__33129 = seq__32835_33091;
var G__33130 = chunk__32839_33092;
var G__33131 = count__32840_33093;
var G__33132 = (i__32841_33094 + (1));
seq__32835_33091 = G__33129;
chunk__32839_33092 = G__33130;
count__32840_33093 = G__33131;
i__32841_33094 = G__33132;
continue;
} else {
var G__33133 = seq__32835_33091;
var G__33134 = chunk__32839_33092;
var G__33135 = count__32840_33093;
var G__33136 = (i__32841_33094 + (1));
seq__32835_33091 = G__33133;
chunk__32839_33092 = G__33134;
count__32840_33093 = G__33135;
i__32841_33094 = G__33136;
continue;
}
} else {
var G__33137 = seq__32835_33091;
var G__33138 = chunk__32839_33092;
var G__33139 = count__32840_33093;
var G__33140 = (i__32841_33094 + (1));
seq__32835_33091 = G__33137;
chunk__32839_33092 = G__33138;
count__32840_33093 = G__33139;
i__32841_33094 = G__33140;
continue;
}
} else {
var temp__5804__auto___33141__$1 = cljs.core.seq(seq__32835_33091);
if(temp__5804__auto___33141__$1){
var seq__32835_33142__$1 = temp__5804__auto___33141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32835_33142__$1)){
var c__5565__auto___33143 = cljs.core.chunk_first(seq__32835_33142__$1);
var G__33144 = cljs.core.chunk_rest(seq__32835_33142__$1);
var G__33145 = c__5565__auto___33143;
var G__33146 = cljs.core.count(c__5565__auto___33143);
var G__33147 = (0);
seq__32835_33091 = G__33144;
chunk__32839_33092 = G__33145;
count__32840_33093 = G__33146;
i__32841_33094 = G__33147;
continue;
} else {
var node_33148 = cljs.core.first(seq__32835_33142__$1);
if(cljs.core.not(node_33148.shadow$old)){
var path_match_33149 = shadow.cljs.devtools.client.browser.match_paths(node_33148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33149)){
var new_link_33150 = (function (){var G__32878 = node_33148.cloneNode(true);
G__32878.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32878;
})();
(node_33148.shadow$old = true);

(new_link_33150.onload = ((function (seq__32835_33091,chunk__32839_33092,count__32840_33093,i__32841_33094,seq__32667,chunk__32669,count__32670,i__32671,new_link_33150,path_match_33149,node_33148,seq__32835_33142__$1,temp__5804__auto___33141__$1,path,seq__32667__$1,temp__5804__auto__,map__32666,map__32666__$1,msg,updates,reload_info){
return (function (e){
var seq__32879_33151 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32881_33152 = null;
var count__32882_33153 = (0);
var i__32883_33154 = (0);
while(true){
if((i__32883_33154 < count__32882_33153)){
var map__32887_33155 = chunk__32881_33152.cljs$core$IIndexed$_nth$arity$2(null,i__32883_33154);
var map__32887_33156__$1 = cljs.core.__destructure_map(map__32887_33155);
var task_33157 = map__32887_33156__$1;
var fn_str_33158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32887_33156__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32887_33156__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33160 = goog.getObjectByName(fn_str_33158,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33159)].join(''));

(fn_obj_33160.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33160.cljs$core$IFn$_invoke$arity$2(path,new_link_33150) : fn_obj_33160.call(null,path,new_link_33150));


var G__33161 = seq__32879_33151;
var G__33162 = chunk__32881_33152;
var G__33163 = count__32882_33153;
var G__33164 = (i__32883_33154 + (1));
seq__32879_33151 = G__33161;
chunk__32881_33152 = G__33162;
count__32882_33153 = G__33163;
i__32883_33154 = G__33164;
continue;
} else {
var temp__5804__auto___33165__$2 = cljs.core.seq(seq__32879_33151);
if(temp__5804__auto___33165__$2){
var seq__32879_33166__$1 = temp__5804__auto___33165__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32879_33166__$1)){
var c__5565__auto___33167 = cljs.core.chunk_first(seq__32879_33166__$1);
var G__33168 = cljs.core.chunk_rest(seq__32879_33166__$1);
var G__33169 = c__5565__auto___33167;
var G__33170 = cljs.core.count(c__5565__auto___33167);
var G__33171 = (0);
seq__32879_33151 = G__33168;
chunk__32881_33152 = G__33169;
count__32882_33153 = G__33170;
i__32883_33154 = G__33171;
continue;
} else {
var map__32888_33172 = cljs.core.first(seq__32879_33166__$1);
var map__32888_33173__$1 = cljs.core.__destructure_map(map__32888_33172);
var task_33174 = map__32888_33173__$1;
var fn_str_33175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32888_33173__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32888_33173__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33177 = goog.getObjectByName(fn_str_33175,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33176)].join(''));

(fn_obj_33177.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33177.cljs$core$IFn$_invoke$arity$2(path,new_link_33150) : fn_obj_33177.call(null,path,new_link_33150));


var G__33178 = cljs.core.next(seq__32879_33166__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__32879_33151 = G__33178;
chunk__32881_33152 = G__33179;
count__32882_33153 = G__33180;
i__32883_33154 = G__33181;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33148);
});})(seq__32835_33091,chunk__32839_33092,count__32840_33093,i__32841_33094,seq__32667,chunk__32669,count__32670,i__32671,new_link_33150,path_match_33149,node_33148,seq__32835_33142__$1,temp__5804__auto___33141__$1,path,seq__32667__$1,temp__5804__auto__,map__32666,map__32666__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33149], 0));

goog.dom.insertSiblingAfter(new_link_33150,node_33148);


var G__33182 = cljs.core.next(seq__32835_33142__$1);
var G__33183 = null;
var G__33184 = (0);
var G__33185 = (0);
seq__32835_33091 = G__33182;
chunk__32839_33092 = G__33183;
count__32840_33093 = G__33184;
i__32841_33094 = G__33185;
continue;
} else {
var G__33186 = cljs.core.next(seq__32835_33142__$1);
var G__33187 = null;
var G__33188 = (0);
var G__33189 = (0);
seq__32835_33091 = G__33186;
chunk__32839_33092 = G__33187;
count__32840_33093 = G__33188;
i__32841_33094 = G__33189;
continue;
}
} else {
var G__33190 = cljs.core.next(seq__32835_33142__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__32835_33091 = G__33190;
chunk__32839_33092 = G__33191;
count__32840_33093 = G__33192;
i__32841_33094 = G__33193;
continue;
}
}
} else {
}
}
break;
}


var G__33194 = cljs.core.next(seq__32667__$1);
var G__33195 = null;
var G__33196 = (0);
var G__33197 = (0);
seq__32667 = G__33194;
chunk__32669 = G__33195;
count__32670 = G__33196;
i__32671 = G__33197;
continue;
} else {
var G__33198 = cljs.core.next(seq__32667__$1);
var G__33199 = null;
var G__33200 = (0);
var G__33201 = (0);
seq__32667 = G__33198;
chunk__32669 = G__33199;
count__32670 = G__33200;
i__32671 = G__33201;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__32889){
var map__32890 = p__32889;
var map__32890__$1 = cljs.core.__destructure_map(map__32890);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32890__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32891){
var map__32892 = p__32891;
var map__32892__$1 = cljs.core.__destructure_map(map__32892);
var _ = map__32892__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32892__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32893,done,error){
var map__32894 = p__32893;
var map__32894__$1 = cljs.core.__destructure_map(map__32894);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32894__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32895,done,error){
var map__32896 = p__32895;
var map__32896__$1 = cljs.core.__destructure_map(map__32896);
var msg = map__32896__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32896__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32896__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32896__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32897){
var map__32898 = p__32897;
var map__32898__$1 = cljs.core.__destructure_map(map__32898);
var src = map__32898__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32898__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32899 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32899) : done.call(null,G__32899));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32900){
var map__32901 = p__32900;
var map__32901__$1 = cljs.core.__destructure_map(map__32901);
var msg__$1 = map__32901__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32901__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32902){var ex = e32902;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32903){
var map__32904 = p__32903;
var map__32904__$1 = cljs.core.__destructure_map(map__32904);
var env = map__32904__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32904__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32905){
var map__32906 = p__32905;
var map__32906__$1 = cljs.core.__destructure_map(map__32906);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32906__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32906__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__32907){
var map__32908 = p__32907;
var map__32908__$1 = cljs.core.__destructure_map(map__32908);
var svc = map__32908__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
