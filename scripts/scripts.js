
jQuery(document).ready(function($) {
"use strict";




//  ===========================
//  = Define GLOBAL variables =
//  ===========================

var

//  =======================
//  = Top level variables =
//  =======================
      win_height = $(window).height(),
      body = $('body'),
      current_width = $(window).width(),
      windowTop = $(window).scrollTop(),
      media_holder = $('.media-holder'),
      container_selector = $('.container'),
      pretty_photo = $("a[data-rel^='prettyPhoto']"),
      body_preloader = $('#body-preloader'), //loading screen selector
      scroll_up = $('#scroll-up'),
      typedtext_section = $('.typed-export'), //typed text setion

//  =========================================
//  = Top content / Header slider variables =
//  =========================================
      sec_topcontent = $('#top-content'),
      revolSlider = $('.banner'), //Slider Revolution selector
      header_button = $('.header-button'),
      flexslider_header_fade = $('.flexslider-header-fade'), //flexslider
      flexslider_header_slide = $('.flexslider-header-slide'), //flexslider

//  ========================
//  = Navigation variables =
//  ========================
      topMenu = $(".top-nav-full"),
      topMenuHeight = topMenu.outerHeight()+20,
      menuItems = topMenu.find("a"),
      not_sticky = $('#not-sticky'),
      sticky = $("#sticky"),
      navigation_height = $('#sticky').height(),
      offset = sticky.offset(),
      stickyTop = offset.top,
      small_logo = $(".small-logo"),

//  ===============================
//  = Small menu on top variables =
//  ===============================
      top_small_menu = $('#top-small-menu'),
      top_logo = $('.top-logo'),
      top_logo_bg = $('.top-logo-bg'),

//  =======================
//  = Portfolio variables =
//  =======================
      sec_portfoliocontainer = $('.portfolio-container'),
      project_folder_name ='projects',
      portfolio_href = $('.portfolio-item a'),

      ajax_section = $("#portfolio-more"),
      ajax_pixel_correction = 0,
      ajax_section_height = 0,
      // portfolio_total_count = portfolio_href.size(),
      port_controls = $('.portfolio-controls'),
      port_arrow_left = $('.portfolio-arrow-left'),
      port_arrow_right = $('.portfolio-arrow-right'),
      port_close = $('.portfolio-close-wrapper a'),
      port_current = $('.current-portfolio-item'),
      port_ajax_error = $('#ajax-error'),
      port_ajax_error_message = "Sorry but there was an error loading this item",
      port_ajax_loading = $('#ajax-loading'),
      port_ajax_link = $('#ajax-link'),
      flexslider_portfolio_additional_images = $('.flexslider-portfolio-additional-images'),
      flexslider_portfolio_simple_images = $('.flexslider-portfolio-simple'),
      toLoad,
      port_filter = $('.portfolio-filter'),
      portfolio_current_count,
      currentIDbyIndex,
      parallax_ajax_offset,

//  ===============================
//  = Awesomeness meter variables =
//  ===============================
      sec_awesomenessmeter = $('.awesomeness-meter'),
      background_awesomeness = $('#background-awesomeness'), //Awesomeness meter background selector

//  ==========================
//  = Certificates variables =
//  ==========================
      sec_certificates = $('.certificates'),
      cert_filer = $('.certificates-filter'),

//  ======================
//  = Our Team variables =
//  ======================
      sec_whoweare = $('.who-we-are'),
      person_div = $('.person-div'),
      person_overlay = $('.person-overlay'),

//  ======================
//  = Services variables =
//  ======================
      sec_services = $('.services'),

//  ==============================
//  = Services sliding variables =
//  ==============================
      flexslider_services = $('.flexslider-services'), //flexslider

//  ====================
//  = Skills variables =
//  ====================
      sec_skills = $('.my-skills'),

//  ====================
//  = Premium packages =
//  ====================
      sec_premiumpackages = $('.premium-packages'),

//  ====================
//  = PC Big variables =
//  ====================
      sec_pcbig = $('.pc-big'),

//  =============================
//  = Upcoming events variables =
//  =============================
      sec_upcoming = $('.upcoming-events'),

//  ========================
//  = Testimonials section =
//  ========================
      flexslider_testimonials = $('.flexslider-testimonials'), //flexslider

//  ===========================
//  = Video section variables =
//  ===========================
      sec_video = $('.video-section'),

//  =====================
//  = Twitter variables =
//  =====================
      flexslider_tweets = $('.flexslider-tweets'), //flexslider

//  =================
//  = Map variables =
//  =================
      map_latitude = 51.510050,
      map_longitude = -0.133770,

//  =============================
//  = Contact section variables =
//  =============================
      sec_contact = $('.contact-section'),
      form_result = $('#contact-form .contact-result'),
      nameError = '<div class="alert alert-error">Please enter your name.</div>',
      emailError = '<div class="alert alert-error">Please enter your e-mail address.</div>',
      invalidEmailError = '<div class="alert alert-error">Please enter a valid e-mail address.</div>',
      subjectError = '<div class="alert alert-error">Please enter the subject.</div>',
      messageError = '<div class="alert alert-error">Please enter your message.</div>',
      mailSuccess = '<div class="alert alert-success">Your message has been sent. Thank you!</div>',

//  ====================
//  = Footer variables =
//  ====================
      sec_footer = $('#footer-section')



// end of variables


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//  ==============================================
//  =                FUNCTIONS                   =
//  ==============================================
//////////////////////////////////////////////////



//  =====================
//  = Stick Menu on Top =
//  =====================

function StickMenu(){
  var windowTop = $(window).scrollTop();

  if (windowTop > stickyTop) {
    sticky.css({position:'fixed'});
  } else {
    sticky.css({position:'absolute'});
  }
}

//  ===========================
//  = [end] Stick Menu on Top =
//  ===========================


//  ====================
//  = Appear functions =
//  ====================


//  = Appear [Awesomeness meter] =

function appearAwesomeness() {
var current_data_perc = 0;

$(document.body).on('appear', '.awesomeness', function(e, $affected) {
  if (current_data_perc == 0) {
    $('.awesomeness h2').each(function(){
      var data_perc = $(this).attr('data-perc'),
          data_speed = $(this).attr('data-speed'),
          data_refresh = $(this).attr('data-refresh')
      $(this).delay(1000).countTo({
        from: 0,
        to: data_perc,
        speed: data_speed,
        refreshInterval: data_refresh
      });
      current_data_perc = 1;

      $('.awesomeness-header').addClass('opacity-up');

      $('.awesomeness').each(function(i) {
        var $li = $(this);
        setTimeout(function() {
          $li.addClass('opacity-up');
        }, i*300);
      });

     });
  };
});
}


//  = Appear [Our Team] =

function appearPersons() {
var current_data_perc_3 = 0;

$(document.body).on('appear', '.person-div', function(e, $affected) {
  if (current_data_perc_3 == 0) {

      $('.person-div').each(function(i) {
        var $li = $(this);
        setTimeout(function() {
          $li.addClass('opacity-up');
        }, i*150);
      });
      current_data_perc_3 = 1;


  };
});
}


//  = Appear [PC Big] =

function appearPcBig() {
var current_data_perc_pc = 0;

$(document.body).on('appear', '.pc-big .macbook-top', function(e, $affected) {
  if (current_data_perc_pc == 0) {
      sec_pcbig.find('.macbook-top').addClass('translate-default');
      current_data_perc_pc = 1;
  };
});
}


//  = Appear [Portfolio ] =

function appearPortfolio() {
var current_data_perc_portfolio = 0;

$(document.body).on('appear', '.portfolio-item', function(e, $affected) {
  if (current_data_perc_portfolio == 0) {

      $('.portfolio-item').each(function(i) {
        var $li = $(this);
        setTimeout(function() {
          $li.addClass('opacity-up');
        }, i*70);
      });
      current_data_perc_portfolio = 1;


  };
});
}


//  = Appear [Skills slider] =

function appearSkills() {

  var current_data_perc_2 = 0;

  $(document.body).on('appear', '.my-skills', function(e, $affected) {
    if (current_data_perc_2 == 0) {


      $('.skill-slider').each(function(){
        var skill_perc = $(this).attr('data-perc')
        $(this).animate({ "width" : skill_perc + "%"}, {queue: false, duration: 2000,easing: 'easeInOutCubic'});

        $('.skills-additional').each(function(i) {
          var $li = $(this);
          setTimeout(function() {
            $li.addClass('translate-height');
          }, i*1000);
        });



        $('.additional-single').each(function(i) {
          var $li = $(this);
          var $li_count = $(this).find('.icon-wrapper h1');

          var data_perc = $li_count.attr('data-perc');
          var data_speed = $li_count.attr('data-speed');
          var data_refresh = $li_count.attr('data-refresh');

          setTimeout(function() {
            $li.addClass('translate-default');
            $li.addClass('opacity-up');
            $li_count.delay(0).countTo({
              from: 0,
              to: data_perc,
              speed: data_speed,
              refreshInterval: data_refresh
            });

          }, i*200);
        });


        current_data_perc_2 = 1;
       });
    };
  });
}


//  = Appear [Services section] =

function appearServices() {
  var already_animated = 0;

  $(document.body).on('appear', '.services', function(e, $affected) {
    if (already_animated == 0) {

      typedText();


      $('.service-card').each(function(i) {
        var $li = $(this);
        setTimeout(function() {

          $li.addClass('opacity-up');
          $li.addClass('translate-default');

        }, i*200);
      });

      already_animated = 1;
    };
  });
}


//  = Appear [Premium packages] =

function appearPremiumPackages() {

    var already_animated_1 = 0;

    $(document.body).on('appear', '.premium-best-deal', function(e, $affected) {
      if (already_animated_1 == 0) {
        $('.premium-best-deal').addClass('premium-best-deal-active');
        already_animated_1 = 1;
      };
    });
}


//  ==========================
//  = [end] Appear functions =
//  ==========================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//  =======================
//  = Portfolio functions =
//  =======================


//responsive portfolio layout

function responsiveColumns() {
    var windowSize = $(window).width(),
        howManyColumns = 1;



    if (windowSize > 1200) {
        howManyColumns = 5;
    } else if (windowSize > 900) {
        howManyColumns = 4;
    } else if (windowSize > 600) {
        howManyColumns = 3;
    } else if (windowSize > 300) {
        howManyColumns = 1;
    }

    var postWidth = Math.floor(windowSize / howManyColumns);

    sec_portfoliocontainer.find('.portfolio-item').each(function () {
        $(this).css( { width : postWidth + 'px' });
    });

    sec_portfoliocontainer.isotope('reLayout');
}









//  =====================
//  = Revolution Slider =
//  =====================
revolSlider.revolution({
         delay:9000,
         startwidth:960,
         startheight:600,
         autoHeight:"on",
         fullScreenAlignForce:"on",

         onHoverStop:"off",

         thumbWidth:100,
         thumbHeight:50,
         thumbAmount:3,

         hideThumbsOnMobile:"off",
         hideBulletsOnMobile:"off",
         hideArrowsOnMobile:"on",
         hideThumbsUnderResoluition:0,

         hideThumbs:1,

         navigationType:"none",
         navigationArrows:"solo",
         navigationStyle:"round",

         navigationHAlign:"center",
         navigationVAlign:"bottom",
         navigationHOffset:30,
         navigationVOffset:30,

         soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:-30,

         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:-30,


         touchenabled:"on",

         stopAtSlide:-1,
         stopAfterLoops:-1,
         hideCaptionAtLimit:0,
         hideAllCaptionAtLilmit:0,
         hideSliderAtLimit:0,

         dottedOverlay:"none",

         fullWidth:"on",
         forceFullWidth:"off",
         fullScreen:"on",
         fullScreenOffsetContainer:"#topheader-to-offset",
         shadow:0

      });

//  =========================
//  = end Revolution Slider =
//  =========================


//  ====================
//  = Parallax effects =
//  ====================
background_awesomeness.parallax("50%", 0.4);
//  ==========================
//  = [end] Parallax effects =
//  ==========================


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ===============
//  = Flexsliders =
//  ===============
flexslider_header_fade.flexslider({
  animation: "fade",
  controlNav: false,
  directionNav: false,
  slideshowSpeed: 1800,
  animationLoop: false,
  keyboard: false,
  selector: ".slides > li",
  touch: false,
  pauseOnAction: false,
});

flexslider_header_slide.flexslider({
  animation: "slide",
  controlNav: false,
  direction: "vertical",
  smoothHeight: true,
  directionNav: false,
  slideshowSpeed: 1800,
  animationLoop: false,
  keyboard: false,
  selector: ".slides > li",
  touch: false,
  pauseOnAction: false,
});

flexslider_tweets.flexslider({
  animation: "slide",
  controlNav: false,
  directionNav: true,
});

flexslider_testimonials.flexslider({
  animation: "slide",
  directionNav: false,
  pauseOnHover: true,

});

flexslider_services.flexslider({
  animation: "slide",
  directionNav: false,
  pauseOnHover: true,
  selector: ".slides > li",
  manualControls: ".services-controller li",
  slideshow: true,
});


//  =====================
//  = [end] Flexsliders =
//  =====================



//  ==========
//  = responsive Navigation =
//  ==========

$().jetmenu({
  speed: 200,
  hideClickOut: true,
});

//  ================
//  = [end] responsive Navigation =
//  ================



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//  =========
//  = Typed =
//  =========

    function typedText() {
          var li01 =  $(".typed-elements li:eq(0)").text();
          var li02 =  $(".typed-elements li:eq(1)").text();
          var li03 =  $(".typed-elements li:eq(2)").text();
          var li04 =  $(".typed-elements li:eq(3)").text();

          typedtext_section.typed({
            strings: [li01,li02,li03,li04],
            typeSpeed: 30,
            backDelay: 1500,
          });
    };

//  ===============
//  = [end] Typed =
//  ===============

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =================
//  = Appear [load] =
//  =================

      sec_services.appear();
      sec_portfoliocontainer.find('.portfolio-item').appear();
      sec_whoweare.find('.person-div').appear();
      sec_skills.appear();
      sec_awesomenessmeter.find('.awesomeness').appear();
      sec_premiumpackages.find('.premium-best-deal').appear();
      sec_pcbig.find('.macbook-top').appear();


      appearAwesomeness();
      appearPortfolio();
      appearPersons();
      appearSkills();
      appearPremiumPackages();
      appearServices();
      appearPcBig();


//  ================
//  = [end] Appear =
//  ================


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ============
//  = SlabText =
//  ============
sec_topcontent.find("h1").slabText({
  'maxFontSize': 80,
  'minCharsPerLine' : 10
});

sec_footer.find("h1").slabText({
  'maxFontSize': 80,
  'minCharsPerLine' : 10
});
//  ==================
//  = [end] SlabText =
//  ==================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ===============
//  = PrettyPhoto =
//  ===============

pretty_photo.prettyPhoto({
  show_title: false,
  social_tools: false,
  deeplinking: false,
  theme: 'light_square',
});
//  =====================
//  = [end] PrettyPhoto =
//  =====================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ===========
//  = FitVids =
//  ===========
media_holder.fitVids();
container_selector.fitVids();
//  =================
//  = [end] FitVids =
//  =================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ================
//  = Certificates =
//  ================
var container_cert = sec_certificates.find('.certificates-container');

container_cert.isotope({
    animationEngine : 'best-available',
    animationOptions: {
        duration: 200,
        queue: false
    },
    layoutMode: 'fitRows'
});


// filter items when filter link is clicked
cert_filer.find('li').click(function(){
    cert_filer.find('li').removeClass('active current');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    container_cert.isotope({ filter: selector });
    responsiveColumns();
    return false;
});
//  ======================
//  = [end] Certificates =
//  ======================


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =======
//  = Map =
//  =======

//var mapOptions = {
//    center: new google.maps.LatLng(map_latitude,map_longitude),
//    zoom: 12,
//    mapTypeId: google.maps.MapTypeId.ROADMAP,
//    disableDefaultUI: false,
//    scrollwheel: false,
//};
//
//var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//var markerOptions = {
//    position: new google.maps.LatLng(map_latitude,map_longitude)
//};
//var marker = new google.maps.Marker(markerOptions);
//marker.setMap(map);
//
////  ===========
////  = end Map =
////  ===========

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//  =============
//  = Portfolio =
//  =============

//  ===========================
//  = Portfolio hover overlay =
//  ===========================
sec_portfoliocontainer.find(".portfolio-item").hover(
  function () {
      $(this).children('img').addClass('scale-hover');
},function () {
      $(this).children('img').removeClass('scale-hover');
});
//  =================================
//  = [end] Portfolio hover overlay =
//  =================================

//  =====================
//  = Portfolio Isotope =
//  =====================
sec_portfoliocontainer.isotope({
    animationEngine : 'best-available',
    animationOptions: {
        duration: 200,
        queue: false
    },
    layoutMode: 'fitRows'
});


// filter items when filter link is clicked
port_filter.find('li').click(function(){
    port_filter.find('li').removeClass('active current');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    sec_portfoliocontainer.isotope({ filter: selector });
    responsiveColumns();
    return false;
});

sec_portfoliocontainer.imagesLoaded(function () {
    responsiveColumns();
});

//  ===========================
//  = [end] Portfolio Isotope =
//  ===========================


//  ==========================
//  = AJAX PORTFOLIO SECTION =
//  ==========================

//  ===========================
//  = AJAX Portfolio controls =
//  ===========================
//  Arrows (Left)
  port_arrow_left.click(function() {


  var project_hash = portfolio_href.attr('id');
  var project_hash_length = project_hash.length;
  var portfolio_current_count = portfolio_href.index($(".current-portfolio-item"));
  currentIDbyIndex = portfolio_href[(portfolio_current_count-1)].id
  toLoad = project_folder_name + '/' + currentIDbyIndex + '.html' + ' #portfolio-content'; // What to load


  if (portfolio_current_count === 0) {

      return false;

  } else {

    window.location.hash = project_folder_name + '/' + currentIDbyIndex.substr(0,project_hash_length); // change URL to element full path to project
    ajax_pixel_correction = 0.001;
    portfolio_href.removeClass('current-portfolio-item'); //remove current class from all elements
    $('#' + currentIDbyIndex).addClass('current-portfolio-item'); // assign current class to clicked element

    loadContentArrows();

    ajax_section.find('#portfolio-left').fadeOut('normal');
    ajax_section.find('#portfolio-right').fadeOut('normal');

    return false;
  };

});
// [end] Arrows (Left)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  Arrows (Right)
  port_arrow_right.click(function() {

  var project_hash = portfolio_href.attr('id');
  var project_hash_length = project_hash.length;
  var portfolio_current_count = portfolio_href.index($(".current-portfolio-item"));
  var portfolio_total_count = portfolio_href.size();
  currentIDbyIndex = portfolio_href[(portfolio_current_count+1)].id
  toLoad = project_folder_name + '/' + currentIDbyIndex + '.html' + ' #portfolio-content'; // What to load


  if (portfolio_current_count === portfolio_total_count) {

    return false;

  } else {
    window.location.hash = project_folder_name + '/' + currentIDbyIndex.substr(0,project_hash_length); // change URL to element full path to project
    ajax_pixel_correction = 0.001;
    portfolio_href.removeClass('current-portfolio-item'); //remove current class from all elements
    $('#' + currentIDbyIndex).addClass('current-portfolio-item'); // assign current class to clicked element

    loadContentArrows();

    ajax_section.find('#portfolio-left').fadeOut('normal');
    ajax_section.find('#portfolio-right').fadeOut('normal', function(){

    });

    return false;
  };

});
// [end] Arrows (Right)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Close button
  port_close.on('click',function() {
        deleteProject($(this).attr('href'));
        window.location.hash = '_';
        return false;
  });
// [end] Close button

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Click on AJAX error zone
    port_ajax_error.on('click',function() {
        deleteProject($(this).attr('href'));
         window.location.hash = '_';
        return false;
  });
// [end] Click on AJAX error zone

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =================================
//  = [end] AJAX portfolio controls =
//  =================================



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//  ======================
//  = AJAX load ON CLICK =
//  ======================
portfolio_href.click(function() {

  portfolio_href.removeClass('current-portfolio-item'); //remove current class from all elements
  $(this).addClass('current-portfolio-item'); // assign current class to clicked element

  portfolio_current_count = portfolio_href.index(port_current); // get the index of currently selected element
  ajax_pixel_correction = 0.001;
  toLoad = project_folder_name + '/' + $(this).attr('id') + '.html' + ' #portfolio-content'; // What to load
  navigation_height = sticky.height();
  $('html,body').animate({scrollTop: port_ajax_link.offset().top - navigation_height + 'px'},600, 'easeInOutCubic');

  port_ajax_error.fadeOut('fast',function(){
    port_ajax_loading.fadeIn('fast');
    port_ajax_loading.animate({'opacity': 1}, 400);
    port_ajax_loading.animate({ 'height': 100 + 'px' },400, 'easeInOutCubic', function() {
      loadContent();
    });
  });

  var project_hash = $(this).attr('id');
  var project_hash_length = project_hash.length;

  window.location.hash = project_folder_name + '/' + $(this).attr('id').substr(0,project_hash_length); // change URL to element full path to project
  return false; //return false to execute function without reloading
});
//  ============================
//  = [end] AJAX load ON CLICK =
//  ============================



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//  =============================
//  = AJAX load ON PAGE REFRESH =
//  =============================

var cur_hash = window.location.hash.substr(1);  // Get current URL
var href = portfolio_href.each(function(){  // Cycle through each element
    var href = project_folder_name + '/' + $(this).attr('id'); // Set the desired URL

if(cur_hash==href){  // Check if current URL is equal to desired URL

  $(this).removeClass('current-portfolio-item'); //remove current class from all elements
  $(this).addClass('current-portfolio-item'); // assign current class to clicked element

  toLoad = project_folder_name + '/' + $(this).attr('id') + '.html' + ' #portfolio-content'; // what to load

  portfolio_current_count = portfolio_href.index(port_current); // get the index of currently selected element

  ajax_pixel_correction = 0;

  loadContent();
  }
});

//  ===================================
//  = [end] AJAX load ON PAGE REFRESH =
//  ===================================



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//  ==================
//  = AJAX functions =
//  ==================
//  Load content using arrows
function loadContentArrows() {
  ajax_section.load(toLoad,function(xhr, status) {
      if ( status == "error" ) { // Checking for error
        port_controls.hide();
        port_ajax_loading.fadeIn('normal');
        port_ajax_error.animate({ 'height': 100 + 'px' },400);
        port_ajax_error.html(port_ajax_error_message); // Display error message
        port_ajax_error.fadeIn();
        ajax_section.fadeOut('normal');
        port_ajax_loading.fadeOut('normal');
      } else {
        port_ajax_error.animate({ 'height': 0 + 'px' },150);
        port_ajax_error.fadeOut();
        port_ajax_error.empty();
        showNewContentArrows(); // If != error then load content and continue to showNewContent function
      }
  });
}
// [end] Load content using arrows

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Display loaded content
function showNewContentArrows() {
  ajax_section.find('.media-holder').fitVids(); // Initialize FitVids
  ajax_section.find('.flexslider-portfolio-additional-images').flexslider({
    animation: "slide",
    directionNav: true,
    pauseOnHover: true,
    smoothHeight: true,
    slideshowSpeed: 5000,
    easing: "easeInOutCubic",
    controlNav: "thumbnails",
    start: function(){
      ajax_section_height = ajax_section.find('#portfolio-container-left').height();
    },
  });
    ajax_section.find('.flexslider-portfolio-simple').flexslider({
    animation: "slide",
    directionNav: true,
    pauseOnHover: true,
    smoothHeight: true,
    slideshowSpeed: 5000,
    easing: "easeInOutCubic",
    start: function(){
      ajax_section_height = ajax_section.find('#portfolio-container-left').height();
    },
  });
  ajax_section.find("a[data-rel^='prettyPhoto']").prettyPhoto({
    show_title: false,
    social_tools: false,
    // theme: 'light_square',
    deeplinking: false,
    theme: 'light_square',
  });

  ajax_section.find('#portfolio-right').fadeIn('normal');
  ajax_section.find('#portfolio-left').fadeIn('normal');

  scrollPortfioloPageRefresh();
  showHidePortfolioControls();

  port_ajax_loading.animate({ height: 0 + 'px' },400);

  hideLoader();
}
// [end] Display loaded content

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  Load content
function loadContent() {
  ajax_section.load(toLoad,function(xhr, status) {
    if ( status == "error" ) { // Checking for error
        port_controls.hide();
        port_ajax_loading.fadeIn('normal');
        port_ajax_error.animate({ 'height': 100 + 'px' },400);
        port_ajax_error.html(port_ajax_error_message); // Display error message
        port_ajax_error.fadeIn();
        ajax_section.fadeOut('normal');
        port_ajax_loading.fadeOut('normal');
      } else {
        port_ajax_error.animate({ 'height': 0 + 'px' },150);
        port_ajax_error.fadeOut();
        port_ajax_error.empty();



      showNewContent(); // If != error then load content and continue to showNewContent function
    }
  });
}
// [end] Load content

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Display loaded content
function showNewContent() {



  ajax_section.find('.media-holder').fitVids(); // Initialize FitVids
  ajax_section.find('.flexslider-portfolio-additional-images').flexslider({
    animation: "slide",
    directionNav: true,
    pauseOnHover: true,
    smoothHeight: true,
    slideshowSpeed: 5000,
    easing: "easeInOutCubic",
    controlNav: "thumbnails",
       start: function(){
       ajax_section_height = ajax_section.find('#portfolio-container-left').height();
    },
  });
    ajax_section.find('.flexslider-portfolio-simple').flexslider({
    animation: "slide",
    directionNav: true,
    pauseOnHover: true,
    smoothHeight: true,
    slideshowSpeed: 5000,
    easing: "easeInOutCubic",
    start: function(){
      ajax_section_height = ajax_section.find('#portfolio-container-left').height();
    },
  });
  ajax_section.find("a[data-rel^='prettyPhoto']").prettyPhoto({
    show_title: false,
    social_tools: false,
    deeplinking: false,
    theme: 'light_square',
  });



  showHidePortfolioControls();
  ajax_section.fadeIn('slow');
  port_controls.show();
  port_ajax_loading.animate({ height: 0 + 'px' },400);

  hideLoader();

  if (ajax_section.css("display") == "block") {
      var ajax_section_height = ajax_section.find('#portfolio-container-left').height(); // Get measurements
  } else {
      ajax_section.css({ // Get ajax element ready for height measurement
          position:   'absolute',
          visibility: 'hidden',
          display:    'block'
      });
      ajax_section.css({ // Revert back to default settings
          position:   'relative',
          visibility: 'visible',
          display:    'none'
      });
  };
}
// [end] Display loaded content

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Hide Loading animation
function hideLoader() {
  port_ajax_loading.animate({'opacity':0},400);
  port_ajax_loading.animate({ 'height': 0 + 'px' },400, function(){
    scrollPortfioloPageRefresh();
  });
  port_ajax_loading.fadeOut('slow');
}
// [end] Hide Loading animation

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Delete currently displayed portfolio item
function deleteProject(closeURL){
  port_controls.fadeOut('slow');
  portfolio_href.removeClass('current-portfolio-item'); //remove current class from all elements
  ajax_section.fadeOut('slow', function(){
    port_filter.css({'margin-top': ajax_section_height + 'px'});
    port_filter.animate({'margin-top': 0 + 'px'}, 500,'easeInOutCubic');
    hideLoader();
    port_ajax_error.animate({ 'height': 0 + 'px' },400);
    port_ajax_error.fadeOut('slow');
  });
}
// [end] Delete currently displayed portfolio item

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Scroll to portfolio on page refresh
function scrollPortfioloPageRefresh() {
  if (ajax_pixel_correction != 0.001) {
      navigation_height = sticky.height();
      $('html,body').stop().animate({scrollTop: port_ajax_link.offset().top - navigation_height + 'px'},2000, 'easeInOutCubic');
      ajax_pixel_correction = 0.001;
  };
}
// [end] Scroll to portfolio on page refresh

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Scroll to portfolio on page error
function scrollPortfioloPageError() {
  navigation_height = sticky.height();
  $('html,body').stop().animate({scrollTop: port_ajax_error.offset().top - navigation_height + 'px'},2000, 'easeInOutCubic');
}
// [end] Scroll to portfolio on page error

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Show or Hide arrows according to current position in list
function showHidePortfolioControls() {
  portfolio_current_count = portfolio_href.index($(".current-portfolio-item"));
  var portfolio_total_count = portfolio_href.size();

  if (port_controls.is(":hidden")) {
      port_controls.show();
  };

  if (portfolio_current_count == 0) {
    port_arrow_left.fadeOut('fast');
  } else {
    port_arrow_left.fadeIn('fast');
  };

  if (portfolio_current_count == (portfolio_total_count-1)) {
    port_arrow_right.fadeOut('fast');
  } else {
    port_arrow_right.fadeIn('fast');
  };
}

//  ========================
//  = [end] AJAX functions =
//  ========================

//  ==========================
//  = AJAX PORTFOLIO SECTION =
//  ==========================

//  ===================
//  = [end] Portfolio =
//  ===================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////




//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =====================
//  = Change size of menu on scroll =
//  =====================

function MenuSizeChange(){
    var windowTop = $(window).scrollTop();

    if (windowTop > 1 && !(sticky.hasClass('sticky-small'))) {
      sticky.removeClass('sticky-default');
      not_sticky.removeClass('sticky-default');
      sticky.addClass('sticky-small');
      not_sticky.addClass('sticky-small');
      scroll_up.removeClass('translate-default');

      top_small_menu.css({'height':'30px','line-height':'30px'});
      top_logo.css('height','30px');
      top_logo_bg.css('line-height','30px');




    } else if (windowTop <= 1 && sticky.hasClass('sticky-small')) {
      sticky.removeClass('sticky-small');
      not_sticky.removeClass('sticky-small');
      sticky.addClass('sticky-default');
      not_sticky.addClass('sticky-default');
      scroll_up.removeClass('translate-default');



      top_small_menu.css({'height':'50px','line-height':'50px'});
      top_logo.css('height','50px');
      top_logo_bg.css('line-height','60px');

      offset = sticky.offset();
      stickyTop = offset.top;


    }


    if (windowTop > stickyTop && sticky.hasClass('sticky-small')) {
      sticky.removeClass('sticky-small');
      not_sticky.removeClass('sticky-small');
      not_sticky.addClass('sticky-small-second');
      scroll_up.addClass('translate-default');
      sticky.addClass('sticky-small-second');
      small_logo.addClass('opacity-up');



    } else if (windowTop < stickyTop) {
      sticky.removeClass('sticky-small-second');
      not_sticky.removeClass('sticky-small-second');
      offset = sticky.offset();
      stickyTop = offset.top;
      small_logo.removeClass('opacity-up');

    }

}

//  ===========================
//  = [end] Change size of menu on scroll =
//  ===========================


//  ====================
//  = person more info =
//  ====================
// Zoom on click

var default_person_height = person_div.height();


person_overlay.click(function() {

    var target_person_height = $(this).parent('.person-div').find('.person-more-info').height();

    if (!$(this).parent('.person-div').hasClass('person-active')) {
      person_div.removeClass('person-active');
      person_div.css({'height':default_person_height});
      person_div.css({'opacity':'0.4'});
      $(this).parent('.person-div').css({'opacity':'1'});
      $(this).parent('.person-div').addClass('person-active');
      $(this).parent('.person-div').css({'height':target_person_height + default_person_height+80});
    } else if(person_div.hasClass('person-active')) {
      person_div.removeClass('person-active');
      person_div.css({'height':default_person_height});
      person_div.css({'opacity':'1'});
    };

body.click(function() {
  person_div.removeClass('person-active');
  person_div.css({'height':default_person_height});
  person_div.css({'opacity':'1'});
});


    return false;
});

//  ==========================
//  = [end] Person more info =
//  ==========================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//  ======================
//  = Toggle more services info =
//  ======================



sec_services.find('.service-card').hover(function() {

    $(this).find('.service-desc p').animate({'height': 120}, {queue: false, duration: 300,easing: 'easeInOutCubic'});
    $(this).find('.service-desc .gradient-white').addClass('opacity-zero');
    return false;
},
function() {
      $(this).find('.service-desc p').animate({'height': 80}, {queue: false, duration: 300,easing: 'easeInOutCubic'});
      $(this).find('.service-desc .gradient-white').removeClass('opacity-zero');
      }

);
//  ============================
//  = [end] Toggle more services info =
//  ============================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//  ======================
//  = Toggle more events =
//  ======================
sec_upcoming.find('.button-more a').click(function() {
    sec_upcoming.find('.events-more').slideToggle('800','easeInOutCubic');
    sec_upcoming.find('.last-event-transition').slideToggle('slow');
    $(this).children('p').text($(this).children('p').text() == 'Show more events' ? 'Hide events' : 'Show more events');
    return false;
});
//  ==========================
//  = [end] Toggle more events =
//  ==========================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =======================================
//  = Toggle more videos in video section =
//  =======================================
sec_video.find('.button-more a').click(function() {
    sec_video.find('.additional-videos').slideToggle('800','easeInOutCubic');

    $(this).children('p').text($(this).children('p').text() == 'Show other videos' ? 'Hide other videos' : 'Show other videos');
    return false;
});
//  =============================================
//  = [end] Toggle more videos in video section =
//  =============================================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =================
//  = Scroll to top =
//  =================

scroll_up.click(function(){
    $("html, body").stop().animate({ scrollTop: 0 }, 2000,'easeInOutQuart');
    return false;
});

//  =======================
//  = [end] Scroll to top =
//  =======================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  =================
//  = Header button =
//  =================

header_button.click(function(){
    $("html, body").stop().animate({ scrollTop: $('.header-scroll-link').offset().top - navigation_height - 15 + 'px' }, 1500,'easeInOutQuart');
    return false;
});
//  =======================
//  = [end] Header button =
//  =======================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ======================
//  = Menu Scroll effect =
//  ======================

//Author: Marcus Ekwall
//URL: http://stackoverflow.com/users/358556/marcus-ekwall

// Cache selectors
    var lastId,
    topMenu = $(".top-nav-full"),
    topMenuHeight = topMenu.outerHeight()+20,
    // All list items
    menuItems = topMenu.find("a"),
    current_width = $(window).width()

    // Anchors corresponding to menu items
    var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href");
  var offsetTop;

    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 1500, 'easeInOutQuart');
  e.preventDefault();
});


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ================
//  = Contact Form =
//  ================
// Show recaptcha on focus
sec_contact.find('#contact-about-section input').focus(function() {
sec_contact.find('#contact-recaptcha').fadeIn('medium');
});

sec_contact.find("#contact-form form").submit(function(){

  var form = $(this);
  var form_input = form.serialize();

  $.ajax(
  {
    url: 'contact.php',
    type: 'POST',
    traditional: true,
    data: form_input,
    success: function(data){
        var response = jQuery.parseJSON(data);
        $("#contact-form .contact-result .alert").slideUp().remove();
        if(response.success)
          { $('#contact-form form').slideUp().height('0');
            $('#contact-form .contact-result').append(mailSuccess);
          }
        else
          {
           for(i=0; i<response.errors.length; i++){
             if(response.errors[i].error == 'empty_name')  {
               form_result.append(nameError);
             }
             if(response.errors[i].error == 'empty_email')  {
               form_result.append(emailError);
             }
             if(response.errors[i].error == 'empty_subject')  {
               form_result.append(subjectError);
             }
             if(response.errors[i].error == 'empty_message')  {
               form_result.append(messageError);
             }
             if(response.errors[i].error == 'invalid'){
              form_result.append(invalidEmailError);
             }
           }
          }
      }
  })
  return false;
});
//  ======================
//  = [end] Contact Form =
//  ======================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////




//  ==================
//  = Loading screen =
//  ==================
window.addEventListener('DOMContentLoaded', function() {
  body_preloader.fadeOut('slow');
});





//  ================================
//  = Call events on window scroll =
//  ================================
$(window).on('scroll', function() {

  StickMenu();
  MenuSizeChange();


   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {

       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }

});


// Stop scrolling when interrupted

// $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
//  if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
//   $("html,body").stop();
//  }
// })


//  ======================================
//  = [end] Call events on window scroll =
//  ======================================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ================================
//  = Load events on window resize =
//  ================================
$(window).resize(function() {


    responsiveColumns();


//  ======================
//  = Menu Scroll effect =
//  ======================

//Author: Marcus Ekwall
//URL: http://stackoverflow.com/users/358556/marcus-ekwall

// Cache selectors
var lastId,
    current_width = $(window).width()

    // Anchors corresponding to menu items
    var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href");


    var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 1500, 'easeInOutQuart');
  e.preventDefault();
});




});
//  ======================================
//  = [end] Load events on window resize =
//  ======================================

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

});


//  ============================================================
//  = Load functions after page and other functions are loaded =
//  ============================================================
$(window).load(function() {


});

