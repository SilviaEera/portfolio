$(document).ready(function () {
  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sticky').addClass('stickyadd');
    } else {
      $('.sticky').removeClass('stickyadd');
    }
  });

  let typed = new Typed('.element', {
    strings: ["I'm Fei Du", "I'm a Frontend Developer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
  });

  // progress-bar

  let waypoint = new Waypoint({
    element: document.getElementById('exp'),
    handler: function (direction) {
      let bars = document.querySelectorAll('.progress-bar');
      bars[0].setAttribute("style", "width:95%; trnsition: all 1s");
      bars[1].setAttribute("style", "width:80%; trnsition: all 1.3s");
      bars[2].setAttribute("style", "width:35%; trnsition: all 1.6s");
      bars[3].setAttribute("style", "width:75%; trnsition: all 1.9s");
      bars[4].setAttribute("style", "width:45%; trnsition: all 2.2s");
    },
    offset: '90%'
  });

  // slider
  $('.testi1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1024: {
        items: 2
      }
    }
  });

  // gallery filter
  $(document).ready(function () {
    // active btn
    $(".menu-active ul li").on('click', function () {
      $(".menu-active ul li").on('click', function () {
        $(this).addClass('act').siblings().removeClass('act');
      });
    });
    // filter
    let mixer = mixitup('.gallery');
  });

});