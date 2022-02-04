// バーガーメニュー
$(function () {
    $('.burger-btn').on('click', function () {
      $('.burger-btn').toggleClass('close');
      $('.nav-wrapper').toggleClass('fade');
      $('body').toggleClass('noscroll'); 
    });
  });


// hero スライド
jQuery(function($) {
 $('.hero').bgSwitcher({
     images: ['../img/slide01.jpg','../img/slide02.jpg','../img/slide03.jpg','../img/slide04.jpg','../img/slide05.jpg'],
     interval: 6000, // 背景画像を切り替える間隔を指定 3000=3秒
     loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
     shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
     effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
     duration: 3000, // エフェクトの時間を指定します。
     easing: "swing" // エフェクトのイージングをlinear,swingから指定
 });
});

// wow