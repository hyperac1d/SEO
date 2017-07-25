(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
  }); // end of document ready
})(jQuery); // end of jQuery name space



// $(function() {
// 	// Set this variable with the height of your sidebar + header
// 	var offsetPixels =  780;

// 	$(window).scroll(function() {
// 		if ($(window).scrollTop() > offsetPixels) {
// 			$( ".sidebarBox" ).css({
// 				"position": "fixed",
// 				"top": "15px"
// 			});
// 		} else {
// 			$( ".sidebarBox" ).css({
// 				"position": "static"
// 			});
// 		}
// 	});
// });