var Howells = Howells || {};
Howells.Drawing = Howells.Drawing || {};

Howells.Drawing.Quadrilateral = function (v1, v2, v3, v4) { 
	this.vertex1 = v1;
	this.vertex2 = v2;
	this.vertex3 = v3;
	this.vertex4 = v4;
};

Howells.Drawing.Quadrilateral.prototype = {
	vertex1: new Howells.Geometry.Point(0,0),
	vertex2: new Howells.Geometry.Point(0,0),
	vertex3: new Howells.Geometry.Point(0,0),
	vertex4: new Howells.Geometry.Point(0,0),
	
	toString: function(){ return 'Quadrilateral: (' + this.vertex1.toString() + '), (' + this.vertex2.toString() + '), (' + this.vertex3.toString() + '), (' + this.vertex4.toString() + ')' },
	draw:function(canvas){
		if (canvas.getContext === undefined) { return; }
		
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.vertex1.x, this.vertex1.y);
		ctx.lineTo(this.vertex2.x, this.vertex2.y);
		ctx.lineTo(this.vertex3.x, this.vertex3.y);
        ctx.lineTo(this.vertex4.x, this.vertex4.y);
	    ctx.fillStyle = 'blue';
		ctx.fill();
	}
};
