// console.log ('it works')


$('.filters-list a').on('click', function(){
  var filter = $(this).attr('data-filter')
  
console.log(filter)
  
  $('.product').hide()
  $(filter).show()
  
  $('.filters-list a').removeClass('active')
  $(this).addClass('active')
  
  
//   this blocks the link from following the href
  return false
})