function openMenu(divName) {
	console.log('divName ',divName);
    var arr = document.getElementsByClassName('menu-list__toggle_button');
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.toggle('dark-gray');
    }
    if (divName == 'eat') {
    	var element = document.getElementById(divName);
    	element.classList.add("show");
    	var elementHide = document.getElementById('drink');
    	elementHide.classList.remove("show");
    	console.log('EAT');
    } else if(divName == 'drink') {
    	var element = document.getElementById(divName);
    	element.classList.add("show");
    	var elementHide = document.getElementById('eat');
    	elementHide.classList.remove("show");
    	console.log('DRINK');
    }
}