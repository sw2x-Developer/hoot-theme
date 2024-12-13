"use strict";

/**
 * Get user preferred theme from their past choice or browser
 * @returns {String} User preferred theme
 */
function getPreferredTheme() {
	const storedTheme = localStorage.getItem("theme");
	if (storedTheme) {
		return storedTheme;
	}
	// Firefox with 'resistFingerprint' activated always returns light
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

/**
 * Update navbar icon to match given theme.
 * @param {String} theme - 'dark' or 'light'
 */
function showActiveTheme(theme) {
	const activeThemeIcon = document.querySelector(".theme-switch i.fas");
	activeThemeIcon.classList.toggle("fa-moon", theme === "dark");
	activeThemeIcon.classList.toggle("fa-sun", theme !== "dark");
}

// Change body theme early to prevent flash
let currentTheme = "light";
document.documentElement.setAttribute("data-bs-theme", currentTheme);

// On browser color-scheme change, update
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", () => {
		currentTheme = "light";
		document.documentElement.setAttribute("data-bs-theme", currentTheme);
		//	showActiveTheme(currentTheme);
	});

window.addEventListener("load", () => {
	showActiveTheme("light");

	// On button click, switch
	// document.querySelectorAll(".theme-switch").forEach((e) => {
	// 	e.addEventListener("click", (ev) => {
	// 		document.documentElement.setAttribute("data-bs-theme", "light");
	// 		localStorage.setItem("theme", "light");
	// 		showActiveTheme("light");
	// 		ev.preventDefault();
	// 	});
	// });
});
