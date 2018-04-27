var Howells = Howells || {};
Howells.Drawing = Howells.Drawing || {};

Howells.Drawing.Shape = (function () {
    /**
     * @constructor 
     * @param {Array<Howells.Geometry.Point>} the points that make up the shape
     * @param {string} name
     */
    var theShape = function (nameOfShape, allPoints) {
        var self = this;

        this.getName = function() { return nameOfShape; };
        this.getPoints = function() { return allPoints; };

        this.toString = function () {
            var value = self.getName() +': ';
            var points = self.getPoints();
            for (var i = 0; i < points.length; i++) {
                if (i > 0) {
                    value = value + ', ';
                }
                value = value + '(' + points[i].toString() + ')';
            }
            return value;
        };

        this.draw = function(canvas) {
            if (canvas.getContext === undefined) {
                return;
            }

            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            var points = self.getPoints();
            for (var i = 0; i < points.length; i++) {
                var p = points[i];
                if (i === 0) {
                    ctx.moveTo(p.getX(), p.getY());
                } else {
                    ctx.lineTo(p.getX(), p.getY());
                }
            }
            ctx.fillStyle = this.getFillColour();
            ctx.fill();
        };
    };

    theShape.prototype.getFillColour = function() { return 'black'; };

    return theShape;
})();

