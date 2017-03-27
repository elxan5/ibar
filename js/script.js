  /*search*/
  searchPlace=document.querySelector(".searchPlace");
  searchHelp=document.querySelector(".searchHelp");
  header=document.querySelector("#header");
  onlineRight=document.querySelector("#onlineRight");
 body = document.getElementsByTagName('body');
function contRight(){
	  var allBar=document.querySelector("#allBar");
	    t=-25;
	    var intCont=setInterval(cont,5);
	function cont(){
		if(t==0){
			clearInterval(intCont);
		}else{
			t+=5;
			header.style.transform="scale(0.928)";
			header.style.margin.bottom="15px";
			header.style.opacity="0.7";
			contactRight.style.display="block";
			contactRight.style.right=t+"%";
		}
	}
}
   var val=document.querySelector(".val");
    mov2=val.style;
 setTimeout(searchPlace.addEventListener("click",function(){
     searchHelp.style.top=0;
     searchHelp.style.fontSize="16px";
     setTimeout(function(){
       mov2.display="block";
     },600)
 setTimeout(header.addEventListener("click",function(){
     searchHelp.style.top="6%";
     searchHelp.style.fontSize="25px";
        mov2.display="none";
    },600))
}),1000);
/*search end*/
/*reset*/
    del=document.querySelector(".delete");
    bars=document.querySelector(".bars");
function move(){
	  var allBar=document.querySelector("#allBar");
	    p=-58;
	    var int=setInterval(frame,5);
	function frame(){
		if(p==0){
			clearInterval(int);
		}else{
			p++;
			header.style.transform="scale(0.91)";
			header.style.margin.bottom="15px";
			header.style.opacity="0.7";
			allBar.style.right=p+"%";
			allBar.style.display="block";
		}
	}
}
 header.addEventListener("click",function(){
     header.style.opacity="1";
    header.style.transform="none";
     allBar.style.right="-55%";
     contactRight.style.right="-26%";
     onlineRight.style.right="-26%";


     });
function barDelete(){
        p=-58;
        var intDel=setInterval(del);
  function del(){
      	if(p==0){
			clearInterval(intDel);
		}else{
          	p++;
          	header.style.opacity="1";
      		header.style.transform="none";
   	    	allBar.style.right=p+"%";
			allBar.style.display="none";

         }   
    }
}
function contDelete(){
        p=-26;
        var intDel=setInterval(del);
  function del(){
      	if(p==0){
			clearInterval(intDel);
		}else{
          	p++;
          	header.style.opacity="1";
      		header.style.transform="none";
   	    	contactRight.style.right=p+"%";
			contactRight.style.display="none";
            onlineRight.style.right=p+"%";
			onlineRight.style.display="none";
         }   x
    }
}
/*reset end*/

/*personal and corporativ*/
function onlineMy(){
	    t=-25;
	    var intCont=setInterval(myOn,5);
	function myOn(){
		if(t==0){
			clearInterval(intCont);
		}else{
			t+=5;
			header.style.transform="scale(0.91)";
			header.style.margin.bottom="15px";
			header.style.opacity="0.7";
			onlineRight.style.display="block";
			onlineRight.style.right=t+"%";
		}
	}
}
var personalImg=document.querySelector(".personalImg");
var personal=document.querySelector(".personal");
var personInfo=document.querySelector(".personInfo");
var content=document.querySelector("#content");
middleCont=document.querySelector(".middleCont");
  var total=0;
   j=-100;
personal.onclick=function personMove(){
      var  perint=setInterval(persİmg,.1);
       var mySet=setInterval(person,1);
     function persİmg(){
      if(j==0){
         clearInterval(perint);
         }else{
              j++;
              setTimeout(function(){
                   personalImg.style.display="block";   
                    corpImg.style.display="none";         
                  personalImg.style.top=j+"%";
         },.1)
              setTimeout(function(){
             personInfo.style.display="block";
              corpInfo.style.display="none";

              },1650)
         }                    
     }
function person(){
	if (total=="-200") {
         clearInterval(mySet);
			}else{
				total-=4;
           setTimeout(function(){
          mypolyone=header.style.clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
          middleCont.style.top=total+"%";
           setTimeout(function(){
          middleCont.style.display="none";
          mypoly=header.style.clipPath="polygon(0px 0px, 63% 0px, 39% 100%, 0% 100%)";
             },900);
             },10);
		  	};
    };
 
};
var corporativ=document.querySelector(".corporativ");
var corpImg=document.querySelector(".corporativImg");
var corpInfo=document.querySelector(".corpInfo");
var b=0;
var co=0;
var l=100;
corporativ.onclick=function corpMove(){
       var mySetcorp=setInterval(corpTop,1);
       var corpi=setInterval(imgCorp,.1);
       function imgCorp(){
        if(l==0){
         clearInterval(corpi);
         }else{
              l-=4;
              setTimeout(function(){
                   corpImg.style.display="block";      
                  corpImg.style.top=l+"%";
         },.1)
              setTimeout(function(){
             corpInfo.style.display="block";
             personInfo.style.display="none";
              },1000)
        }
    }
  }
  function corpTop(){
    if (b=="-200") {
         clearInterval(mySetcorp);
      }else{
        b-=4;
         setTimeout(function(){
          // header.style.clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
          middleCont.style.top=b+"%";
             setTimeout(function(){
                middleCont.style.display="none";
              header.style.clipPath="polygon(0px 0px, 63% 0px, 39% 100%, 0% 100%)";
             },900);
         },10);
     }
};
   function person(){
  if (co=="-200") {
         clearInterval(mySet);
      }else{
        co-=4;
           setTimeout(function(){
         secondp= header.style.clipPath="polygon(0px 0px, 63% 0px, 39% 100%, 0% 100%)";
          middleCont.style.top=c+"%";
           setTimeout(function(){
          middleCont.style.display="none";
             
             },900);
             },10);
          };
       };

 corporativ.addEventListener("click",function(){
         imgin=setInterval(imgtop,2)
          z=-100;
  function imgtop(){
      if( j==0){
         z--;
             setTimeout(function(){
             personalImg.style.top="-100%";
             personInfo.style.display="none";
        },110)
      }else{
       clearInterval(imgin);
     }
   }
},false)
