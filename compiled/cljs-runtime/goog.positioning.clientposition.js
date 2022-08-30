goog.provide("goog.positioning.ClientPosition");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.math.Coordinate");
goog.require("goog.positioning");
goog.require("goog.positioning.AbstractPosition");
goog.require("goog.style");
goog.requireType("goog.math.Box");
goog.requireType("goog.math.Size");
goog.positioning.ClientPosition = function(arg1, opt_arg2) {
  this.coordinate = arg1 instanceof goog.math.Coordinate ? arg1 : new goog.math.Coordinate(arg1, opt_arg2);
};
goog.inherits(goog.positioning.ClientPosition, goog.positioning.AbstractPosition);
goog.positioning.ClientPosition.prototype.reposition = function(movableElement, movableElementCorner, opt_margin, opt_preferredSize) {
  goog.asserts.assert(movableElement);
  var viewportOffset = goog.style.getViewportPageOffset(goog.dom.getOwnerDocument(movableElement));
  var x = this.coordinate.x + viewportOffset.x;
  var y = this.coordinate.y + viewportOffset.y;
  var movableParentTopLeft = goog.positioning.getOffsetParentPageOffset(movableElement);
  x -= movableParentTopLeft.x;
  y -= movableParentTopLeft.y;
  goog.positioning.positionAtCoordinate(new goog.math.Coordinate(x, y), movableElement, movableElementCorner, opt_margin, null, null, opt_preferredSize);
};

//# sourceMappingURL=goog.positioning.clientposition.js.map
