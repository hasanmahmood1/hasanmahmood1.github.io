
$('document').ready(function( ){
    $('.ui.dropdown').dropdown( );
    $(".menu .item")
	.click(function() {
	    $('html, body').animate({
		scrollTop: $($(this).attr("href")).offset().top
	    }, 1000);
	});
});
