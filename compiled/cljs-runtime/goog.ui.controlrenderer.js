goog.provide("goog.ui.ControlRenderer");
goog.forwardDeclare("goog.ui.Control");
goog.require("goog.a11y.aria");
goog.require("goog.a11y.aria.Role");
goog.require("goog.a11y.aria.State");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classlist");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.style");
goog.require("goog.ui.Component");
goog.require("goog.ui.ControlContent");
goog.require("goog.userAgent");
goog.ui.ControlRenderer = function() {
};
goog.addSingletonGetter(goog.ui.ControlRenderer);
goog.ui.ControlRenderer.getCustomRenderer = function(ctor, cssClassName) {
  var renderer = new ctor();
  renderer.getCssClass = function() {
    return cssClassName;
  };
  return renderer;
};
goog.ui.ControlRenderer.CSS_CLASS = goog.getCssName("goog-control");
goog.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [];
goog.ui.ControlRenderer.ariaAttributeMap_;
goog.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_ = goog.object.create(goog.a11y.aria.Role.BUTTON, goog.a11y.aria.State.PRESSED, goog.a11y.aria.Role.CHECKBOX, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.MENU_ITEM, goog.a11y.aria.State.SELECTED, goog.a11y.aria.Role.MENU_ITEM_CHECKBOX, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.MENU_ITEM_RADIO, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.RADIO, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.TAB, goog.a11y.aria.State.SELECTED, goog.a11y.aria.Role.TREEITEM, 
goog.a11y.aria.State.SELECTED);
goog.ui.ControlRenderer.prototype.getAriaRole = function() {
  return undefined;
};
goog.ui.ControlRenderer.prototype.createDom = function(control) {
  var element = control.getDomHelper().createDom(goog.dom.TagName.DIV, this.getClassNames(control).join(" "), control.getContent());
  return element;
};
goog.ui.ControlRenderer.prototype.getContentElement = function(element) {
  return element;
};
goog.ui.ControlRenderer.prototype.enableClassName = function(control, className, enable) {
  var element = control.getElement ? control.getElement() : control;
  if (element) {
    var classNames = [className];
    goog.dom.classlist.enableAll(element, classNames, enable);
  }
};
goog.ui.ControlRenderer.prototype.enableExtraClassName = function(control, className, enable) {
  this.enableClassName(control, className, enable);
};
goog.ui.ControlRenderer.prototype.canDecorate = function(element) {
  return true;
};
goog.ui.ControlRenderer.prototype.decorate = function(control, element) {
  if (element.id) {
    control.setId(element.id);
  }
  var contentElem = this.getContentElement(element);
  if (contentElem && contentElem.firstChild) {
    control.setContentInternal(contentElem.firstChild.nextSibling ? goog.array.clone(contentElem.childNodes) : contentElem.firstChild);
  } else {
    control.setContentInternal(null);
  }
  var state = 0;
  var rendererClassName = this.getCssClass();
  var structuralClassName = this.getStructuralCssClass();
  var hasRendererClassName = false;
  var hasStructuralClassName = false;
  var hasCombinedClassName = false;
  var classNames = goog.array.toArray(goog.dom.classlist.get(element));
  classNames.forEach(function(className) {
    if (!hasRendererClassName && className == rendererClassName) {
      hasRendererClassName = true;
      if (structuralClassName == rendererClassName) {
        hasStructuralClassName = true;
      }
    } else if (!hasStructuralClassName && className == structuralClassName) {
      hasStructuralClassName = true;
    } else {
      state |= this.getStateFromClass(className);
    }
    if (this.getStateFromClass(className) == goog.ui.Component.State.DISABLED) {
      goog.asserts.assertElement(contentElem);
      if (goog.dom.isFocusableTabIndex(contentElem)) {
        goog.dom.setFocusableTabIndex(contentElem, false);
      }
    }
  }, this);
  control.setStateInternal(state);
  if (!hasRendererClassName) {
    classNames.push(rendererClassName);
    if (structuralClassName == rendererClassName) {
      hasStructuralClassName = true;
    }
  }
  if (!hasStructuralClassName) {
    classNames.push(structuralClassName);
  }
  var extraClassNames = control.getExtraClassNames();
  if (extraClassNames) {
    classNames.push.apply(classNames, extraClassNames);
  }
  if (!hasRendererClassName || !hasStructuralClassName || extraClassNames || hasCombinedClassName) {
    goog.dom.classlist.set(element, classNames.join(" "));
  }
  return element;
};
goog.ui.ControlRenderer.prototype.initializeDom = function(control) {
  if (control.isRightToLeft()) {
    this.setRightToLeft(control.getElement(), true);
  }
  if (control.isEnabled()) {
    this.setFocusable(control, control.isVisible());
  }
};
goog.ui.ControlRenderer.prototype.setAriaRole = function(element, opt_preferredRole) {
  var ariaRole = opt_preferredRole || this.getAriaRole();
  if (ariaRole) {
    goog.asserts.assert(element, "The element passed as a first parameter cannot be null.");
    var currentRole = goog.a11y.aria.getRole(element);
    if (ariaRole == currentRole) {
      return;
    }
    goog.a11y.aria.setRole(element, ariaRole);
  }
};
goog.ui.ControlRenderer.prototype.setAriaStates = function(control, element) {
  goog.asserts.assert(control);
  goog.asserts.assert(element);
  var ariaLabel = control.getAriaLabel();
  if (ariaLabel != null) {
    this.setAriaLabel(element, ariaLabel);
  }
  if (!control.isVisible()) {
    goog.a11y.aria.setState(element, goog.a11y.aria.State.HIDDEN, !control.isVisible());
  }
  if (!control.isEnabled()) {
    this.updateAriaState(element, goog.ui.Component.State.DISABLED, !control.isEnabled());
  }
  if (control.isSupportedState(goog.ui.Component.State.SELECTED)) {
    this.updateAriaState(element, goog.ui.Component.State.SELECTED, control.isSelected());
  }
  if (control.isSupportedState(goog.ui.Component.State.CHECKED)) {
    this.updateAriaState(element, goog.ui.Component.State.CHECKED, control.isChecked());
  }
  if (control.isSupportedState(goog.ui.Component.State.OPENED)) {
    this.updateAriaState(element, goog.ui.Component.State.OPENED, control.isOpen());
  }
};
goog.ui.ControlRenderer.prototype.setAriaLabel = function(element, ariaLabel) {
  goog.a11y.aria.setLabel(element, ariaLabel);
};
goog.ui.ControlRenderer.prototype.setAllowTextSelection = function(element, allow) {
  goog.style.setUnselectable(element, !allow, !goog.userAgent.IE);
};
goog.ui.ControlRenderer.prototype.setRightToLeft = function(element, rightToLeft) {
  this.enableClassName(element, goog.getCssName(this.getStructuralCssClass(), "rtl"), rightToLeft);
};
goog.ui.ControlRenderer.prototype.isFocusable = function(control) {
  var keyTarget;
  if (control.isSupportedState(goog.ui.Component.State.FOCUSED) && (keyTarget = control.getKeyEventTarget())) {
    return goog.dom.isFocusableTabIndex(keyTarget);
  }
  return false;
};
goog.ui.ControlRenderer.prototype.setFocusable = function(control, focusable) {
  var keyTarget;
  if (control.isSupportedState(goog.ui.Component.State.FOCUSED) && (keyTarget = control.getKeyEventTarget())) {
    if (!focusable && control.isFocused()) {
      try {
        keyTarget.blur();
      } catch (e) {
      }
      if (control.isFocused()) {
        control.handleBlur(null);
      }
    }
    if (goog.dom.isFocusableTabIndex(keyTarget) != focusable) {
      goog.dom.setFocusableTabIndex(keyTarget, focusable);
    }
  }
};
goog.ui.ControlRenderer.prototype.setVisible = function(element, visible) {
  goog.style.setElementShown(element, visible);
  if (element) {
    goog.a11y.aria.setState(element, goog.a11y.aria.State.HIDDEN, !visible);
  }
};
goog.ui.ControlRenderer.prototype.setState = function(control, state, enable) {
  var element = control.getElement();
  if (element) {
    var className = this.getClassForState(state);
    if (className) {
      this.enableClassName(control, className, enable);
    }
    this.updateAriaState(element, state, enable);
  }
};
goog.ui.ControlRenderer.prototype.updateAriaState = function(element, state, enable) {
  if (!goog.ui.ControlRenderer.ariaAttributeMap_) {
    goog.ui.ControlRenderer.ariaAttributeMap_ = goog.object.create(goog.ui.Component.State.DISABLED, goog.a11y.aria.State.DISABLED, goog.ui.Component.State.SELECTED, goog.a11y.aria.State.SELECTED, goog.ui.Component.State.CHECKED, goog.a11y.aria.State.CHECKED, goog.ui.Component.State.OPENED, goog.a11y.aria.State.EXPANDED);
  }
  goog.asserts.assert(element, "The element passed as a first parameter cannot be null.");
  var ariaAttr = goog.ui.ControlRenderer.getAriaStateForAriaRole_(element, goog.ui.ControlRenderer.ariaAttributeMap_[state]);
  if (ariaAttr) {
    goog.a11y.aria.setState(element, ariaAttr, enable);
  }
};
goog.ui.ControlRenderer.getAriaStateForAriaRole_ = function(element, attr) {
  var role = goog.a11y.aria.getRole(element);
  if (!role) {
    return attr;
  }
  role = role;
  var matchAttr = goog.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_[role] || attr;
  return goog.ui.ControlRenderer.isAriaState_(attr) ? matchAttr : attr;
};
goog.ui.ControlRenderer.isAriaState_ = function(attr) {
  return attr == goog.a11y.aria.State.CHECKED || attr == goog.a11y.aria.State.SELECTED;
};
goog.ui.ControlRenderer.prototype.setContent = function(element, content) {
  var contentElem = this.getContentElement(element);
  if (contentElem) {
    goog.dom.removeChildren(contentElem);
    if (content) {
      if (typeof content === "string") {
        goog.dom.setTextContent(contentElem, content);
      } else {
        var childHandler = function(child) {
          if (child) {
            var doc = goog.dom.getOwnerDocument(contentElem);
            contentElem.appendChild(typeof child === "string" ? doc.createTextNode(child) : child);
          }
        };
        if (Array.isArray(content)) {
          content.forEach(childHandler);
        } else if (goog.isArrayLike(content) && !("nodeType" in content)) {
          goog.array.clone(content).forEach(childHandler);
        } else {
          childHandler(content);
        }
      }
    }
  }
};
goog.ui.ControlRenderer.prototype.getKeyEventTarget = function(control) {
  return control.getElement();
};
goog.ui.ControlRenderer.prototype.getCssClass = function() {
  return goog.ui.ControlRenderer.CSS_CLASS;
};
goog.ui.ControlRenderer.prototype.getIe6ClassCombinations = function() {
  return [];
};
goog.ui.ControlRenderer.prototype.getStructuralCssClass = function() {
  return this.getCssClass();
};
goog.ui.ControlRenderer.prototype.getClassNames = function(control) {
  var cssClass = this.getCssClass();
  var classNames = [cssClass];
  var structuralCssClass = this.getStructuralCssClass();
  if (structuralCssClass != cssClass) {
    classNames.push(structuralCssClass);
  }
  var classNamesForState = this.getClassNamesForState(control.getState());
  classNames.push.apply(classNames, classNamesForState);
  var extraClassNames = control.getExtraClassNames();
  if (extraClassNames) {
    classNames.push.apply(classNames, extraClassNames);
  }
  return classNames;
};
goog.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_ = function(classes, opt_includedClass) {
  var toAdd = [];
  if (opt_includedClass) {
    classes = goog.array.concat(classes, [opt_includedClass]);
  }
  this.getIe6ClassCombinations().forEach(function(combo) {
    if (goog.array.every(combo, goog.partial(goog.array.contains, classes)) && (!opt_includedClass || goog.array.contains(combo, opt_includedClass))) {
      toAdd.push(combo.join("_"));
    }
  });
  return toAdd;
};
goog.ui.ControlRenderer.prototype.getClassNamesForState = function(state) {
  var classNames = [];
  while (state) {
    var mask = state & -state;
    classNames.push(this.getClassForState(mask));
    state &= ~mask;
  }
  return classNames;
};
goog.ui.ControlRenderer.prototype.getClassForState = function(state) {
  if (!this.classByState_) {
    this.createClassByStateMap_();
  }
  return this.classByState_[state];
};
goog.ui.ControlRenderer.prototype.getStateFromClass = function(className) {
  if (!this.stateByClass_) {
    this.createStateByClassMap_();
  }
  var state = parseInt(this.stateByClass_[className], 10);
  return isNaN(state) ? 0 : state;
};
goog.ui.ControlRenderer.prototype.createClassByStateMap_ = function() {
  var baseClass = this.getStructuralCssClass();
  var isValidClassName = !goog.string.contains(goog.string.normalizeWhitespace(baseClass), " ");
  goog.asserts.assert(isValidClassName, "ControlRenderer has an invalid css class: '" + baseClass + "'");
  this.classByState_ = goog.object.create(goog.ui.Component.State.DISABLED, goog.getCssName(baseClass, "disabled"), goog.ui.Component.State.HOVER, goog.getCssName(baseClass, "hover"), goog.ui.Component.State.ACTIVE, goog.getCssName(baseClass, "active"), goog.ui.Component.State.SELECTED, goog.getCssName(baseClass, "selected"), goog.ui.Component.State.CHECKED, goog.getCssName(baseClass, "checked"), goog.ui.Component.State.FOCUSED, goog.getCssName(baseClass, "focused"), goog.ui.Component.State.OPENED, 
  goog.getCssName(baseClass, "open"));
};
goog.ui.ControlRenderer.prototype.createStateByClassMap_ = function() {
  if (!this.classByState_) {
    this.createClassByStateMap_();
  }
  this.stateByClass_ = goog.object.transpose(this.classByState_);
};

//# sourceMappingURL=goog.ui.controlrenderer.js.map
