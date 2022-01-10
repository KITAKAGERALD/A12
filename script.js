$(document).ready(()=>{
  $('#contact-link').on('click',()=>{
    $('#contacts').slideToggle('slow');
    
    
  });
   $('#more-btn').on('click',()=>{
    $('#more').fadeToggle('slow');
    $('#more').addClass('touched');
    
  });
  //images

$('#myPhoto').on('click',()=>{
  $('body').css({"background-image":"url('myPhoto.jpg')"});
});
$('#bg2').on('click',()=>{
  $('body').css({"background-image":"url('bg2.jpg')"});
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
///////////
$('#gerald').on('click',()=>{
  $('#gerald').css("opacity","1");
})

})