goog.provide("goog.a11y.aria");
goog.require("goog.a11y.aria.Role");
goog.require("goog.a11y.aria.State");
goog.require("goog.a11y.aria.datatables");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.object");
goog.require("goog.string");
goog.a11y.aria.ARIA_PREFIX_ = "aria-";
goog.a11y.aria.ROLE_ATTRIBUTE_ = "role";
goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = goog.object.createSet([goog.dom.TagName.A, goog.dom.TagName.AREA, goog.dom.TagName.BUTTON, goog.dom.TagName.HEAD, goog.dom.TagName.INPUT, goog.dom.TagName.LINK, goog.dom.TagName.MENU, goog.dom.TagName.META, goog.dom.TagName.OPTGROUP, goog.dom.TagName.OPTION, goog.dom.TagName.PROGRESS, goog.dom.TagName.STYLE, goog.dom.TagName.SELECT, goog.dom.TagName.SOURCE, goog.dom.TagName.TEXTAREA, goog.dom.TagName.TITLE, goog.dom.TagName.TRACK]);
goog.a11y.aria.CONTAINER_ROLES_ = [goog.a11y.aria.Role.COMBOBOX, goog.a11y.aria.Role.GRID, goog.a11y.aria.Role.GROUP, goog.a11y.aria.Role.LISTBOX, goog.a11y.aria.Role.MENU, goog.a11y.aria.Role.MENUBAR, goog.a11y.aria.Role.RADIOGROUP, goog.a11y.aria.Role.ROW, goog.a11y.aria.Role.ROWGROUP, goog.a11y.aria.Role.TAB_LIST, goog.a11y.aria.Role.TEXTBOX, goog.a11y.aria.Role.TOOLBAR, goog.a11y.aria.Role.TREE, goog.a11y.aria.Role.TREEGRID];
goog.a11y.aria.setRole = function(element, roleName) {
  if (!roleName) {
    goog.a11y.aria.removeRole(element);
  } else {
    if (goog.asserts.ENABLE_ASSERTS) {
      goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.Role, roleName), "No such ARIA role " + roleName);
    }
    element.setAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_, roleName);
  }
};
goog.a11y.aria.getRole = function(element) {
  var role = element.getAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_);
  return role || null;
};
goog.a11y.aria.removeRole = function(element) {
  element.removeAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_);
};
goog.a11y.aria.setState = function(element, stateName, value) {
  if (Array.isArray(value)) {
    value = value.join(" ");
  }
  var attrStateName = goog.a11y.aria.getAriaAttributeName_(stateName);
  if (value === "" || value == undefined) {
    var defaultValueMap = goog.a11y.aria.datatables.getDefaultValuesMap();
    if (stateName in defaultValueMap) {
      element.setAttribute(attrStateName, defaultValueMap[stateName]);
    } else {
      element.removeAttribute(attrStateName);
    }
  } else {
    element.setAttribute(attrStateName, value);
  }
};
goog.a11y.aria.toggleState = function(el, attr) {
  var val = goog.a11y.aria.getState(el, attr);
  if (!goog.string.isEmptyOrWhitespace(goog.string.makeSafe(val)) && !(val == "true" || val == "false")) {
    goog.a11y.aria.removeState(el, attr);
    return;
  }
  goog.a11y.aria.setState(el, attr, val == "true" ? "false" : "true");
};
goog.a11y.aria.removeState = function(element, stateName) {
  element.removeAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
};
goog.a11y.aria.getState = function(element, stateName) {
  var attr = element.getAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
  var isNullOrUndefined = attr == null || attr == undefined;
  return isNullOrUndefined ? "" : String(attr);
};
goog.a11y.aria.getActiveDescendant = function(element) {
  var id = goog.a11y.aria.getState(element, goog.a11y.aria.State.ACTIVEDESCENDANT);
  return goog.dom.getOwnerDocument(element).getElementById(id);
};
goog.a11y.aria.setActiveDescendant = function(element, activeElement) {
  var id = "";
  if (activeElement) {
    id = activeElement.id;
    goog.asserts.assert(id, "The active element should have an id.");
  }
  goog.a11y.aria.setState(element, goog.a11y.aria.State.ACTIVEDESCENDANT, id);
};
goog.a11y.aria.getLabel = function(element) {
  return goog.a11y.aria.getState(element, goog.a11y.aria.State.LABEL);
};
goog.a11y.aria.setLabel = function(element, label) {
  goog.a11y.aria.setState(element, goog.a11y.aria.State.LABEL, label);
};
goog.a11y.aria.assertRoleIsSetInternalUtil = function(element, allowedRoles) {
  if (goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_[element.tagName]) {
    return;
  }
  var elementRole = goog.a11y.aria.getRole(element);
  goog.asserts.assert(elementRole != null, "The element ARIA role cannot be null.");
  goog.asserts.assert(goog.array.contains(allowedRoles, elementRole), "Non existing or incorrect role set for element." + 'The role set is "' + elementRole + '". The role should be any of "' + allowedRoles + '". Check the ARIA specification for more details ' + "http://www.w3.org/TR/wai-aria/roles.");
};
goog.a11y.aria.getStateBoolean = function(element, stateName) {
  var attr = element.getAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
  goog.asserts.assert(typeof attr === "boolean" || attr == null || attr == "true" || attr == "false");
  if (attr == null) {
    return attr;
  }
  return typeof attr === "boolean" ? attr : attr == "true";
};
goog.a11y.aria.getStateNumber = function(element, stateName) {
  var attr = element.getAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
  goog.asserts.assert((attr == null || !isNaN(Number(attr))) && typeof attr !== "boolean");
  return attr == null ? null : Number(attr);
};
goog.a11y.aria.getStateString = function(element, stateName) {
  var attr = element.getAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
  goog.asserts.assert((attr == null || typeof attr === "string") && (attr == "" || isNaN(Number(attr))) && attr != "true" && attr != "false");
  return attr == null || attr == "" ? null : attr;
};
goog.a11y.aria.getStringArrayStateInternalUtil = function(element, stateName) {
  var attrValue = element.getAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
  return goog.a11y.aria.splitStringOnWhitespace_(attrValue);
};
goog.a11y.aria.hasState = function(element, stateName) {
  return element.hasAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
};
goog.a11y.aria.isContainerRole = function(element) {
  var role = goog.a11y.aria.getRole(element);
  return goog.array.contains(goog.a11y.aria.CONTAINER_ROLES_, role);
};
goog.a11y.aria.splitStringOnWhitespace_ = function(stringValue) {
  return stringValue ? stringValue.split(/\s+/) : [];
};
goog.a11y.aria.getAriaAttributeName_ = function(ariaName) {
  if (goog.asserts.ENABLE_ASSERTS) {
    goog.asserts.assert(ariaName, "ARIA attribute cannot be empty.");
    goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.State, ariaName), "No such ARIA attribute " + ariaName);
  }
  return goog.a11y.aria.ARIA_PREFIX_ + ariaName;
};

//# sourceMappingURL=goog.a11y.aria.aria.js.map
