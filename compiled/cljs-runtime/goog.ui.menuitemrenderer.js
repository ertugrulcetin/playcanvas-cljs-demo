goog.provide("goog.ui.MenuItemRenderer");
goog.require("goog.a11y.aria.Role");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classlist");
goog.require("goog.ui.Component");
goog.require("goog.ui.ControlRenderer");
goog.requireType("goog.ui.ControlContent");
goog.ui.MenuItemRenderer = function() {
  goog.ui.ControlRenderer.call(this);
  this.classNameCache_ = [];
};
goog.inherits(goog.ui.MenuItemRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(goog.ui.MenuItemRenderer);
goog.ui.MenuItemRenderer.CSS_CLASS = goog.getCssName("goog-menuitem");
goog.ui.MenuItemRenderer.CompositeCssClassIndex_ = {HOVER:0, CHECKBOX:1, CONTENT:2};
goog.ui.MenuItemRenderer.prototype.getCompositeCssClass_ = function(index) {
  var result = this.classNameCache_[index];
  if (!result) {
    switch(index) {
      case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:
        result = goog.getCssName(this.getStructuralCssClass(), "highlight");
        break;
      case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:
        result = goog.getCssName(this.getStructuralCssClass(), "checkbox");
        break;
      case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:
        result = goog.getCssName(this.getStructuralCssClass(), "content");
        break;
    }
    this.classNameCache_[index] = result;
  }
  return result;
};
goog.ui.MenuItemRenderer.prototype.getAriaRole = function() {
  return goog.a11y.aria.Role.MENU_ITEM;
};
goog.ui.MenuItemRenderer.prototype.createDom = function(item) {
  var element = item.getDomHelper().createDom(goog.dom.TagName.DIV, this.getClassNames(item).join(" "), this.createContent(item.getContent(), item.getDomHelper()));
  this.setEnableCheckBoxStructure(item, element, item.isSupportedState(goog.ui.Component.State.SELECTED) || item.isSupportedState(goog.ui.Component.State.CHECKED));
  return element;
};
goog.ui.MenuItemRenderer.prototype.getContentElement = function(element) {
  return element && element.firstChild;
};
goog.ui.MenuItemRenderer.prototype.decorate = function(item, element) {
  goog.asserts.assert(element);
  if (!this.hasContentStructure(element)) {
    element.appendChild(this.createContent(element.childNodes, item.getDomHelper()));
  }
  if (goog.dom.classlist.contains(element, goog.getCssName("goog-option"))) {
    item.setCheckable(true);
    this.setCheckable(item, element, true);
  }
  return goog.ui.MenuItemRenderer.superClass_.decorate.call(this, item, element);
};
goog.ui.MenuItemRenderer.prototype.setContent = function(element, content) {
  var contentElement = this.getContentElement(element);
  var checkBoxElement = this.hasCheckBoxStructure(element) ? contentElement.firstChild : null;
  goog.ui.MenuItemRenderer.superClass_.setContent.call(this, element, content);
  if (checkBoxElement && !this.hasCheckBoxStructure(element)) {
    contentElement.insertBefore(checkBoxElement, contentElement.firstChild || null);
  }
};
goog.ui.MenuItemRenderer.prototype.hasContentStructure = function(element) {
  var child = goog.dom.getFirstElementChild(element);
  var contentClassName = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
  return !!child && goog.dom.classlist.contains(child, contentClassName);
};
goog.ui.MenuItemRenderer.prototype.createContent = function(content, dom) {
  var contentClassName = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
  return dom.createDom(goog.dom.TagName.DIV, contentClassName, content);
};
goog.ui.MenuItemRenderer.prototype.setSelectable = function(item, element, selectable) {
  if (item && element) {
    this.setEnableCheckBoxStructure(item, element, selectable);
  }
};
goog.ui.MenuItemRenderer.prototype.setCheckable = function(item, element, checkable) {
  if (item && element) {
    this.setEnableCheckBoxStructure(item, element, checkable);
  }
};
goog.ui.MenuItemRenderer.prototype.hasCheckBoxStructure = function(element) {
  var contentElement = this.getContentElement(element);
  if (contentElement) {
    var child = contentElement.firstChild;
    var checkboxClassName = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
    return !!child && goog.dom.isElement(child) && goog.dom.classlist.contains(child, checkboxClassName);
  }
  return false;
};
goog.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure = function(item, element, enable) {
  this.setAriaRole(element, item.getPreferredAriaRole());
  this.setAriaStates(item, element);
  if (enable != this.hasCheckBoxStructure(element)) {
    goog.dom.classlist.enable(element, goog.getCssName("goog-option"), enable);
    var contentElement = this.getContentElement(element);
    if (enable) {
      var checkboxClassName = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
      contentElement.insertBefore(item.getDomHelper().createDom(goog.dom.TagName.DIV, checkboxClassName), contentElement.firstChild || null);
    } else {
      contentElement.removeChild(contentElement.firstChild);
    }
  }
};
goog.ui.MenuItemRenderer.prototype.getClassForState = function(state) {
  switch(state) {
    case goog.ui.Component.State.HOVER:
      return this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
    case goog.ui.Component.State.CHECKED:
    case goog.ui.Component.State.SELECTED:
      return goog.getCssName("goog-option-selected");
    default:
      return goog.ui.MenuItemRenderer.superClass_.getClassForState.call(this, state);
  }
};
goog.ui.MenuItemRenderer.prototype.getStateFromClass = function(className) {
  var hoverClassName = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
  switch(className) {
    case goog.getCssName("goog-option-selected"):
      return goog.ui.Component.State.CHECKED;
    case hoverClassName:
      return goog.ui.Component.State.HOVER;
    default:
      return goog.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this, className);
  }
};
goog.ui.MenuItemRenderer.prototype.getCssClass = function() {
  return goog.ui.MenuItemRenderer.CSS_CLASS;
};

//# sourceMappingURL=goog.ui.menuitemrenderer.js.map
