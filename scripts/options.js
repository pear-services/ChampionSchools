$(document).ready(function() {
	$(".sideBarOption1").show();
	$(".sideBarOption2").hide();
});

$("#sideBarOptions").click(function(){
	$(".sideBarOption1").transition('fade');
	$(".sideBarOption2").transition('fade');
});