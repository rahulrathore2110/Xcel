let navbar = document.querySelector(".nav-menu");

let close = document.getElementById("close");
let open = document.getElementById("navbars");





open.addEventListener("click", () => {
  shownav(navbar);
});

close.addEventListener("click", () => {
  hidenav(navbar);
});





function shownav(navbar) {
  navbar.style.visibility = "visible";
  open.style.visibility = "hidden";
  close.style.visibility = "visible";
}

function hidenav(navbar) {
    navbar.style.visibility = "hidden";
    open.style.visibility = "visible";
    close.style.visibility = "hidden";
}
