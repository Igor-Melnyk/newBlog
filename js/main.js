
jQuery(document).ready(function (){
	$(".menu-btn").click(function() {
		$(".top-nav").slideToggle(500, function (){
				if ($(".top-nav").css("display") != "none"){
					$(".menu-btn span").css({
					"color":"#fff",
					"background":"#4d4d4d"
				});
				} else {
					$(".menu-btn span").css({
					"color":"#4d4d4d",
					"background":"#fff"
					});
				}	
		});
	})

});
