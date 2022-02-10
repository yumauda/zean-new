
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  if ( window.document.body.id === 'top' ) {

    var topNav = $('.p-page-header');
    topNav.hide();
  
    // ボタンの表示設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topNav.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topNav.fadeOut();
      }
    });
  
    var topNav1 = $('.p-top-header__content-wrapper');
    topNav1.show();
  
    // ボタンの表示設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topNav1.fadeOut();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topNav1.fadeIn();
      }
    });
  
  
    if(window.matchMedia("(min-width: 768px)").matches){
      var topFirstNav = $('.p-mv__nav');
      topFirstNav.show();
    
      // 横ナビゲーション
      $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
          // 指定px以上のスクロールでボタンを非表示
          topFirstNav.fadeIn(100);
        } else {
          // 画面が指定pxより上ならボタンを非表示
          topFirstNav.fadeOut(100);
        }
      });
    };
  }
  
  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
});

jQuery('.p-drawer-icon').on('click',function(e){
	e.preventDefault();
	jQuery('.p-drawer-icon').toggleClass('is-active');
	jQuery('.p-drawer-content').toggleClass('is-active');
	jQuery('.p-drawer-background').toggleClass('is-active');
	return false;
});
jQuery('.p-drawer-background').on('click',function(e){
	e.preventDefault();
	jQuery('.p-drawer-icon').toggleClass('is-active');
	jQuery('.p-drawer-content').toggleClass('is-active');
	jQuery('.p-drawer-background').toggleClass('is-active');
	return false;
});