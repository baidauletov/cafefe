var sliders = document.getElementsByClassName('hero__item');
// var dots = document.getElementsByClassName('dot');
var currentSlide = 0;

showSlide(0);

setInterval(function(){showSlide(currentSlide)}, 4000);
// showSlide(0);

function showSlide( n ){

	if( n>=sliders.length ){
		n = 0;
	}

	currentSlide = n;

	for(var i=0; i<sliders.length; i++){
		sliders[i].style.display = "none";
		// dots[i].classList.remove('dot__active');
	}

	sliders[currentSlide].style.display = "block";
	// dots[n].classList.add('dot__active');

	currentSlide = currentSlide + 1;
	// console.log("slideNum: ",currentSlide);
}


// function clickRight(){
// 	currentSlide++;
// 	showSlide( currentSlide );
// }

// function clickLeft(){
// 	currentSlide--;
// 	showSlide(currentSlide);
// }

