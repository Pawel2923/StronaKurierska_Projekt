const h1 = document.querySelectorAll("main h1");
const h3 = document.querySelectorAll("main h3");
const p = document.querySelectorAll("main p");
const label = document.querySelectorAll("main label");
const image = document.querySelectorAll("main img")

window.addEventListener("scroll", function () {
    for (let i = 0; i < h1.length; i++) {
        let position = h1[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 100) {
            h1[i].style.animationName = "scrollAnim";
        }
    }

    for (let i = 0; i < p.length; i++) {
        let position = p[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 100) {
            p[i].style.animationName = "scrollAnim";
        }
    }

    for (let i = 0; i < h3.length; i++) {
        let position = h3[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 100) {
            h3[i].style.animationName = "scrollAnim";
        }
    }

    for (let i = 0; i < label.length; i++) {
        let position = label[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 100) {
            label[i].style.animationName = "scrollAnim";
        }
    }

    for (let i = 0; i < image.length; i++) {
        let position = image[i].getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 100) {
            image[i].style.animationName = "scrollAnim";
        }
    }
});