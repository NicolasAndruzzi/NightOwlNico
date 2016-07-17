app.controller("mainController", function($scope){
  console.log("---------------------------------------");
  console.log("███╗   ██╗██╗ ██████╗ ██╗  ██╗████████╗");
  console.log("████╗  ██║██║██╔════╝ ██║  ██║╚══██╔══╝");
  console.log("██╔██╗ ██║██║██║  ███╗███████║   ██║");
  console.log("██║╚██╗██║██║██║   ██║██╔══██║   ██║");
  console.log("██║ ╚████║██║╚██████╔╝██║  ██║   ██║");
  console.log("╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝");
  console.log("");
  console.log(" ██████╗ ██╗    ██╗██╗");
  console.log("██╔═══██╗██║    ██║██║");
  console.log("██║   ██║██║ █╗ ██║██║");
  console.log("██║   ██║██║███╗██║██║");
  console.log("╚██████╔╝╚███╔███╔╝███████╗");
  console.log(" ╚═════╝  ╚══╝╚══╝ ╚══════╝");
  console.log("");
  console.log("███╗   ██╗██╗ ██████╗ ██████╗");
  console.log("████╗  ██║██║██╔════╝██╔═══██╗");
  console.log("██╔██╗ ██║██║██║     ██║   ██║");
  console.log("██║╚██╗██║██║██║     ██║   ██║");
  console.log("██║ ╚████║██║╚██████╗╚██████╔╝");
  console.log("╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═════╝");
  console.log("---------------------------------------");

  // Immediately Hide the Navbar
  $('.mainHeader').hide();

  // Moon Hover
  $(heroMoon).hover(
    function() {
      $( this ).addClass("heroMoonHover");
      $( heroOwlFaceInLogo ).addClass("heroOwlFaceInLogoHover");
    }, function() {
      $( this ).removeClass("heroMoonHover");
      $( heroOwlFaceInLogo ).removeClass("heroOwlFaceInLogoHover");
    }
  );

  $(heroOwlFaceInLogo).hover(
    function() {
      $( this ).addClass("heroOwlFaceInLogoHover");
      $( heroMoon ).addClass("heroMoonHover");
    }, function() {
      $( this ).removeClass("heroOwlFaceInLogoHover");
      $( heroMoon ).removeClass("heroMoonHover");
    }
  );

  // Moon Tunes
  var playing = false;

  $(heroMoon).click(function() {
    console.log("clicked");

    if (playing == false) {
      (player).play();
      $( "#heroMoon" ).addClass( "moonTuneAnimation" );
      $( "#heroOwlFaceInLogo" ).addClass( "owlFaceTuneAnimation" );
      $( ".logoLetter" ).addClass( "logoLetterTuneAnimation" );
      $( ".L1" ).addClass( "L1d" );
      $( ".L2" ).addClass( "L2d" );
      $( ".L3" ).addClass( "L3d" );
      $( ".L4" ).addClass( "L4d" );
      $( ".L5" ).addClass( "L5d" );
      $( ".L6" ).addClass( "L6d" );
      $( ".L7" ).addClass( "L7d" );
      $( ".L8" ).addClass( "L8d" );
      playing = true;
      console.log("playing");
    }
    else {
      (player).pause();
      $( "#heroMoon" ).removeClass( "moonTuneAnimation" );
      $( "#heroOwlFaceInLogo" ).removeClass( "owlFaceTuneAnimation" );
      $( ".logoLetter" ).removeClass( "logoLetterTuneAnimation" );
      $( ".L1" ).removeClass( "L1d" );
      $( ".L2" ).removeClass( "L2d" );
      $( ".L3" ).removeClass( "L3d" );
      $( ".L4" ).removeClass( "L4d" );
      $( ".L5" ).removeClass( "L5d" );
      $( ".L6" ).removeClass( "L6d" );
      $( ".L7" ).removeClass( "L7d" );
      $( ".L8" ).removeClass( "L8d" );
      playing = false;
      console.log("notPlaying");
    }

  });

  $(heroOwlFaceInLogo).click(function() {
    // console.log("clicked");

    if (playing == false) {
      (player).play();
      $( "#heroMoon" ).addClass( "moonTuneAnimation" );
      $( "#heroOwlFaceInLogo" ).addClass( "owlFaceTuneAnimation" );
      $( ".logoLetter" ).addClass( "logoLetterTuneAnimation" );
      $( ".L1" ).addClass( "L1d" );
      $( ".L2" ).addClass( "L2d" );
      $( ".L3" ).addClass( "L3d" );
      $( ".L4" ).addClass( "L4d" );
      $( ".L5" ).addClass( "L5d" );
      $( ".L6" ).addClass( "L6d" );
      $( ".L7" ).addClass( "L7d" );
      $( ".L8" ).addClass( "L8d" );
      playing = true;
      console.log("playing");
    }
    else {
      (player).pause();
      $( "#heroMoon" ).removeClass( "moonTuneAnimation" );
      $( "#heroOwlFaceInLogo" ).removeClass( "owlFaceTuneAnimation" );
      $( ".logoLetter" ).removeClass( "logoLetterTuneAnimation" );
      $( ".L1" ).removeClass( "L1d" );
      $( ".L2" ).removeClass( "L2d" );
      $( ".L3" ).removeClass( "L3d" );
      $( ".L4" ).removeClass( "L4d" );
      $( ".L5" ).removeClass( "L5d" );
      $( ".L6" ).removeClass( "L6d" );
      $( ".L7" ).removeClass( "L7d" );
      $( ".L8" ).removeClass( "L8d" );
      playing = false;
      // console.log("notPlaying");
    }

  });

  // Hover Logo Letters
  $(".logoLetter").hover(
    function() {
      $( this ).addClass("logoLetterHover");
    }, function() {
      $( this ).removeClass("logoLetterHover");
      $( this ).removeClass( "logoLetterAnimate" );
    }
  );

  // Clickable Logo Letters
  $( ".logoLetter" )
  .mouseup(function() {
    $( this ).removeClass( "logoLetterAnimate" );
  })
  .mousedown(function() {
    $( this ).addClass( "logoLetterAnimate" );
  });

  // Scroll-Down Button
  $(downPointerIcon).click(function () {
    $("html, body").animate({
      scrollTop: $(window).height()
    }, 750);
    return false;
  });

  // Sticky Header
  $(window).scroll(function() {

      if ($(window).scrollTop() > $(window).height()*.925) {
          // $('.mainHeader').addClass('sticky');
          $('.mainHeader').fadeIn(250);
      }
      else {
          // $('.mainHeader').removeClass('sticky');
          $('.mainHeader').fadeOut(250);
      }
  });

  // // Mobile Navigation
  // $('.mobile-toggle').click(function() {
  //     if ($('.main_header').hasClass('open-nav')) {
  //         $('.main_header').removeClass('open-nav');
  //     } else {
  //         $('.main_header').addClass('open-nav');
  //     }
  // });
  //
  // $('.main_header li a').click(function() {
  //     if ($('.main_header').hasClass('open-nav')) {
  //         $('.navigation').removeClass('open-nav');
  //         $('.main_header').removeClass('open-nav');
  //     }
  // });
  //

  // // Scroll-to-Top Button
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > $(window).height()*.65) {
  //         $('.scrollup').fadeIn();
  //     } else {
  //         $('.scrollup').fadeOut();
  //     }
  // });
  //
  // $('.scrollup').click(function () {
  //     $("html, body").animate({
  //         scrollTop: 0
  //     }, 750);
  //     return false;
  // });

  // Navigation Click Sends to Section
  $('.navOption').click(function() {
    var target = $(this).attr("data-scrollTo");
    $('html, body').animate({
        scrollTop: $('#' + target).offset().top
    }, 750);
  });

  // Navbar Logo Click Sends to Top
  $('#headerLogoContainer').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 750);
  });

  // Scroll Events
  $(window).scroll(function() {
    var currentPosition = $(this).scrollTop();

    // Make Navigation Options Active
    $('section').each(function() {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      if (currentPosition >= top - $(window).height()*.075 && currentPosition <= bottom) {
        $('#navigationMenu').find('.navOption').removeClass('active');
        $('#navigationMenu').find('#nav_' + $(this).attr('id')).addClass('active');
      }
    });

    // Sticky About Menu Div
    var aboutTop = $('#sec01').offset().top;
    var aboutBottom = aboutTop + $('#sec01').outerHeight();
    var aboutStickPoint = aboutBottom - $(window).height()
    if (currentPosition >= aboutTop && currentPosition <= aboutStickPoint) {
      $('#about').removeClass('aboutNotFixedTop');
      $('#about').removeClass('aboutNotFixedBottom');
      $('#about').addClass('aboutFixed');
      console.log("here comes dat boi");
    }
    else if (currentPosition <= aboutTop) {
      $('#about').removeClass('aboutFixed');
      $('#about').addClass('aboutNotFixedTop');
      console.log("o shit wattup");
    }
    else if (currentPosition >= aboutStickPoint) {
      $('#about').removeClass('aboutFixed');
      $('#about').addClass('aboutNotFixedBottom');
      console.log("o shit wattup");
    }

  });

});
