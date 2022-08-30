goog.provide('thirdperson.core');
thirdperson.core.dev_setup = (function thirdperson$core$dev_setup(){
if(thirdperson.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
thirdperson.core.mount_root = (function thirdperson$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thirdperson.views.main_panel], null),root_el);
});
thirdperson.core.init = (function thirdperson$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thirdperson.events","initialize-db","thirdperson.events/initialize-db",-1507777183)], null));

thirdperson.core.dev_setup();

return thirdperson.entity.init();
});

//# sourceMappingURL=thirdperson.core.js.map
