goog.provide("goog.ui.IdGenerator");
goog.ui.IdGenerator = function() {
};
goog.addSingletonGetter(goog.ui.IdGenerator);
goog.ui.IdGenerator.prototype.nextId_ = 0;
goog.ui.IdGenerator.prototype.idPrefix_ = "";
goog.ui.IdGenerator.prototype.setIdPrefix = function(idPrefix) {
  this.idPrefix_ = idPrefix;
};
goog.ui.IdGenerator.prototype.getNextUniqueId = function() {
  return this.idPrefix_ + ":" + (this.nextId_++).toString(36);
};

//# sourceMappingURL=goog.ui.idgenerator.js.map
