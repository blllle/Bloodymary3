// $('.filters-list a').on('click', function() {
//   var filter = $(this).attr('data-filter');

// console.log(filter);

//   $('.bloody').hide();
//   $(filter).show();

//   $('.filters-list a').removeClass('filter-selected');
//   $(this).addClass('filter-selected');

// //   this blocks the link from following the href
//   return false;
// });


// -----


// when we scroll we want to run a function
// we want to figure how far we have scrolled
// we want to display the oixel value we have scrolled in the porgress div
//   $('.progress').text(pixelsFromTop + ' ' + 'pixels from top')


$(document).on('scroll', function () {
  //   scroll top will give you back a pixel value for how far we are from top of page
  var pixelsFromTop = $(document).scrollTop()

  //   make the header have an opaque background on scroll

  if (pixelsFromTop > 400) {
    $('header').addClass('scrolled')
    $('.homepage-nav').css('display', 'block')

  } else {
    $('header').removeClass('scrolled')
    $('.homepage-nav').css('display', 'none')
  }

  if (pixelsFromTop < 400) {
    $('.header-nav a').css('color', 'white')

  } else {
    $('.header-nav a').css('color', 'red')
    $('.homepage-nav a').css('color', 'red')
  }



})
