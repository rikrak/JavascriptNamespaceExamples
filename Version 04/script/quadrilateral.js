var Howells = Howells || {};
Howells.Drawing = Howells.Drawing || {};

Howells.Drawing.Quadrilateral = (function () {
    /**
     * @constructor 
     * @param {Howells.Geometry.Point} v1
     * @param {Howells.Geometry.Point} v2
     * @param {Howells.Geometry.Point} v3
     * @param {Howells.Geometry.Point} v4
     */
    var theQuadrilateral = function (v1, v2, v3, v4) {
        // call the constructor of the base class
        Howells.Drawing.Shape.call(this, 'Quadrilateral', [v1, v2, v3, v4]);

        this.getFillColour = function() { return 'blue'; };
    };

    // inherit from Shape
    theQuadrilateral.prototype = Object.create(Howells.Drawing.Shape);

    return theQuadrilateral;
})();

