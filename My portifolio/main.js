document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".overlay");

    // Toggle menu when clicking the hamburger
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Close menu when clicking on the overlay
    overlay.addEventListener("click", function () {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
        overlay.classList.remove("active");
    });
});
