/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.05)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ==========================================
   SIMPLE REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .process-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});