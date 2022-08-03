$(window).on("load" , function(){
   $("html").css('overflow-y','visible');
   $("#loader").fadeOut("slow");
});

$(document).ready(function(){
  var artworks = ['art1','art2','art3','art4','art5','art6','art7','art8','art9','x']
  parts = ['part1', 'part2', 'part3']
  $('.' + artworks.join(',.')).hide();

    $('#art1').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art1').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.floats').css('position','fixed');
        $('.art1').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });

     $('#art2').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art2').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art2').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });

     $('#art3').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art3').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art3').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });
     
     $('#art4').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art4').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art4').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });

     $('#art5').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art5').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art5').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });

     $('#art6').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art6').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art6').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });

     $('#art7').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art7').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art7').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });
    
     $('#art8').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art8').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art8').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });
   
     $('#art9').click(function(){
      $('#' + artworks.join(',#')).css('pointer-events','none',);
      $('.link').css('pointer-events','none');
      $('#' + parts.join(',#')).css('filter','brightness(30%)');
      $('.floats').fadeOut();
      $('.art9').fadeIn();
      $('.x').fadeIn();
      $('.x').click(function(){
        $('.floats').fadeIn();
        $('.art9').fadeOut();
        $('.x').hide();
        $('#' + parts.join(',#')).css('filter','brightness(100%)');
        $('#' + artworks.join(',#')).css('pointer-events','auto');
        $('.link').css('pointer-events','auto');
      });
     });
});

