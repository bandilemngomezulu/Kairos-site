document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector("nav");
    if (navElement) {
        const navUl = navElement.querySelector("ul");
        const menuToggle = document.createElement("button");
        menuToggle.textContent = "Menu";
        menuToggle.className = "menu-toggle-btn";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Toggle navigation menu");
        
        navElement.insertBefore(menuToggle, navUl);
        
        if (window.innerWidth <= 480) {
            navUl.classList.add("nav-hidden");
        }

        menuToggle.addEventListener("click", () => {
            navUl.classList.toggle("nav-hidden");
            const isExpanded = !navUl.classList.contains("nav-hidden");
            menuToggle.setAttribute("aria-expanded", isExpanded);
            menuToggle.textContent = isExpanded ? "Close Menu" : "Menu";
        });
    }

    const enquiryForm = document.querySelector("main form");
    if (enquiryForm && enquiryForm.querySelector("#item")) {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.id = "formFeedback";
        feedbackDiv.className = "form-feedback-msg";
        enquiryForm.appendChild(feedbackDiv);

        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = enquiryForm.querySelector("#name").value.trim();
            const email = enquiryForm.querySelector("#email").value.trim();
            const quantity = enquiryForm.querySelector("#quantity").value;

            if (!name || !email) {
                showFeedback(feedbackDiv, "Please fill in all required fields (Name and Email).", "error");
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(feedbackDiv, "Please enter a valid email address format.", "error");
                return;
            }

            if (quantity < 1) {
                showFeedback(feedbackDiv, "Quantity must be at least 1.", "error");
                return;
            }

            showFeedback(feedbackDiv, "Thank you! Your product enquiry has been successfully submitted.", "success");
            enquiryForm.reset();
        });
    }

    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.id = "contactFeedback";
        feedbackDiv.className = "form-feedback-msg";
        contactForm.appendChild(feedbackDiv);

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = contactForm.querySelector("#name").value.trim();
            const email = contactForm.querySelector("#email").value.trim();
            const message = contactForm.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                showFeedback(feedbackDiv, "Please fill in all required fields (Name, Email, and Message).", "error");
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(feedbackDiv, "Please enter a valid email address.", "error");
                return;
            }

            showFeedback(feedbackDiv, "Thank you for reaching out! Your message has been sent to the Kairos team.", "success");
            contactForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showFeedback(element, message, type) {
        element.textContent = message;
        element.style.display = "block";
        element.style.marginTop = "1rem";
        element.style.fontWeight = "bold";
        element.style.color = type === "error" ? "#ff6b6b" : "#a89c85";
    }
});
