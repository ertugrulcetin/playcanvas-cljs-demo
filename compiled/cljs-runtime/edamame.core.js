goog.provide('edamame.core');
/**
 * Parses first EDN value from string.
 * 
 *   Supported parsing options:
 * 
 *   `:deref`: parse forms starting with `@`. If `true`, the resulting
 *   expression will be parsed as `(deref expr)`.
 * 
 *   `:fn`: parse function literals (`#(inc %)`). If `true`, will be parsed as `(fn [%1] (inc %))`.
 * 
 *   `:quote`: parse quoted expression `'foo`. If `true`, will be parsed as `(quote foo)`.
 * 
 *   `:read-eval`: parse read-eval (`=(+ 1 2 3)`). If `true`, the
 *   resulting expression will be parsed as `(read-eval (+ 1 2 3))`.
 * 
 *   `:regex`: parse regex literals (`#"foo"`). If `true`, defaults to
 *   `re-pattern`.
 * 
 *   `:syntax-quote`: parse syntax-quote (`(+ 1 2 3)`). Symbols get
 *   qualified using `:resolve-symbol` which defaults to `identity`:
 *   `(parse-string "`x" {:syntax-quote {:resolve-symbol #(symbol "user" (str %))}})
 *   ;;=> (quote user/x)`.
 * 
 *   `:var`: parse var literals (`#'foo`). If `true`, the resulting
 *   expression will be parsed as `(var foo)`.
 * 
 *   `:all`: when `true`, the above options will be set to `true` unless
 *   explicitly provided.
 * 
 *   Supported options for processing reader conditionals:
 * 
 *   `:read-cond`: - `:allow` to process reader conditionals, or
 *                `:preserve` to keep all branches
 *   `:features`: - persistent set of feature keywords for reader conditionals (e.g. `#{:clj}`).
 * 
 *   `:auto-resolve`: map of alias to namespace symbols for
 *   auto-resolving keywords. Use `:current` as the alias for the current
 *   namespace.
 * 
 *   `:readers`: data readers.
 * 
 *   Additional arguments to tools.reader may be passed with
 *   `:tools.reader/opts`, like `:readers` for passing reader tag functions.
 * 
 *   Deprecated options:
 * 
 *   `:dispatch`: DEPRECATED by parsing options.
 * 
 *   
 */
edamame.core.parse_string = (function edamame$core$parse_string(var_args){
var G__24226 = arguments.length;
switch (G__24226) {
case 1:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string(s,null);
}));

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string(s,opts);
}));

(edamame.core.parse_string.cljs$lang$maxFixedArity = 2);

/**
 * Like parse-string but parses all values from string and returns them
 *   in a vector.
 */
edamame.core.parse_string_all = (function edamame$core$parse_string_all(var_args){
var G__24233 = arguments.length;
switch (G__24233) {
case 1:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string_all(s,null);
}));

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string_all(s,opts);
}));

(edamame.core.parse_string_all.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=edamame.core.js.map
