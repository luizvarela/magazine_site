//twitter display

$(document).ready(function() {
	$(".tweet").tweet({
		username:"sergiomurilov",
		count: 3,
		loading_text: "loading tweets..."
	});
});

//Flickr feed
//idgetr.com to id

$(document).ready(function() {
	$('.flickr').flickrush({
		limit: 6,
		id: '44499772@N06',
		random: true
	});
});

//hook up the flexslider

$(document).ready(function(){
	$('.flexslider').flexslider({
		directionNav: false,
	});
});

//menu responsive
		$(document).ready(function() {

			//build dropdown
			$("<select />").appendTo(".navigation nav div");

			//create default option "Go to.."
			$("<option />", {
				"selected" : "selected",
				"value" : "",
				"text" : "Go to..."
			}).appendTo("nav select");

			//populate dropdowns with with the first items
			$(".navigation nav li a").each(function() {
				var el = $(this);
				$("<option />", {
					"value" : el.attr("href"),
					"text" : el.text()
				}).appendTo("nav select");
			
			});

			//make responsive dropdown menu actually work
			$("nav select").change(function() {
				window.location = $(this).find("option:selected").val();
			});
		});
		
	