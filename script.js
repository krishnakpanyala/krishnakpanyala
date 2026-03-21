if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const heroImg = document.querySelector(".hero-img");
const overlay = document.querySelector(".overlay");

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

const big = document.getElementById("big-name");

const imgW = document.getElementById('kkp').clientWidth;
const imgH = document.getElementById('kkp').clientHeight;

const angle = Math.atan(imgH/imgW) * (180 / Math.PI)

document.addEventListener('DOMContentLoaded', e => {
	const textRect = big.getBoundingClientRect();

    const imgCenterX = imgW / 2;
    const imgCenterY = imgH / 2;

    const textCenterX = textRect.width / 2;
    const textCenterY = textRect.height / 2;
	big.style = `transform: translateY(-50%) rotate(-${angle}deg);`;
	big.style.left = `${imgCenterX - textCenterX}px`;
    big.style.top = `${imgCenterY - textCenterY}px`;
});


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

function scrollToTabs(event) {
	document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
}