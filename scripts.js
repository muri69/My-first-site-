document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    // Funcționalitate pentru meniul hamburger
    hamburger.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });

    // Funcționalitate pentru link-uri cu scroll smooth
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            navUl.classList.remove('active'); // Închide meniul după click
        });
    });
});
