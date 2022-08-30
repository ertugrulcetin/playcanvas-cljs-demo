goog.provide("goog.a11y.aria.datatables");
goog.require("goog.a11y.aria.State");
goog.require("goog.object");
goog.a11y.aria.DefaultStateValueMap_;
goog.a11y.aria.datatables.getDefaultValuesMap = function() {
  if (!goog.a11y.aria.DefaultStateValueMap_) {
    goog.a11y.aria.DefaultStateValueMap_ = goog.object.create(goog.a11y.aria.State.ATOMIC, false, goog.a11y.aria.State.AUTOCOMPLETE, "none", goog.a11y.aria.State.DROPEFFECT, "none", goog.a11y.aria.State.HASPOPUP, false, goog.a11y.aria.State.LIVE, "off", goog.a11y.aria.State.MULTILINE, false, goog.a11y.aria.State.MULTISELECTABLE, false, goog.a11y.aria.State.ORIENTATION, "vertical", goog.a11y.aria.State.READONLY, false, goog.a11y.aria.State.RELEVANT, "additions text", goog.a11y.aria.State.REQUIRED, 
    false, goog.a11y.aria.State.SORT, "none", goog.a11y.aria.State.BUSY, false, goog.a11y.aria.State.DISABLED, false, goog.a11y.aria.State.HIDDEN, false, goog.a11y.aria.State.INVALID, "false");
  }
  return goog.a11y.aria.DefaultStateValueMap_;
};

//# sourceMappingURL=goog.a11y.aria.datatables.js.map
