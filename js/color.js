var numsq=6;
    var colors=generaterandom(numsq);
    var span=document.getElementById("color");
    var msg=document.getElementById("message");
    var squares=document.querySelectorAll(".square");
    var picked=pickcolor();
    var easy=document.getElementById("easy");
    var hard=document.getElementById("hard");
        
        easy.addEventListener("click",function(){
           this.classList.add("selected");
            hard.classList.remove("selected");
            numsq=3;
            colors=generaterandom(numsq);
            picked=pickcolor();
            span.textContent=picked;
            h1.style.backgroundColor="steelblue";
            for(var i=0;i<squares.length;i++)
                {
                    if(colors[i]){
                        squares[i].style.backgroundColor=colors[i];
                    }
                    else{
                        squares[i].style.display="none";
                        
                    }
                }
            
        });
        
        hard.addEventListener("click",function(){
            numsq=6;
           easy.classList.remove("selected");
                        h1.style.backgroundColor="steelblue";

           this.classList.add("selected");
            colors=generaterandom(numsq);
            picked=pickcolor();
            span.textContent=picked;
            for(var i=0;i<squares.length;i++)
                {
                        squares[i].style.backgroundColor=colors[i];
                    squares[i].style.display="block";
                        
                    }
        
        });
        
        
var h1=document.querySelector("h1");
        var newc=document.getElementById("new");
        newc.addEventListener("click",function(){
            //one way of doing is refreshng the page again and again  using the newc button---
           // window.location.reload();
            colors=generaterandom(numsq);
            picked=pickcolor();
            span.textContent=picked;
            newc.textContent="New Colors";
            for(var i=0;i<squares.length;i++){
                squares[i].style.backgroundColor=colors[i];
            }
            h1.style.backgroundColor="steelblue";
            message.textContent=" ";
        });
        for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
                    
            //add evenetlistener
            squares[i].addEventListener("click",function(){
               var clicked=this.style.backgroundColor; 
              if(clicked===picked)
                  {
                      //alert("correct");
                      
                      msg.textContent="Correct";
                      changecolor(clicked);
                      h1.style.backgroundColor=clicked;
                      newc.textContent="Play again?";
                      
                  }
                else{
                   this.style.backgroundColor="#232323";
                    msg.textContent="Try again";
                }
            });
        }
        var span=document.getElementById("color");
        span.textContent=picked;
        function changecolor(color){
            for(var i=0;i<colors.length;i++)
                {
                    squares[i].style.backgroundColor=color;
                }
        }
        function pickcolor(){
            var random=Math.floor(Math.random()* colors.length);
            return colors[random];
        }
        function generaterandom(num){
            var arr=[];
            for(var i=0;i<num;i++)
                {
            arr.push(randomcolor());
                }
            return arr;
           //alert(arr);
        
            
        }
        function randomcolor(){
            var r=Math.floor(Math.random()*256);
            var g=Math.floor(Math.random()*256);
            var b=Math.floor(Math.random()*256);
            var col="rgb("+r+","+" "+g+","+" "+b+")";
            return col;
            //console.log(col);
        }
   