const heroImg = document.querySelector(".hero-img");
const overlay = document.querySelector(".overlay");

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

window.addEventListener("scroll", () => {
	const scrollY = window.scrollY;
	const maxScroll = window.innerHeight;

	const progress = Math.min(scrollY / maxScroll, 1);

	heroImg.style.transform = `scale(${1 + progress * 0.3})`;

	overlay.style.opacity = progress * 0.7;
});

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'));
		tab.classList.add('active');

		tabContents.forEach(c => c.classList.remove('active'));

		const target = document.getElementById(tab.dataset.target);
		target.classList.add('active');
	});
});