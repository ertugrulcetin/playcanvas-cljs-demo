goog.provide("goog.ui.MenuRenderer");
goog.forwardDeclare("goog.ui.Menu");
goog.require("goog.a11y.aria");
goog.require("goog.a11y.aria.Role");
goog.require("goog.a11y.aria.State");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.ui.ContainerRenderer");
goog.require("goog.ui.Separator");
goog.requireType("goog.ui.Control");
goog.ui.MenuRenderer = function(opt_ariaRole) {
  goog.ui.ContainerRenderer.call(this, opt_ariaRole || goog.a11y.aria.Role.MENU);
};
goog.inherits(goog.ui.MenuRenderer, goog.ui.ContainerRenderer);
goog.addSingletonGetter(goog.ui.MenuRenderer);
goog.ui.MenuRenderer.CSS_CLASS = goog.getCssName("goog-menu");
goog.ui.MenuRenderer.prototype.canDecorate = function(element) {
  return element.tagName == goog.dom.TagName.UL || goog.ui.MenuRenderer.superClass_.canDecorate.call(this, element);
};
goog.ui.MenuRenderer.prototype.getDecoratorForChild = function(element) {
  return element.tagName == goog.dom.TagName.HR ? new goog.ui.Separator() : goog.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this, element);
};
goog.ui.MenuRenderer.prototype.containsElement = function(menu, element) {
  return goog.dom.contains(menu.getElement(), element);
};
goog.ui.MenuRenderer.prototype.getCssClass = function() {
  return goog.ui.MenuRenderer.CSS_CLASS;
};
goog.ui.MenuRenderer.prototype.initializeDom = function(container) {
  goog.ui.MenuRenderer.superClass_.initializeDom.call(this, container);
  var element = container.getElement();
  goog.asserts.assert(element, "The menu DOM element cannot be null.");
  goog.a11y.aria.setState(element, goog.a11y.aria.State.HASPOPUP, "true");
};

//# sourceMappingURL=goog.ui.menurenderer.js.map
