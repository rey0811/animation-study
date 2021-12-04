// animation関数
function scrollAnimation() {
    $(window).scroll(function () {
      $(".js-anim").each(function () {
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
          $(this).addClass('is-animated');// 画面内に入ったらis-animatedというクラス名を追記
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
