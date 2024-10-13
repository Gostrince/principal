document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-btn'); // Seleccionar el ícono de WhatsApp

    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Número de WhatsApp (en formato internacional, sin signos + o -)
        const whatsappNumber = '56953077043';

        // Generar la URL de WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}`;

        // Redirigir a WhatsApp
        window.open(whatsappURL, '_blank');
    });
});
