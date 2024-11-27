document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-btn');

    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const whatsappNumber = '56953077043';
        const whatsappURL = `https://wa.me/${whatsappNumber}`;

        window.open(whatsappURL, '_blank'); // Redirigir a WhatsApp
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Cambio automático cada 5 segundos
    setInterval(nextImage, 5000);
});

