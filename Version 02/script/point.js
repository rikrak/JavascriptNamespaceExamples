var Howells = Howells || {};
Howells.Geometry = Howells.Geometry || {};

/**
 * @constructor
 * declares a "class".
 */
Howells.Geometry.Point = function (x, y) { 
	this.x = x;
	this.y = y;
};

Howells.Geometry.Point.prototype = {
	x:0,
	y:0,
	
	toString: function(){ return x + ', ' + y }
};
