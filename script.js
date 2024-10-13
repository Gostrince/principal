document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-btn');

    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const whatsappNumber = '56953077043';
        const whatsappURL = `https://wa.me/${whatsappNumber}`;

        window.open(whatsappURL, '_blank'); // Redirigir a WhatsApp
    });
});
