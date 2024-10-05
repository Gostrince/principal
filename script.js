document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        successMessage.classList.remove('hidden');
        form.reset();
    });
});