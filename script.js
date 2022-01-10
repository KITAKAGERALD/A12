$(document).ready(()=>{
  $('#contact-link').on('click',()=>{
    $('#contacts').slideToggle('slow');
    $('#contacts').addClass('touched');
    
  });
   $('#more-btn').on('click',()=>{
    $('#more').fadeToggle('slow');
    $('#more').addClass('touched');
    
  });
})