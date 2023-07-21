document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM event fired.');
	const colors = ['#FFA6AC', '#a06d61', '#7c9b33', '#e6b938', '#5f5e9b'];
	let currentColorIndex = 0;
  
	const rightArrow = document.querySelector('.fa-chevron-right');
	const leftArrow = document.querySelector('.fa-chevron-left');
	const circle = document.querySelector('.circle');
	const bar = document.querySelector('.bars .bar:first-child');
  
	rightArrow.addEventListener('click', function (event) {
		event.preventDefault();
		currentColorIndex = (currentColorIndex + 1) % colors.length;
		updateColors();
	});
  
	leftArrow.addEventListener('click', function (event) {
		event.preventDefault();
		currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
		updateColors();
	});
  
	function updateColors() {
		const newColor = colors[currentColorIndex];
		document.documentElement.style.setProperty('--accent-color', newColor); //plain CSS only
		circle.style.backgroundColor = newColor;
		bar.style.backgroundColor = newColor;
	}
  });