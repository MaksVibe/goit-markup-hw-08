var modal = document.getElementByClassName(".backdrop");

var btn = document.getElementByClassName(".hero-but");

var closebtn = document.getElementsByClassName(".close-btn")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
closebtn.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}