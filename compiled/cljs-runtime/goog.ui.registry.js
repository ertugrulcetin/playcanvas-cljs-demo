goog.provide("goog.ui.registry");
goog.require("goog.asserts");
goog.require("goog.dom.classlist");
goog.require("goog.object");
goog.requireType("goog.ui.Component");
goog.requireType("goog.ui.ControlRenderer");
goog.ui.registry.getDefaultRenderer = function(componentCtor) {
  var key;
  var ctor = componentCtor;
  var rendererCtor;
  while (ctor) {
    key = goog.getUid(ctor);
    if (rendererCtor = goog.ui.registry.defaultRenderers_[key]) {
      break;
    }
    ctor = goog.object.getSuperClass(ctor);
  }
  if (rendererCtor) {
    return typeof rendererCtor.getInstance === "function" ? rendererCtor.getInstance() : new rendererCtor();
  }
  return null;
};
goog.ui.registry.setDefaultRenderer = function(componentCtor, rendererCtor) {
  if (typeof componentCtor !== "function") {
    throw new Error("Invalid component class " + componentCtor);
  }
  if (typeof rendererCtor !== "function") {
    throw new Error("Invalid renderer class " + rendererCtor);
  }
  var key = goog.getUid(componentCtor);
  goog.ui.registry.defaultRenderers_[key] = rendererCtor;
};
goog.ui.registry.getDecoratorByClassName = function(className) {
  return className in goog.ui.registry.decoratorFunctions_ ? goog.ui.registry.decoratorFunctions_[className]() : null;
};
goog.ui.registry.setDecoratorByClassName = function(className, decoratorFn) {
  if (!className) {
    throw new Error("Invalid class name " + className);
  }
  if (typeof decoratorFn !== "function") {
    throw new Error("Invalid decorator function " + decoratorFn);
  }
  goog.ui.registry.decoratorFunctions_[className] = decoratorFn;
};
goog.ui.registry.getDecorator = function(element) {
  var decorator;
  goog.asserts.assert(element);
  var classNames = goog.dom.classlist.get(element);
  for (var i = 0, len = classNames.length; i < len; i++) {
    if (decorator = goog.ui.registry.getDecoratorByClassName(classNames[i])) {
      return decorator;
    }
  }
  return null;
};
goog.ui.registry.reset = function() {
  goog.ui.registry.defaultRenderers_ = {};
  goog.ui.registry.decoratorFunctions_ = {};
};
goog.ui.registry.defaultRenderers_ = {};
goog.ui.registry.decoratorFunctions_ = {};

//# sourceMappingURL=goog.ui.registry.js.map
