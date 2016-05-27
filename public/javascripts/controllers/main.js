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

  // Sticky Header
  $(window).scroll(function() {

      if ($(window).scrollTop() > $(window).height()*.9) {
          $('.main_header').addClass('sticky');
      } else {
          $('.main_header').removeClass('sticky');
      }
  });

  // Mobile Navigation
  $('.mobile-toggle').click(function() {
      if ($('.main_header').hasClass('open-nav')) {
          $('.main_header').removeClass('open-nav');
      } else {
          $('.main_header').addClass('open-nav');
      }
  });

  $('.main_header li a').click(function() {
      if ($('.main_header').hasClass('open-nav')) {
          $('.navigation').removeClass('open-nav');
          $('.main_header').removeClass('open-nav');
      }
  });

  // navigation scroll
  $('nav a').click(function(event) {
      var id = $(this).attr("href");
      var offset = 0;
      var target = $(id).offset().top - offset;
      $('html, body').animate({
          scrollTop: target
      }, 500);
      event.preventDefault();
  });

  /* Scroll-to-Top Button */
  $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()*.65) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });

  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 750);
      return false;
  });

  /* Scroll-Down Button */
  $(downPointerIcon).click(function () {
      $("html, body").animate({
          scrollTop: $(window).height()
      }, 1000);
      return false;
  });

  /* WORK IN PROGRESS
     NAVIGATION ACTIVE STATE IN SECTION AREA
  */

  var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });


});
