


$(document).ready(function() {

console.log(ready)

  // burger menu on mobile
  $("#mobileMenu").click(function() {
    $(".mobile_nav").toggle();
  });

  // smooth scrolling between internal links
  $('a[data-smooth-scroll]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });


});