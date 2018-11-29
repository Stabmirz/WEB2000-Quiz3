var imgs = document.querySelectorAll(".img");
var mySound = document.getElementById("mySound");
var modal = document.getElementById("myModal");
function scratch(img) {
    img.src = "scratching.gif";
    setTimeout(() => img.style.opacity = "0", 1000);
    setTimeout(() => mySound.play(), 1200);
    modal.style.visibility = "hidden"
    setTimeout(() => modal.style.visibility = "visible", 1300);
}

imgs.forEach(function (img) {
    img.addEventListener("click", function () {
        scratch(img);
    })
})