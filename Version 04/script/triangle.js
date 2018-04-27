var Howells = Howells || {};
Howells.Drawing = Howells.Drawing || {};

Howells.Drawing.Triangle = (function () {
    /**
     * @constructor 
     * @param {Howells.Geometry.Point} v1
     * @param {Howells.Geometry.Point} v2
     * @param {Howells.Geometry.Point} v3
     */
    var theTriangle = function (v1, v2, v3) {

        // call the constructor of the base class
        Howells.Drawing.Shape.call(this, 'Triangle', [v1, v2, v3]);
    };

    theTriangle.prototype = Object.create(Howells.Drawing.Shape);
    theTriangle.prototype.getFillColour = function () { return 'red'; };

    return theTriangle;
})();

