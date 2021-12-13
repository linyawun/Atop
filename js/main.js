// $(function() {

//     setTimeout(function(){hoverImg()}, 1250);
// });


function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    // for (var v = 0; v < mobileAgents.length; v++) {
    //     if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
    //         mobile_flag = true;
    //         break;
    //     }
    // }

     var screen_width = window.screen.width;
     var screen_height = window.screen.height;    

     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 800){
         mobile_flag = true;
        console.log('mobile');
     }

     return mobile_flag;
}


function hoverImg(){
    var mobile_flag = isMobile(); // true為手機端，false為電腦端
    
    if(mobile_flag==false){//電腦版
    //hover右側區塊
    $(".right-block").hover(function(){
        //綠色漸層
        $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 

        //放大圖片避免圖不夠大
        $( ".img-content-right" ).addClass( "img-content-right-open" ); 
        //區塊位移
        $(".img-right").css({
            'top': '-190px',
            'right': '-70px'
        });
        $(".img-left").css({
            "bottom":"-400px",
            "left":"-280px"
        });
        $(".imgright-bg").css({
            'top': '-245px',
            'right': '-80px'
        });
        $(".imgleft-bg").css({
            'bottom': '-455px',
            'left': '-290px'
        })

    },function(){
        //回復原狀
        $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
        $( ".img-content-right" ).removeClass( "img-content-right-open" ); 

        $(".img-right").css({
            'top': '-300px',
            'right': '-180px'
        });
        

        $(".img-left").css({
            "bottom":"-300px",
            "left":"-180px"
        });
        $(".imgright-bg").css({
            'top': '-355px',
            'right': '-190px'
        });
        $(".imgleft-bg").css({
            'bottom': '-355px',
            'left': '-190px'
        })
    });

    //hover左側區塊
    $(".left-block").hover(function(){
        //綠色漸層
        $( ".hover-bg-left" ).addClass( "hover-bg-open" );
        //放大圖片避免圖不夠大
        $( ".img-content-left" ).addClass( "img-content-left-open" ); 

        //區塊位移
        $(".img-right").css({
            'top': '-400px',
            'right': '-280px'
        });
        $(".img-left").css({
            "bottom":"-190px",
            "left":"-70px"
        });
        $(".imgright-bg").css({
            'top': '-455px',
            'right': '-290px'
        });
        $(".imgleft-bg").css({
            'bottom': '-245px',
            'left': '-80px'
        })

    },function(){
        //回復原狀
        $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
        $( ".img-content-left" ).removeClass( "img-content-left-open" ); 

        $(".img-right").css({
            'top': '-300px',
            'right': '-180px'
        });
        $(".img-left").css({
            "bottom":"-300px",
            "left":"-180px"
        });
        $(".imgright-bg").css({
            'top': '-355px',
            'right': '-190px'
        });
        $(".imgleft-bg").css({
            'bottom': '-355px',
            'left': '-190px'
        })
    });
        
    }else if(mobile_flag==true){//手機版
        $(".right-block").hover(function(){
            //綠色漸層
            $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 
            $( ".img-content-right" ).addClass( "img-content-right-open" ); 
            //區塊位移
            $(".img-right").css({
                'top': '-8%',
                'right': '-45%'
            });
         
            $(".img-left").css({
                "bottom":"-19%",
                "left":"-51%"
            });
            $(".imgright-bg").css({
                'top': '-12%',
                'right': '-45%'
            });
            $(".imgleft-bg").css({
                'bottom': '-23%',
                'left': '-51%'
            })
    
        },function(){
            //回復原狀
            $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
            $( ".img-content-right" ).removeClass( "img-content-right-open" ); 
    
            $(".img-right").css({
                'top': '-11%',
                'right': '-48%'
            });
            $(".img-left").css({
                'bottom': '-16%',
                'left': '-48%'
            });
            $(".imgright-bg").css({
                'top': '-15%',
                'right': '-48%'
            });
            $(".imgleft-bg").css({
                'bottom': '-20%',
                'left': '-48%'

            })
        });
    
        //hover左側區塊
        $(".left-block").hover(function(){
            //綠色漸層
            $( ".hover-bg-left" ).addClass( "hover-bg-open" );
            $( ".img-content-left" ).addClass( "img-content-left-open" ); 
    
            //區塊位移
            $(".img-right").css({
                'top': '-19%',
                'right': '-51%'
            });
            $(".img-left").css({
                "bottom":"-8%",
                "left":"-45%"
            });
            $(".imgright-bg").css({
                'top': '-23%',
                'right': '-51%'
            });
            $(".imgleft-bg").css({
                'bottom': '-12%',
                'left': '-45%'
            })
    
        },function(){
            //回復原狀
            $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
            $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
    
            $(".img-right").css({
                'top': '-11%',
                'right': '-48%'
            });
            $(".img-left").css({
                'bottom': '-16%',
                'left': '-48%'
            });
            $(".imgright-bg").css({
                'top': '-15%',
                'right': '-48%'
            });
            $(".imgleft-bg").css({
                'bottom': '-20%',
                'left': '-48%'

            })
            
        });

    }

}