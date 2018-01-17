	function DragBoxLimit(boxId){
		DragBox.call(this,boxId)
	}
	DragBoxLimit.prototype=new DragBox()
	DragBoxLimit.prototype.move=function(x, y) {
		if(x<0){ 
			x=0    
		}
		if(y<0) {  
			y=0     
		}
		this.ele.css({
			left:x,
			top:y
		})
	}
	this.ele.html("left:"+x+" top:"+y)
}

