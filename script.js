document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-btn');

    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault();
        const whatsappNumber = '56953077043';
        const whatsappURL = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappURL, '_blank');
    });

    // Código del carrusel
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none'; // Solo la imagen activa se muestra
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

    // Inicializa el carrusel mostrando la primera imagen
    showImage(currentIndex);

    // Cambio automático cada 5 segundos
    setInterval(nextImage, 5000);
});


