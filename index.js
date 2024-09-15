const navlinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".burger");

hamburger.addEventListener("click", () => {
	navlinks.classList.toggle("active");
});
