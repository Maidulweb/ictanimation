//  ============================
//  = Full width video scripts =
//  ============================


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
      

//  ===============================
//  = Small menu on top variables =
//  ===============================
      top_small_menu = $('#top-small-menu'),
      top_logo = $('.top-logo'),
      top_logo_bg = $('.top-logo-bg'),


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



//  ===========================
//  = [end] Stick Menu on Top =
//  ===========================

//  ====================
//  = Parallax effects =
//  ====================
$('#parallax01').parallax("50%", 0.4);
//  ==========================
//  = [end] Parallax effects =
//  ==========================



//  ==========
//  = responsive Navigation =
//  ==========


//  ================
//  = [end] responsive Navigation =
//  ================




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


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//  =====================
//  = Change size of menu on scroll =
//  =====================


//  ===========================
//  = [end] Change size of menu on scroll =
//  ===========================

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

//  ==================
//  = Loading screen =
//  ==================
window.addEventListener('DOMContentLoaded', function() {
  body_preloader.fadeOut('slow');
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//  ================================
//  = Call events on window scroll =
//  ================================
$(window).on('scroll', function() {

 
 // MenuSizeChange();


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
//  = Menu hover Effect=
//  ============================================================
$(function(){
   
    $('#navbar').find('ul > li a').click(function(){
           
           var url = $.trim($(this).attr('href'));

           if(url.length > 0){
             window.location =url;


           }

    });

});