const refs = {
  openModalBtn: document.querySelector("[open-menu]"),
  closeModalBtn: document.querySelector("[close-btn-menu]"),
  backdrop: document.querySelector("[burger-menu]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle("visually-hidden");
}
