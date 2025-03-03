


// typing JS....................................................

var typed = new Typed(".typing",{
    strings:["","UI/UX Designer","Front-End Developer","UX Researcher","Grafic Designer","Visual Designer","Youtuber"],
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

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', {origin: 'bottom'});
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


