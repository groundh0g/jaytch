var imgHeight = 0;
var imgWidth = 1550;
var imgMinHeight = 0;
var imgScale = 1.0;
var docScroll = 0;

function onBodyResized() {
	if($("div.canopy").first().hasClass("canopy-none")) { 
		var bodyMarginTop = $("nav.navbar div.container").first().height() + imgMinHeight;
		$("body").css("margin-top", bodyMarginTop + "px");
		return; 
	}
	imgHeight = $("div.canopy img").first().height();
	imgWidth = $("div.canopy img").first().width();
	imgScale = imgWidth / 1550;
	imgMinHeight = imgScale * 188;

	var bodyMarginTop = Math.round(
		$("div.canopy").first().hasClass("canopy-full") ?
		$("nav.navbar div.container").first().height() + imgHeight :  // enable scroll effect
		$("nav.navbar div.container").first().height() + imgMinHeight // disable scroll effect
	);
	$("body").css("margin-top", bodyMarginTop + "px");
	
	var headerWidth = $("div.container").first().width();
	var w = Math.round((headerWidth / 3.0 - 60.0) * imgScale);
	$("table.siteIcons img").width(w);

	onDocumentScroll();
}

function onDocumentScroll() {
	if($("div.canopy").first().hasClass("canopy-none")) { return; }
	var amountToScroll = Math.round(
		$("div.canopy").first().hasClass("canopy-full") ?
		$(this).scrollTop() : // enable scroll effect
		2000                  // disable scroll effect
	);
	$("div.canopy").first().height(Math.max(imgHeight - amountToScroll, imgMinHeight) + "px");
}

$(window).resize(function(){
	onBodyResized();
});
$(document).ready(function(){
	onBodyResized();
});

$(window).scroll(function(){
	onDocumentScroll();
});
