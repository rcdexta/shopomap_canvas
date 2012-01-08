var Graph = function(){
	this.nodes = [];
	this.path = []
}

Graph.prototype = {

	addNode: function(node){
		this.nodes.push(node);
	},
	
	printNodes: function(){
		console.log("[");
		for(var i=0;i<this.nodes.length;i++){
			console.log(this.nodes[i].toString());
		}
		console.log("]");
	},
	
	traverse: function(node, visited){
	  visited = visited || [];
	  visited.push(node);
		for(var i=0;i<node.edges.length;i++){
		  var nextNode = node.edges[i];
			if (visited.indexOf(nextNode) == -1){
				console.log(node.toString() + " : " + nextNode.toString());
				this.traverse(nextNode, visited);
			}
		}
	},
	
	shortestPath: function(node, target, parents, visited){
	
		visited = visited || [];
		parents = parents || [];
		visited.push(node);
		
		if (node == target){
			parents.push(node);
			$.extend(this.path, parents);
			return -1;
		}
		
		for(var i=0;i<node.edges.length;i++){
			var nextNode = node.edges[i];
			if (visited.indexOf(nextNode) == -1){
				parents.push(node);
				result = this.shortestPath(nextNode, target, parents, visited); 
				if (result == -1) return;
				parents.pop();
			}
		}		

	},
	
	printArray: function(arr){
		var str = "";
		for(var i=0;i<arr.length;i++){
			str = str + arr[i].toString() + ",";	
		}		
		console.log("[" + str + "]");
	}
	
}