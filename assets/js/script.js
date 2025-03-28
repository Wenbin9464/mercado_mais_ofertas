
// Function to open the modal
function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}
function esckey(evt) {
  if (evt.keyCode == 27) {
      closeModal()
  }
}