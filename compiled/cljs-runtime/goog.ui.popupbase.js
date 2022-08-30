goog.provide("goog.ui.PopupBase");
goog.provide("goog.ui.PopupBase.EventType");
goog.provide("goog.ui.PopupBase.Type");
goog.require("goog.Timer");
goog.require("goog.array");
goog.require("goog.dispose");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.events");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventTarget");
goog.require("goog.events.EventType");
goog.require("goog.events.KeyCodes");
goog.require("goog.fx.Transition");
goog.require("goog.style");
goog.require("goog.userAgent");
goog.requireType("goog.events.BrowserEvent");
goog.ui.PopupBase = function(opt_element, opt_type) {
  goog.events.EventTarget.call(this);
  this.handler_ = new goog.events.EventHandler(this);
  this.setElement(opt_element || null);
  if (opt_type) {
    this.setType(opt_type);
  }
};
goog.inherits(goog.ui.PopupBase, goog.events.EventTarget);
goog.ui.PopupBase.Type = {TOGGLE_DISPLAY:"toggle_display", MOVE_OFFSCREEN:"move_offscreen"};
goog.ui.PopupBase.prototype.element_ = null;
goog.ui.PopupBase.prototype.autoHide_ = true;
goog.ui.PopupBase.prototype.autoHidePartners_ = null;
goog.ui.PopupBase.prototype.autoHideRegion_ = null;
goog.ui.PopupBase.prototype.isVisible_ = false;
goog.ui.PopupBase.prototype.shouldHideAsync_ = false;
goog.ui.PopupBase.prototype.lastShowTime_ = -1;
goog.ui.PopupBase.prototype.lastHideTime_ = -1;
goog.ui.PopupBase.prototype.hideOnEscape_ = false;
goog.ui.PopupBase.prototype.enableCrossIframeDismissal_ = true;
goog.ui.PopupBase.prototype.type_ = goog.ui.PopupBase.Type.TOGGLE_DISPLAY;
goog.ui.PopupBase.prototype.showTransition_;
goog.ui.PopupBase.prototype.hideTransition_;
goog.ui.PopupBase.EventType = {BEFORE_SHOW:"beforeshow", SHOW:"show", BEFORE_HIDE:"beforehide", HIDE:"hide"};
goog.ui.PopupBase.DEBOUNCE_DELAY_MS = 150;
goog.ui.PopupBase.prototype.getType = function() {
  return this.type_;
};
goog.ui.PopupBase.prototype.setType = function(type) {
  this.type_ = type;
};
goog.ui.PopupBase.prototype.shouldHideAsync = function() {
  return this.shouldHideAsync_;
};
goog.ui.PopupBase.prototype.setShouldHideAsync = function(b) {
  this.shouldHideAsync_ = b;
};
goog.ui.PopupBase.prototype.getElement = function() {
  return this.element_;
};
goog.ui.PopupBase.prototype.setElement = function(elt) {
  this.ensureNotVisible_();
  this.element_ = elt;
};
goog.ui.PopupBase.prototype.getAutoHide = function() {
  return this.autoHide_;
};
goog.ui.PopupBase.prototype.setAutoHide = function(autoHide) {
  this.ensureNotVisible_();
  this.autoHide_ = autoHide;
};
goog.ui.PopupBase.prototype.addAutoHidePartner = function(partner) {
  if (!this.autoHidePartners_) {
    this.autoHidePartners_ = [];
  }
  goog.array.insert(this.autoHidePartners_, partner);
};
goog.ui.PopupBase.prototype.removeAutoHidePartner = function(partner) {
  if (this.autoHidePartners_) {
    goog.array.remove(this.autoHidePartners_, partner);
  }
};
goog.ui.PopupBase.prototype.getHideOnEscape = function() {
  return this.hideOnEscape_;
};
goog.ui.PopupBase.prototype.setHideOnEscape = function(hideOnEscape) {
  this.ensureNotVisible_();
  this.hideOnEscape_ = hideOnEscape;
};
goog.ui.PopupBase.prototype.getEnableCrossIframeDismissal = function() {
  return this.enableCrossIframeDismissal_;
};
goog.ui.PopupBase.prototype.setEnableCrossIframeDismissal = function(enable) {
  this.enableCrossIframeDismissal_ = enable;
};
goog.ui.PopupBase.prototype.getAutoHideRegion = function() {
  return this.autoHideRegion_;
};
goog.ui.PopupBase.prototype.setAutoHideRegion = function(element) {
  this.autoHideRegion_ = element;
};
goog.ui.PopupBase.prototype.setTransition = function(opt_showTransition, opt_hideTransition) {
  this.showTransition_ = opt_showTransition;
  this.hideTransition_ = opt_hideTransition;
};
goog.ui.PopupBase.prototype.getLastShowTime = function() {
  return this.lastShowTime_;
};
goog.ui.PopupBase.prototype.getLastHideTime = function() {
  return this.lastHideTime_;
};
goog.ui.PopupBase.prototype.getHandler = function() {
  var self = this;
  return self.handler_;
};
goog.ui.PopupBase.prototype.ensureNotVisible_ = function() {
  if (this.isVisible_) {
    throw new Error("Can not change this state of the popup while showing.");
  }
};
goog.ui.PopupBase.prototype.isVisible = function() {
  return this.isVisible_;
};
goog.ui.PopupBase.prototype.isOrWasRecentlyVisible = function() {
  return this.isVisible_ || Date.now() - this.lastHideTime_ < goog.ui.PopupBase.DEBOUNCE_DELAY_MS;
};
goog.ui.PopupBase.prototype.setVisible = function(visible) {
  if (this.showTransition_) {
    this.showTransition_.stop();
  }
  if (this.hideTransition_) {
    this.hideTransition_.stop();
  }
  if (visible) {
    this.show_();
  } else {
    this.hide_();
  }
};
goog.ui.PopupBase.prototype.reposition = goog.nullFunction;
goog.ui.PopupBase.prototype.show_ = function() {
  if (this.isVisible_) {
    return;
  }
  if (!this.onBeforeShow()) {
    return;
  }
  if (!this.element_) {
    throw new Error("Caller must call setElement before trying to show the popup");
  }
  this.reposition();
  var doc = goog.dom.getOwnerDocument(this.element_);
  if (this.hideOnEscape_) {
    this.handler_.listen(doc, goog.events.EventType.KEYDOWN, this.onDocumentKeyDown_, true);
  }
  if (this.autoHide_) {
    this.handler_.listen(doc, goog.events.EventType.MOUSEDOWN, this.onDocumentMouseDown_, true);
    if (goog.userAgent.IE) {
      var activeElement;
      try {
        activeElement = doc.activeElement;
      } catch (e) {
      }
      while (activeElement && activeElement.nodeName == goog.dom.TagName.IFRAME) {
        try {
          var tempDoc = goog.dom.getFrameContentDocument(activeElement);
        } catch (e) {
          break;
        }
        doc = tempDoc;
        activeElement = doc.activeElement;
      }
      this.handler_.listen(doc, goog.events.EventType.MOUSEDOWN, this.onDocumentMouseDown_, true);
      this.handler_.listen(doc, goog.events.EventType.DEACTIVATE, this.onDocumentBlur_);
    } else {
      this.handler_.listen(doc, goog.events.EventType.BLUR, this.onDocumentBlur_);
    }
  }
  if (this.type_ == goog.ui.PopupBase.Type.TOGGLE_DISPLAY) {
    this.showPopupElement();
  } else if (this.type_ == goog.ui.PopupBase.Type.MOVE_OFFSCREEN) {
    this.reposition();
  }
  this.isVisible_ = true;
  this.lastShowTime_ = Date.now();
  this.lastHideTime_ = -1;
  if (this.showTransition_) {
    goog.events.listenOnce(this.showTransition_, goog.fx.Transition.EventType.END, this.onShow, false, this);
    this.showTransition_.play();
  } else {
    this.onShow();
  }
};
goog.ui.PopupBase.prototype.hide_ = function(opt_target) {
  if (!this.isVisible_ || !this.onBeforeHide(opt_target)) {
    return false;
  }
  if (this.handler_) {
    this.handler_.removeAll();
  }
  this.isVisible_ = false;
  this.lastHideTime_ = Date.now();
  if (this.hideTransition_) {
    goog.events.listenOnce(this.hideTransition_, goog.fx.Transition.EventType.END, goog.partial(this.continueHidingPopup_, opt_target), false, this);
    this.hideTransition_.play();
  } else {
    this.continueHidingPopup_(opt_target);
  }
  return true;
};
goog.ui.PopupBase.prototype.continueHidingPopup_ = function(opt_target) {
  if (this.type_ == goog.ui.PopupBase.Type.TOGGLE_DISPLAY) {
    if (this.shouldHideAsync_) {
      goog.Timer.callOnce(this.hidePopupElement, 0, this);
    } else {
      this.hidePopupElement();
    }
  } else if (this.type_ == goog.ui.PopupBase.Type.MOVE_OFFSCREEN) {
    this.moveOffscreen_();
  }
  this.onHide(opt_target);
};
goog.ui.PopupBase.prototype.showPopupElement = function() {
  this.element_.style.visibility = "visible";
  goog.style.setElementShown(this.element_, true);
};
goog.ui.PopupBase.prototype.hidePopupElement = function() {
  this.element_.style.visibility = "hidden";
  goog.style.setElementShown(this.element_, false);
};
goog.ui.PopupBase.prototype.moveOffscreen_ = function() {
  this.element_.style.top = "-10000px";
};
goog.ui.PopupBase.prototype.onBeforeShow = function() {
  return this.dispatchEvent(goog.ui.PopupBase.EventType.BEFORE_SHOW);
};
goog.ui.PopupBase.prototype.onShow = function() {
  this.dispatchEvent(goog.ui.PopupBase.EventType.SHOW);
};
goog.ui.PopupBase.prototype.onBeforeHide = function(opt_target) {
  return this.dispatchEvent({type:goog.ui.PopupBase.EventType.BEFORE_HIDE, target:opt_target});
};
goog.ui.PopupBase.prototype.onHide = function(opt_target) {
  this.dispatchEvent({type:goog.ui.PopupBase.EventType.HIDE, target:opt_target});
};
goog.ui.PopupBase.prototype.onDocumentMouseDown_ = function(e) {
  var target = e.target;
  if (!goog.dom.contains(this.element_, target) && !this.isOrWithinAutoHidePartner_(target) && this.isWithinAutoHideRegion_(target) && !this.shouldDebounce_()) {
    this.hide_(target);
  }
};
goog.ui.PopupBase.prototype.onDocumentKeyDown_ = function(e) {
  if (e.keyCode == goog.events.KeyCodes.ESC) {
    if (this.hide_(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
goog.ui.PopupBase.prototype.onDocumentBlur_ = function(e) {
  if (!this.enableCrossIframeDismissal_) {
    return;
  }
  var doc = goog.dom.getOwnerDocument(this.element_);
  if (typeof document.activeElement != "undefined") {
    var activeElement = doc.activeElement;
    if (!activeElement || goog.dom.contains(this.element_, activeElement) || activeElement.tagName == goog.dom.TagName.BODY) {
      return;
    }
    if (this.isOrWithinAutoHidePartner_(activeElement)) {
      return;
    }
  } else if (e.target != doc) {
    return;
  }
  if (this.shouldDebounce_()) {
    return;
  }
  this.hide_();
};
goog.ui.PopupBase.prototype.isOrWithinAutoHidePartner_ = function(element) {
  return goog.array.some(this.autoHidePartners_ || [], function(partner) {
    return element === partner || goog.dom.contains(partner, element);
  });
};
goog.ui.PopupBase.prototype.isWithinAutoHideRegion_ = function(element) {
  return this.autoHideRegion_ ? goog.dom.contains(this.autoHideRegion_, element) : true;
};
goog.ui.PopupBase.prototype.shouldDebounce_ = function() {
  return Date.now() - this.lastShowTime_ < goog.ui.PopupBase.DEBOUNCE_DELAY_MS;
};
goog.ui.PopupBase.prototype.disposeInternal = function() {
  goog.ui.PopupBase.base(this, "disposeInternal");
  this.handler_.dispose();
  goog.dispose(this.showTransition_);
  goog.dispose(this.hideTransition_);
  delete this.element_;
  delete this.handler_;
  delete this.autoHidePartners_;
};

//# sourceMappingURL=goog.ui.popupbase.js.map
