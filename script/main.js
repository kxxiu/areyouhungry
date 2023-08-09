//모바일 연결 스트립트
let mobile_keys = ['iPhone','iPad','Android','BlackBerry','Windows Phone', 'SAMSUNG', 'LG', 'MOT', 'SonyErisson','Nokia'];
if(document.URL.match('move_pc_screen')) mobile_keys = null;
for( i in mobile_keys){
  if(navigator.userAgent.match(mobile_keys[i]) != null){
  location.href = "mindex.html"; 
    break;
  }
}

// 헤더 랜덤 이미지 스크립트
let img_num = Math.floor(Math.random()*4+1);

document.getElementById('gnb_img').src='./images/gnbrandom0'+img_num+'.png';

// 페밀리 사이트 드랍다운 제이쿼리
$('#f-btn').click(function(){
  $('.family').slideToggle();
  $('.family').css('top','3px');
  $(this).find('i').toggleClass('on');
});

$(document).ready(function(){

  // 헤더 호버 시 나오는거

  let gnb = $('.gnb> ul> li> a');
  gnb.mouseenter(function(){
    $(this).addClass('act');
    return false;
  });
  // gnb.mouseleave(function(){
  //   $(this).removeClass('act');
  // });
  gnb.parent().mouseleave(function(){
    $(this).find('a').removeClass('act');
  });




  // 1. 메인 슬라이드 제이쿼리

  let n = 1;
  let p_num = $('.slide_wrap >li').length;

  let l_btn = $('.c_btn> li i.fa-angle-left');
  let r_btn = $('.c_btn> li i.fa-angle-right');
  let s_btn = $('.c_btn> li i.fa-pause');
  let i = 0;

  $('.slide_wrap> li:last-child').insertBefore('.slide_wrap> li:first-child');

  $('.slide_wrap').css('margin-left','-100%');

  function moveLeft(){
    if(i < p_num - 1){
      i++;
    }else {
      i=0;
    }
    $('.slide_wrap').stop().animate({'margin-left':'-200%'},1000,function(){
      $('.slide_wrap> li:first-child').insertAfter('.slide_wrap> li:last-child'); 
      $('.slide_wrap').css('margin-left','-100%');
    });
    Pagenumber();
  }

  function moveRight(){
    if(i > 0){
      i--;
    }else {
      i = p_num -1;
    }
    $('.slide_wrap').stop().animate({'margin-left':'0'},1000, function(){
      $('.slide_wrap> li:last-child').insertBefore('.slide_wrap> li:first-child');
      $('.slide_wrap').css('margin-left','-100%');
    });
    Pagenumber(); 
  }

  // 페이지 쪽 수 구현 함수
  function Pagenumber() {
    $('.pagination').html((i + 1) + '/' + p_num);
    $('.progress-bar').css('width', ((i + 1) / p_num * 100) + '%');
  }

  l_btn.click(function(){
    clearInterval(Timer);
    moveLeft();
    Timer = setInterval(moveLeft, 3000);
  });

  r_btn.click(function(){
    clearInterval(Timer);
    moveRight();
    Timer = setInterval(moveLeft, 3000); 
  });

    // 정지, 플레이 버튼
    $('.fa-pause').click(function() {
      clearInterval(Timer);
    });
  
    $('.fa-play').click(function() { 
      Timer = setInterval(moveLeft, 3000);
    });
  
    Timer = setInterval(moveLeft, 3000);
    Pagenumber();

  //2. 시장찾기 지도 클릭 이벤트

  $('.m1').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c1').addClass('popup').animate({'opacity':'1'}),800;
    $(this).addClass('popup2');
    return false;
  });

  $('.m2').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c2').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });

  $('.m3').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c3').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m4').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c4').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m5').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c5').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m6').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c6').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m7').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c7').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m8').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c8').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m9').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c9').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m10').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c10').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m11').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c11').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m12').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c12').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m13').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c13').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });
  $('.m14').click(function(){
    $('.map_icons > a').removeClass('popup2');
    $('.find_map ul li').removeClass('popup').css('opacity','0');
    $('.c14').addClass('popup').animate({'opacity':'1'}),800;;
    $(this).addClass('popup2');
    return false;
  });

// 2. 지도 클릭 시 시장정보 보여지는 스크립트


  //시장정보 컨텐츠
  let content = $('#location .l-content .l-wrap')
    $('.l-list a').click(function(){
    return false;
  });

  $('.l-list li i').click(function(){
    

    //글자색 변경
    $(this).next().addClass('act-c').parent().parent().siblings().find('span').removeClass('act-c');
    //이미지 변경
    $(this).css('background-position-y','-118px').parent().parent().siblings().find('i').css('background-position-y','-71px');

    });

    $('.m1').click(function(){
      $('.seoul-c').show().siblings().hide();
    });
    $('.m2').click(function(){
      $('.gyeonggi-c').show().siblings().hide();
    });
    $('.m3').click(function(){
      $('.incheon-c').show().siblings().hide();
    });
    $('.m4').click(function(){
      $('.kangwon-c').show().siblings().hide();
    });
    $('.m7').click(function(){
      $('.daegu-c').show().siblings().hide();
    });
    $('.m10').click(function(){
      $('.kwangju-c').show().siblings().hide();
    });
    $('.m12').click(function(){
      $('.busan-c').show().siblings().hide();
    });
    $('.m14').click(function(){
      $('.jeju-c').show().siblings().hide();
    });
    $('.m5').click(function(){
      $('.chungbuk-c').show().siblings().hide();
    });
    $('.m8').click(function(){
      $('.chungnam-c').show().siblings().hide();
    });
    $('.m9').click(function(){
      $('.jeonbuk-c').show().siblings().hide();
    });
    $('.m13').click(function(){
      $('.jeonnam-c').show().siblings().hide();
    });
    $('.m6').click(function(){
      $('.kyungbuk-c').show().siblings().hide();
    });
    $('.m11').click(function(){
      $('.kyungnam-c').show().siblings().hide();
    });


  // 3. 자전거 무한 반복
  const bicycle = $('.bicycle');

  bicycle.animate({'left':'1300px'},20000);

  function movAni(){
    bicycle.animate({'left':'0px'},0).animate({'left':'1300px'},20000);
  };
  
  let Timer2 = setInterval(movAni,20000);
  
  // 3. 추천가이드 스크립트

  $('.guide_wrap> .recom_btn> ul> .li01').click(function(){
    // 제목
    $('.guide_item').removeClass('on');
    $(this).addClass('on');
    //설명글 제목
    $('.recom_count> li> a> h3.guide_item').removeClass('act2');
    $('.recom_count> li> a> h3.g_h301').addClass('act2');
    //이미지
    $('.recom_count> li> a> img.guide_item').removeClass('on2');
    $('.recom_count> li> a> img.img01').addClass('on2');
    //주소 추가
    
    $(this).find('.p01').show().parent().siblings().find('.pstyle').hide();
    //삼각형 이동
    $('.location .polygon').animate({'left':'115px'},500);
    return false;
  });

  $('.guide_wrap> .recom_btn> ul> .li02').click(function(){
    // 제목
    $('.guide_item').removeClass('on');
    $(this).addClass('on');
    //설명글 제목
    $('.recom_count> li> a> h3.guide_item').removeClass('act2');
    $('.recom_count> li> a> h3.g_h302').addClass('act2');
    //이미지
    $('.recom_count> li> a> img.guide_item').removeClass('on2')
    $('.recom_count> li> a> img.img02').addClass('on2')
    //주소 추가
    $(this).find('.p02').show().parent().siblings().find('.pstyle').hide();
    //삼각형 이동
    $('.location .polygon').animate({'left':'465px'},500);
    return false;
  });

  $('.guide_wrap> .recom_btn> ul> .li03').click(function(){
    // 제목
    $('.guide_item').removeClass('on');
    $(this).addClass('on');
    // 설명글 제목
    $('.recom_count> li> a> h3.guide_item').removeClass('act2');
    $('.recom_count> li> a> h3.g_h303').addClass('act2');
    // 이미지
    $('.recom_count> li> a> img.guide_item').removeClass('on2')
    $('.recom_count> li> a> img.img03').addClass('on2')
    //주소 추가
    $(this).find('.p03').show().parent().siblings().find('.pstyle').hide();
    //삼각형 이동
    $('.location .polygon').animate({'left':'815px'},500);
    return false;
  });


  $('.guide_wrap> .recom_btn> ul> .li04').click(function(){
    // 제목
    $('.guide_item').removeClass('on');
    $(this).addClass('on');
    // 설명글 제목
    $('.recom_count> li> a> h3.guide_item').removeClass('act2');
    $('.recom_count> li> a> h3.g_h304').addClass('act2');
    //이미지
    $('.recom_count> li> a> img.guide_item').removeClass('on2')
    $('.recom_count> li> a> img.img04').addClass('on2')
    //주소 추가
    $(this).find('.p04').show().parent().siblings().find('.pstyle').hide();

    //삼각형 이동
    $('.location .polygon').animate({'left':'1165px'},500);
    return false;
  });

  //4. 동네 상점 스크립트
  $('.store01').click(function(){
    $('.slide4').css('opacity','0');
    $('.s01').css('opacity','1');
    return false;
  }); 
  $('.store02').click(function(){
    $('.slide4').css('opacity','0');
    $('.s02').css('opacity','1');
    return false;
  }); 
  $('.store03').click(function(){
    $('.slide4').css('opacity','0');
    $('.s03').css('opacity','1');
    return false;
  }); 
  $('.store04').click(function(){
    $('.slide4').css('opacity','0');
    $('.s04').css('opacity','1');
    return false;
  }); 
  $('.store05').click(function(){
    $('.slide4').css('opacity','0');
    $('.s05').css('opacity','1');
    return false;
  }); 
  $('.store06').click(function(){
    $('.slide4').css('opacity','0');
    $('.s06').css('opacity','1');
    return false;
  }); 

  // 클릭 시 하나씩 이동

  var current = 0;
  var maxMoves = 3;
  var sildeWidth = -375;
  var slider = $(".slide4");

  $("#store_l_btn").on("click", function() {
    if (current < maxMoves) {
      slider.stop().animate({ left: "+=" + sildeWidth + "px" }, "fast");
      current++;
    }
  });

  $("#store_r_btn").on("click", function() {
    if (current > 0) {
      slider.stop().animate({ left: "-=" + sildeWidth + "px" }, "fast");
      current--;
    }
  });

  // 5. 이벤트 베너 스크립트
  let event_n = 1;
  let p_num5 = $('.silde_wrap5 >li').length;


  $('.e_left').click(function(){
    $('.silde_wrap5> li').eq(event_n-1).stop().fadeOut();

    if(event_n==1){
      event_n=3;
    }else{
      event_n--;
    }

    $('.silde_wrap5> li').eq(event_n-1).stop().fadeIn();
    Pagenumber5();
  });

  $('.e_right').click(function(){
    $('.silde_wrap5> li').eq(event_n-1).stop().fadeOut();
    if(event_n==3){
      event_n=1;
    }else{
      event_n++;
    }
    $('.silde_wrap5> li').eq(event_n-1).stop().fadeIn();
    Pagenumber5();
  });

  function Pagenumber5() {
    $('.pagination5').html((event_n) + '/' + p_num5);}

  Pagenumber5();



    // 제목 애니메이션
    $(window).scroll(function(){

      let title1 = $(this).scrollTop();
      console.log(title1);
  
      if(title1>=200){
        $('.find_map_txt').animate({'opacity':'1','top':'0'},500)
      }
      if(title1>=900){
        $('.guide_caption').animate({'opacity':'1','top':'0'},500)
      }
      if(title1>=1700){
        $('.store_txt').animate({'opacity':'1','top':'250px'},500)
      }
  

    });



});