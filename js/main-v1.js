function isMobile() {
    let mobile_flag = 0;
    let screen_width = window.screen.width;
    let screen_height = window.screen.height;    
    //  var screen_width = window.innerWidth;
    //  var screen_height = window.innerHeight;   
     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 820){
         mobile_flag = 1;
        // console.log('mobile');
     }

    if(screen_width > 500 && screen_width < 820 && screen_height < 1300){
        mobile_flag = 2;
    //    console.log('tablet');
    }

    if(screen_width > 820 && screen_width < 1250 && screen_height > 1300){
        mobile_flag = 3;
    //    console.log('tablet2');
    }
     return mobile_flag;
}

function hoverImg(){
    let main = document.getElementById("main");
    let imgright = document.getElementById("img-right");
    let imgrightbg = document.getElementById("imgright-bg");
    let imgleft = document.getElementById("img-left");
    let imgleftbg = document.getElementById("imgleft-bg");
    let moveL=110;
    let moveS=100;
    //hover右側區塊
    $(".right-block").hover(function(){
        let imgright_top = imgright.offsetTop;
        let imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
    
        let imgrightbg_top = imgrightbg.offsetTop;
        let imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        
        let imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        let imgleft_left = imgleft.offsetLeft;
    
        let imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        let imgleftbg_left = imgleftbg.offsetLeft;
    
        let mobile_flag = isMobile(); // true為手機端，false為電腦端
        if(mobile_flag==0){//電腦
            moveL=110;
            moveS=100;
        }else if (mobile_flag==1){//手機
            moveL=30;
            moveS=20;
        }else if(mobile_flag==2){
            moveL=40;
            moveS=20;
        }else if(mobile_flag==3){
            moveL=100;
            moveS=50;
        }
        //綠色漸層
        $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 

        //放大圖片避免圖不夠大
        $( ".img-content-right" ).addClass( "img-content-right-open" ); 
        //區塊位移
        $(".img-right").css({
            'top': -190,
            'right': -80
        });
        $(".img-left").css({
            "bottom": -410,
            "left": -280
        });
        $(".imgright-bg").css({
            'top': -244,
            'right': -90
        });
        $(".imgleft-bg").css({
            'bottom': -410,
            'left': -280
        });
    },function(){
        $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
        $( ".img-content-right" ).removeClass( "img-content-right-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });
    $(".left-block").hover(function(){
        let imgright_top = imgright.offsetTop;
        let imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
    
        let imgrightbg_top = imgrightbg.offsetTop;
        let imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        
        let imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        let imgleft_left = imgleft.offsetLeft;
    
        let imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        let imgleftbg_left = imgleftbg.offsetLeft;
    
        let mobile_flag = isMobile(); // true為手機端，false為電腦端
        if(mobile_flag==0){//電腦
            moveL=110;
            moveS=100;
        }else if (mobile_flag==1){//手機
            moveL=30;
            moveS=20;
        }else if(mobile_flag==2){
            moveL=40;
            moveS=20;
        }else if(mobile_flag==3){
            moveL=100;
            moveS=50;
        }
        $( ".hover-bg-left" ).addClass( "hover-bg-open" );
        $( ".img-content-left" ).addClass( "img-content-left-open" ); 
        $(".img-right").css({
            'top': -410,
            'right': -280
        });
        $(".img-left").css({
            "bottom": -190, 
            "left": -80,
        });
        $(".imgright-bg").css({
            'top': -465,
            'right': -290
        });
        $(".imgleft-bg").css({
            'bottom': -245,
            'left': -90
        });
        console.log(imgrightbg_top-moveL, imgrightbg_right-moveS, imgleftbg_bottom+moveL, imgleftbg_left+moveS);
    },function(){
        $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
        $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });
 
}