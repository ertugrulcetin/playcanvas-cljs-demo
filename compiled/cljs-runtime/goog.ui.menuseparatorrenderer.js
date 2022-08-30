goog.provide("goog.ui.MenuSeparatorRenderer");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classlist");
goog.require("goog.ui.ControlRenderer");
goog.requireType("goog.ui.ControlContent");
goog.ui.MenuSeparatorRenderer = function() {
  goog.ui.ControlRenderer.call(this);
};
goog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(goog.ui.MenuSeparatorRenderer);
goog.ui.MenuSeparatorRenderer.CSS_CLASS = goog.getCssName("goog-menuseparator");
goog.ui.MenuSeparatorRenderer.prototype.createDom = function(separator) {
  return separator.getDomHelper().createDom(goog.dom.TagName.DIV, this.getCssClass());
};
goog.ui.MenuSeparatorRenderer.prototype.decorate = function(separator, element) {
  if (element.id) {
    separator.setId(element.id);
  }
  if (element.tagName == goog.dom.TagName.HR) {
    var hr = element;
    element = this.createDom(separator);
    goog.dom.insertSiblingBefore(element, hr);
    goog.dom.removeNode(hr);
  } else {
    goog.dom.classlist.add(element, this.getCssClass());
  }
  return element;
};
goog.ui.MenuSeparatorRenderer.prototype.setContent = function(separator, content) {
};
goog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {
  return goog.ui.MenuSeparatorRenderer.CSS_CLASS;
};

//# sourceMappingURL=goog.ui.menuseparatorrenderer.js.map
