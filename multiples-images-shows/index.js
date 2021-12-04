// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  $(".js-anim").each(function () { // js-animというクラス名がある要素に関して
    $(this).addClass('animate__bounceIn');// 画面が読み込まれたらanimate__bounceInというクラス名を追記
  });
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
