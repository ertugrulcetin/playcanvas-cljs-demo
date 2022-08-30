goog.provide("goog.ui.Control");
goog.require("goog.Disposable");
goog.require("goog.array");
goog.require("goog.dispose");
goog.require("goog.dom");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventType");
goog.require("goog.events.KeyCodes");
goog.require("goog.events.KeyHandler");
goog.require("goog.string");
goog.require("goog.ui.Component");
goog.require("goog.ui.ComponentUtil");
goog.require("goog.ui.ControlContent");
goog.require("goog.ui.ControlRenderer");
goog.require("goog.ui.registry");
goog.require("goog.userAgent");
goog.requireType("goog.a11y.aria.Role");
goog.requireType("goog.events.KeyEvent");
goog.ui.Control = function(opt_content, opt_renderer, opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
  this.renderer_ = opt_renderer || goog.ui.registry.getDefaultRenderer(this.constructor);
  this.setContentInternal(opt_content !== undefined ? opt_content : null);
  this.ariaLabel_ = null;
  this.ieMouseEventSequenceSimulator_;
};
goog.inherits(goog.ui.Control, goog.ui.Component);
goog.ui.Control.registerDecorator = goog.ui.registry.setDecoratorByClassName;
goog.ui.Control.getDecorator = goog.ui.registry.getDecorator;
goog.ui.Control.prototype.renderer_;
goog.ui.Control.prototype.content_ = null;
goog.ui.Control.prototype.state_ = 0;
goog.ui.Control.prototype.supportedStates_ = goog.ui.Component.State.DISABLED | goog.ui.Component.State.HOVER | goog.ui.Component.State.ACTIVE | goog.ui.Component.State.FOCUSED;
goog.ui.Control.prototype.autoStates_ = goog.ui.Component.State.ALL;
goog.ui.Control.prototype.statesWithTransitionEvents_ = 0;
goog.ui.Control.prototype.visible_ = true;
goog.ui.Control.prototype.keyHandler_;
goog.ui.Control.prototype.extraClassNames_ = null;
goog.ui.Control.prototype.handleMouseEvents_ = true;
goog.ui.Control.prototype.allowTextSelection_ = false;
goog.ui.Control.prototype.preferredAriaRole_ = null;
goog.ui.Control.prototype.isHandleMouseEvents = function() {
  return this.handleMouseEvents_;
};
goog.ui.Control.prototype.setHandleMouseEvents = function(enable) {
  if (this.isInDocument() && enable != this.handleMouseEvents_) {
    this.enableMouseEventHandling_(enable);
  }
  this.handleMouseEvents_ = enable;
};
goog.ui.Control.prototype.getKeyEventTarget = function() {
  return this.renderer_.getKeyEventTarget(this);
};
goog.ui.Control.prototype.getKeyHandler = function() {
  return this.keyHandler_ || (this.keyHandler_ = new goog.events.KeyHandler());
};
goog.ui.Control.prototype.getRenderer = function() {
  return this.renderer_;
};
goog.ui.Control.prototype.setRenderer = function(renderer) {
  if (this.isInDocument()) {
    throw new Error(goog.ui.Component.Error.ALREADY_RENDERED);
  }
  if (this.getElement()) {
    this.setElementInternal(null);
  }
  this.renderer_ = renderer;
};
goog.ui.Control.prototype.getExtraClassNames = function() {
  return this.extraClassNames_;
};
goog.ui.Control.prototype.addClassName = function(className) {
  if (className) {
    if (this.extraClassNames_) {
      if (!goog.array.contains(this.extraClassNames_, className)) {
        this.extraClassNames_.push(className);
      }
    } else {
      this.extraClassNames_ = [className];
    }
    this.renderer_.enableExtraClassName(this, className, true);
  }
};
goog.ui.Control.prototype.removeClassName = function(className) {
  if (className && this.extraClassNames_ && goog.array.remove(this.extraClassNames_, className)) {
    if (this.extraClassNames_.length == 0) {
      this.extraClassNames_ = null;
    }
    this.renderer_.enableExtraClassName(this, className, false);
  }
};
goog.ui.Control.prototype.enableClassName = function(className, enable) {
  if (enable) {
    this.addClassName(className);
  } else {
    this.removeClassName(className);
  }
};
goog.ui.Control.prototype.createDom = function() {
  var element = this.renderer_.createDom(this);
  this.setElementInternal(element);
  this.renderer_.setAriaRole(element, this.getPreferredAriaRole());
  if (!this.isAllowTextSelection()) {
    this.renderer_.setAllowTextSelection(element, false);
  }
  if (!this.isVisible()) {
    this.renderer_.setVisible(element, false);
  }
};
goog.ui.Control.prototype.getPreferredAriaRole = function() {
  return this.preferredAriaRole_;
};
goog.ui.Control.prototype.setPreferredAriaRole = function(role) {
  this.preferredAriaRole_ = role;
};
goog.ui.Control.prototype.getAriaLabel = function() {
  return this.ariaLabel_;
};
goog.ui.Control.prototype.setAriaLabel = function(label) {
  this.ariaLabel_ = label;
  var element = this.getElement();
  if (element) {
    this.renderer_.setAriaLabel(element, label);
  }
};
goog.ui.Control.prototype.getContentElement = function() {
  return this.renderer_.getContentElement(this.getElement());
};
goog.ui.Control.prototype.canDecorate = function(element) {
  return this.renderer_.canDecorate(element);
};
goog.ui.Control.prototype.decorateInternal = function(element) {
  element = this.renderer_.decorate(this, element);
  this.setElementInternal(element);
  this.renderer_.setAriaRole(element, this.getPreferredAriaRole());
  if (!this.isAllowTextSelection()) {
    this.renderer_.setAllowTextSelection(element, false);
  }
  this.visible_ = element.style.display != "none";
};
goog.ui.Control.prototype.enterDocument = function() {
  goog.ui.Control.superClass_.enterDocument.call(this);
  this.renderer_.setAriaStates(this, this.getElementStrict());
  this.renderer_.initializeDom(this);
  if (this.supportedStates_ & ~goog.ui.Component.State.DISABLED) {
    if (this.isHandleMouseEvents()) {
      this.enableMouseEventHandling_(true);
    }
    if (this.isSupportedState(goog.ui.Component.State.FOCUSED)) {
      var keyTarget = this.getKeyEventTarget();
      if (keyTarget) {
        var keyHandler = this.getKeyHandler();
        keyHandler.attach(keyTarget);
        this.getHandler().listen(keyHandler, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(keyTarget, goog.events.EventType.FOCUS, this.handleFocus).listen(keyTarget, goog.events.EventType.BLUR, this.handleBlur);
      }
    }
  }
};
goog.ui.Control.prototype.enableMouseEventHandling_ = function(enable) {
  var MouseEventType = goog.ui.ComponentUtil.getMouseEventType(this);
  var handler = this.getHandler();
  var element = this.getElement();
  if (enable) {
    handler.listen(element, MouseEventType.MOUSEDOWN, this.handleMouseDown).listen(element, [MouseEventType.MOUSEUP, MouseEventType.MOUSECANCEL], this.handleMouseUp).listen(element, goog.events.EventType.MOUSEOVER, this.handleMouseOver).listen(element, goog.events.EventType.MOUSEOUT, this.handleMouseOut);
    if (this.pointerEventsEnabled()) {
      handler.listen(element, goog.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_);
    }
    if (this.handleContextMenu != goog.nullFunction) {
      handler.listen(element, goog.events.EventType.CONTEXTMENU, this.handleContextMenu);
    }
    if (goog.userAgent.IE) {
      if (!goog.userAgent.isVersionOrHigher(9)) {
        handler.listen(element, goog.events.EventType.DBLCLICK, this.handleDblClick);
      }
      if (!this.ieMouseEventSequenceSimulator_) {
        this.ieMouseEventSequenceSimulator_ = new goog.ui.Control.IeMouseEventSequenceSimulator_(this);
        this.registerDisposable(this.ieMouseEventSequenceSimulator_);
      }
    }
  } else {
    handler.unlisten(element, MouseEventType.MOUSEDOWN, this.handleMouseDown).unlisten(element, [MouseEventType.MOUSEUP, MouseEventType.MOUSECANCEL], this.handleMouseUp).unlisten(element, goog.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(element, goog.events.EventType.MOUSEOUT, this.handleMouseOut);
    if (this.pointerEventsEnabled()) {
      handler.unlisten(element, goog.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_);
    }
    if (this.handleContextMenu != goog.nullFunction) {
      handler.unlisten(element, goog.events.EventType.CONTEXTMENU, this.handleContextMenu);
    }
    if (goog.userAgent.IE) {
      if (!goog.userAgent.isVersionOrHigher(9)) {
        handler.unlisten(element, goog.events.EventType.DBLCLICK, this.handleDblClick);
      }
      goog.dispose(this.ieMouseEventSequenceSimulator_);
      this.ieMouseEventSequenceSimulator_ = null;
    }
  }
};
goog.ui.Control.prototype.exitDocument = function() {
  goog.ui.Control.superClass_.exitDocument.call(this);
  if (this.keyHandler_) {
    this.keyHandler_.detach();
  }
  if (this.isVisible() && this.isEnabled()) {
    this.renderer_.setFocusable(this, false);
  }
};
goog.ui.Control.prototype.disposeInternal = function() {
  goog.ui.Control.superClass_.disposeInternal.call(this);
  if (this.keyHandler_) {
    this.keyHandler_.dispose();
    delete this.keyHandler_;
  }
  delete this.renderer_;
  this.content_ = null;
  this.extraClassNames_ = null;
  this.ieMouseEventSequenceSimulator_ = null;
};
goog.ui.Control.prototype.getContent = function() {
  return this.content_;
};
goog.ui.Control.prototype.setContent = function(content) {
  this.renderer_.setContent(this.getElement(), content);
  this.setContentInternal(content);
};
goog.ui.Control.prototype.setContentInternal = function(content) {
  this.content_ = content;
};
goog.ui.Control.prototype.getCaption = function() {
  var content = this.getContent();
  if (!content) {
    return "";
  }
  var caption = typeof content === "string" ? content : Array.isArray(content) ? content.map(goog.dom.getRawTextContent).join("") : goog.dom.getTextContent(content);
  return goog.string.collapseBreakingSpaces(caption);
};
goog.ui.Control.prototype.setCaption = function(caption) {
  this.setContent(caption);
};
goog.ui.Control.prototype.setRightToLeft = function(rightToLeft) {
  goog.ui.Control.superClass_.setRightToLeft.call(this, rightToLeft);
  var element = this.getElement();
  if (element) {
    this.renderer_.setRightToLeft(element, rightToLeft);
  }
};
goog.ui.Control.prototype.isAllowTextSelection = function() {
  return this.allowTextSelection_;
};
goog.ui.Control.prototype.setAllowTextSelection = function(allow) {
  this.allowTextSelection_ = allow;
  var element = this.getElement();
  if (element) {
    this.renderer_.setAllowTextSelection(element, allow);
  }
};
goog.ui.Control.prototype.isVisible = function() {
  return this.visible_;
};
goog.ui.Control.prototype.setVisible = function(visible, opt_force) {
  if (opt_force || this.visible_ != visible && this.dispatchEvent(visible ? goog.ui.Component.EventType.SHOW : goog.ui.Component.EventType.HIDE)) {
    var element = this.getElement();
    if (element) {
      this.renderer_.setVisible(element, visible);
    }
    if (this.isEnabled()) {
      this.renderer_.setFocusable(this, visible);
    }
    this.visible_ = visible;
    return true;
  }
  return false;
};
goog.ui.Control.prototype.isEnabled = function() {
  return !this.hasState(goog.ui.Component.State.DISABLED);
};
goog.ui.Control.prototype.isParentDisabled_ = function() {
  var parent = this.getParent();
  return !!parent && typeof parent.isEnabled == "function" && !parent.isEnabled();
};
goog.ui.Control.prototype.setEnabled = function(enable) {
  if (!this.isParentDisabled_() && this.isTransitionAllowed(goog.ui.Component.State.DISABLED, !enable)) {
    if (!enable) {
      this.setActive(false);
      this.setHighlighted(false);
    }
    if (this.isVisible()) {
      this.renderer_.setFocusable(this, enable);
    }
    this.setState(goog.ui.Component.State.DISABLED, !enable, true);
  }
};
goog.ui.Control.prototype.isHighlighted = function() {
  return this.hasState(goog.ui.Component.State.HOVER);
};
goog.ui.Control.prototype.setHighlighted = function(highlight) {
  if (this.isTransitionAllowed(goog.ui.Component.State.HOVER, highlight)) {
    this.setState(goog.ui.Component.State.HOVER, highlight);
  }
};
goog.ui.Control.prototype.isActive = function() {
  return this.hasState(goog.ui.Component.State.ACTIVE);
};
goog.ui.Control.prototype.setActive = function(active) {
  if (this.isTransitionAllowed(goog.ui.Component.State.ACTIVE, active)) {
    this.setState(goog.ui.Component.State.ACTIVE, active);
  }
};
goog.ui.Control.prototype.isSelected = function() {
  return this.hasState(goog.ui.Component.State.SELECTED);
};
goog.ui.Control.prototype.setSelected = function(select) {
  if (this.isTransitionAllowed(goog.ui.Component.State.SELECTED, select)) {
    this.setState(goog.ui.Component.State.SELECTED, select);
  }
};
goog.ui.Control.prototype.isChecked = function() {
  return this.hasState(goog.ui.Component.State.CHECKED);
};
goog.ui.Control.prototype.setChecked = function(check) {
  if (this.isTransitionAllowed(goog.ui.Component.State.CHECKED, check)) {
    this.setState(goog.ui.Component.State.CHECKED, check);
  }
};
goog.ui.Control.prototype.isFocused = function() {
  return this.hasState(goog.ui.Component.State.FOCUSED);
};
goog.ui.Control.prototype.setFocused = function(focused) {
  if (this.isTransitionAllowed(goog.ui.Component.State.FOCUSED, focused)) {
    this.setState(goog.ui.Component.State.FOCUSED, focused);
  }
};
goog.ui.Control.prototype.isOpen = function() {
  return this.hasState(goog.ui.Component.State.OPENED);
};
goog.ui.Control.prototype.setOpen = function(open) {
  if (this.isTransitionAllowed(goog.ui.Component.State.OPENED, open)) {
    this.setState(goog.ui.Component.State.OPENED, open);
  }
};
goog.ui.Control.prototype.getState = function() {
  return this.state_;
};
goog.ui.Control.prototype.hasState = function(state) {
  return !!(this.state_ & state);
};
goog.ui.Control.prototype.setState = function(state, enable, opt_calledFrom) {
  if (!opt_calledFrom && state == goog.ui.Component.State.DISABLED) {
    this.setEnabled(!enable);
    return;
  }
  if (this.isSupportedState(state) && enable != this.hasState(state)) {
    this.renderer_.setState(this, state, enable);
    this.state_ = enable ? this.state_ | state : this.state_ & ~state;
  }
};
goog.ui.Control.prototype.setStateInternal = function(state) {
  this.state_ = state;
};
goog.ui.Control.prototype.isSupportedState = function(state) {
  return !!(this.supportedStates_ & state);
};
goog.ui.Control.prototype.setSupportedState = function(state, support) {
  if (this.isInDocument() && this.hasState(state) && !support) {
    throw new Error(goog.ui.Component.Error.ALREADY_RENDERED);
  }
  if (!support && this.hasState(state)) {
    this.setState(state, false);
  }
  this.supportedStates_ = support ? this.supportedStates_ | state : this.supportedStates_ & ~state;
};
goog.ui.Control.prototype.isAutoState = function(state) {
  return !!(this.autoStates_ & state) && this.isSupportedState(state);
};
goog.ui.Control.prototype.setAutoStates = function(states, enable) {
  this.autoStates_ = enable ? this.autoStates_ | states : this.autoStates_ & ~states;
};
goog.ui.Control.prototype.isDispatchTransitionEvents = function(state) {
  return !!(this.statesWithTransitionEvents_ & state) && this.isSupportedState(state);
};
goog.ui.Control.prototype.setDispatchTransitionEvents = function(states, enable) {
  this.statesWithTransitionEvents_ = enable ? this.statesWithTransitionEvents_ | states : this.statesWithTransitionEvents_ & ~states;
};
goog.ui.Control.prototype.isTransitionAllowed = function(state, enable) {
  return this.isSupportedState(state) && this.hasState(state) != enable && (!(this.statesWithTransitionEvents_ & state) || this.dispatchEvent(goog.ui.Component.getStateTransitionEvent(state, enable))) && !this.isDisposed();
};
goog.ui.Control.prototype.handleMouseOver = function(e) {
  if (!goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(goog.ui.Component.State.HOVER)) {
    this.setHighlighted(true);
  }
};
goog.ui.Control.prototype.handleMouseOut = function(e) {
  if (!goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.LEAVE)) {
    if (this.isAutoState(goog.ui.Component.State.ACTIVE)) {
      this.setActive(false);
    }
    if (this.isAutoState(goog.ui.Component.State.HOVER)) {
      this.setHighlighted(false);
    }
  }
};
goog.ui.Control.prototype.preventPointerCapture_ = function(e) {
  var elem = e.target;
  if (!!elem.releasePointerCapture) {
    elem.releasePointerCapture(e.pointerId);
  }
};
goog.ui.Control.prototype.handleContextMenu = goog.nullFunction;
goog.ui.Control.isMouseEventWithinElement_ = function(e, elem) {
  return !!e.relatedTarget && goog.dom.contains(elem, e.relatedTarget);
};
goog.ui.Control.prototype.handleMouseDown = function(e) {
  if (this.isEnabled()) {
    if (this.isAutoState(goog.ui.Component.State.HOVER)) {
      this.setHighlighted(true);
    }
    if (e.isMouseActionButton()) {
      if (this.isAutoState(goog.ui.Component.State.ACTIVE)) {
        this.setActive(true);
      }
      if (this.renderer_ && this.renderer_.isFocusable(this)) {
        this.getKeyEventTarget().focus();
      }
    }
  }
  if (!this.isAllowTextSelection() && e.isMouseActionButton()) {
    e.preventDefault();
  }
};
goog.ui.Control.prototype.handleMouseUp = function(e) {
  if (this.isEnabled()) {
    if (this.isAutoState(goog.ui.Component.State.HOVER)) {
      this.setHighlighted(true);
    }
    if (this.isActive() && this.performActionInternal(e) && this.isAutoState(goog.ui.Component.State.ACTIVE)) {
      this.setActive(false);
    }
  }
};
goog.ui.Control.prototype.handleDblClick = function(e) {
  if (this.isEnabled()) {
    this.performActionInternal(e);
  }
};
goog.ui.Control.prototype.performActionInternal = function(e) {
  if (this.isAutoState(goog.ui.Component.State.CHECKED)) {
    this.setChecked(!this.isChecked());
  }
  if (this.isAutoState(goog.ui.Component.State.SELECTED)) {
    this.setSelected(true);
  }
  if (this.isAutoState(goog.ui.Component.State.OPENED)) {
    this.setOpen(!this.isOpen());
  }
  var actionEvent = new goog.events.Event(goog.ui.Component.EventType.ACTION, this);
  if (e) {
    actionEvent.altKey = e.altKey;
    actionEvent.ctrlKey = e.ctrlKey;
    actionEvent.metaKey = e.metaKey;
    actionEvent.shiftKey = e.shiftKey;
    actionEvent.platformModifierKey = e.platformModifierKey;
  }
  return this.dispatchEvent(actionEvent);
};
goog.ui.Control.prototype.handleFocus = function(e) {
  if (this.isAutoState(goog.ui.Component.State.FOCUSED)) {
    this.setFocused(true);
  }
};
goog.ui.Control.prototype.handleBlur = function(e) {
  if (this.isAutoState(goog.ui.Component.State.ACTIVE)) {
    this.setActive(false);
  }
  if (this.isAutoState(goog.ui.Component.State.FOCUSED)) {
    this.setFocused(false);
  }
};
goog.ui.Control.prototype.handleKeyEvent = function(e) {
  if (this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(e)) {
    e.preventDefault();
    e.stopPropagation();
    return true;
  }
  return false;
};
goog.ui.Control.prototype.handleKeyEventInternal = function(e) {
  return e.keyCode == goog.events.KeyCodes.ENTER && this.performActionInternal(e);
};
goog.ui.registry.setDefaultRenderer(goog.ui.Control, goog.ui.ControlRenderer);
goog.ui.registry.setDecoratorByClassName(goog.ui.ControlRenderer.CSS_CLASS, function() {
  return new goog.ui.Control(null);
});
goog.ui.Control.IeMouseEventSequenceSimulator_ = function(control) {
  goog.ui.Control.IeMouseEventSequenceSimulator_.base(this, "constructor");
  this.control_ = control;
  this.clickExpected_ = false;
  this.handler_ = new goog.events.EventHandler(this);
  this.registerDisposable(this.handler_);
  var element = this.control_.getElementStrict();
  var MouseEventType = goog.ui.ComponentUtil.getMouseEventType(control);
  this.handler_.listen(element, MouseEventType.MOUSEDOWN, this.handleMouseDown_).listen(element, MouseEventType.MOUSEUP, this.handleMouseUp_).listen(element, goog.events.EventType.CLICK, this.handleClick_);
};
goog.inherits(goog.ui.Control.IeMouseEventSequenceSimulator_, goog.Disposable);
goog.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_ = !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);
goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseDown_ = function() {
  this.clickExpected_ = false;
};
goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseUp_ = function() {
  this.clickExpected_ = true;
};
goog.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_ = function(e, typeArg) {
  if (!goog.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_) {
    e.button = goog.events.BrowserEvent.MouseButton.LEFT;
    e.type = typeArg;
    return e;
  }
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent(typeArg, e.bubbles, e.cancelable, e.view || null, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, goog.events.BrowserEvent.MouseButton.LEFT, e.relatedTarget || null);
  return event;
};
goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleClick_ = function(e) {
  if (this.clickExpected_) {
    this.clickExpected_ = false;
    return;
  }
  var browserEvent = e;
  var event = browserEvent.getBrowserEvent();
  var origEventButton = event.button;
  var origEventType = event.type;
  var down = goog.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(event, goog.events.EventType.MOUSEDOWN);
  this.control_.handleMouseDown(new goog.events.BrowserEvent(down, browserEvent.currentTarget));
  var up = goog.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(event, goog.events.EventType.MOUSEUP);
  this.control_.handleMouseUp(new goog.events.BrowserEvent(up, browserEvent.currentTarget));
  if (goog.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_) {
    return;
  }
  event.button = origEventButton;
  event.type = origEventType;
};
goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.disposeInternal = function() {
  this.control_ = null;
  goog.ui.Control.IeMouseEventSequenceSimulator_.base(this, "disposeInternal");
};

//# sourceMappingURL=goog.ui.control.js.map
