goog.provide("goog.positioning.MenuAnchoredPosition");
goog.require("goog.positioning.AnchoredViewportPosition");
goog.require("goog.positioning.Overflow");
goog.requireType("goog.positioning.Corner");
goog.positioning.MenuAnchoredPosition = function(anchorElement, corner, opt_adjust, opt_resize) {
  goog.positioning.AnchoredViewportPosition.call(this, anchorElement, corner, opt_adjust || opt_resize);
  if (opt_adjust || opt_resize) {
    var overflowX = goog.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN;
    var overflowY = opt_resize ? goog.positioning.Overflow.RESIZE_HEIGHT : goog.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN;
    this.setLastResortOverflow(overflowX | overflowY);
  }
};
goog.inherits(goog.positioning.MenuAnchoredPosition, goog.positioning.AnchoredViewportPosition);

//# sourceMappingURL=goog.positioning.menuanchoredposition.js.map
