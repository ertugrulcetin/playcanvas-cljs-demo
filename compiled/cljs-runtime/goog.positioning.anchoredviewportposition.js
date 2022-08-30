goog.provide("goog.positioning.AnchoredViewportPosition");
goog.require("goog.positioning");
goog.require("goog.positioning.AnchoredPosition");
goog.require("goog.positioning.Overflow");
goog.require("goog.positioning.OverflowStatus");
goog.requireType("goog.math.Box");
goog.requireType("goog.math.Size");
goog.positioning.AnchoredViewportPosition = function(anchorElement, corner, opt_adjust, opt_overflowConstraint) {
  goog.positioning.AnchoredPosition.call(this, anchorElement, corner);
  this.lastResortOverflow_ = opt_adjust ? goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.ADJUST_Y : goog.positioning.Overflow.IGNORE;
  this.overflowConstraint_ = opt_overflowConstraint || undefined;
};
goog.inherits(goog.positioning.AnchoredViewportPosition, goog.positioning.AnchoredPosition);
goog.positioning.AnchoredViewportPosition.prototype.getOverflowConstraint = function() {
  return this.overflowConstraint_;
};
goog.positioning.AnchoredViewportPosition.prototype.setOverflowConstraint = function(overflowConstraint) {
  this.overflowConstraint_ = overflowConstraint;
};
goog.positioning.AnchoredViewportPosition.prototype.getLastResortOverflow = function() {
  return this.lastResortOverflow_;
};
goog.positioning.AnchoredViewportPosition.prototype.setLastResortOverflow = function(lastResortOverflow) {
  this.lastResortOverflow_ = lastResortOverflow;
};
goog.positioning.AnchoredViewportPosition.prototype.reposition = function(movableElement, movableCorner, opt_margin, opt_preferredSize) {
  var status = goog.positioning.positionAtAnchor(this.element, this.corner, movableElement, movableCorner, null, opt_margin, goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y, opt_preferredSize, this.overflowConstraint_);
  if (status & goog.positioning.OverflowStatus.FAILED) {
    var cornerFallback = this.adjustCorner(status, this.corner);
    var movableCornerFallback = this.adjustCorner(status, movableCorner);
    status = goog.positioning.positionAtAnchor(this.element, cornerFallback, movableElement, movableCornerFallback, null, opt_margin, goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y, opt_preferredSize, this.overflowConstraint_);
    if (status & goog.positioning.OverflowStatus.FAILED) {
      cornerFallback = this.adjustCorner(status, cornerFallback);
      movableCornerFallback = this.adjustCorner(status, movableCornerFallback);
      goog.positioning.positionAtAnchor(this.element, cornerFallback, movableElement, movableCornerFallback, null, opt_margin, this.getLastResortOverflow(), opt_preferredSize, this.overflowConstraint_);
    }
  }
};
goog.positioning.AnchoredViewportPosition.prototype.adjustCorner = function(status, corner) {
  if (status & goog.positioning.OverflowStatus.FAILED_HORIZONTAL) {
    corner = goog.positioning.flipCornerHorizontal(corner);
  }
  if (status & goog.positioning.OverflowStatus.FAILED_VERTICAL) {
    corner = goog.positioning.flipCornerVertical(corner);
  }
  return corner;
};

//# sourceMappingURL=goog.positioning.anchoredviewportposition.js.map
