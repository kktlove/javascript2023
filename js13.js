var html = "";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var res = document.getElementById("res");
var res2 = document.getElementById("res2");
btn1.addEventListener("click", function(){
    objectInfo();
});
function objectInfo(){    
    for(var key in history){
        html += "<p>"+key+":"+history[key]+"</p>";
    }
    res.innerHTML = html;
}
btn2.addEventListener("click", function(){
    res2.innerText = location.href;
    setTimeout(function(){
        location.href = "https://www.naver.com";
    }, 2500);
});
btn3.addEventListener("click", function(){
    location.reload();
});
btn4.addEventListener("click", function(){ //뒤로가기 없음
    location.replace("https://www.google.com");
});
btn5.addEventListener("click", function(){ //뒤로가기 있음
    location.assign("https://www.daum.net");
});
btn6.addEventListener("click", function(){ //뒤로 가기
    history.back();
});
btn7.addEventListener("click", function(){ //앞으로 가기
    history.forward();
});
btn8.addEventListener("click", function(){ //원하는 대로 가기
    history.go(2);  //한 단계 앞으로
    //history.go(2);  //두 단계 앞으로
    //history.go(-1);  //한 단계 뒤로
    //history.go(-2);  //두 단계 뒤로
});
function moving(){
    var loc = document.getElementById("sel");
    if(loc.value!=""){
        //location.href = loc.value;
        //location.replace(loc.value);
        location.assign(loc.value);
    }
}   