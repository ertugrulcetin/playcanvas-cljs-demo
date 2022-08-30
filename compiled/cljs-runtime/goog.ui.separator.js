goog.provide("goog.ui.Separator");
goog.require("goog.a11y.aria");
goog.require("goog.asserts");
goog.require("goog.ui.Component");
goog.require("goog.ui.Control");
goog.require("goog.ui.MenuSeparatorRenderer");
goog.require("goog.ui.registry");
goog.requireType("goog.dom.DomHelper");
goog.ui.Separator = function(opt_renderer, opt_domHelper) {
  goog.ui.Control.call(this, null, opt_renderer || goog.ui.MenuSeparatorRenderer.getInstance(), opt_domHelper);
  this.setSupportedState(goog.ui.Component.State.DISABLED, false);
  this.setSupportedState(goog.ui.Component.State.HOVER, false);
  this.setSupportedState(goog.ui.Component.State.ACTIVE, false);
  this.setSupportedState(goog.ui.Component.State.FOCUSED, false);
  this.setStateInternal(goog.ui.Component.State.DISABLED);
};
goog.inherits(goog.ui.Separator, goog.ui.Control);
goog.ui.Separator.prototype.enterDocument = function() {
  goog.ui.Separator.superClass_.enterDocument.call(this);
  var element = this.getElement();
  goog.asserts.assert(element, "The DOM element for the separator cannot be null.");
  goog.a11y.aria.setRole(element, "separator");
};
goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
  return new goog.ui.Separator();
});

//# sourceMappingURL=goog.ui.separator.js.map
