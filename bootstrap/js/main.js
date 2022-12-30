jQuery(document).ready(function ($) {
  // Fixed Header
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  };

  //ISOTOPE
  let btns = $("#recentes .button-group button");

  btns.click(function (e) {
    $("#recentes .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#recentes .grid").isotope({
      filter: selector,
    });
  });

  $(window).on("load", function () {
    $("#recentes .grid").isotope({
      filter: "*",
    });
  });

  //MAGNIFY
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Proximo",
      tCounter: "%curr% de %total%",
    },
  });

  //OWL
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
