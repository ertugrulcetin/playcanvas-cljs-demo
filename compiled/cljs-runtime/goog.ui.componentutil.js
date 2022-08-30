goog.provide("goog.ui.ComponentUtil");
goog.require("goog.events.MouseAsMouseEventType");
goog.require("goog.events.MouseEvents");
goog.require("goog.events.PointerAsMouseEventType");
goog.ui.ComponentUtil.getMouseEventType = function(component) {
  return component.pointerEventsEnabled() ? goog.events.PointerAsMouseEventType : goog.events.MouseAsMouseEventType;
};

//# sourceMappingURL=goog.ui.componentutil.js.map
