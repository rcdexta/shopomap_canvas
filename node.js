Graph.Node = function(x,y, label){
	this.label = label;
	this.x = x;
	this.y = y;
	this.edges = [];
}

Graph.Node.prototype = {
	toString: function(){
		return this.label + "(" + this.x + "," + this.y + ")";
	},
	
	addEdges: function(nodes){
		for(var i=0;i<nodes.length;i++){
			this.edges.push(nodes[i]);
			nodes[i].edges.push(this);
		}
	}
}
