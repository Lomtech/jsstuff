document.addEventListener('DOMContentLoaded', function() {
    //Navigationslinks hervorheben
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(nav) {
                nav.classList.remove('active');
            });
            link.classList.add('active');
        });
        link.addEventListener('mouseover', function () {
            link.style.transform = 'scale(1.2)';
            link.style.transition = 'transform 0.3s ease';
        });
        link.addEventListener('mouseout', function () {
            link.style.transform = 'scale(1)';
        });
    });

    //Bild Hover-Effect
    const profileImage = document.querySelector('.profile-picture img');
    profileImage.addEventListener('mouseover', function () {
        profileImage.style.transform = 'scale(1.1)';
        profileImage.style.transition = 'transform 0.3s ease';
    });
    profileImage.addEventListener('mouseout', function () {
        profileImage.style.transform = 'scale(1)';
    });

    // Smooth Scrolling für Links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.get
        });
    });
});