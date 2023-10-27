$(document).ready(function(){

  // 스크롤 효과
  $(window).scroll(function(){
    let sPos = Math.floor(($(this).scrollTop() / ($(document).height() - $(this).height())) *100);
    console.log(sPos);

    function scrollEffect (){
      
      // TOP버튼
      if(sPos >= 18){
        $('aside a').fadeIn();
      }else{
        $('aside a').fadeOut();
      };

      if(sPos >= 88) {
        $('aside a').css({'position':'absolute'});
      } else {
        $('aside a').css({'position':'fixed'});
      }

      // 시장정보
      if(sPos >= 2) {
        $('#location h2').css('top','50px').animate({'opacity':'1','top':'0'},1000);
        $('#location > p').css('top','50px').animate({'opacity':'1','top':'0'},1400);
      };
  
      // 추천가이드
      if(sPos >= 22) {
        $('#guide h2').css('top','50px').animate({'opacity':'1','top':'0'},1000)
        $('#guide > p').css('top','50px').animate({'opacity':'1','top':'0'},1400,function(){
          $('.g-line').animate({'right':'0','width':'80%'});
        });
      };
  
      // 동네상점
      if(sPos >= 43) {
        $('#product h2').css('top','50px').animate({'opacity':'1','top':'0'},1000);
        $('#product > p').css('top','50px').animate({'opacity':'1','top':'0'},1400,function(){
          $('.p-line').animate({'right':'0','width':'60%'},800);
        });
      };
  
      // 이벤트
      if(sPos >= 64) {
        $('#event .e-line').animate({'width':'100px'},600);
      };
      // 시장뉴스
      if(sPos >= 73) {
        $('.e-news').animate({'height':'220px'},1000);
        $('.e-news ul').animate({'opacity':'1'},800);
      };
    
      // 인스타그램
      if(sPos >= 79) {
        $('#community h2').css('top','50px').animate({'opacity':'1','top':'0'},1000);
        $('#community p').css('top','50px').animate({'opacity':'1','top':'0'},1400);
      };
    }
    let TimerS = setTimeout(scrollEffect);
  });
  
  ////// HEADER //////

  const menu = $('i.fa-bars');
  const close = $('.close');

  // 메뉴버튼
  menu.click(function(){
    $('.nav').css({
      'right':'0',
      'background':'rgba(0,0,0,0.8)'
    });
    $(close).css('opacity','0').animate({'opacity':'1'});
    $('.sns').css('opacity','1');
  });

  // 닫기버튼
  close.click(function(){
    $('.nav').css({'right':'100%', 'background':'rgba(0,0,0,0)'});
    $(this).css('opacity','0');
    $('.sns').css('opacity','0'); 
  });
  
  // 내비게이션 - 서브메뉴
  let asideMenu = $('.gnb > li');

  asideMenu.click(function(e){
    e.preventDefault();
    $(this).stop().find('ul').slideDown();
    $(this).stop().siblings().find('ul').slideUp();
    $(this).addClass('color').siblings().removeClass('color');
    
    // 드롭다운 아이콘
    $(this).find('i').addClass('on').parent().parent().siblings().find('i').removeClass('on');
    return false;
  });

  // 검색 버튼
  $('.lnb i.fa-solid').click(function(){
    $('.search-page').animate({'bottom':'0'},300,'easeOutCirc');
  });

  // 뒤로가기 버튼
  $('.search-page i.material-icons').click(function(){
    $('.search-page').animate({'bottom':'100%'},300);
  });

  ////// FOOTER //////

  // 패밀리사이트
  $('#f-btn').click(function(){
    $('.family').stop().slideToggle().css('top','0');
    $(this).find('i').toggleClass('on2');
  });

  ////// 메인 슬라이드 //////

  const prevBtn = $('.s-rbtn i.fa-angle-left');
  const nextBtn = $('.s-rbtn i.fa-angle-right');

  let n = 1;
  let allImg = $('.slide-wrap .slide-content').length;

  $('.slide-content:last-child').insertBefore('.slide-content:first-child');
  $('.slide-wrap').css('margin-left','-100%');

  function moveLeft(){
    if(n < allImg) {
      n++;
    }else {
      n = 1;
    } ;
    $('.slide-wrap').animate({'margin-left':'-200%'},300,function(){
      $('.slide-content:first-child').insertAfter('.slide-content:last-child');
      $('.slide-wrap').css('margin-left','-100%');
    });
    PageNumber();
  };

  function moveRight(){
    if(n > 1){
      n--;
    }else{
      n = allImg;
    }
    $('.slide-wrap').animate({'margin-left':0},300,function(){
      $('.slide-content:last-child').insertBefore('.slide-content:first-child');
      $('.slide-wrap').css('margin-left','-100%'); 
    });
    PageNumber();
  };

  // 페이지번호
  function PageNumber() {
    $('.s-lbtn li:nth-child(2)').html((n)+'/'+ allImg);
    $('.progressbar').css('width', ((n) / allImg * 100) + '%');
  };

  let Timer = setInterval(moveLeft,3000);
  PageNumber();

  // 슬라이드 버튼
  prevBtn.click(function(){
      moveRight();
      clearInterval(Timer);
      Timer = setInterval(moveLeft,3000);
  });

  nextBtn.click(function(){
    moveLeft();
    clearInterval(Timer);
    Timer = setInterval(moveLeft,3000);
  });

  // 플레이, 정지 버튼
  let pauseBtn = 0

  $('.pause').click(function(){
    if(pauseBtn == 0) {
      $('.pause').html("play_arrow");
      clearInterval(Timer);
      pauseBtn = 1;
    }else {
      $('.pause').html("pause");
      Timer = setInterval(moveLeft, 3000);
      pauseBtn = 0;
    }
  });

  ////// 시장정보 //////

  // 리스트 슬라이드
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    breakpoints:{
      300:{
        slidesPerView: 4,
        spaceBetween: 18,
      },
      375:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      390:{
        slidesPerView: 4,
        spaceBetween: 25,
      },
      400:{
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });

  // 시장정보 컨텐츠
  let content = $('#location .l-content .l-wrap')
    $('.l-list a').click(function(){
    return false;
  });

  $('.l-list li i').click(function(){
    // 글자색 변경
    $(this).next().addClass('act-c').parent().parent().siblings().find('span').removeClass('act-c');

    // 이미지 변경
    $(this).css('background-position-y','-118px').parent().parent().siblings().find('i').css('background-position-y','-71px');

    // 밑줄
    $('.l-list .swiper-slide > a').css('border-bottom','none');
    $(this).parent().css('border-bottom','3px solid #4E937E');
  });

    $('i.seoul').click(function(){
      $('.seoul-c').fadeIn(800).siblings().hide();
    });
    $('i.gyeonggi').click(function(){
      $('.gyeonggi-c').fadeIn(800).siblings().hide();
    });
    $('i.incheon').click(function(){
      $('.incheon-c').fadeIn(800).siblings().hide();
    });
    $('i.kangwon').click(function(){
      $('.kangwon-c').fadeIn(800).siblings().hide();
    });
    $('i.daegu').click(function(){
      $('.daegu-c').fadeIn(800).siblings().hide();
    });
    $('i.kwangju').click(function(){
      $('.kwangju-c').fadeIn(800).siblings().hide();
    });
    $('i.busan').click(function(){
      $('.busan-c').fadeIn(800).siblings().hide();
    });
    $('i.jeju').click(function(){
      $('.jeju-c').fadeIn(800).siblings().hide();
    });
    $('i.chungbuk').click(function(){
      $('.chungbuk-c').fadeIn(800).siblings().hide();
    });
    $('i.chungnam').click(function(){
      $('.chungnam-c').fadeIn(800).siblings().hide();
    });
    $('i.jeonbuk').click(function(){
      $('.jeonbuk-c').fadeIn(800).siblings().hide();
    });
    $('i.jeonnam').click(function(){
      $('.jeonnam-c').fadeIn(800).siblings().hide();
    });
    $('i.kyungbuk').click(function(){
      $('.kyungbuk-c').fadeIn(800).siblings().hide();
    });
    $('i.kyungnam').click(function(){
      $('.kyungnam-c').fadeIn(800).siblings().hide();
    });

  ////// 추천가이드 //////
  
  // 슬라이드
  var swiper2 = new Swiper(".guides", {
    slidesPerView: 1,
    spaceBetween: 0,
    centerdSlides: true,
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
  });

  ////// 동네상점 //////

  // 슬라이드
  var swiper3 = new Swiper(".products", {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      280:{
        slidesPerView: 1.5,
        spaceBetween: 5,
      },
      320:{
        slidesPerView: 1.8,
        spaceBetween: 5,
      },
      360:{
        slidesPerView: 2,
        spaceBetween: 5,
      },
      410:{
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      590:{
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    }
  });

  // 아이콘
  function mIcon(){
    $(".p-content > h3 i").animate({'bottom':'3px'},800).animate({'bottom':'-3px'},800);
  };

  let TimerI = setInterval(mIcon,1600);

  ////// 이벤트 //////

  // 랜덤 쿠폰이미지
  let c = ['coupon01', 'coupon02', 'coupon03', 'coupon04'];
  let ran= Math.ceil(Math.random()*3-1);

  document.getElementById('e-img').innerHTML=`<a href="#" title=배너><img src="./m_images/${c[ran]}.png" alt="쿠폰"></a>`;

  function random_img(){
      document.getElementById('e-img').innerHTML=`<a href="#" title=배너><img src="./m_images/${c[ran]}.png" alt="쿠폰"></a>`
  }

  let RanImg = setInterval(random_img, 3000);

  ////// 커뮤니티 //////

  var swiper3 = new Swiper(".comunitys", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      300:{
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      500:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      680:{
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    }
  });

  ////// Top 버튼 //////

  $('aside a').click(function(){
    $('html, body').animate({scrollTop:'0px'},300);
    return false;
  });

});