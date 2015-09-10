// CLIENT-SIDE JAVASCRIPT

$(document).ready(function() {

// NAVBAR FADE
$(function() {
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0)
      $('.navbar').stop().animate({'opacity':'0.2'},400);
    else  
      $('.navbar').stop().animate({'opacity':'1'},400);
  });
  
  $('.navbar').hover(
    function (e) {
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
        $('.navbar').stop().animate({'opacity':'1'},400);
      }
    },
    function (e) {
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
        $('.navbar').stop().animate({'opacity':'0.2'},400);
      }
    }
  );
});
});