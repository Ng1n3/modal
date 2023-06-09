"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close");
const openModal = document.querySelectorAll(".open");

const open = () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const close = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < openModal.length; i++) {
	openModal[i].addEventListener("click", open);
	closeModal.addEventListener("click", close);
	overlay.addEventListener("click", close);
}
