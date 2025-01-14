// Función para mostrar los detalles de una moto
function showDetails(item) {
    const modal = document.getElementById('detailsModal');
    const modelTitle = document.getElementById('modelTitle');
    const modelDescription = document.getElementById('modelDescription');
  
    // Obtener datos del elemento seleccionado
    const model = item.getAttribute('data-model');
    const description = item.getAttribute('data-description');
  
    // Actualizar el contenido del modal
    modelTitle.textContent = model;
    modelDescription.textContent = description;
  
    // Mostrar el modal
    modal.classList.remove('hidden');
  }
  
  // Función para cerrar el modal
  function closeDetails() {
    const modal = document.getElementById('detailsModal');
    modal.classList.add('hidden');
  }
  
  // Función para manejar la compra
  function buyProduct() {
    const whatsappUrl = "https://wa.me/+15392517710?text=Hola,%20estoy%20interesado%20en%20este%20producto.%20Por%20favor%20contáctenme.";
    alert("Para comprar este producto, te pondremos en contacto con nuestro gestor de ventas.");
    window.open(whatsappUrl, "_blank");
  }
    