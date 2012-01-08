Graph.Node = function(x,y, label){
	this.label = label;
	this.x = x;
	this.y = y;
	this.edges = [];
}

Graph.Node.prototype = {
	toString: function(){
		return this.label + "(" + this.x + "," + this.y + ")";
	}
}
