/**
 * @constructor
 * declares a "class".
 */
var Point = function (x, y) { 
	this.x = x;
	this.y = y;
};

Point.prototype = {
	x:0,
	y:0,
	
	toString: function(){ return this.x + ', ' + this.y }
};
