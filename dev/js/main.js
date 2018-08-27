jQuery(document).ready(function($){
	var preloader = $('#preloader');
	preloader.fadeOut('slow', function() {
		$(this).remove();
	});
	var windowHeight = $(window).height();
	var container1Height = $("#container-1").height();
	if(windowHeight > container1Height){
		$("#container-1").height(windowHeight+45);
	}
	$(window).resize(function(){
		$("#container-1").height("100%");
		if($(window).height() >= 927){
			var windowHeight = $(window).height();
			var container1Height = $("#container-1").height();
			if(windowHeight > container1Height){
				$("#container-1").height(windowHeight);
			}
		} 
		
	});
});