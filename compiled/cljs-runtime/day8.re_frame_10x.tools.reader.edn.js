goog.provide('day8.re_frame_10x.tools.reader.edn');
day8.re_frame_10x.tools.reader.edn.default_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),(function day8$re_frame_10x$tools$reader$edn$default_uuid_reader(form){
if(typeof form === 'string'){
} else {
throw (new Error("Assert failed: (string? form)"));
}

return cljs.core.uuid(form);
})], null);
day8.re_frame_10x.tools.reader.edn.read_string_maybe = (function day8$re_frame_10x$tools$reader$edn$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),day8.re_frame_10x.tools.reader.edn.default_readers], null),s);
}catch (e20452){var _ = e20452;
return null;
}});

//# sourceMappingURL=day8.re_frame_10x.tools.reader.edn.js.map
