function isMobile() {
    let mobile_flag = 0;
    let screen_width = window.screen.width;
    let screen_height = window.screen.height;    
    //  let screen_width = window.innerWidth;
    //  let screen_height = window.innerHeight;   
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
    const main = document.getElementById("main");
    const imgright = document.getElementById("img-right");
    const imgrightbg = document.getElementById("imgright-bg");
    const imgleft = document.getElementById("img-left");
    const imgleftbg = document.getElementById("imgleft-bg");
    let moveL=110;
    let moveS=100;
    // constants
    let c_imgright_top = imgright.offsetTop;
    let c_imgrightbg_top = imgrightbg.offsetTop;
    let c_imgleft_left = imgleft.offsetLeft;
    let c_imgleftbg_left = imgleftbg.offsetLeft;
    //hover右側區塊
    $(".right-block").hover(function(){
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
        let imgright_top = imgright.offsetTop;
        let imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
    
        let imgrightbg_top = imgrightbg.offsetTop;
        let imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        
        let imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        let imgleft_left = imgleft.offsetLeft;
    
        let imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        let imgleftbg_left = imgleftbg.offsetLeft;
        if(Math.abs(imgright_top - c_imgright_top) > 110){
            console.log(Math.abs(imgright_top - c_imgright_top));
            return;
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
        });
    },function(){
        $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
        $( ".img-content-right" ).removeClass( "img-content-right-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });
    //hover左側區塊
    $(".left-block").hover(function(){
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
        let imgright_top = imgright.offsetTop;
        let imgright_right = main.offsetWidth - imgright.offsetLeft - imgright.offsetWidth;
        let imgrightbg_top = imgrightbg.offsetTop;
        let imgrightbg_right = main.offsetWidth - imgrightbg.offsetLeft - imgrightbg.offsetWidth;
        let imgleft_bottom = main.offsetHeight - imgleft.offsetTop - imgleft.offsetHeight;
        let imgleft_left = imgleft.offsetLeft;
        let imgleftbg_bottom = main.offsetHeight - imgleftbg.offsetTop - imgleftbg.offsetHeight;
        let imgleftbg_left = imgleftbg.offsetLeft;
        if(Math.abs(imgright_top - c_imgright_top) > 110){
            return;
        }
        //綠色漸層
        $( ".hover-bg-left" ).addClass( "hover-bg-open" );
        $( ".img-content-left" ).addClass( "img-content-left-open" ); 
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
        });
    },function(){
        $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
        $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
        imgright.style.cssText = '';
        imgleft.style.cssText = '';
        imgrightbg.style.cssText = '';
        imgleftbg.style.cssText = '';
    });
 
}