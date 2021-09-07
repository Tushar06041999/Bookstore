let id1=document.getElementById("btn1");
let id2=document.getElementById("btn2")
let id3=document.getElementById("btn3");
let id4=document.getElementById("btn4");
let first=document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let forth=document.getElementById("forth");
let fifth=document.getElementById("fifth");

// id1.addEventListener("click",function(){
  
  
// })

let g = 0;


function up() {
	if (g < 30) {
		g++;
		document.getElementById('second').innerHTML = g;
      let a=500;
      let total=a*g;
     document.getElementById("third").innerHTML=total;
     
	}
}	
function down() {
	if (g > 0) {
		g--;
		document.getElementById('second').innerHTML = g;
      let a=500;
      let total=a*g;
      document.getElementById("third").innerHTML=total;
      // if(second.innerHTML>1){
      //    let total=a*(second.innerHTML-1);
      //    document.getElementById("third").innerHTML=total;

      // }
      // else if(second.innerHTML==2){
      //    let total=a*(second.innerHTML);
      //    document.getElementById("third").innerHTML=total;
      // }
      // else{
      //    let total=a*(second.innerHTML);
      //    document.getElementById("third").innerHTML=total;
      // }
      
	}
}	

// NAsim books add

let h = 0;

function upeer() {
	if (h < 30) {
		h++;
		document.getElementById('forth').innerHTML = h;
      let b=350;
      let total2=b*h;
     document.getElementById("fifth").innerHTML=total2;
     return total2;
     
	}
}	
function downer() {
	if (h > 0) {
		h--;
		document.getElementById('forth').innerHTML = h;
      let b=350;
      let total2=b*h;
     document.getElementById("fifth").innerHTML=total2;
     return total2;
	}
}	

// add value thirfd and fifth id
let almost=third.innerHTML+fifth.innerHTML;
console.log(third.value);
first.innerHTML=almost;


