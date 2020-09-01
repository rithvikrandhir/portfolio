// DOCUMENT READY
$(document).ready(function() {

  // CLICK POSTER -> OPEN INFO
  $('.clickable').on('click', function() {
    var info = $(this).data('toggle');
    $(info).toggleClass('info-visible');
    $('.master-close').addClass('master-close-visible');
    $('body').toggleClass('noscroll');
    // $('.btn-close').css('position', 'fixed');
    $(info).find('.btn-close').toggleClass('btn-close-visible');
  });

  // CLICK ANYWHERE -> CLOSE INFO
  $('.master-close').on('click', function() {
    $('.info').removeClass('info-visible');
    $(this).removeClass('master-close-visible');
    $('body').toggleClass('noscroll');
    $('.btn-close').removeClass('btn-close-visible');
  });

  // CLICK CLOSE BTN -> CLOSE INFO
  $('.btn-close').on('click', function() {
    $('.info').removeClass('info-visible');
    $('.master-close').removeClass('master-close-visible');
    $('body').toggleClass('noscroll');
    $('.btn-close').removeClass('btn-close-visible');
  });

  //Hover Interactions 

  $('.poster-2').mouseenter( function() {
    
    $('.poster-2 .interaction').css({opacity:1});
      
  });
  $('.poster-2').mouseleave( function() {
    
    $('.poster-2 .interaction').css({opacity:0})
    
  });
  $('.poster-4').mouseenter( function() {
    
    $('.poster-4 .interaction').css({opacity:1});
      
  });
  $('.poster-4').mouseleave( function() {
    
    $('.poster-4 .interaction').css({opacity:0})
    
  });
  $('.poster-6').mouseenter( function() {
    
    $('.poster-6 .interaction').css({opacity:1});
      
  });
  $('.poster-6').mouseleave( function() {
    
    $('.poster-6 .interaction').css({opacity:0})
    
  });
  $('.poster-8').mouseenter( function() {
    
    $('.poster-8 .interaction').css({opacity:1});
      
  });
  $('.poster-8').mouseleave( function() {
    
    $('.poster-8 .interaction').css({opacity:0})
    
  });
  // HIT ESCAPE -> CLOSE INFO
  $(document).keyup(function(e) {
    if (e.keyCode === 27) { // esc key
      $('.info').removeClass('info-visible');
      $('.master-close').removeClass('master-close-visible');
      $('body').toggleClass('noscroll');
      $('.btn-close').removeClass('btn-close-visible');
    }
  });




  // CLOSE cursor
  $(function () {
  $(".master-close").mousemove(function (e) {
    $(".cursor-close").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
    }).mouseout(function () {
      $(".cursor-close").hide();
    });
  });


  // SCROLL TO NEXT POSTER

  // $('.btn-scroll').click(function () {
  
  //   var fuller = $(this).closest('.poster').next(),
  //       section = $(this).closest('.poster');
  
  //   section.animate({
  //       scrollTop: section.scrollTop() + fuller.offset().top
  //   }, 700);
  
  // });

});
