// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Basic contact form handling
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill all required fields.";
            return;
        }

        // simple email check
        if (!email.includes("@")) {
            formStatus.textContent = "Please enter a valid email address.";
            return;
        }

        formStatus.textContent = "Opening your email app...";

        const subject = encodeURIComponent("Portfolio Contact from " + name);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Change this email to YOUR email
        window.location.href = `mailto:yourname@gmail.com?subject=${subject}&body=${body}`;
    });
}

console.log("Portfolio loaded successfully.");

