var canvasHelper = {
	draw: function(context, path){
		
		context.beginPath();
  
	  	context.moveTo(path[0].x, path[0].y);
  
 		for(var i=1;i<path.length;i++){
    		context.lineTo(path[i].x, path[i].y);
    		context.fillRect(path[i].x-2, path[i].y-2, 4, 4);
  		}

  		context.strokeStyle = "#000";
  		context.stroke();
	}
};