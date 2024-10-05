document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        successMessage.classList.remove('hidden'); // Muestra el mensaje de éxito
        form.reset(); // Resetea el formulario
    });
});
