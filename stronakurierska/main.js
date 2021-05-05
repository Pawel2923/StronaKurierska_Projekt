window.onload = () => {
    const menuOpen = document.querySelector(".menu-open");

    menuOpen.addEventListener("click", () => {
        document.querySelector("nav ul").style.transform = "translateX(-100%)";
    });

    const menuClose = document.querySelector(".menu-close");

    menuClose.addEventListener("click", () => {
        document.querySelector("nav ul").style.transform = "translateX(0)";
    });
}