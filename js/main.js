// $(function() {

//     setTimeout(function(){hoverImg()}, 1250);
// });


function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = 0;

    //根据userAgent判断是否是手机
    // for (var v = 0; v < mobileAgents.length; v++) {
    //     if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
    //         mobile_flag = true;
    //         break;
    //     }
    // }

    //  var screen_width = window.screen.width;
    //  var screen_height = window.screen.height;    
     var screen_width = window.innerWidth;
     var screen_height = window.innerHeight;   

     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 820){
         mobile_flag = 1;
        console.log('mobile');
     }

     if(screen_width > 500 && screen_width < 820 && screen_height < 1300){
        mobile_flag = 2;
       console.log('tablet');
    }

     if(screen_width > 820 && screen_width < 1250 && screen_height > 1300){
        mobile_flag = 3;
       console.log('tablet2');
    }
     return mobile_flag;
}


function hoverImg(){
    var mobile_flag = isMobile(); // true為手機端，false為電腦端
    
    if(mobile_flag==0){//電腦版
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
        
    }else if(mobile_flag==1){//手機版
        $(".right-block").hover(function(){
            //綠色漸層
            $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 
            $( ".img-content-right" ).addClass( "img-content-right-open" ); 
            //區塊位移
            $(".img-right").css({
                'top': '-5%',
                'right': '-45%'
            });
            $(".img-left").css({
                'bottom': '-31%',
                'left': '-51%'
            });
            $(".imgright-bg").css({
                'top': '-9%',
                'right': '-45%'
            });
            $(".imgleft-bg").css({
                'bottom': '-36%',
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
                'bottom': '-25%',
                'left': '-48%'
            });
            $(".imgright-bg").css({
                'top': '-15%',
                'right': '-48%'
            });
            $(".imgleft-bg").css({
                'bottom': '-30%',
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
                'top': '-22%',
                'right': '-51%'
            });
            $(".img-left").css({
                "bottom":"-14%",
                "left":"-45%"
            });
            $(".imgright-bg").css({
                'top': '-26%',
                'right': '-51%'
            });
            $(".imgleft-bg").css({
                'bottom': '-19%',
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
                'bottom': '-25%',
                'left': '-48%'
            });
            $(".imgright-bg").css({
                'top': '-15%',
                'right': '-48%'
            });
            $(".imgleft-bg").css({
                'bottom': '-30%',
                'left': '-48%'
            })
            
        });

    }else if(mobile_flag==2){
        //hover右側區塊
        $(".right-block").hover(function(){
            //綠色漸層
            $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 

            //放大圖片避免圖不夠大
            $( ".img-content-right" ).addClass( "img-content-right-open" ); 
            //區塊位移
            $(".img-right").css({
                'top': '-170px',
                'right': '-420px'
            });
            $(".img-left").css({
                "bottom":"-250px",
                "left":"-465px"
            });
            $(".imgright-bg").css({
                'top': '-225px',
                'right': '-420px'
            });
            $(".imgleft-bg").css({
                "bottom":"-305px",
                "left":"-465px"
            })
        },function(){
            //回復原狀
            $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
            $( ".img-content-right" ).removeClass( "img-content-right-open" ); 

            $(".img-right").css({
                'top': '-210px',
                'right': '-440px'
            });
            $(".img-left").css({
                "bottom":"-210px",
                "left":"-445px"
            });
            $(".imgright-bg").css({
                'top': '-265px',
                'right': '-440px'
            });
            $(".imgleft-bg").css({
                "bottom":"-265px",
                "left":"-445px"
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
                'top': '-250px',
                'right': '-465px'
            });
            $(".img-left").css({
                "bottom":"-170px",
                "left":"-420px"
            });
            $(".imgright-bg").css({
                'top': '-305px',
                'right': '-465px'
            });
            $(".imgleft-bg").css({
                "bottom":"-225px",
                "left":"-420px"
            })

        },function(){
            //回復原狀
            $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
            $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
            $(".img-right").css({
                'top': '-210px',
                'right': '-440px'
            });
            $(".img-left").css({
                "bottom":"-210px",
                "left":"-445px"
            });
            $(".imgright-bg").css({
                'top': '-265px',
                'right': '-440px'
            });
            $(".imgleft-bg").css({
                "bottom":"-265px",
                "left":"-445px"
            })
        });  
    }else if(mobile_flag==3){
        //hover右側區塊
        $(".right-block").hover(function(){
            //綠色漸層
            $( ".hover-bg-right" ).addClass( "hover-bg-open" ); 
            //放大圖片避免圖不夠大
            $( ".img-content-right" ).addClass( "img-content-right-open" ); 
            //區塊位移
            $(".img-right").css({
                'top': '-130px',
                'right': '-230px'
            });
            $(".img-left").css({
                "bottom":"-250px",
                "left":"-380px"
            });
            $(".imgright-bg").css({
                'top': '-185px',
                'right': '-230px'
            });
            $(".imgleft-bg").css({
                "bottom":"-305px",
                "left":"-380px"
            })
        },function(){
            //回復原狀
            $( ".hover-bg-right" ).removeClass( "hover-bg-open" );
            $( ".img-content-right" ).removeClass( "img-content-right-open" ); 

            $(".img-right").css({
                'top': '-230px',
                'right': '-330px'
            });
            $(".img-left").css({
                "bottom":"-200px",
                "left":"-330px"
            });
            $(".imgright-bg").css({
                'top': '-285px',
                'right': '-330px'
            });
            $(".imgleft-bg").css({
                "bottom":"-255px",
                "left":"-330px"
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
                'top': '-280px',
                'right': '-380px'
            });
            $(".img-left").css({
                "bottom":"-100px",
                "left":"-230px"
            });
            $(".imgright-bg").css({
                'top': '-335px',
                'right': '-380px'
            });
            $(".imgleft-bg").css({
                "bottom":"-155px",
                "left":"-230px"
            })
        },function(){
            //回復原狀
            $( ".hover-bg-left" ).removeClass( "hover-bg-open" );
            $( ".img-content-left" ).removeClass( "img-content-left-open" ); 
            $(".img-right").css({
                'top': '-230px',
                'right': '-330px'
            });
            $(".img-left").css({
                "bottom":"-200px",
                "left":"-330px"
            });
            $(".imgright-bg").css({
                'top': '-285px',
                'right': '-330px'
            });
            $(".imgleft-bg").css({
                "bottom":"-255px",
                "left":"-330px"
            })
        });  
    }
 
}