jQuery(document).ready(function($){
	var preloader = $('#preloader');
	preloader.fadeOut('slow', function() {
		$(this).remove();
	});
});