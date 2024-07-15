// contact form JS...........................................................................

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform the AJAX request
    var formData = new FormData(this);

    fetch("contact_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        if (result.includes("New record created successfully")) {
            // Show the success modal
            var modal = document.getElementById("successModal");
            modal.style.display = "block";

            // Clear form fields after submission
            document.getElementById("contactForm").reset();
        } else {
            alert("Error: " + result);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

// Handle modal close and OK button
var modal = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];
var okButton = document.getElementById("modalOkButton");

span.onclick = function() {
    modal.style.display = "none";
}

okButton.onclick = function() {
    modal.style.display = "none";
}


// contact form JS end...........................................................................


// typing JS....................................................

var typed = new Typed(".typing",{
    strings:["Web Developer","UI/UX Designer","App Developer","Software Developer","Grafic Designer","Youtuber"],
    typeSpeed:100,
    BackSpeed:15,
    loop:true
});


/*.........................ScrollReveal...........*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/*.........................toggle menu...........*/

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
        });
    });
});


