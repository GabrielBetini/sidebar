const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const aside = document.querySelector('.aside');

toggleBtn.addEventListener('click', () => {
	aside.classList.toggle('show-links');
});

closeBtn.addEventListener('click', () => {
	aside.classList.remove('show-links');
});
