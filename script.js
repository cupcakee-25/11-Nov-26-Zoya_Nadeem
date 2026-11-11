
function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});

document.getElementById("contactForm")
    .addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("formMessage").textContent =
            "Thank you! Your message has been received.";

        this.reset();
    });
