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

        var points = [v1, v2, v3];

        this.toString = function () {
            var value = 'Triangle: ';
            for (var i = 0; i < points.length; i++) {
                if (i > 0) {
                    value = value + ', ';
                }
                value = value + '(' + points[i].toString() + ')';
            }
            return value;
        };

        this.draw = function (canvas) {
            if (canvas.getContext === undefined) {
                return;
            }

            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            for (var i = 0; i < points.length; i++) {
                var p = points[i];
                if (i === 0) {
                    ctx.moveTo(p.getX(), p.getY());
                } else {
                    ctx.lineTo(p.getX(), p.getY());
                }
            }
            ctx.fill();
        };
    };

    return theTriangle;
})();

