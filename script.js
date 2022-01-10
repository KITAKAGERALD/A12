$(document).ready(()=>{
  $('#contact-link').on('click',()=>{
    $('#contacts').slideToggle('slow');
    
    
  });
   $('#more-btn').on('click',()=>{
    $('#more').fadeToggle('slow');
    $('#more').addClass('touched');
    
  });

$('.list-image').on('click',()=>{
  var point = $(this).attr("src");
  console.log("point");
  console.log(point)
  })

})