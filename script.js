document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // Crear el mensaje para WhatsApp
        const whatsappMessage = `Hola, mi nombre es ${name}. Quisiera saber lo siguiente: ${message}.`;
        
        // Reemplaza con tu número de WhatsApp (en formato internacional, sin signos + o -)
        const whatsappNumber = "56953077043";
        
        // Generar la URL de WhatsApp con el mensaje
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirigir a la URL de WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Opcional: Resetea el formulario después de enviar el mensaje
        form.reset();
    });
});
