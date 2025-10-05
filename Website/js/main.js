// main.js
// This script contains JavaScript used on multiple pages:
// 1. Contact form validation
// 2. Image pop-up (modal preview)

(function () {
    'use strict';

    // ========== CONTACT FORM VALIDATION ==========
    // This section applies to contact.html
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');

    if (form) {
        form.addEventListener('submit', function (event) {
            // Prevent normal form submission
            event.preventDefault();

            // If the form is invalid, show Bootstrap validation feedback
            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            // If valid, show success message and reset the form
            alertBox.classList.remove('d-none');
            alertBox.focus();
            form.reset();
            form.classList.remove('was-validated');
        }, false);
    }

    // ========== IMAGE POP-UP FEATURE ==========
    // This section applies to deals.html
    // When a user clicks on an image with the class 'popup-image',
    // a larger version is shown inside a Bootstrap modal.

    const popupImages = document.querySelectorAll('.popup-image');
    const modalImage = document.getElementById('popupModalImage');

    popupImages.forEach(img => {
        img.addEventListener('click', () => {
            // Set modal image source to the clicked image source
            modalImage.src = img.src;

            // Find and show the modal using Bootstrap's JS API
            const modal = new bootstrap.Modal(document.getElementById('popupModal'));
            modal.show();
        });
    });
})();
