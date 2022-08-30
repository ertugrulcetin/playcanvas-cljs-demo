goog.provide('thirdperson.entity');
if((typeof thirdperson !== 'undefined') && (typeof thirdperson.entity !== 'undefined') && (typeof thirdperson.entity.app !== 'undefined')){
} else {
thirdperson.entity.app = (new cljs.core.Delay((function (){
var obj29910 = pc;
if((!((obj29910 == null)))){
return (obj29910["app"]);
} else {
return undefined;
}
}),null));
}
thirdperson.entity.vec3 = (function thirdperson$entity$vec3(var_args){
var G__29912 = arguments.length;
switch (G__29912) {
case 0:
return thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(0));
}));

(thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return (new pc.Vec3(x,y,z));
}));

(thirdperson.entity.vec3.cljs$lang$maxFixedArity = 3);

thirdperson.entity.pressed_only_QMARK_ = (function thirdperson$entity$pressed_only_QMARK_(only_required_keys,all_keys,pressed_keys){
var only_required_keys__$1 = ((cljs.core.sequential_QMARK_(only_required_keys))?only_required_keys:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [only_required_keys], null));
var all_keys__$1 = ((cljs.core.sequential_QMARK_(all_keys))?all_keys:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [all_keys], null));
var only_required_keys__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29913_SHARP_){
var obj29915 = pc;
if((!((obj29915 == null)))){
return (obj29915[applied_science.js_interop.impl.wrap_key(p1__29913_SHARP_)]);
} else {
return undefined;
}
}),only_required_keys__$1);
var all_keys__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29914_SHARP_){
var obj29916 = pc;
if((!((obj29916 == null)))){
return (obj29916[applied_science.js_interop.impl.wrap_key(p1__29914_SHARP_)]);
} else {
return undefined;
}
}),all_keys__$1);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(only_required_keys__$2),cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_keys__$2),pressed_keys)));
});
var pos_30060 = thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$0();
thirdperson.entity.walk = (function thirdperson$entity$walk(var_args){
var G__29918 = arguments.length;
switch (G__29918) {
case 4:
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4 = (function (dt,x,z,this$){
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5(dt,x,z,this$,false);
}));

(thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5 = (function (dt,x,z,this$,backwards){
if((((!((x === (0))))) || ((!((z === (0))))))){
var pos__$1 = (function (){var obj__14548__auto__ = pos_30060;
var f__14549__auto__ = (obj__14548__auto__["set"]);
return f__14549__auto__.call(obj__14548__auto__,(x * dt),(0),(z * dt));
})();
var _ = (function (){
var obj__14548__auto___30062 = (function (){var obj__14548__auto___30062 = pos__$1;
var f__14549__auto___30063 = (obj__14548__auto___30062["normalize"]);
return f__14549__auto___30063.call(obj__14548__auto___30062);
})();
var f__14549__auto___30063 = (obj__14548__auto___30062["scale"]);
f__14549__auto___30063.call(obj__14548__auto___30062,(function (){var obj29919 = this$;
if((!((obj29919 == null)))){
return (obj29919["speed"]);
} else {
return undefined;
}
})());

var obj__14548__auto__ = pos__$1;
var f__14549__auto__ = (obj__14548__auto__["add"]);
return f__14549__auto__.call(obj__14548__auto__,(function (){var parent__14555__auto__ = (this$["entity"]);
var f__14556__auto__ = (parent__14555__auto__["getPosition"]);
return f__14556__auto__.call(parent__14555__auto__);
})());
})()
;
var target_y = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(backwards)){
cljs.core.reset_BANG_(target_y,(function (){var obj29922 = (function (){var obj29921 = (function (){var obj29920 = this$;
if((!((obj29920 == null)))){
return (obj29920["cameraScript"]);
} else {
return undefined;
}
})();
if((!((obj29921 == null)))){
return (obj29921["eulers"]);
} else {
return undefined;
}
})();
if((!((obj29922 == null)))){
return (obj29922["x"]);
} else {
return undefined;
}
})());
} else {
cljs.core.reset_BANG_(target_y,((function (){var obj29925 = (function (){var obj29924 = (function (){var obj29923 = this$;
if((!((obj29923 == null)))){
return (obj29923["cameraScript"]);
} else {
return undefined;
}
})();
if((!((obj29924 == null)))){
return (obj29924["eulers"]);
} else {
return undefined;
}
})();
if((!((obj29925 == null)))){
return (obj29925["x"]);
} else {
return undefined;
}
})() + (180)));
}

var parent__14555__auto__ = ((this$["entity"])["rigidbody"]);
var f__14556__auto__ = (parent__14555__auto__["teleport"]);
return f__14556__auto__.call(parent__14555__auto__,pos__$1,thirdperson.entity.vec3.cljs$core$IFn$_invoke$arity$3((0),cljs.core.deref(target_y),(0)));
} else {
return null;
}
}));

(thirdperson.entity.walk.cljs$lang$maxFixedArity = 5);

thirdperson.entity.rules = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-left-backwards","thirdperson.entity/move-left-backwards",408957985),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_left_backwards(p__29926){
var map__29927 = p__29926;
var map__29927__$1 = cljs.core.__destructure_map(map__29927);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29927__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_left_backwards(p__29928){
var map__29929 = p__29928;
var map__29929__$1 = cljs.core.__destructure_map(map__29929);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29929__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29929__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29929__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29929__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29929__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = ((function (){var obj29930 = forward;
if((!((obj29930 == null)))){
return (obj29930["x"]);
} else {
return undefined;
}
})() + (function (){var obj29931 = right;
if((!((obj29931 == null)))){
return (obj29931["x"]);
} else {
return undefined;
}
})());
var z = ((function (){var obj29932 = forward;
if((!((obj29932 == null)))){
return (obj29932["z"]);
} else {
return undefined;
}
})() + (function (){var obj29933 = right;
if((!((obj29933 == null)))){
return (obj29933["z"]);
} else {
return undefined;
}
})());
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5(dt,x,z,this$,true);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-backwards","thirdperson.entity/move-backwards",-1364133691),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_backwards(p__29934){
var map__29935 = p__29934;
var map__29935__$1 = cljs.core.__destructure_map(map__29935);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_backwards(p__29936){
var map__29937 = p__29936;
var map__29937__$1 = cljs.core.__destructure_map(map__29937);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29937__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29937__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29937__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29937__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var x = (function (){var obj29938 = forward;
if((!((obj29938 == null)))){
return (obj29938["x"]);
} else {
return undefined;
}
})();
var z = (function (){var obj29939 = forward;
if((!((obj29939 == null)))){
return (obj29939["z"]);
} else {
return undefined;
}
})();
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5(dt,x,z,this$,true);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-right-backwards","thirdperson.entity/move-right-backwards",-814876890),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_right_backwards(p__29940){
var map__29941 = p__29940;
var map__29941__$1 = cljs.core.__destructure_map(map__29941);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_right_backwards(p__29942){
var map__29943 = p__29942;
var map__29943__$1 = cljs.core.__destructure_map(map__29943);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = ((function (){var obj29944 = forward;
if((!((obj29944 == null)))){
return (obj29944["x"]);
} else {
return undefined;
}
})() - (function (){var obj29945 = right;
if((!((obj29945 == null)))){
return (obj29945["x"]);
} else {
return undefined;
}
})());
var z = ((function (){var obj29946 = forward;
if((!((obj29946 == null)))){
return (obj29946["z"]);
} else {
return undefined;
}
})() - (function (){var obj29947 = right;
if((!((obj29947 == null)))){
return (obj29947["z"]);
} else {
return undefined;
}
})());
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$5(dt,x,z,this$,true);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,null,null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","jump","thirdperson.entity/jump",-30833398),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_jump(p__29948){
var map__29949 = p__29948;
var map__29949__$1 = cljs.core.__destructure_map(map__29949);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29949__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29949__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29949__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.Keyword(null,"KEY_SPACE","KEY_SPACE",1789403675),new cljs.core.Keyword(null,"KEY_SPACE","KEY_SPACE",1789403675),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_jump(p__29950){
var map__29951 = p__29950;
var map__29951__$1 = cljs.core.__destructure_map(map__29951);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29951__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29951__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29951__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var parent__14555__auto__ = ((this$["entity"])["rigidbody"]);
var f__14556__auto__ = (parent__14555__auto__["applyImpulse"]);
return f__14556__auto__.call(parent__14555__auto__,(0),(50),(0));
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-left-forward","thirdperson.entity/move-left-forward",967933547),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_left_forward(p__29952){
var map__29953 = p__29952;
var map__29953__$1 = cljs.core.__destructure_map(map__29953);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_left_forward(p__29954){
var map__29955 = p__29954;
var map__29955__$1 = cljs.core.__destructure_map(map__29955);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29955__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = ((function (){var obj29956 = forward;
if((!((obj29956 == null)))){
return (obj29956["x"]);
} else {
return undefined;
}
})() - (function (){var obj29957 = right;
if((!((obj29957 == null)))){
return (obj29957["x"]);
} else {
return undefined;
}
})());
var z = ((function (){var obj29958 = forward;
if((!((obj29958 == null)))){
return (obj29958["z"]);
} else {
return undefined;
}
})() - (function (){var obj29959 = right;
if((!((obj29959 == null)))){
return (obj29959["z"]);
} else {
return undefined;
}
})());
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4(dt,x,z,this$);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-right","thirdperson.entity/move-right",991198318),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_right(p__29960){
var map__29961 = p__29960;
var map__29961__$1 = cljs.core.__destructure_map(map__29961);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_right(p__29962){
var map__29963 = p__29962;
var map__29963__$1 = cljs.core.__destructure_map(map__29963);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29963__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29963__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29963__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29963__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = (function (){var obj29964 = right;
if((!((obj29964 == null)))){
return (obj29964["x"]);
} else {
return undefined;
}
})();
var z = (function (){var obj29965 = right;
if((!((obj29965 == null)))){
return (obj29965["z"]);
} else {
return undefined;
}
})();
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4(dt,x,z,this$);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-left","thirdperson.entity/move-left",-677276078),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_left(p__29966){
var map__29967 = p__29966;
var map__29967__$1 = cljs.core.__destructure_map(map__29967);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29967__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29967__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29967__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29967__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_left(p__29968){
var map__29969 = p__29968;
var map__29969__$1 = cljs.core.__destructure_map(map__29969);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29969__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = (- (function (){var obj29970 = right;
if((!((obj29970 == null)))){
return (obj29970["x"]);
} else {
return undefined;
}
})());
var z = (- (function (){var obj29971 = right;
if((!((obj29971 == null)))){
return (obj29971["z"]);
} else {
return undefined;
}
})());
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4(dt,x,z,this$);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-forward","thirdperson.entity/move-forward",2108761146),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_forward(p__29972){
var map__29973 = p__29972;
var map__29973__$1 = cljs.core.__destructure_map(map__29973);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29973__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29973__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29973__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29973__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_forward(p__29974){
var map__29975 = p__29974;
var map__29975__$1 = cljs.core.__destructure_map(map__29975);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29975__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29975__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29975__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29975__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var x = (function (){var obj29976 = forward;
if((!((obj29976 == null)))){
return (obj29976["x"]);
} else {
return undefined;
}
})();
var z = (function (){var obj29977 = forward;
if((!((obj29977 == null)))){
return (obj29977["z"]);
} else {
return undefined;
}
})();
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4(dt,x,z,this$);
}),null),odoyle.rules.__GT_Rule(new cljs.core.Keyword("thirdperson.entity","move-right-forward","thirdperson.entity/move-right-forward",2060154623),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dt","dt",-368444759)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"pressed-keys","pressed-keys",-1042356627,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"this","this",1028897902,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"this","this",-611633625)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"forward","forward",1083186224,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"forward","forward",-557345303)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"right","right",1187949694,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function thirdperson$entity$thirdperson_entity_move_right_forward(p__29978){
var map__29979 = p__29978;
var map__29979__$1 = cljs.core.__destructure_map(map__29979);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29979__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29979__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29979__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29979__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29979__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return thirdperson.entity.pressed_only_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"KEY_W","KEY_W",-402735049),new cljs.core.Keyword(null,"KEY_S","KEY_S",1853206411),new cljs.core.Keyword(null,"KEY_A","KEY_A",954230536),new cljs.core.Keyword(null,"KEY_D","KEY_D",-1324751724)], null),pressed_keys);
}),(function thirdperson$entity$thirdperson_entity_move_right_forward(p__29980){
var map__29981 = p__29980;
var map__29981__$1 = cljs.core.__destructure_map(map__29981);
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29981__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29981__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29981__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29981__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29981__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var x = ((function (){var obj29982 = forward;
if((!((obj29982 == null)))){
return (obj29982["x"]);
} else {
return undefined;
}
})() + (function (){var obj29983 = right;
if((!((obj29983 == null)))){
return (obj29983["x"]);
} else {
return undefined;
}
})());
var z = ((function (){var obj29984 = forward;
if((!((obj29984 == null)))){
return (obj29984["z"]);
} else {
return undefined;
}
})() + (function (){var obj29985 = right;
if((!((obj29985 == null)))){
return (obj29985["z"]);
} else {
return undefined;
}
})());
return thirdperson.entity.walk.cljs$core$IFn$_invoke$arity$4(dt,x,z,this$);
}),null)], null);
if((typeof thirdperson !== 'undefined') && (typeof thirdperson.entity !== 'undefined') && (typeof thirdperson.entity._STAR_session !== 'undefined')){
} else {
thirdperson.entity._STAR_session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(odoyle.rules.add_rule,odoyle.rules.__GT_session(),thirdperson.entity.rules));
}
thirdperson.entity.pressed_QMARK_ = (function thirdperson$entity$pressed_QMARK_(key){
var parent__14555__auto__ = (cljs.core.deref(thirdperson.entity.app)["keyboard"]);
var f__14556__auto__ = (parent__14555__auto__["isPressed"]);
return f__14556__auto__.call(parent__14555__auto__,(function (){var obj29986 = pc;
if((!((obj29986 == null)))){
return (obj29986[applied_science.js_interop.impl.wrap_key(key)]);
} else {
return undefined;
}
})());
});
thirdperson.entity.find_by_name = (function thirdperson$entity$find_by_name(name){
var parent__14555__auto__ = (cljs.core.deref(thirdperson.entity.app)["root"]);
var f__14556__auto__ = (parent__14555__auto__["findByName"]);
return f__14556__auto__.call(parent__14555__auto__,name);
});
thirdperson.entity.create_script = (function thirdperson$entity$create_script(script_name,p__29987){
var map__29988 = p__29987;
var map__29988__$1 = cljs.core.__destructure_map(map__29988);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29988__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29988__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var script = (function (){var obj__14548__auto__ = pc;
var f__14549__auto__ = (obj__14548__auto__["createScript"]);
return f__14549__auto__.call(obj__14548__auto__,cljs.core.name(script_name));
})();
var seq__29989_30064 = cljs.core.seq(attrs);
var chunk__29990_30065 = null;
var count__29991_30066 = (0);
var i__29992_30067 = (0);
while(true){
if((i__29992_30067 < count__29991_30066)){
var vec__29999_30068 = chunk__29990_30065.cljs$core$IIndexed$_nth$arity$2(null,i__29992_30067);
var k_30069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999_30068,(0),null);
var v_30070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999_30068,(1),null);
var parent__14555__auto___30071 = (script["attributes"]);
var f__14556__auto___30072 = (parent__14555__auto___30071["add"]);
f__14556__auto___30072.call(parent__14555__auto___30071,cljs.core.name(k_30069),cljs.core.clj__GT_js(v_30070));


var G__30073 = seq__29989_30064;
var G__30074 = chunk__29990_30065;
var G__30075 = count__29991_30066;
var G__30076 = (i__29992_30067 + (1));
seq__29989_30064 = G__30073;
chunk__29990_30065 = G__30074;
count__29991_30066 = G__30075;
i__29992_30067 = G__30076;
continue;
} else {
var temp__5804__auto___30077 = cljs.core.seq(seq__29989_30064);
if(temp__5804__auto___30077){
var seq__29989_30078__$1 = temp__5804__auto___30077;
if(cljs.core.chunked_seq_QMARK_(seq__29989_30078__$1)){
var c__5565__auto___30079 = cljs.core.chunk_first(seq__29989_30078__$1);
var G__30080 = cljs.core.chunk_rest(seq__29989_30078__$1);
var G__30081 = c__5565__auto___30079;
var G__30082 = cljs.core.count(c__5565__auto___30079);
var G__30083 = (0);
seq__29989_30064 = G__30080;
chunk__29990_30065 = G__30081;
count__29991_30066 = G__30082;
i__29992_30067 = G__30083;
continue;
} else {
var vec__30002_30084 = cljs.core.first(seq__29989_30078__$1);
var k_30085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002_30084,(0),null);
var v_30086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002_30084,(1),null);
var parent__14555__auto___30087 = (script["attributes"]);
var f__14556__auto___30088 = (parent__14555__auto___30087["add"]);
f__14556__auto___30088.call(parent__14555__auto___30087,cljs.core.name(k_30085),cljs.core.clj__GT_js(v_30086));


var G__30089 = cljs.core.next(seq__29989_30078__$1);
var G__30090 = null;
var G__30091 = (0);
var G__30092 = (0);
seq__29989_30064 = G__30089;
chunk__29990_30065 = G__30090;
count__29991_30066 = G__30091;
i__29992_30067 = G__30092;
continue;
}
} else {
}
}
break;
}

var G__30005_30093 = init;
if((G__30005_30093 == null)){
} else {
var obj30006_30094 = script;
var obj30006_30095__$1 = (((!((obj30006_30094 == null))))?obj30006_30094:({}));
var obj30010_30096 = (function (){var child30007 = (obj30006_30095__$1["prototype"]);
if((!((child30007 == null)))){
return child30007;
} else {
var new_child__14480__auto__ = ({});
var obj30013_30097 = obj30006_30095__$1;
(obj30013_30097["prototype"] = new_child__14480__auto__);


return new_child__14480__auto__;
}
})();
(obj30010_30096["initialize"] = G__30005_30093);


}

var G__30014 = update;
if((G__30014 == null)){
return null;
} else {
var obj30015 = script;
var obj30015__$1 = (((!((obj30015 == null))))?obj30015:({}));
var obj30019_30098 = (function (){var child30016 = (obj30015__$1["prototype"]);
if((!((child30016 == null)))){
return child30016;
} else {
var new_child__14480__auto__ = ({});
var obj30022_30099 = obj30015__$1;
(obj30022_30099["prototype"] = new_child__14480__auto__);


return new_child__14480__auto__;
}
})();
(obj30019_30098["update"] = G__30014);


return obj30015__$1;
}
});
thirdperson.entity.upsert = (function thirdperson$entity$upsert(var_args){
var G__30024 = arguments.length;
switch (G__30024) {
case 2:
return thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$2 = (function (session,p__30025){
var vec__30026 = p__30025;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30026,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30026,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30026,(2),null);
return thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4(session,id,attr,f);
}));

(thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$3 = (function (session,id,attr__GT_value){
return cljs.core.reduce_kv((function (session__$1,attr,f){
return thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4(session__$1,id,attr,f);
}),session,attr__GT_value);
}));

(thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4 = (function (session,id,attr,f){
var attr_STAR_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr));
var value = (function (){var G__30029 = (function (){var G__30030 = cljs.core.first(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2(session,id));
return (attr_STAR_.cljs$core$IFn$_invoke$arity$1 ? attr_STAR_.cljs$core$IFn$_invoke$arity$1(G__30030) : attr_STAR_.call(null,G__30030));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30029) : f.call(null,G__30029));
})();
var G__30032 = session;
var G__30033 = id;
var G__30034 = attr;
var G__30035 = value;
var G__30036 = (function (){var G__30038 = session;
var G__30039 = new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897).cljs$core$IFn$_invoke$arity$1(session);
var G__30040 = id;
var G__30041 = attr;
var G__30042 = value;
var G__30043 = true;
var fexpr__30037 = new cljs.core.Var(function(){return odoyle.rules.get_alpha_nodes_for_fact;},new cljs.core.Symbol("odoyle.rules","get-alpha-nodes-for-fact","odoyle.rules/get-alpha-nodes-for-fact",206682422,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"odoyle.rules","odoyle.rules",-428390600,null),new cljs.core.Symbol(null,"get-alpha-nodes-for-fact","get-alpha-nodes-for-fact",-2080945807,null),"odoyle/rules.cljc",(32),(1),(419),(419),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session","session",-1646156666,null),new cljs.core.Symbol(null,"alpha-node","alpha-node",-1242831872,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"root?","root?",-405107991,null)], null)),null,(cljs.core.truth_(odoyle.rules.get_alpha_nodes_for_fact)?odoyle.rules.get_alpha_nodes_for_fact.cljs$lang$test:null)]));
return (fexpr__30037.cljs$core$IFn$_invoke$arity$6 ? fexpr__30037.cljs$core$IFn$_invoke$arity$6(G__30038,G__30039,G__30040,G__30041,G__30042,G__30043) : fexpr__30037.call(null,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043));
})();
var fexpr__30031 = new cljs.core.Var(function(){return odoyle.rules.upsert_fact;},new cljs.core.Symbol("odoyle.rules","upsert-fact","odoyle.rules/upsert-fact",-110983556,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"odoyle.rules","odoyle.rules",-428390600,null),new cljs.core.Symbol(null,"upsert-fact","upsert-fact",1661015997,null),"odoyle/rules.cljc",(19),(1),(437),(437),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session","session",-1646156666,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"node-paths","node-paths",750606295,null)], null)),null,(cljs.core.truth_(odoyle.rules.upsert_fact)?odoyle.rules.upsert_fact.cljs$lang$test:null)]));
return (fexpr__30031.cljs$core$IFn$_invoke$arity$5 ? fexpr__30031.cljs$core$IFn$_invoke$arity$5(G__30032,G__30033,G__30034,G__30035,G__30036) : fexpr__30031.call(null,G__30032,G__30033,G__30034,G__30035,G__30036));
}));

(thirdperson.entity.upsert.cljs$lang$maxFixedArity = 4);

thirdperson.entity.init = (function thirdperson$entity$init(){
return thirdperson.entity.create_script(new cljs.core.Keyword(null,"playerMovement","playerMovement",-1140225549),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default","default",-1987822328),0.09], null)], null),new cljs.core.Keyword(null,"init","init",-1875481434),(function (dt){
var this$ = this;
var camera = thirdperson.entity.find_by_name("Camera");
var app = cljs.core.deref(thirdperson.entity.app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thirdperson.entity._STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(session,new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("thirdperson.entity","this","thirdperson.entity/this",-1550302022),this$,new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),cljs.core.PersistentHashSet.EMPTY], null)));
}));

var parent__14555__auto___30101 = (app["keyboard"]);
var f__14556__auto___30102 = (parent__14555__auto___30101["on"]);
f__14556__auto___30102.call(parent__14555__auto___30101,"keydown",(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thirdperson.entity._STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4(session,new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),(function (p1__30044_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30044_SHARP_,(function (){var obj30047 = e;
if((!((obj30047 == null)))){
return (obj30047["key"]);
} else {
return undefined;
}
})());
})));
}));
}),this$);

var parent__14555__auto___30103 = (app["keyboard"]);
var f__14556__auto___30104 = (parent__14555__auto___30103["on"]);
f__14556__auto___30104.call(parent__14555__auto___30103,"keyup",(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thirdperson.entity._STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(thirdperson.entity.upsert.cljs$core$IFn$_invoke$arity$4(session,new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.Keyword("thirdperson.entity","pressed-keys","thirdperson.entity/pressed-keys",-2012827727),(function (p1__30045_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__30045_SHARP_,(function (){var obj30048 = e;
if((!((obj30048 == null)))){
return (obj30048["key"]);
} else {
return undefined;
}
})());
})));
}));
}),this$);

var obj30049 = this$;
var obj30050 = (((!((obj30049 == null))))?obj30049:({}));
(obj30050["cameraScript"] = (function (){var obj30054 = (function (){var obj30053 = camera;
if((!((obj30053 == null)))){
return (obj30053["script"]);
} else {
return undefined;
}
})();
if((!((obj30054 == null)))){
return (obj30054["cameraMovement"]);
} else {
return undefined;
}
})());

return obj30050;
}),new cljs.core.Keyword(null,"update","update",1045576396),(function (dt){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(thirdperson.entity._STAR_session,(function (p1__30046_SHARP_){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(p1__30046_SHARP_,new cljs.core.Keyword("thirdperson.entity","player","thirdperson.entity/player",540981545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("thirdperson.entity","forward","thirdperson.entity/forward",1201326182),(function (){var obj30056 = (function (){var obj30055 = this$;
if((!((obj30055 == null)))){
return (obj30055["entity"]);
} else {
return undefined;
}
})();
if((!((obj30056 == null)))){
return (obj30056["forward"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword("thirdperson.entity","right","thirdperson.entity/right",219641162),(function (){var obj30058 = (function (){var obj30057 = this$;
if((!((obj30057 == null)))){
return (obj30057["entity"]);
} else {
return undefined;
}
})();
if((!((obj30058 == null)))){
return (obj30058["right"]);
} else {
return undefined;
}
})()], null)),new cljs.core.Keyword("thirdperson.entity","time","thirdperson.entity/time",977872351),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("thirdperson.entity","delta","thirdperson.entity/delta",-1628628192),dt], null)));
}));
})], null));
});

//# sourceMappingURL=thirdperson.entity.js.map
