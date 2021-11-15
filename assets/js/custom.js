/* Resize Youtube Videos */

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();




$(document).ready(function(){
  function clickMenuCustom(caret){
      if($(caret).closest('.dropdown').hasClass('open')){ active="active"; }
      else { active=""; }
      
      $('.dropdown').removeClass('open');
      if(active==="active"){
        $(caret).closest('.dropdown').removeClass('open');
      }
      else{
        $(caret).closest('.dropdown').addClass('open');
      }
      return false;
  }
  
  $('.navbar-nav .caret').click(function(){
    width=$('.container').outerWidth();
    if(width<750){
      clickMenuCustom(this);
      return false;
    }
  });
  
  $('.navbar-default .navbar-nav>li>a').mouseover(function(){
    width=$('.container').outerWidth();
    if(width>=750){
      if($(this).hasClass('dropdown-toggle')){
        $('.dropdown').removeClass('open');
        $(this).closest('.dropdown').addClass('open');
      }
      else {
        $('.dropdown').removeClass('open');
      }
    }
  });
  
  
  $('.dropdown-menu').mouseleave(function(){
    width=$('.container').outerWidth();
    if(width>=750){
      $('.dropdown').removeClass('open');
    }
  });
  
  
  function resizeMenuItems(){
    width=$('.container').outerWidth();
    if(width<750){
      height=$('body').height()-$('.navbar-default').height();
      //$('.navbar-default .navbar-collapse').css('min-height',height+'px');
      $('.navbar-default .dropdown-toggle').each(function(){
        $(this).attr('data-toggle','dropdown');
        $(this).attr('data-target','#');
      });
    } else {
      $('.navbar-default .dropdown-toggle').each(function(){
        //$('.navbar-default .navbar-collapse').css('min-height','50px');
        $(this).removeAttr('data-toggle');
        $(this).removeAttr('data-target');
      });
    }
  }
  
  $(document).ready(function(){
    resizeMenuItems();
  });
  
  $(window).load(function(){
    resizeMenuItems();
  });
  
  $(window).resize(function(){
    resizeMenuItems();
  });
});

function numberPriceWithSpace(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;") + (parts[1] ? "." + parts[1] : "");
}



$(document).ready(function(){
  $('.navbar-nav>li.menu-e-shop a').mouseenter(function(e) {
    if($('.navbar-default').width()>768){ $('.megamenu').slideDown().addClass('open'); }     
  });
  
  /*$('.navbar-nav>li.menu-e-shop a').hover(function(e) {
    if($('.navbar-default').width()>768){ $('.megamenu').slideDown().show().addClass('open'); }     
  });  */
            
  $('.megamenu, .navbar-nav>li.menu-e-shop a').mouseleave(function(e) {
    if($('.navbar-default').width()>768){
      setTimeout(function(){
        if(!$('.megamenu').hasClass('hovered') && !$('.megamenu, .navbar-nav>li.menu-e-shop a').is(":hover")){
          $('.megamenu').slideUp();
        }   
      },500);   
    }  
  });
  
  $('.megamenu').mouseenter(function(e) {
    if($('.navbar-default').width()>768){ $('.megamenu').addClass('hovered'); }     
  });
  
  $('.megamenu').mouseleave(function(e) {
    if($('.navbar-default').width()>768){ $('.megamenu').removeClass('hovered').slideUp(); }     
  });
  
  $('.navbar-nav>li.menu-e-shop a').click(function(){
    if($('.navbar-default').width()>768){
      return true;
    } else {
      $('.megamenu').slideToggle();
      return false;
    }
  });
});   