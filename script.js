$(document).ready(()=>{
  $('#contact-link').on('click',()=>{
    $('#contacts').slideToggle('slow');
    
    
  });
   $('#more-btn').on('click',()=>{
    $('#more').fadeToggle('slow');
    $('#more').addClass('touched');
    
  });
  //images



$('#bg2').on('click',()=>{
  $('body').css({"background-image":"url('bg2.jpg')"});
});
$('#davis').on('click',()=>{
  $('body').css({"background-image":"url('davis.jpg')"});
});
$('#bg3').on('click',()=>{
  $('body').css({"background-image":"url('bg3.jpg')"});
});
$('#bg1').on('click',()=>{
  $('body').css({"background-image":"url('bg1.webp')"});
});
$('#space').on('click',()=>{
  $('body').css({"background-image":"url('space.jpg')"});
});
$('#smoke').on('click',()=>{
  $('body').css({"background-image":"url('smoke.jpg')"});
});
///////////
$('#gerald').on('click',()=>{
  $('#gerald').css("opacity","1");
})

})