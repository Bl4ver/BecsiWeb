document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.querySelector(".navbar"); // Az új CSS osztályra hivatkozunk
    let lastScrollY = window.scrollY;

    // 1. Hamburger menü kezelése (Mobil nézet)
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 2. Intelligens navigációs sáv (Görgetés kezelése)
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            navbar.style.transform = "translateY(-100%)";
            if (navLinks) navLinks.classList.remove("active");
        } else {
            navbar.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY;
    });
});