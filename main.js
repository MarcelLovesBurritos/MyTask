$(document).ready(function(){
	var img = 1;

$(".slider:not(:first-of-type)").hide();

	$(".next").click(function() {
		$(".slider").hide();
		$(".slider:nth-child("+ ++img +")").show();
	});

	$(".prev").click(function() {
		
		$(".slider").hide();
		$(".slider:nth-child("+ --img +")").show();
		
	});
});