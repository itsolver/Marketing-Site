var videoClick = function(el) {
	el.preventDefault();
	document.body.insertAdjacentHTML('beforeend', '<div class="overlay" id="overlay"><div class="video-container"><div class="video-embed"><iframe src="https://www.youtube.com/embed/' + this.dataset.video + '?loop=1&amp;rel=0&amp;autoplay=1&amp;showinfo=0&amp;playlist=' + this.dataset.video + '" frameborder="0" allowfullscreen=""></iframe></div></div></div>');

	document.body.classList.add("no-scroll");
	console.log('no-scroll');
	document.getElementById('overlay').addEventListener('click', function(el) {
		el.preventDefault();
		this.parentNode.removeChild(this);
		document.body.classList.remove("no-scroll");
	});
};

var videoLinks = document.querySelectorAll(".video-link");

for (i = 0; i < videoLinks.length; i++) {
	videoLinks[i].addEventListener('click', videoClick);
}

