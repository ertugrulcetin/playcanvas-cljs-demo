goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.testing.storage.FakeMechanism");
  goog.module.declareLegacyNamespace();
  goog.setTestOnly("goog.testing.storage.FakeMechanism");
  const IterableMechanism = goog.require("goog.storage.mechanism.IterableMechanism");
  const Iterator = goog.require("goog.iter.Iterator");
  const {ShimIterable} = goog.require("goog.iter.es6");
  const FakeMechanism = function() {
    this.storage_ = new Map();
  };
  goog.inherits(FakeMechanism, IterableMechanism);
  FakeMechanism.prototype.set = function(key, value) {
    this.storage_.set(key, value);
  };
  FakeMechanism.prototype.get = function(key) {
    if (this.storage_.has(key)) {
      return this.storage_.get(key);
    }
    return null;
  };
  FakeMechanism.prototype.remove = function(key) {
    this.storage_.delete(key);
  };
  FakeMechanism.prototype.__iterator__ = function(opt_keys) {
    return opt_keys ? ShimIterable.of(this.storage_.keys()).toGoog() : ShimIterable.of(this.storage_.values()).toGoog();
  };
  exports = FakeMechanism;
  return exports;
});

//# sourceMappingURL=goog.testing.storage.fakemechanism.js.map
