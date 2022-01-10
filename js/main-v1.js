function isMobile() {
    var mobile_flag = 0;
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;    
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
    var main = document.getElementById("main");
    var imgright = document.getElementById("img-right");
    var imgrightbg = document.getElementById("imgright-bg");
    var imgleft = document.getElementById("img-left");
    var imgleftbg = document.getElementById("imgleft-bg");
    var moveL=110;
    var moveS=100;
    //hover右側區塊
    $(".right-block").hover(function(){
        var imgright_top = imgright.offsetTop;
        var imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
    
        var imgrightbg_top = imgrightbg.offsetTop;
        var imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        
        var imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        var imgleft_left = imgleft.offsetLeft;
    
        var imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        var imgleftbg_left = imgleftbg.offsetLeft;
    
        var mobile_flag = isMobile(); // true為手機端，false為電腦端
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
            'top': imgright_top+moveL,
            'right': imgright_right+moveS
        });
        $(".img-left").css({
            "bottom":imgleft_bottom-moveL,
            "left":imgleft_left-moveS
        });
        $(".imgright-bg").css({
            'top': imgrightbg_top+moveL,
            'right': imgrightbg_right+moveS
        });
        $(".imgleft-bg").css({
            'bottom': imgleftbg_bottom-moveL,
            'left': imgleftbg_left-moveS
        })

    },function(){
        //回復原狀
        $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
        $( ".img-content-right" ).removeClass( "img-content-right-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });

    //hover左側區塊
    $(".left-block").hover(function(){
        var imgright_top = imgright.offsetTop;
        var imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
    
        var imgrightbg_top = imgrightbg.offsetTop;
        var imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        
        var imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        var imgleft_left = imgleft.offsetLeft;
    
        var imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        var imgleftbg_left = imgleftbg.offsetLeft;
    
        var mobile_flag = isMobile(); // true為手機端，false為電腦端
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
        $( ".hover-bg-left" ).addClass( "hover-bg-open" );
        //放大圖片避免圖不夠大
        $( ".img-content-left" ).addClass( "img-content-left-open" ); 
        //區塊位移
        $(".img-right").css({
            'top': imgright_top-moveL,
            'right': imgright_right-moveS
        });
        $(".img-left").css({
            "bottom":imgleft_bottom+moveL, 
            "left":imgleft_left+moveS
        });
        $(".imgright-bg").css({
            'top': imgrightbg_top-moveL,
            'right': imgrightbg_right-moveS
        });
        $(".imgleft-bg").css({
            'bottom': imgleftbg_bottom+moveL,
            'left': imgleftbg_left+moveS
        })

    },function(){
        //回復原狀
        $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
        $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });
 
}