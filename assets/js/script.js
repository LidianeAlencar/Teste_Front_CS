// MODAL

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// MENU
var line = document.getElementById('lines');
var navMenu = document.getElementById('mobile');
var active = document.querySelector('activeMenu');

line.onclick = function() {

	if (!navMenu.classList.contains("activeMenu")) {
		navMenu.className = 'activeMenu';
	} else{
		navMenu.classList.remove("activeMenu");
	}

}