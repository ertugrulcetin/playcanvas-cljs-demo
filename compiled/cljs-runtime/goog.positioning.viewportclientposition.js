goog.provide("goog.positioning.ViewportClientPosition");
goog.require("goog.dom");
goog.require("goog.math.Coordinate");
goog.require("goog.positioning");
goog.require("goog.positioning.ClientPosition");
goog.require("goog.positioning.Overflow");
goog.require("goog.positioning.OverflowStatus");
goog.require("goog.style");
goog.requireType("goog.math.Box");
goog.requireType("goog.math.Size");
goog.positioning.ViewportClientPosition = function(arg1, opt_arg2) {
  goog.positioning.ClientPosition.call(this, arg1, opt_arg2);
};
goog.inherits(goog.positioning.ViewportClientPosition, goog.positioning.ClientPosition);
goog.positioning.ViewportClientPosition.prototype.lastResortOverflow_ = 0;
goog.positioning.ViewportClientPosition.prototype.setLastResortOverflow = function(overflow) {
  this.lastResortOverflow_ = overflow;
};
goog.positioning.ViewportClientPosition.prototype.reposition = function(element, popupCorner, opt_margin, opt_preferredSize) {
  var viewportElt = goog.style.getClientViewportElement(element);
  var viewport = goog.style.getVisibleRectForElement(viewportElt);
  var scrollEl = goog.dom.getDomHelper(element).getDocumentScrollElement();
  var clientPos = new goog.math.Coordinate(this.coordinate.x + scrollEl.scrollLeft, this.coordinate.y + scrollEl.scrollTop);
  var failXY = goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y;
  var corner = popupCorner;
  var status = goog.positioning.positionAtCoordinate(clientPos, element, corner, opt_margin, viewport, failXY, opt_preferredSize);
  if ((status & goog.positioning.OverflowStatus.FAILED) == 0) {
    return;
  }
  if (status & goog.positioning.OverflowStatus.FAILED_LEFT || status & goog.positioning.OverflowStatus.FAILED_RIGHT) {
    corner = goog.positioning.flipCornerHorizontal(corner);
  }
  if (status & goog.positioning.OverflowStatus.FAILED_TOP || status & goog.positioning.OverflowStatus.FAILED_BOTTOM) {
    corner = goog.positioning.flipCornerVertical(corner);
  }
  status = goog.positioning.positionAtCoordinate(clientPos, element, corner, opt_margin, viewport, failXY, opt_preferredSize);
  if ((status & goog.positioning.OverflowStatus.FAILED) == 0) {
    return;
  }
  goog.positioning.positionAtCoordinate(clientPos, element, popupCorner, opt_margin, viewport, this.lastResortOverflow_, opt_preferredSize);
};

//# sourceMappingURL=goog.positioning.viewportclientposition.js.map
