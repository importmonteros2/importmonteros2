// Redirige al catálogo
document.getElementById("catalogButton").addEventListener("click", function () {
  window.location.href = "./catalogo/index.html"; // Cambia la URL al enlace de tu catálogo.
});
  
// Referencias a los elementos
const aboutLink = document.getElementById('Nosotros'); // Enlace de "Nosotros"
const aboutModal = document.getElementById('aboutModal'); // Modal
const closeModal = document.querySelector('.close'); // Botón de cerrar

// Evitar el comportamiento predeterminado del enlace y mostrar el modal
aboutLink.addEventListener('click', (e) => {
  e.preventDefault(); // Evita que el enlace recargue la página
  aboutModal.style.display = 'flex'; // Muestra el modal
});

// Cerrar el modal al presionar la "X"
closeModal.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});
