goog.provide("goog.ui.MenuItem");
goog.forwardDeclare("goog.ui.Menu");
goog.require("goog.a11y.aria.Role");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.classlist");
goog.require("goog.math.Coordinate");
goog.require("goog.string");
goog.require("goog.ui.Component");
goog.require("goog.ui.Control");
goog.require("goog.ui.MenuItemRenderer");
goog.require("goog.ui.registry");
goog.requireType("goog.events.KeyCodes");
goog.requireType("goog.ui.ControlContent");
goog.ui.MenuItem = function(content, opt_model, opt_domHelper, opt_renderer) {
  goog.ui.Control.call(this, content, opt_renderer || goog.ui.MenuItemRenderer.getInstance(), opt_domHelper);
  this.setValue(opt_model);
};
goog.inherits(goog.ui.MenuItem, goog.ui.Control);
goog.ui.MenuItem.prototype.mnemonicKey_;
goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_ = goog.getCssName("goog-menuitem-mnemonic-separator");
goog.ui.MenuItem.ACCELERATOR_CLASS = goog.getCssName("goog-menuitem-accel");
goog.ui.MenuItem.prototype.getValue = function() {
  var model = this.getModel();
  return model != null ? model : this.getCaption();
};
goog.ui.MenuItem.prototype.setValue = function(value) {
  this.setModel(value);
};
goog.ui.MenuItem.prototype.setSupportedState = function(state, support) {
  goog.ui.MenuItem.base(this, "setSupportedState", state, support);
  switch(state) {
    case goog.ui.Component.State.SELECTED:
      this.setSelectableInternal_(support);
      break;
    case goog.ui.Component.State.CHECKED:
      this.setCheckableInternal_(support);
      break;
  }
};
goog.ui.MenuItem.prototype.setSelectable = function(selectable) {
  this.setSupportedState(goog.ui.Component.State.SELECTED, selectable);
};
goog.ui.MenuItem.prototype.setSelectableInternal_ = function(selectable) {
  if (this.isChecked() && !selectable) {
    this.setChecked(false);
  }
  var element = this.getElement();
  if (element) {
    this.getRenderer().setSelectable(this, element, selectable);
  }
};
goog.ui.MenuItem.prototype.setCheckable = function(checkable) {
  this.setSupportedState(goog.ui.Component.State.CHECKED, checkable);
};
goog.ui.MenuItem.prototype.setCheckableInternal_ = function(checkable) {
  var element = this.getElement();
  if (element) {
    this.getRenderer().setCheckable(this, element, checkable);
  }
};
goog.ui.MenuItem.prototype.getCaption = function() {
  var content = this.getContent();
  if (Array.isArray(content)) {
    var acceleratorClass = goog.ui.MenuItem.ACCELERATOR_CLASS;
    var mnemonicWrapClass = goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_;
    var caption = goog.array.map(content, function(node) {
      if (goog.dom.isElement(node) && (goog.dom.classlist.contains(node, acceleratorClass) || goog.dom.classlist.contains(node, mnemonicWrapClass))) {
        return "";
      } else {
        return goog.dom.getRawTextContent(node);
      }
    }).join("");
    return goog.string.collapseBreakingSpaces(caption);
  }
  return goog.ui.MenuItem.superClass_.getCaption.call(this);
};
goog.ui.MenuItem.prototype.getAccelerator = function() {
  var dom = this.getDomHelper();
  var content = this.getContent();
  if (Array.isArray(content)) {
    var acceleratorEl = goog.array.find(content, function(e) {
      return goog.dom.classlist.contains(e, goog.ui.MenuItem.ACCELERATOR_CLASS);
    });
    if (acceleratorEl) {
      return dom.getTextContent(acceleratorEl);
    }
  }
  return null;
};
goog.ui.MenuItem.prototype.handleMouseUp = function(e) {
  var parentMenu = this.getParent();
  if (parentMenu) {
    var oldCoords = parentMenu.openingCoords;
    parentMenu.openingCoords = null;
    if (oldCoords && typeof e.clientX === "number") {
      var newCoords = new goog.math.Coordinate(e.clientX, e.clientY);
      if (goog.math.Coordinate.equals(oldCoords, newCoords)) {
        return;
      }
    }
  }
  goog.ui.MenuItem.base(this, "handleMouseUp", e);
};
goog.ui.MenuItem.prototype.handleKeyEventInternal = function(e) {
  if (e.keyCode == this.getMnemonic() && this.performActionInternal(e)) {
    return true;
  } else {
    return goog.ui.MenuItem.base(this, "handleKeyEventInternal", e);
  }
};
goog.ui.MenuItem.prototype.setMnemonic = function(key) {
  this.mnemonicKey_ = key;
};
goog.ui.MenuItem.prototype.getMnemonic = function() {
  return this.mnemonicKey_;
};
goog.ui.registry.setDecoratorByClassName(goog.ui.MenuItemRenderer.CSS_CLASS, function() {
  return new goog.ui.MenuItem(null);
});
goog.ui.MenuItem.prototype.getPreferredAriaRole = function() {
  if (this.isSupportedState(goog.ui.Component.State.CHECKED)) {
    return goog.a11y.aria.Role.MENU_ITEM_CHECKBOX;
  }
  if (this.isSupportedState(goog.ui.Component.State.SELECTED)) {
    return goog.a11y.aria.Role.MENU_ITEM_RADIO;
  }
  return goog.ui.MenuItem.base(this, "getPreferredAriaRole");
};
goog.ui.MenuItem.prototype.getParent = function() {
  return goog.ui.Control.prototype.getParent.call(this);
};
goog.ui.MenuItem.prototype.getParentEventTarget = function() {
  return goog.ui.Control.prototype.getParentEventTarget.call(this);
};

//# sourceMappingURL=goog.ui.menuitem.js.map
