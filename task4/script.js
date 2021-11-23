let link = document.getElementById('link');

link.addEventListener('click', function(event) {
	event.preventDefault();
    let paragraph = document.querySelector('#link');
paragraph.textContent = prompt('ВВедите текст');
});