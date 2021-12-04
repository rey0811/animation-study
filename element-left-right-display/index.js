// animation関数
function scrollAnimation() {
    $(window).scroll(function () {
      $(".js-anim").each(function () {
        var elemPos = $(this).offset().top-0;//要素より、0px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          if ($(this).hasClass('left')) {
            $(this).addClass('animate__bounceInLeft');// 画面内に入ったらanimate__bounceInLeftというクラス名を追記
          }
          if ($(this).hasClass('right')) {
            $(this).addClass('animate__bounceInRight');// 画面内に入ったらanimate__bounceInLeftというクラス名を追記
          }
        }
        });
    });
};

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    scrollAnimation();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    scrollAnimation();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
