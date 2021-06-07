const menuOpen = document.querySelector(".menu-open");

menuOpen.addEventListener("click", () => {
    document.querySelector("nav ul").style.transform = "translateX(-100%)";
});

const menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click", () => {
    document.querySelector("nav ul").style.transform = "translateX(0)";
});

if (window.innerWidth >= 600) {
    const nav = document.querySelector("nav");
    const submenu = document.querySelector(".submenu");
    const secSubmenu = document.querySelector(".sec-submenu");

    const changeNavbar = () => {
        if (window.scrollY > 200) {
            nav.style.backgroundColor = "#47E74F";
            submenu.style.backgroundColor = "#47E74F";
            secSubmenu.style.backgroundColor = "#47E74F";
            nav.style.transform = "scale(1.1)";
        }
        else if (window.scrollY == 0) {
            if (window.location.pathname.indexOf("index.html") > -1) {
                nav.style.backgroundColor = "transparent";
                submenu.style.backgroundColor = "transparent";
                secSubmenu.style.backgroundColor = "transparent";
            }
            nav.style.transform = "scale(1)";
        }
    }

    changeNavbar(0);

    window.addEventListener("scroll", changeNavbar);
}