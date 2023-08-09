// HEADER

//menu button
$(document).ready(function(){
  const menu = $('i.fa-bars');
  const close = $('.close');

  menu.click(function(){
    $('.nav').css({
      'right':'0',
      'background':'rgba(0,0,0,0.7)'
    });
    $(close).css('display','block'); //delay적용!!!!!!!
  });
  close.click(function(){
    $('.nav').css({'right':'100%', 'background':'rgba(0,0,0,0)'});
    $(this).css('display','none');  
  });
  
  const gnb = $('.gnb>li>a');
  gnb.click(function(){
  $(this).next().slideToggle();
  $(this).toggleClass('color');
  $(this).find('i').toggleClass('on');
  return false;
  });

  // SEARCH PAGE
  $('.lnb i.fa-solid').click(function(){
    $('.s-page').animate({'bottom':'0'},300);
  });
  // $('.lnb i.fa-solid').click(function(){
  //   $('.s-page').animate({'bottom':'100%'},300);
  // });


  //MAIN
  //Main slide
  const prevBtn = $('.s-rbtn i.fa-angle-left');
  const nextBtn = $('.s-rbtn i.fa-angle-right');

  let allImg = $('.slide-wrap .slide-content').length;
  let n = 0;

  //Slide Number
  $('.s-lbtn li:nth-child(2)').html((n+1)+'/'+allImg);

  //Slide
  $('.slide-content:last-child').insertBefore('.slide-content:first-child');
  $('.slide-wrap').css('margin-left','-100%');

  function moveLeft(){
    if(n < allImg - 1) {
      n++;
    }else {
      n = 0;
    } ;
    $('.slide-wrap').animate({'margin-left':'-200%'},300,function(){
      $('.slide-content:first-child').insertAfter('.slide-content:last-child');
      $('.slide-wrap').css('margin-left','-100%');
    });
    Pagenumber();
  };
  function moveRight(){
    if(n > 0){
      n--;
    }else{
      n = allImg - 1;
    }
    $('.slide-wrap').animate({'margin-left':0},300,function(){
      $('.slide-content:last-child').insertBefore('.slide-content:first-child');
      $('.slide-wrap').css('margin-left','-100%'); 
    });
    Pagenumber();
  };

  function Pagenumber() {
    $('.s-lbtn li:nth-child(2)').html((n + 1)+'/'+ allImg);
    $('.progressbar').css('width', ((n + 1) / allImg * 100) + '%');
  };

  let Timer = setInterval(moveLeft,3000);
  Pagenumber();

  //Slide Button
  prevBtn.click(function(){
    moveRight();
    clearInterval(Timer);
  });
  nextBtn.click(function(){
    moveLeft();
    clearInterval(Timer);
  });
  prevBtn.mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(moveLeft, 3000);
  });

  //Play Button
  let sw = 0

  $('.material-icons').click(function(){http://127.0.0.1:5500/%EA%B3%BC%EC%A0%9C/%EC%97%AC%ED%96%89%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80/%EC%8B%9C%EC%9E%A5%ED%95%98%EC%8B%9C%EC%A3%A0%20%EC%A0%81%EC%9D%91%ED%98%95%20%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80/m_index.html#
    if(sw==0){
      $('.material-icons').html("play_arrow");
      clearInterval(Timer);
      sw = 1;
    } else {
      $('.material-icons').html("pause");
      Timer = setInterval(moveLeft, 3000);
      sw = 0;
    }

  });



  //MAIN > SEARCH
  

  // COMMUNITY SLIDE
  $(document).ready(function(){
    $('.carousel').carousel();
  });

  // FOOTER > FAMILY SITE
  $('#f-btn').click(function(){
    $('.family').slideToggle();
    $('.family').css('top','0');
    $(this).find('i').toggleClass('on');
  });



  //카테고리!!!
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });


});