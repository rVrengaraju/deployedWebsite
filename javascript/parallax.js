var ypos, image;

window.addEventListener('scroll', function(){
	ypos = window.pageYOffset;
	image = document.getElementById('ruban-pic');
	image.style.top = (ypos*0.6) + 'px';
});