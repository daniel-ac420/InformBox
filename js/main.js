/* --- SLIDER --- */

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("banner");
	let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		slideIndex = 1
	}   
	
	if (n < 1) {
		slideIndex = slides.length
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" dot_active", "");
	}
	
	slides[slideIndex-1].style.display = "flex";  
	dots[slideIndex-1].className += " dot_active";
}



/* --- MENU --- */

const menuButton = document.querySelector(".mobile-menu-button");

const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function() {
	if (!this.classList.contains("active")) {
		this.classList.toggle("active");
		menu.classList.toggle("active");
	}
})

const closeButton = document.querySelector(".button-close");

closeButton.addEventListener("click", function() {
	if (menu.classList.contains("active")) {
		menu.classList.toggle("active");
		menuButton.classList.toggle("active");
	}
})