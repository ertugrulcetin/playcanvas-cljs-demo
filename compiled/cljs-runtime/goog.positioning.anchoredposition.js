goog.provide("goog.positioning.AnchoredPosition");
goog.require("goog.positioning");
goog.require("goog.positioning.AbstractPosition");
goog.requireType("goog.math.Box");
goog.requireType("goog.math.Size");
goog.positioning.AnchoredPosition = function(anchorElement, corner, opt_overflow) {
  this.element = anchorElement;
  this.corner = corner;
  this.overflow_ = opt_overflow;
};
goog.inherits(goog.positioning.AnchoredPosition, goog.positioning.AbstractPosition);
goog.positioning.AnchoredPosition.prototype.reposition = function(movableElement, movableCorner, opt_margin, opt_preferredSize) {
  goog.positioning.positionAtAnchor(this.element, this.corner, movableElement, movableCorner, undefined, opt_margin, this.overflow_);
};

//# sourceMappingURL=goog.positioning.anchoredposition.js.map
