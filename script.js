document.addEventListener("DOMContentLoaded", function () {
    // Add 'loaded' class to body when page is ready
    document.body.classList.add("loaded");

    // Button click event (Ensure only relevant buttons trigger animation)
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".top")?.classList.toggle("up");
            document.querySelector(".bottom")?.classList.toggle("down");
            this.classList.toggle("left");

            setTimeout(() => {
                window.location.href = "mainpage.html"; // Redirect after animation
            }, 600); // Ensure delay matches CSS animation
        });
    });

    // Change navigation link colors on hover
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => link.style.color = "#ff5733");
        link.addEventListener("mouseout", () => link.style.color = "white");
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn("Smooth Scroll: Target not found ->", this.getAttribute("href"));
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.navbar__links[href="#jointheaura"]').addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      window.location.href = "join.html"; // Redirects to the new page
    });
  });
  
  // Login Function
function login() {
    let userId = document.getElementById("userid").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!userId || !password) {
        alert("Please enter both User ID and Password!");
        return;
    }

    // Simulate login validation (Replace with actual authentication later)
    if (userId === "testuser" && password === "password123") {
        alert("Login Successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid credentials. Try again!");
    }
}

// Register Function
function register() {
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let userId = document.getElementById("userid").value.trim();
    let password = document.getElementById("password").value.trim();
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let bloodGroup = document.getElementById("bloodgroup").value;

    // Basic validation
    if (!fullName || !email || !phone || !userId || !password || !gender || !dob || !bloodGroup) {
        alert("Please fill all required details!");
        return;
    }

    alert("Registration Successful! Redirecting to Login...");
    window.location.href = "login.html"; // Redirect to login page
}

// Function to highlight input fields on focus
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input, select");

    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.border = "2px solid #007bff";
        });
        input.addEventListener("blur", () => {
            input.style.border = "1px solid #ccc";
        });
    });
});