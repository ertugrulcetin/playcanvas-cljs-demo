goog.provide("goog.ui.PopupMenu");
goog.require("goog.events");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.BrowserEvent.MouseButton");
goog.require("goog.events.EventType");
goog.require("goog.events.KeyCodes");
goog.require("goog.positioning.AnchoredViewportPosition");
goog.require("goog.positioning.Corner");
goog.require("goog.positioning.MenuAnchoredPosition");
goog.require("goog.positioning.Overflow");
goog.require("goog.positioning.ViewportClientPosition");
goog.require("goog.structs.Map");
goog.require("goog.style");
goog.require("goog.ui.Component");
goog.require("goog.ui.Menu");
goog.require("goog.ui.PopupBase");
goog.requireType("goog.dom.DomHelper");
goog.requireType("goog.events.Event");
goog.requireType("goog.math.Box");
goog.requireType("goog.positioning.AbstractPosition");
goog.requireType("goog.ui.MenuRenderer");
goog.ui.PopupMenu = function(opt_domHelper, opt_renderer) {
  goog.ui.Menu.call(this, opt_domHelper, opt_renderer);
  this.setAllowAutoFocus(true);
  this.setVisible(false, true);
  this.targets_ = new goog.structs.Map();
};
goog.inherits(goog.ui.PopupMenu, goog.ui.Menu);
goog.ui.PopupMenu.prototype.toggleMode_ = false;
goog.ui.PopupMenu.prototype.shiftOverride_ = false;
goog.ui.PopupMenu.prototype.lastHide_ = 0;
goog.ui.PopupMenu.prototype.currentAnchor_ = null;
goog.ui.PopupMenu.prototype.decorateInternal = function(element) {
  goog.ui.PopupMenu.superClass_.decorateInternal.call(this, element);
  var htmlFor = element.getAttribute("for") || element.htmlFor;
  if (htmlFor) {
    this.attach(this.getDomHelper().getElement(htmlFor), goog.positioning.Corner.BOTTOM_LEFT);
  }
};
goog.ui.PopupMenu.prototype.enterDocument = function() {
  goog.ui.PopupMenu.superClass_.enterDocument.call(this);
  this.targets_.forEach(this.attachEvent_, this);
  var handler = this.getHandler();
  handler.listen(this, goog.ui.Component.EventType.ACTION, this.onAction_);
  handler.listen(this.getDomHelper().getDocument(), goog.events.EventType.MOUSEDOWN, this.onDocClick, true);
};
goog.ui.PopupMenu.prototype.attach = function(element, opt_targetCorner, opt_menuCorner, opt_contextMenu, opt_margin) {
  if (this.isAttachTarget(element)) {
    return;
  }
  var target = this.createAttachTarget(element, opt_targetCorner, opt_menuCorner, opt_contextMenu, opt_margin);
  if (this.isInDocument()) {
    this.attachEvent_(target);
  }
  var handler = goog.partial(this.onMenuKeyboardAction_, element);
  if (this.getElement()) {
    this.getHandler().listen(this.getElement(), goog.events.EventType.KEYDOWN, handler);
  }
};
goog.ui.PopupMenu.prototype.onMenuKeyboardAction_ = function(element, e) {
  if (e.keyCode == goog.events.KeyCodes.ESC) {
    element.focus();
    return;
  }
  var highlightedItem = this.getChildAt(this.getHighlightedIndex());
  if (!highlightedItem) {
    return;
  }
  var targetElement = highlightedItem.getElement();
  var event = new goog.events.BrowserEvent(e.getBrowserEvent(), targetElement);
  event.target = targetElement;
  if (e.keyCode == goog.events.KeyCodes.SPACE || e.keyCode == goog.events.KeyCodes.ENTER) {
    goog.events.fireListeners(targetElement, goog.events.EventType.KEYDOWN, false, event);
  }
  if (e.keyCode == goog.events.KeyCodes.SPACE) {
    this.hide();
  }
};
goog.ui.PopupMenu.prototype.createAttachTarget = function(element, opt_targetCorner, opt_menuCorner, opt_contextMenu, opt_margin) {
  if (!element) {
    return null;
  }
  var target = {element_:element, targetCorner_:opt_targetCorner, menuCorner_:opt_menuCorner, eventType_:opt_contextMenu ? goog.events.EventType.CONTEXTMENU : goog.events.EventType.MOUSEDOWN, margin_:opt_margin};
  this.targets_.set(goog.getUid(element), target);
  return target;
};
goog.ui.PopupMenu.prototype.getAttachTarget = function(element) {
  return element ? this.targets_.get(goog.getUid(element)) : null;
};
goog.ui.PopupMenu.prototype.isAttachTarget = function(element) {
  return element ? this.targets_.containsKey(goog.getUid(element)) : false;
};
goog.ui.PopupMenu.prototype.getAttachedElement = function() {
  return this.currentAnchor_;
};
goog.ui.PopupMenu.prototype.attachEvent_ = function(target) {
  this.getHandler().listen(target.element_, target.eventType_, this.onTargetClick_);
  if (target.eventType_ != goog.events.EventType.CONTEXTMENU) {
    this.getHandler().listen(target.element_, goog.events.EventType.KEYDOWN, this.onTargetKeyboardAction_);
  }
};
goog.ui.PopupMenu.prototype.detachAll = function() {
  if (this.isInDocument()) {
    var keys = this.targets_.getKeys();
    for (var i = 0; i < keys.length; i++) {
      this.detachEvent_(this.targets_.get(keys[i]));
    }
  }
  this.targets_.clear();
};
goog.ui.PopupMenu.prototype.detach = function(element) {
  if (!this.isAttachTarget(element)) {
    throw new Error("Menu not attached to provided element, unable to detach.");
  }
  var key = goog.getUid(element);
  if (this.isInDocument()) {
    this.detachEvent_(this.targets_.get(key));
  }
  this.targets_.remove(key);
};
goog.ui.PopupMenu.prototype.detachEvent_ = function(target) {
  this.getHandler().unlisten(target.element_, target.eventType_, this.onTargetClick_);
};
goog.ui.PopupMenu.prototype.setToggleMode = function(toggle) {
  this.toggleMode_ = toggle;
};
goog.ui.PopupMenu.prototype.setShiftOverride = function(shiftOverride) {
  this.shiftOverride_ = shiftOverride;
};
goog.ui.PopupMenu.prototype.getToggleMode = function() {
  return this.toggleMode_;
};
goog.ui.PopupMenu.prototype.getShiftOverride = function() {
  return this.shiftOverride_;
};
goog.ui.PopupMenu.prototype.showWithPosition = function(position, opt_menuCorner, opt_margin, opt_anchor) {
  var isVisible = this.isVisible();
  if (this.isOrWasRecentlyVisible() && this.toggleMode_) {
    this.hide();
    return;
  }
  this.currentAnchor_ = opt_anchor || null;
  if (!this.dispatchEvent(goog.ui.Component.EventType.BEFORE_SHOW)) {
    return;
  }
  var menuCorner = typeof opt_menuCorner != "undefined" ? opt_menuCorner : goog.positioning.Corner.TOP_START;
  if (!isVisible) {
    this.getElement().style.visibility = "hidden";
  }
  goog.style.setElementShown(this.getElement(), true);
  position.reposition(this.getElement(), menuCorner, opt_margin);
  if (!isVisible) {
    this.getElement().style.visibility = "visible";
  }
  this.setHighlightedIndex(-1);
  this.setVisible(true);
};
goog.ui.PopupMenu.prototype.showMenu = function(target, x, y) {
  var position = target.targetCorner_ !== undefined ? new goog.positioning.AnchoredViewportPosition(target.element_, target.targetCorner_, true) : new goog.positioning.ViewportClientPosition(x, y);
  if (position.setLastResortOverflow) {
    position.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.ADJUST_Y);
  }
  this.showWithPosition(position, target.menuCorner_, target.margin_, target.element_);
};
goog.ui.PopupMenu.prototype.showAt = function(x, y, opt_menuCorner) {
  this.showWithPosition(new goog.positioning.ViewportClientPosition(x, y), opt_menuCorner);
};
goog.ui.PopupMenu.prototype.showAtElement = function(element, targetCorner, opt_menuCorner) {
  this.showWithPosition(new goog.positioning.MenuAnchoredPosition(element, targetCorner, true), opt_menuCorner, null, element);
};
goog.ui.PopupMenu.prototype.hide = function() {
  if (!this.isVisible()) {
    return;
  }
  this.setVisible(false);
  if (!this.isVisible()) {
    this.lastHide_ = Date.now();
    this.currentAnchor_ = null;
  }
};
goog.ui.PopupMenu.prototype.isOrWasRecentlyVisible = function() {
  return this.isVisible() || this.wasRecentlyHidden();
};
goog.ui.PopupMenu.prototype.wasRecentlyHidden = function() {
  return Date.now() - this.lastHide_ < goog.ui.PopupBase.DEBOUNCE_DELAY_MS;
};
goog.ui.PopupMenu.prototype.onAction_ = function(opt_e) {
  this.hide();
};
goog.ui.PopupMenu.prototype.onTargetClick_ = function(e) {
  if (this.shiftOverride_ && e.shiftKey && e.button == goog.events.BrowserEvent.MouseButton.RIGHT) {
    return;
  }
  this.onTargetActivation_(e);
};
goog.ui.PopupMenu.prototype.onTargetKeyboardAction_ = function(e) {
  if (e.keyCode == goog.events.KeyCodes.SPACE || e.keyCode == goog.events.KeyCodes.ENTER || e.keyCode == goog.events.KeyCodes.DOWN) {
    this.onTargetActivation_(e);
  }
  if (e.keyCode == goog.events.KeyCodes.DOWN) {
    this.highlightFirst();
  }
};
goog.ui.PopupMenu.prototype.onTargetActivation_ = function(e) {
  var keys = this.targets_.getKeys();
  for (var i = 0; i < keys.length; i++) {
    var target = this.targets_.get(keys[i]);
    if (target.element_ == e.currentTarget) {
      this.showMenu(target, e.clientX, e.clientY);
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }
};
goog.ui.PopupMenu.prototype.onDocClick = function(e) {
  if (this.isVisible() && !this.containsElement(e.target)) {
    this.hide();
  }
};
goog.ui.PopupMenu.prototype.handleBlur = function(e) {
  goog.ui.PopupMenu.superClass_.handleBlur.call(this, e);
  this.hide();
};
goog.ui.PopupMenu.prototype.disposeInternal = function() {
  goog.ui.PopupMenu.superClass_.disposeInternal.call(this);
  if (this.targets_) {
    this.targets_.clear();
    delete this.targets_;
  }
};

//# sourceMappingURL=goog.ui.popupmenu.js.map
