// $(document).ready(function(){

//   //Промо на главной

//   $("#promo").owlCarousel({
//     items: 1,
//     loop: true,

//   });

// //Галерея на главной

//   var gallery = $('#gallery');
//   gallery.owlCarousel({
//     items: 4,
//     loop: true,
//     center: true,
//   });

//   // gallery.on('changed.owl.carousel', function(enent){

//   // })

//   $('#gallery img[data-large-img-url]').on('click', function(){
//     $('#gallery-large-img').attr('src', $(this).data('large-img-url'));
//   });
//    // $("#gallery-main").owlCarousel({

//    // });

//   // $(".owl-carousel").owlCarousel({
//   //   items: 4,
//   //   nav: true,
//   //   navText: false,
//   //   loop: true
//   // });
// });


$(document).ready(function(){

  //Промо на главной

  // $("#promo").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   dots: false,

  // });

  var gallery_large = $('#gallery_large');
  gallery_large.owlCarousel({
    items: 1,                 // одновременно 4 миниатюры
    //loop: true,               // включаем петлю
    //center: true,             // центрируем активную миниатюру
    //mouseDrag: true,         // отключаем перетаскивание мышом
    dots: false,
  });

  // Галерея на главной
  var gallery = $('#gallery');
  gallery.owlCarousel({
    items: 6,                 // одновременно 4 миниатюры
    loop: true,               // включаем петлю
    center: true,             // центрируем активную миниатюру
    mouseDrag: true,         // отключаем перетаскивание мышом
    dots: false,
  });

  // Следим за изменением в галерее (смена активного слайда)
  gallery.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var src = gallery.find(".owl-item").eq(current).find("img").data('large-img-url');
    $('#gallery-large-img').attr('src', src );
  });

  // Следим за кликами на мириатюрах галереи
  $('#gallery img[data-large-img-url]').on('mousedown', function(){
    $('#gallery-large-img').attr('src', $(this).data('large-img-url') );
  });

});


$(document).ready(function(){
// Галерея
  var reviews = $('#reviews');
  reviews.owlCarousel({
    items: 1,                 // одновременно 2 миниатюры
    loop: true,               // включаем петлю
    center: true,             // центрируем активную миниатюру
    mouseDrag: true,         // отключаем перетаскивание мышом
    nav: true,
    navText: false,
    dots: false,

  });

  var action_new = $('#action_new');
  action_new.owlCarousel({
    items: 1,                 // одновременно 2 миниатюры
    loop: true,               // включаем петлю
    center: true,             // центрируем активную миниатюру
    mouseDrag: true,         // отключаем перетаскивание мышом
    smartSpeed: 400,
    dots: true,
    dotsEach: 3,

  });


  var single_room = $('#single-room');
  single_room.owlCarousel({
    items: 2,                 // одновременно 2 миниатюры
    loop: true,               // включаем петлю

    mouseDrag: true,         // отключаем перетаскивание мышом
    smartSpeed: 400,
    dots: true,
    dotsEach: 2,

    responsive : {
    // breakpoint from 0 up
    0 : {
      items: 1,
      dots: false,
    },
    // breakpoint from 480 up
    320 : {
      items: 1,
      dots: false,
    },
    // breakpoint from 768 up
    768 : {
      items: 2,
      center: false,
    },

    1200 : {
      items: 3,
    },

    }

  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
// Go to the next item
  $('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
  })
// Go to the previous item
  $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
  $('#reviews__btn').click(function() {
    owl.trigger('destroy.owl.carousel', [300]);
    reviews.addClass('.reviews__carousel--destroy');
});


});

// $(document).ready(function(){
// // Галерея
//   var action = $('#act');
//   action.owlCarousel({
//     items: 0,                 // одновременно 1 миниатюры
//     loop: true,               // включаем петлю
//     center: true,             // центрируем активную миниатюру
//     mouseDrag: true,         // отключаем перетаскивание мышом
//     nav: false,
//     navText: false,
//     //dots: true,

//   });

//   var owl = $('.owl-carousel');
//   owl.owlCarousel();
// // Go to the next item
//   $('.customNextBtn').click(function() {
//   owl.trigger('next.owl.carousel', [400]);
//   })
// // Go to the previous item
//   $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [400]);
//   })


// });

// $(document).ready(function(){
// // Галерея
//   var action_new = $('#action_new');
//   action_new.owlCarousel({
//     items: 1,                 // одновременно 2 миниатюры
//     //loop: true,               // включаем петлю
//     //center: true,             // центрируем активную миниатюру
//     //mouseDrag: true,         // отключаем перетаскивание мышом
//     //autoWidth: true,
//     //autoHeight:true,
//     smartSpeed: 400
//     //nav: true,
//     //navText: false,

//   });


// });

$(document).ready(function(){

  $( function() {
    $('#datepicker-entry').datepicker().datepicker("option", "dateFormat", "yy-mm-dd", "showAnim", "slide");
    $('#datepicker-entry').datepicker().datepicker("option", "showAnim", "slide");
    $('#datepicker-exit').datepicker().datepicker("option", "dateFormat", "yy-mm-dd", "showAnim", "slide");
    $('#datepicker-exit').datepicker().datepicker("option", "showAnim", "slide");
  } );

  var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  //document.getElementById('nav').classList.toggle('main-nav__list--visible');
  document.getElementById('main-nav').classList.toggle('main-nav--active');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--active');
  document.getElementById('page-header').classList.toggle('page-header--active');
}


    function anchorScroll(boxAnchorLink){
        $(boxAnchorLink + ' a').on('click', function(e){
            e.preventDefault();
            var attr = $(this).attr('href').substring(1);
            var currentPosition = $(document).scrollTop();
            var idPosition = $('#'+attr).offset().top;
            var scrollTime = Math.abs(currentPosition - idPosition) / 3; // Math.abs - модуль числа.
            $('body,html').animate({'scrollTop':idPosition},scrollTime);
        });
    };


  anchorScroll('#to__menu');

});

// $(document).ready(function(){
// $('.page-footer').after().click(function() {
// alert('asdfahgdjkf');
// $('html, body').animate({
// scrollTop: 0
// }, 1000);
// });

// });

var t0, scrollTime;

$('#toTop').hide().on('click', function(event){
  event.preventDefault();
  scrollTime = $(document).scrollTop() / 2;
  $('body').animate({scrollTop:0}, scrollTime);
});

$(window).on('scroll', function(){
  clearTimeout(t0);
  t0 = setTimeout(function () {
      showScrollTopButton();
      console.log('scroll');
    }, 50);
});

showScrollTopButton();

function showScrollTopButton(){
  if ( $(document).scrollTop() >= 500 ) {
    $('#toTop').fadeIn();
  }
  else {
    $('#toTop').fadeOut();
  }
};

var vacationList = $('.vacation-list');
// сохранили в переменную ссылку на тег

// по нажатию на первую ссылку убераем класс который прокруцивает слайд
$('#promo-tab1').on('click', function(e) {
  e.preventDefault();
  vacationList.removeClass('swipe');
});

// при нажатии на вторую - добавляем
$('#promo-tab2').on('click', function(e) {
  e.preventDefault();
  vacationList.addClass('swipe');
});


$('#promo-tab2').on('click', function(e) {
  e.preventDefault();
  $('#promo-tab1').removeClass('promo__tab--active');
  $('#promo-tab2').addClass('promo__tab--active');
});

$('#promo-tab1').on('click', function(e) {
  e.preventDefault();
  $('#promo-tab2').removeClass('promo__tab--active');
  $('#promo-tab1').addClass('promo__tab--active');
});


// $(document).ready(function(){

//   $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

//   //$( '#datepicker' ).datepicker().datepicker("option", "dateFormat", "yy-mm-dd");


// });
