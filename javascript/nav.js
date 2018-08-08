var windowWidth = $(window).width();
if(windowWidth > 991){
    $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navBack").css({
        "background": "rgba(76, 95, 141, 1)",
        "boxShadow": "0px 3px 7px 2px"
    });
	  }
	  else{
		  $(".navBack").css({
        "background": "transparent",
        "boxShadow": "0px 0px 0px"
      });  	
	  }
  });
}
else{
	$(".navbar-brand").html("");
  $(".text").addClass("addPadding");
}


$('.navbar-toggler-icon').on("click", function(){
	$("nav").toggleClass("bg-blue");
});




// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





