const refs = {
  openModalBtn: document.querySelector("[data-open-menu]"),
  closeModalBtn: document.querySelector("[data-close-menu]"),
  backdrop: document.querySelector("[data-mobile-menu]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle("visually-hidden");
}
