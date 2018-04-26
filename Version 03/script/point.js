var Howells = Howells || {};
Howells.Geometry = Howells.Geometry || {};

Howells.Geometry.Point = (function() {
    /**
     * @constructor
     * declares a "class".
     */
    var thePoint = function (x, y) {

        /**
         * @public gets the X co-ordinate
         * @returns {number} x co-ordinate
         */
        this.getX = function () {
            return x;
        };

        /**
         * @public gets the Y co-ordinate
         * @returns {number} y co-ordinate
         */
        this.getY = function() {
            return y;
        };
    };

    thePoint.prototype.toString = function() {
        return this.getX() + ', ' + this.getY();
    };

    return thePoint;
})();
