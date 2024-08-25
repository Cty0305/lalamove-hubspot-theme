var module_175918660489 = (function () {
  var __hs_messages = {};
  function topBannerHeaderFn() {
    $(window).scrollTop() > 50
      ? $("html").removeClass("onTop")
      : $("html").addClass("onTop");
  }

  $(document).ready(function () {
    $(".top-banner-container").length && $("html").addClass("has-top-banner"),
      topBannerHeaderFn();
  }),
    $(window).scroll(function (event) {
      topBannerHeaderFn();
    });
})();
