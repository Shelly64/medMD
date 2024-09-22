const navlinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".burger");

const formBtn = document.querySelector("form button");

const playBtn = document.querySelector(".hero-btn2 span");
const video = document.querySelector("video");

const counters = document.querySelectorAll(".stats span");

let activated = false;

document.addEventListener("DOMContentLoaded", function () {
	const counters = document.querySelectorAll("[data-count]");
	const speed = 200; // Speed of count-up animation (higher is slower)

	counters.forEach((counter) => {
		const updateCount = () => {
			const target = +counter.getAttribute("data-count");
			const count = +counter.innerText;
			const increment = target / speed;

			if (count < target) {
				counter.innerText = Math.ceil(count + increment);
				setTimeout(updateCount, 10); // Update every 10ms
			} else {
				counter.innerText = target;
			}
		};

		updateCount();
	});
});

hamburger.addEventListener("click", () => {
	navlinks.classList.toggle("active");
});

formBtn.addEventListener("click", (e) => {
	e.preventDefault();
});

playBtn.addEventListener("click", () => {
	if (video.paused) {
		video.play();
		playBtn.textContent = "Pause Video";
	} else {
		video.pause();
		playBtn.textContent = "Play Video";
	}
});
