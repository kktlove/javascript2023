    var second = ;  //초침 선택
    var minute = ;  //분침 선택
    var hour = ;
    function clock(){
        var time = ; //날짜/시간 객체 생성
        var hh = ; //시 추출
        var mm = ; //분 추출
        var ss = ; //초 추출
        if( ) { } //시에 대하여 12시간제로 변경
        hh= ; //시 각도 계산
        mm= ; //분 각도 계산
        ss= ; //초 각도 계산
        second.style.transform = "rotate("+ss+"deg)"; //시침에 대한 각도 적용
        minute.style.transform = "rotate("+mm+"deg)"; //분침에 대한 각도 적용
        hour.style.transform = "rotate("+hh+"deg)"; //초침에 대한 각도 적용
    }
    clock();
    setInterval(function(){ clock(); }, 1000); //1초 마다 갱신
    var cw = ; //시계추 선택
    var sw=1;
    setInterval(function(){  //시계추 왕복
        if(sw==1){
            cw.style.transform = "rotate(45deg)";
            sw=sw*-1;
        } else {    
            cw.style.transform = "rotate(-45deg)"; 
            sw=sw*-1;
        }    
    }, 1000);  