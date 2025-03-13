const products = [
  // BICIMOTOS
  { id: 1, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo1.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 2, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo2.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 3, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo3.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 4, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo4.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 5, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo5.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 6, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo6.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 7, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo7.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  { id: 8, name: "BICIMOTO GRILLO - Precio: 820USD", image: "img/biciMotos/photo8.jpg", description: "Potente motor: 500W, Tipo de batería lithium, Voltaje: 48V / 28 AH, Tiempo de carga: 4 a 6 horas, Recorrido por carga de 40km, 3 velocidades, Amortiguadores traseros de gas con adhesivo, Velocímetro digital, Canasta, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 90 / 90-14 para delantero y trasero, Accesorios: Alarma, Uso, Full Luces Led, Bluetooth, Mp3, Radio" },
  

  // MOTORINAS 
  { id: 9, name: "MISHOZUKI NEW BUHO-2 - Precio: 1700USD", image: "img/motorinas/photo1.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 35A, Tipo de batería lithium PO4, Capacidad de batería: 72V 40A PO4, 4 Velocidades / Reversa, Recorrido por carga de 100km, Tiempo de carga de batería 4 hrs, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de llanta 120/80R12, Accesorios alarma, uso, full luces Led, mp3, bluetooth, radio" },
  { id: 10, name: "MISHOZUKI NEW BUHO-2 - Precio: 1700USD", image: "img/motorinas/photo2.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 35A, Tipo de batería lithium PO4, Capacidad de batería: 72V 40A PO4, 4 Velocidades / Reversa, Recorrido por carga de 100km, Tiempo de carga de batería 4 hrs, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de llanta 120/80R12, Accesorios alarma, uso, full luces Led, mp3, bluetooth, radio" },
  { id: 11, name: "MISHOZUKI NEW BUHO-2 - Precio: 1700USD", image: "img/motorinas/photo3.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 35A, Tipo de batería lithium PO4, Capacidad de batería: 72V 40A PO4, 4 Velocidades / Reversa, Recorrido por carga de 100km, Tiempo de carga de batería 4 hrs, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de llanta 120/80R12, Accesorios alarma, uso, full luces Led, mp3, bluetooth, radio" },
  { id: 12, name: "MISHOZUKI NEW BUHO-2 - Precio: 1700USD", image: "img/motorinas/photo4.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 35A, Tipo de batería lithium PO4, Capacidad de batería: 72V 40A PO4, 4 Velocidades / Reversa, Recorrido por carga de 100km, Tiempo de carga de batería 4 hrs, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de llanta 120/80R12, Accesorios alarma, uso, full luces Led, mp3, bluetooth, radio" },

  { id: 13, name: "MURASAKI - Precio: 2100USD", image: "img/motorinas/photo5.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 50A, Tipo de batería lithium ION, Capacidad de batería - 1 batería /72V 45AH, 5 velocidades, Amortiguadores de gas, Recorrido por carga de 150km, Tiempo de carga de batería 4 horas, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 140/60/13-130/60/13, Accesorios: Alarma, Uso, Full Luces" },
  { id: 14, name: "MURASAKI - Precio: 2100USD", image: "img/motorinas/photo6.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 50A, Tipo de batería lithium ION, Capacidad de batería - 1 batería /72V 45AH, 5 velocidades, Amortiguadores de gas, Recorrido por carga de 150km, Tiempo de carga de batería 4 horas, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 140/60/13-130/60/13, Accesorios: Alarma, Uso, Full Luces" },
  { id: 15, name: "MURASAKI - Precio: 2100USD", image: "img/motorinas/photo7.jpg", description: "Motor power 1000W, Motor voltaje 72V, Controlador 50A, Tipo de batería lithium ION, Capacidad de batería - 1 batería /72V 45AH, 5 velocidades, Amortiguadores de gas, Recorrido por carga de 150km, Tiempo de carga de batería 4 horas, Velocímetro digital, Sistema de frenos delantero de disco y trasero de disco, Medida de Llanta: 140/60/13-130/60/13, Accesorios: Alarma, Uso, Full Luces" },

  { id: 16, name: "MISHOZUKI NEW BIGI - Precio: 1900USD", image: "img/motorinas/photo8.jpg", description: "Motor power 1000W , Motor voltaje 72V , Controlador 45A , Tipo de batería lithium ION , Capacidad de batería - 1 batería / 72V 45AH , 5 velocidades , Muffler , Amortiguadores de gas , Recorrido por carga de 120km-150km , Tiempo de carga de batería 4 horas , Velocímetro digital , Sistema de frenos delantero de disco y trasero de disco , Medida de Llanta: 130/60/13 , Accesorios: Alarma, Usb, Full Luces" },
  { id: 17, name: "MISHOZUKI NEW BIGI - Precio: 1900USD", image: "img/motorinas/photo9.jpg", description: "Motor power 1000W , Motor voltaje 72V , Controlador 45A , Tipo de batería lithium ION , Capacidad de batería - 1 batería / 72V 45AH , 5 velocidades , Muffler , Amortiguadores de gas , Recorrido por carga de 120km-150km , Tiempo de carga de batería 4 horas , Velocímetro digital , Sistema de frenos delantero de disco y trasero de disco , Medida de Llanta: 130/60/13 , Accesorios: Alarma, Usb, Full Luces" },
  { id: 18, name: "MISHOZUKI NEW BIGI - Precio: 1900USD", image: "img/motorinas/photo10.jpg", description: "Motor power 1000W , Motor voltaje 72V , Controlador 45A , Tipo de batería lithium ION , Capacidad de batería - 1 batería / 72V 45AH , 5 velocidades , Muffler , Amortiguadores de gas , Recorrido por carga de 120km-150km , Tiempo de carga de batería 4 horas , Velocímetro digital , Sistema de frenos delantero de disco y trasero de disco , Medida de Llanta: 130/60/13 , Accesorios: Alarma, Usb, Full Luces" },

  //TRICICLOS:
  { id: 19, name: "Triciclo Electrico-Precio: 2800USD", image: "img/triciculos/photo1.jpg", description: "Motor: 60V 1500W con amplificador, Controlador: 60V/72V/ 1.5-2Kw, 36, Tubos: Rueda (delantero/trasero)4.50-12, Dimensión global: L3470*W1280*H1470mm, Caja de carga: L2000xW1200×H330mm, distancia entre ejes: 2245mm, Marca hecha por las ruedas: 1050 mm, Suspensión trasera: 5 uds, 13,4 kg, Cantidad de carga/40'HC, MOQ: 35 juegos (TENSOR DE RANGO INCLUIDO)" },
  { id: 20, name: "Triciclo Electrico-Precio: 2800USD", image: "img/triciculos/photo2.jpg", description: "Motor: 60V 1500W con amplificador, Controlador: 60V/72V/ 1.5-2Kw, 36, Tubos: Rueda (delantero/trasero)4.50-12, Dimensión global: L3470*W1280*H1470mm, Caja de carga: L2000xW1200×H330mm, distancia entre ejes: 2245mm, Marca hecha por las ruedas: 1050 mm, Suspensión trasera: 5 uds, 13,4 kg, Cantidad de carga/40'HC, MOQ: 35 juegos (TENSOR DE RANGO INCLUIDO)" },
  { id: 21, name: "Triciclo Electrico-Precio: 2800USD", image: "img/triciculos/photo3.jpg", description: "Motor: 60V 1500W con amplificador, Controlador: 60V/72V/ 1.5-2Kw, 36, Tubos: Rueda (delantero/trasero)4.50-12, Dimensión global: L3470*W1280*H1470mm, Caja de carga: L2000xW1200×H330mm, distancia entre ejes: 2245mm, Marca hecha por las ruedas: 1050 mm, Suspensión trasera: 5 uds, 13,4 kg, Cantidad de carga/40'HC, MOQ: 35 juegos (TENSOR DE RANGO INCLUIDO)" },

  { id: 22, name: "Triciclo Electrico YONLONG-Precio: 3100USD", image: "img/triciculos/photo4.jpg", description: "Velocidad máxima (km/h):45 km/h, Tamaño del neumático: Frente: 130/60-13 - trasero: 135/70-12-12, Capacidad de la batería: 60V 58-80Ah, Asientos: 2, Tiempo de carga (h): 7-9h, Peso: 200-300kg, Autonomía: 80km, Motor: 60V 1500W" },
  { id: 23, name: "Triciclo Electrico YONLONG-Precio: 3100USD", image: "img/triciculos/photo5.jpg", description: "Velocidad máxima (km/h):45 km/h, Tamaño del neumático: Frente: 130/60-13 - trasero: 135/70-12-12, Capacidad de la batería: 60V 58-80Ah, Asientos: 2, Tiempo de carga (h): 7-9h, Peso: 200-300kg, Autonomía: 80km, Motor: 60V 1500W" },
  { id: 24, name: "Triciclo Electrico YONLONG-Precio: 3100USD", image: "img/triciculos/photo6.jpg", description: "Velocidad máxima (km/h):45 km/h, Tamaño del neumático: Frente: 130/60-13 - trasero: 135/70-12-12, Capacidad de la batería: 60V 58-80Ah, Asientos: 2, Tiempo de carga (h): 7-9h, Peso: 200-300kg, Autonomía: 80km, Motor: 60V 1500W" },
  { id: 25, name: "Triciclo Electrico YONLONG-Precio: 3100USD", image: "img/triciculos/photo7.jpg", description: "Velocidad máxima (km/h):45 km/h, Tamaño del neumático: Frente: 130/60-13 - trasero: 135/70-12-12, Capacidad de la batería: 60V 58-80Ah, Asientos: 2, Tiempo de carga (h): 7-9h, Peso: 200-300kg, Autonomía: 80km, Motor: 60V 1500W" },
  
  { id: 26, name: "ONEBOT X1-Precio: 3100USD", image: "img/triciculos/photo8.jpg", description: "El vehículo ONEBOT Xl tiene capacidad para 3 personas (incluido el conductor) con una carga máxima de 300 kg, controlador Votol EM-70, Motor sin escobillas 60V 1000W, batería de plomo de gran capacidad 72V52AH y mayor autonomía de hasta 65KM, neumático trasero ancho 135/70R-12, conducción segura y estable. Contenido del producto: triciclo x1, cargador de 60V x1, mando a distancia x2, llave x2, manual de usuario xl, batería de plomo 12V52AH x5, espejo retrovisor izquierdo xi, espejo retrovisor derecho x1." },
  
  { id: 27, name: "Triciclo Electrico RALY-Precio: 3300USD", image: "img/triciculos/photo9.jpg", description: "Triciclo eléctrico para 4 pasajeros, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },
  { id: 28, name: "Triciclo Electrico RALY-Precio: 3300USD", image: "img/triciculos/photo10.jpg", description: "Triciclo eléctrico para 4 pasajeros, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },

  { id: 28, name: "Triciclo Electrico RALY-Precio: 3500USD", image: "img/triciculos/photo11.jpg", description: "Triciclo eléctrico para 4 pasajeros, más base de carga, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },
  { id: 28, name: "Triciclo Electrico RALY-Precio: 3200USD", image: "img/triciculos/photo12.jpg", description: "Triciclo eléctrico para 2 pasajeros, más base de carga, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },
  { id: 28, name: "Triciclo Electrico RALY-Precio: 3500USD", image: "img/triciculos/photo13.jpg", description: "Triciclo eléctrico para 4 pasajeros, más base de carga, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },
  { id: 28, name: "Triciclo Electrico RALY-Precio: 3500USD", image: "img/triciculos/photo14.jpg", description: "Triciclo eléctrico para 4 pasajeros, más base de carga, cerrado, batería gel 60 V, 100 Ah, 1500 W. Autonomía en marcha 60 km, velocidad de desplazamiento 40 km/h máximo. La tienda virtual llamará al Beneficiario para orientarle el día en que se realizará la entrega de la Factura Comercial y el Certificado de Propiedad y Garantía en la tienda y hora de la entrega. La foto del producto es una referencia, el color puede variar." },
];

  // Mostrar productos
const productGallery = document.getElementById("product-gallery");

products.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    // Agregar el nombre del producto debajo de la imagen
    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    // Agregar la imagen y el nombre al contenedor
    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);

    // Evento de clic para mostrar el modal
    productImage.onclick = () => {
        showProductModal(product);
    };

    productGallery.appendChild(productContainer);
});


// Mostrar modal con la información del producto
function showProductModal(product) {
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-modal").classList.remove("hidden");
}

// Cerrar el modal
function closeModal() {
  document.getElementById("product-modal").classList.add("hidden");
}

// Mostrar el formulario de compra
function addToCart() {
  document.getElementById("product-modal").classList.add("hidden");
  const orderForm = document.getElementById("order-form");
  orderForm.style.visibility = 'visible';  // Cambia esto
  orderForm.style.opacity = '1';           // Cambia esto
}

// Función para cerrar el formulario
function closeForm() {
  const orderForm = document.getElementById("order-form");
  orderForm.style.visibility = 'hidden';  // Oculta el formulario
  orderForm.style.opacity = '0';           // Hace desaparecer el formulario con transición
}

// Redirigir a WhatsApp con el mensaje
document.getElementById("buy-form").onsubmit = function (e) {
  e.preventDefault(); // Evitar la recarga de la página
  
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const productImage = document.getElementById("product-image").src; // Obtener la URL de la imagen del producto

    // Crear el mensaje personalizado con el enlace a la imagen
    const message = `Hola, soy ${name} ${surname} y me interesa comprar una moto eléctrica. Moto ${productImage}`;

    // URL de WhatsApp con tu número (reemplaza <tu_numero> con tu número real)
    const whatsappUrl = `https://wa.me/+15392517710?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp
    window.location.href = whatsappUrl;
};
