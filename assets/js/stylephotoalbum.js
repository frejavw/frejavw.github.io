/*
CREDIT: framework of code is from homework 9.  
*/
function unhideLightbox(lightboxID) {
	
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	document.getElementById(lightboxID).classList.remove('hidden');

}


 
document.getElementById("pictures").onclick = unhideLightbox;

function unhideLightbox1() {
	
	unhideLightbox("weddingpic");
}

document.getElementById("picture-1").onclick = unhideLightbox1;

function unhideLightBox2() {
	unhideLightbox("skipic");
}
document.getElementById("picture-2").onclick = unhideLightBox2;

function unhideLightBox3() {
	unhideLightbox("christmaspic");
}
document.getElementById("picture-3").onclick = unhideLightBox3;

function unhideLightBox4() {
	unhideLightbox("yosemitepic");
}
document.getElementById("picture-4").onclick = unhideLightBox4;

function unhideLightBox5() {
	unhideLightbox("cardpic");
}
document.getElementById("picture-5").onclick = unhideLightBox5;

function unhideLightBox6() {
	unhideLightbox("montanapic");
}
document.getElementById("picture-6").onclick = unhideLightBox6;

function unhideLightBox7() {
	unhideLightbox("pierpic");
}
document.getElementById("picture-7").onclick = unhideLightBox7;

function unhideLightBox8() {
	unhideLightbox("italypic");
}
document.getElementById("picture-8").onclick = unhideLightBox8;

function unhideLightBox9() {
	unhideLightbox("dinnerpic");
}
document.getElementById("picture-9").onclick = unhideLightBox9;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;





