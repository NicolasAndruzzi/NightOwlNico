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

  // Immediately Hide the Navbar & Slogan
  $('#mainHeader').hide();
  $('#heroSloganContainer').hide();
  $('#sec01').hide();
  $('#sec02').hide();
  $('#sec03').hide();


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
  $('#player')[0].volume = .33;

  $(heroMoon).click(function() {
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
      $('#heroSloganContainer').fadeIn(500);
      playing = true;
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
      $('#heroSloganContainer').fadeOut(500);
      playing = false;
    }

  });

  $(heroOwlFaceInLogo).click(function() {
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
      $('#heroSloganContainer').fadeIn(500);
      playing = true;
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
      $('#heroSloganContainer').fadeOut(500);
      playing = false;
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
      scrollTop: $(window).height()*.85
    }, 750);
    return false;
  });

  // Revolving Things I Love
  // All Phrases Should Be <= 4 Syllables
  // Ideally Also <= 2 Words
  var originalLoves = [
    "Frank Sinatra",
    "Meditation",
    "Triathalons",
    "Technology",
    "Dancing",
    "Martial Arts",
    "Dog Training",
    "Animals",
    "UX-UI",
    "Yoga",
    "Robotics",
    "Italy",
    "Skydiving",
    "My Family",
    "Programming",
    "3D Printing",
    "Magic Tricks",
    "Art",
    "Reading",
    "Airbending",
    "Colorado",
    "Owls",
    "Teaching",
    "NYC",
    "Brooklyn",
    "Learning",
    "Live Comedy",
    "Surfing",
    "Snowboarding",
    "Singing",
    "Soldering",
    "Scuba Diving",
    "Inventing",
    "Cooking",
    "My Friends",
    "Earthbending",
    "Waterslides",
    "Clay Shooting",
    "Climbing Trees",
    "Cliff Diving",
    "Frisbee Golf",
    "The Ocean",
    "My Dog",
    "Firebending",
    "Driving",
    "Hammocks",
    "Penn State",
    "Camping",
    "Swimming",
    "Chess",
    "Hiking",
    "Exploring",
    "Adventuring",
    "Famous Quotes",
    "Traveling",
    "Waterbending",
    "Hackathons"
    // "",
    // "",
  ];
  var lovesLoop = setInterval(looper, 600);
  var i = 0;
  var loves = originalLoves.slice();
  $('#loveRotate').text(loves[Math.floor(Math.random() * loves.length)])

  function looper() {
    var randomValue = Math.floor(Math.random() * loves.length);
    var randomLove = loves[randomValue];
    $('#loveRotate').text(randomLove);
    loves.splice(randomValue , 1);
    i++;
    if (i >= originalLoves.length) {
      i = 0;
      loves = originalLoves.slice();
    }
  }

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
    // Also toggle navbar between dark and light depending on the Section
    $('section').each(function() {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      if (currentPosition >= top - $(window).height()*.075 && currentPosition <= bottom && $(this).attr('id') === "sec01") {
        $('#navigationMenu').find('.navOption').removeClass('Dactive');
        $('#navigationMenu').find('.navOption').removeClass('Lactive');
        $('#navigationMenu').find('.navOption').removeClass('DnotActive');
        $('#navigationMenu').find('.navOption').removeClass('LnotActive');
        $('#mainHeader').removeClass('LmainHeader');
        $('#headerHeroLogo1').removeClass('LheaderHeroLogo1');
        $('#headerHeroLogo2').removeClass('LheaderHeroLogo2');
        $('#navigationMenu').find('.navOption').addClass('DnotActive');
        $('#navigationMenu').find('#nav_' + $(this).attr('id')).addClass('Dactive');
        $('#mainHeader').addClass('DmainHeader');
        $('#headerHeroLogo1').addClass('DheaderHeroLogo1');
        $('#headerHeroLogo2').addClass('DheaderHeroLogo2');
      }
      if (currentPosition >= top - $(window).height()*.075 && currentPosition <= bottom && $(this).attr('id') === "sec02") {
        $('#navigationMenu').find('.navOption').removeClass('Dactive');
        $('#navigationMenu').find('.navOption').removeClass('Lactive');
        $('#navigationMenu').find('.navOption').removeClass('DnotActive');
        $('#navigationMenu').find('.navOption').removeClass('LnotActive');
        $('#mainHeader').removeClass('DmainHeader');
        $('#headerHeroLogo1').removeClass('DheaderHeroLogo1');
        $('#headerHeroLogo2').removeClass('DheaderHeroLogo2');
        $('#navigationMenu').find('.navOption').addClass('LnotActive');
        $('#navigationMenu').find('#nav_' + $(this).attr('id')).addClass('Lactive');
        $('#mainHeader').addClass('LmainHeader');
        $('#headerHeroLogo1').addClass('LheaderHeroLogo1');
        $('#headerHeroLogo2').addClass('LheaderHeroLogo2');
      }
      if (currentPosition >= top - $(window).height()*.075 && currentPosition <= bottom && $(this).attr('id') === "sec03") {
        $('#navigationMenu').find('.navOption').removeClass('Dactive');
        $('#navigationMenu').find('.navOption').removeClass('Lactive');
        $('#navigationMenu').find('.navOption').removeClass('DnotActive');
        $('#navigationMenu').find('.navOption').removeClass('LnotActive');
        $('#mainHeader').removeClass('LmainHeader');
        $('#headerHeroLogo1').removeClass('LheaderHeroLogo1');
        $('#headerHeroLogo2').removeClass('LheaderHeroLogo2');
        $('#navigationMenu').find('.navOption').addClass('DnotActive');
        $('#navigationMenu').find('#nav_' + $(this).attr('id')).addClass('Dactive');
        $('#mainHeader').addClass('DmainHeader');
        $('#headerHeroLogo1').addClass('DheaderHeroLogo1');
        $('#headerHeroLogo2').addClass('DheaderHeroLogo2');
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
    }
    if (currentPosition < aboutTop) {
      $('#about').removeClass('aboutFixed');
      $('#about').addClass('aboutNotFixedTop');
    }
    if (currentPosition > aboutStickPoint) {
      $('#about').removeClass('aboutFixed');
      $('#about').addClass('aboutNotFixedBottom');
    }

    // Remove Down Arrows on Hero After Scrolling Down
    if (currentPosition >= $(window).height() * .33) {
      $(downPointerIcon).fadeOut();
    }

    // Sticky Header
    if (currentPosition > $('#hero').outerHeight() + $('#cinemagraphContainer').outerHeight() - $(window).height()*.25) {
        $('#mainHeader').fadeIn(0);
    };
    if (currentPosition < $('#hero').outerHeight() + $('#cinemagraphContainer').outerHeight() - $(window).height()*.25) {
        $('#mainHeader').fadeOut(0);
    };

  });

});
