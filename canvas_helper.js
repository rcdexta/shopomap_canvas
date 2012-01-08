var canvasHelper = {
	draw: function(context, path){
		
		context.beginPath();
		
		context.lineWidth = 3;
  
	  	context.moveTo(path[0].x, path[0].y);
  
 		for(var i=1;i<path.length;i++){
    		context.lineTo(path[i].x, path[i].y);
    		context.fillRect(path[i].x-2, path[i].y-2, 4, 4);
  		}

  		context.strokeStyle = "#000";
  		context.stroke();
	},
	
	getCursorPosition: function(e) {
	
	    var x;
	    var y;
	    if (e.pageX || e.pageY) {
	      x = e.pageX;
	      y = e.pageY;
	    }
	    else {
	      x = e.clientX + document.body.scrollLeft +
	           document.documentElement.scrollLeft;
	      y = e.clientY + document.body.scrollTop +
	           document.documentElement.scrollTop;
	    }
	    
	    x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		
		console.log(x,y)
  }

};