/* slider */
$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    dots: true
  });    
  
})

/* pagetop */
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  
});

/* hamburger Menu */
$(function(){
  $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      let rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }

      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });
});


