document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

let lastScrollY = 0;
document.addEventListener("scroll", () => {
    const navbar = document.getElementById("nav-bar");
    const currentScrollY = window.pageYOffset;
    
    if (currentScrollY > lastScrollY) {
        navbar.style.position = "static";
    } else {
        navbar.style.position = "fixed";
    }
    
    lastScrollY = currentScrollY;
});