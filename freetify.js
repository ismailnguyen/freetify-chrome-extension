var discoverLeMonde = function () {
	if (!document) return;
	
	if (document.querySelector('.paywall'))
		document.querySelector('.paywall').remove();
		
	if (document.querySelector('.footer'))
		document.querySelector('.footer').remove();
}

var freetify = function () {
	discoverLeMonde();
}

window.addEventListener('load', (event) => {
  freetify();
});
