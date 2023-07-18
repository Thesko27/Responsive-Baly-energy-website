/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
/*=============== SHOW MENU ===============*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
/*=============== MENU HIDDEN ===============*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each menu item, we remove the show-menu class and close the

    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== GSAP ANIMATION ===============*/
TweenMax.from(".home__title", 1, {
    dalay: 0.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__description", 1, {
    dalay: 0.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__button", 1, {
    dalay: 0.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__liquid", 1, {
    dalay: 0.7,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__juice-animate", 1, {
    dalay: 1.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__apple1", 1, {
    dalay: 1.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__apple2", 2, {
    dalay: 1.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(1)", 2, {
    dalay: 1.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(2)", 2, {
    dalay: 1.4,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(3)", 2, {
    dalay: 1.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(4)", 2, {
    dalay: 1.6,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(5)", 2, {
    dalay: 1.7,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
TweenMax.from(".home__leaf:nth-child(6)", 2, {
    dalay: 1.8,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut,
});
