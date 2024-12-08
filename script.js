// Abrir el modal al hacer clic en el botón "Comprar"
document.querySelectorAll('.btn-show-modal').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product'); // Obtener el nombre del producto
        const modal = document.getElementById('thank-you-modal');
        const modalTitle = modal.querySelector('h2');

        // Personalizar el título del modal
        modalTitle.textContent = `¡Gracias por seleccionar ${productName}!`;

        modal.style.display = 'flex'; // Mostrar el modal
    });
});
document.querySelectorAll('.btn-show-modal').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        document.getElementById('product-name').value = productName; // Set product name
        document.getElementById('thank-you-modal').style.display = 'flex';
    });
});


// Validar el formulario y habilitar el botón "Confirmar"
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const confirmButton = document.getElementById('confirm-button');

function validateForm() {
    if (nameInput.value.trim() !== '' && lastnameInput.value.trim() !== '') {
        confirmButton.disabled = false;
        confirmButton.classList.add('active');
    } else {
        confirmButton.disabled = true;
        confirmButton.classList.remove('active');
    }
}

nameInput.addEventListener('input', validateForm);
lastnameInput.addEventListener('input', validateForm);

//envio formulario a whatsapp

document.getElementById('thank-you-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío estándar del formulario

    const product = document.getElementById('product-name').value;
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();

    // Formatea el mensaje de WhatsApp
    const message = `Hola, he seleccionado el siguiente regalo: ${product}. Mi nombre es ${name} ${lastname}.`;
    const phoneNumber = '3758555378'; // Reemplaza con el número de WhatsApp

    // Redirige al enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Abre el enlace en una nueva pestaña

    // Opcional: Cerrar el modal y limpiar el formulario
    document.getElementById('thank-you-modal').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
});


