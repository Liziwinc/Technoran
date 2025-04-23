var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");

var photos = document.getElementsByClassName("photo");

for (var i = 0; i < photos.length; i++) {
  photos[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-src");
    document.body.classList.add("modal-open");
  };
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}
