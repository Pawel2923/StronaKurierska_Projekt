const h1 = document.querySelectorAll("main h1");
const h3 = document.querySelectorAll("main h3");
const p = document.querySelectorAll("main p");
const label = document.querySelectorAll("main label");

window.addEventListener("scroll", function () {
    for (let i = 0; i < h1.length; i++) {
        let position = h1[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            h1[i].style.opacity = "1";
            h1[i].style.transform = "translateY(0)";
        }
    }

    for (let i = 0; i < p.length; i++) {
        let position = p[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            p[i].style.opacity = "1";
            p[i].style.transform = "translateY(0)";
        }
    }

    for (let i = 0; i < h3.length; i++) {
        let position = h3[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            h3[i].style.opacity = "1";
            h3[i].style.transform = "translateY(0)";
        }
    }

    for (let i = 0; i < label.length; i++) {
        let position = label[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            label[i].style.opacity = "1";
            label[i].style.transform = "translateY(0)";
        }
    }
});