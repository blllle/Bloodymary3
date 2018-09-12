$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter');
  
console.log(filter);
  
  $('.bloody').hide();
  $(filter).show();
  
  $('.filters-list a').removeClass('filter-selected');
  $(this).addClass('filter-selected');
  
//   this blocks the link from following the href
  return false;
});