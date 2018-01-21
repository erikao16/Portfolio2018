// sticky header //

var sn = $(".site-nav");

$(window).scroll(function() {
  if( $(this).scrollTop() > 105) {
    sn.addClass("site-nav-scrolled");
  }
  else {
    sn.removeClass("site-nav-scrolled");
  }
});

//mobile nav toggle//

(function ($) {
  var $mobileNavToggleBtn = $('.mobile-nav-toggle'),
      foo = 'bar';

  function onBtnClick (e) {
      var $this = $(this),
          $selectors = $('.mobile-nav, .site-wrap, header');

      $this.toggleClass('is-open');
      $selectors.toggleClass('is-open');
  }

  $(document).ready(function () {
      $mobileNavToggleBtn.on('click', onBtnClick);
  });

})(jQuery);

// active link indicator //
$(document).ready(function() {
  $('nav a').each(function() {

    if ($(this).attr('href') == location.pathname) {
      $(this).addClass("active");
    }
  });
});

// work link is active upon visiting site
$(document).getElementById('focusmeplease').focus();
