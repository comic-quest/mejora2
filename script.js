var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cursor = 0;

function load(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

var img = new Image();

    img.onload=function(){
        var x = canvas.width/2-img.width/2
        var y = canvas.height/2-img.height/2
        
        ctx.drawImage(img,x,y);
        
        function move(e){
            
           
            
            if(e.pageX>=x){
               if(e.pageX<x+img.width){
                if(e.pageY>=y){
                    if(e.pageY<y+img.height){
                        cursor=1;
                        
                        canvas.style.cursor = "pointer"
                        
                        return
                       
                    }
                }
                   
               }
                
               }
            
            canvas.style.cursor = "default";
        }
        
        canvas.addEventListener("mousemove",move);
        
    }
    
    img.src = "un.png"
    
    
    
}

window.addEventListener("load",load);

