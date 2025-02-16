function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
    const texts = ["Python Programmer", "Data Analyst with python", "Web Developer"];
    let index = 0;

    function changeText() {
        index = (index + 1) % texts.length;
        document.getElementById("changingText").textContent = texts[index];
    }

    setInterval(changeText, 2000); // Change text every 2 seconds


    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".skill-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width") + "%";
        });
    });