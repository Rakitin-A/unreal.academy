$(function () {

   $('.slider-inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,

   });

   $(".menu a, .go-top").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });


});
$(function () {

   $(window).scroll(function () {

      if ($(this).scrollTop() != 0) {

         $('#toTop').fadeIn();

      } else {

         $('#toTop').fadeOut();

      }

   });

   $('#toTop').click(function () {

      $('body,html').animate({ scrollTop: 0 }, 800);

   });

});