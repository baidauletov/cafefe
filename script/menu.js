function showMenu(){
	$('#menu').animate({
		height: 'toggle'
	});
}

window.onclick = function(event){

	var menuImage = document.getElementById('menuImg');

	/*'//header_mobile//'*/
	if( event.target != menuImage ){
		document.getElementById('menu').style.display = "none";
	}


}