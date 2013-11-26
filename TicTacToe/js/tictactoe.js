  $(document).ready(function(){
          
          var currentValue = "x";
        
       		$(".span2").click(function(){
             
               if(currentValue == "x")
               {
                  if ($(this).hasClass("value"))
                  {
                   alert("Already filled.. Please click on some other field!");

               }
                  
                    else
                    {
                  $(this).html(currentValue);
                  $(this).addClass("btn-primary value "+ currentValue);
                  currentValue = "o"
                  }
                }
                else
                {
                  if($(this).hasClass("value")) {

                    alert("Already filled.. Please click on some other field!");
                  }
                    else
                    {
                  $(this).html(currentValue);
                  $(this).addClass(" btn btn-success value "+ currentValue);
                  currentValue = "x"
                  }
              
                }
                 checkWinner();

               }); 

                function checkWinner() {
                  if(
                       ($("#cube1").hasClass('x') && $("#cube2").hasClass('x') && $("#cube3").hasClass('x')) 
                    || ($("#cube4").hasClass('x') && $("#cube5").hasClass('x') && $("#cube6").hasClass('x'))
                    || ($("#cube7").hasClass('x') && $("#cube8").hasClass('x') && $("#cube9").hasClass('x')) 
                    || ($("#cube1").hasClass('x') && $("#cube4").hasClass('x') && $("#cube7").hasClass('x')) 
                    || ($("#cube2").hasClass('x') && $("#cube5").hasClass('x') && $("#cube8").hasClass('x')) 
                    || ($("#cube3").hasClass('x') && $("#cube6").hasClass('x') && $("#cube9").hasClass('x')) 
                    || ($("#cube1").hasClass('x') && $("#cube5").hasClass('x') && $("#cube9").hasClass('x')) 
                    || ($("#cube3").hasClass('x') && $("#cube5").hasClass('x') && $("#cube7").hasClass('x'))
                    ) 
                  
                
                   
                    /*alert("Player X wins");*/
                    {
                    $(".messageBox").slideDown(1000);
                     $(".span2").slideUp(1000);
                    $(".btn2").slideUp("slow",0);
                    $(".btn1").slideDown("slow",0);
                    $(".messageBox").html("Congratulations <br>Player X Wins");
                 
                    }
                  

                  else if 
                    (
                        ($("#cube1").hasClass('o') && $("#cube2").hasClass('o') && $("#cube3").hasClass('o'))   
                    ||  ($("#cube4").hasClass('o') && $("#cube5").hasClass('o') && $("#cube6").hasClass('o')) 
                    ||  ($("#cube7").hasClass('o') && $("#cube8").hasClass('o') && $("#cube9").hasClass('o')) 
                    ||  ($("#cube1").hasClass('o') && $("#cube4").hasClass('o') && $("#cube7").hasClass('o')) 
                    ||  ($("#cube2").hasClass('o') && $("#cube5").hasClass('o') && $("#cube8").hasClass('o')) 
                    ||  ($("#cube3").hasClass('o') && $("#cube6").hasClass('o') && $("#cube9").hasClass('o')) 
                    ||  ($("#cube1").hasClass('o') && $("#cube5").hasClass('o') && $("#cube9").hasClass('o')) 
                    ||  ($("#cube3").hasClass('o') && $("#cube5").hasClass('o') && $("#cube7").hasClass('o'))
                    )              
                    /*alert("Player O wins");*/
                    {
                    $(".messageBox").slideDown(1000);
                    $(".span2").slideUp(1000);
                     $(".btn2").slideUp("slow",0);
                    $(".btn1").slideDown("slow",0);
                    $(".messageBox").html("Congratulations <br>Player O Wins");
                
                    }

                  else 
                  { 
                      var count = $(".value").length;
                      if(count==9)
                     {
                    $(".messageBox").slideDown(1000);
                    $(".span2").slideUp(1000);
                    $(".btn2").slideUp("slow",0);
                    $(".btn1").slideDown("slow",0);
                    $(".messageBox").html("Cat's Game!!!</br> It's a TIE!!!");
                    }
                  } 
               }


              $(".btn1").click(function(){
                
                 $(".span2").slideDown();
                 $(".btn2").slideDown("slow",0);
                  $(".btn1").slideUp("slow",0);
                 $(".messageBox").slideUp();
                  $(".span2").removeClass("btn-primary btn-success x o  value");
                 $(".span2").html("")


              });

               $(".btn2").click(function(){
                $(".span2").removeClass("btn-primary btn-success x o  value");
                $(".span2").html("")

               });

               $(".btn3").click(function(){
                window.close();

               });
      });