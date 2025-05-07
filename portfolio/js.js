$(document).ready(function(){

    
    $('.logo').eq(0).addClass('on')

    // 일정 시간이 흐른 후 nav li가 addCalss on이 되어라 (gnb))

    setTimeout(function(){

        $('nav li').eq(0).addClass('on')
    },400)

    setTimeout(function(){

        $('nav li').eq(1).addClass('on')
    },600)

    setTimeout(function(){

        $('nav li').eq(2).addClass('on')
    },800)

    setTimeout(function(){

        $('nav li').eq(3).addClass('on')
    },1000)


    // 일정 시간이 흐른 뒤 mainbg의 첫번째 div에 addClass on이 되어라 (name)

    setTimeout(function(){

        $('.mainbg>div').eq(0).addClass('on')
    },1200)

     // 일정 시간이 흐른 뒤 pf의 첫번째 div에 addClass on이 되어라 (port)

     setTimeout(function(){

        $('.pf>div').eq(0).addClass('on')
    },1600)

    // 일정 시간이 흐른 뒤 pf의 두번째 div에 addClass on이 되어라 (port)

    setTimeout(function(){

        $('.pf>div').eq(1).addClass('on')
    },1800)

    // 텍스트 위에 선이 서서히 커진다

    setTimeout(function(){

        $('.txt001>div').eq(0).addClass('on')
    },2400)

    // 텍스트 박스가 서서히 커진다

    setTimeout(function(){

        $('.txt001>div').eq(1).addClass('on')
    },2500)

    // 텍스트 아래에 선이 서서히 커진다

    setTimeout(function(){

        $('.txt001>div').eq(2).addClass('on')
    },2600)

    // 타이핑 효과
    const content = "다양한 목적의 웹사이트를 사용자 중심으로 설계하고 디자인했습니다.<br>심플하지만 따뜻하게, 직관적이지만 감성적으로. 누구나 편히 사용할 수 있는 환경을 만드는 데 집중했습니다.";
    const text = document.querySelector(".text");
    let i = 0;
  
    function typing() {
      if (i < content.length) {
        const txt = content.charAt(i);
  
        if (content.substring(i, i + 4) === "<br>") {
          text.innerHTML += "<br>";
          i += 4;
        } else {
          text.innerHTML += txt;
          i++;
        }
  
        setTimeout(typing, 60);
      }
    }
  
    setTimeout(() => {
      typing();
    }, 4000);

    $('.logo').click(function(){

        $('.inner1').removeClass('on')
        $('.inner2').removeClass('on')
        $('.inner3').removeClass('on')
        $('.inner4').removeClass('on')
        $('.inner5').removeClass('on')

        $('.inner1').addClass('on')


    })


    $('nav li').eq(0).click(function(){

        $('.inner1').removeClass('on')
        $('.inner2').removeClass('on')
        $('.inner3').removeClass('on')
        $('.inner4').removeClass('on')
        $('.inner5').removeClass('on')
        
        $('.inner2').addClass('on')



    })



    $('nav li').eq(1).click(function(){

        $('.inner1').removeClass('on')
        $('.inner2').removeClass('on')
        $('.inner3').removeClass('on')
        $('.inner4').removeClass('on')
        $('.inner5').removeClass('on')
        
        $('.inner3').addClass('on')
        $('.txtbox001').removeClass('on')
        $('nav li').eq(1).addClass('on')

        setTimeout(function(){

            
            $('.txtbox001').addClass('on')

        },50)

    })

    $('nav li').eq(2).click(function(){

        $('.inner1').removeClass('on')
        $('.inner2').removeClass('on')
        $('.inner3').removeClass('on')
        $('.inner4').removeClass('on')
        $('.inner5').removeClass('on')
        
        $('.inner4').addClass('on')
        $('.txtbox002').removeClass('on')


        setTimeout(function(){

            
            $('.txtbox002').addClass('on')

        },50)

    })

    $('nav li').eq(3).click(function(){

        $('.inner1').removeClass('on')
        $('.inner2').removeClass('on')
        $('.inner3').removeClass('on')
        $('.inner4').removeClass('on')
        $('.inner5').removeClass('on')
        
        $('.inner5').addClass('on')
        $('.txtbox003').removeClass('on')


        setTimeout(function(){

            
            $('.txtbox003').addClass('on')

        },50)

    })



// 모든 .btn01 안의 .view 버튼에 이벤트 설정
$('.btn01 .view').click(function(){
    let parent = $(this).closest('.inner3, .inner4, .inner5')
    parent.find('.view001').addClass('on')
    parent.find('.Overlay').addClass('on')
    parent.find('.delete').addClass('on')


  });
  
  // 닫기 버튼 클릭 시 해당 view만 닫기
  $('.viewclick .delete p').click(function(){
    let parent = $(this).closest('.viewclick')
    parent.find('.view001').removeClass('on')
    parent.find('.Overlay').removeClass('on')
    parent.find('.delete').removeClass('on')

  });
  



}) // 제이쿼리 끝