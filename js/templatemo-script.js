var gallery = undefined;
const galleryOptions = {
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 2 } },
  ],
  waitForAnimate: false
};
const galleryOptionsForPub = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  waitForAnimate: false
};

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}

function safeSetPosition($el) {
  // slick 플러그인이 로드되지 않은 경우
  if (!$.fn || typeof $.fn.slick !== 'function') return;

  // 이미 초기화된 경우에만 호출
  if ($el.hasClass('slick-initialized')) {
    try {
      $el.slick('setPosition');     // 표준 방법
    } catch (e) {
      // 어떤 환경에서 메서드 조회가 실패하면 이벤트 방식으로 대체
      $el.trigger('setPosition');   // Slick이 이 커스텀 이벤트를 수신함
    }
  }
}

function setupGalleriesIn($root) {
  const pageNo = String(
    $root.data('page-no') ??
    $root.closest('li[data-page-no]').data('page-no') ??
    ''
  );

  $root.find('.gallery-slider').each(function () {
    const $el = $(this);
    const usePub =
      pageNo === '4' || // publications
      $el.is('[data-slick-variant="pub"], .pub-slider'); // (선택) 태그/클래스로도 구분 가능

    const opts = usePub ? galleryOptionsForPub : galleryOptions;

    // 이미 초기화되어 있으면: 보임 보장 + 레이아웃 재계산
    if ($el.hasClass('slick-initialized')) {
      $el.addClass('is-ready');
      safeSetPosition($el);
      return;
    }

    // init 직후 레이아웃 확정 후 setPosition으로 한 번 더 안전하게
    $el.one('init', function () {
      $el.addClass('is-ready');
      safeSetPosition($el);
    });

    // 어떤 이유로든 reInit이 발생해도 보임 유지
    $el.on('reInit', function () {
      $el.addClass('is-ready');
      safeSetPosition($el);
    });

    $el.slick(opts);
  });
}

function openPage(no) {
  const $all = $('.cd-hero-slider li');
  const $page = $all.filter('[data-page-no="' + no + '"]');

  $all.hide();
  $page.fadeIn(function () {
    // 이 페이지 안에 있는 모든 갤러리를 초기화
    setupGalleriesIn($page);
  });

  $page
    .stop(true, true)
    .css('display', '')
    .hide()             
    .fadeIn(200);       
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});