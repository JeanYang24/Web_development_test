function myFunction(){
    try{
        document.getElementById("demo").innerHTML="见证奇迹的时刻" ; 
    }catch(err){
        alert(err.message);
    }
     
}

function mouseOver(){
    document.getElementById("ide").innerHTML="12345";
}

function mouseOut(){
    document.getElementById("ide").innerHTML="Another test";
}

var a;
var b;
function addition(){
    a=parseInt(Math.floor(Math.random()*50));
    b=parseInt(Math.floor(Math.random()*50));
    var str=a+"+"+b+"="+"?";
    document.getElementById("add").innerHTML=str;
}

function verify(){
    var x=document.getElementById("result").value;
    console.log(a+b);
    if(x == (a+b)){
        document.getElementById("prompt").innerText="Correct.";
    }
    else{
        document.getElementById("prompt").innerHTML="Incorrect.Please again.";
        addition();
    }
}

addition();