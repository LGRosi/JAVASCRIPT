'use strict';

/*
 *	Rosi, Lucas Gonzalo
 */


const aCarrito = [];
const divDeLosProductos = document.getElementById('productos');
let contadorDelProducto = 0;


const aProductos = [
    {
        id: 0,
        imagen: 'imagenes/Bateria.jpg',
        producto: 'Batería Yamaha',
        detalle: 'Esta batería incluye el set de hardware HW680W de Yamaha y sujeciones de toms. Los cascos están fabricados en láminas de álamo de 6 capas. Modelo de aro: Triple borde - Material de aro: Acero - Grosor de aro: 1.5mm - Agarraderas: Separadas - Madera Cascos: Álamo - Parche superior: S-Side - Parche inferior: Clear - Parche frontal: Ebony w/ring mute + Logo Yamaha - Superior redoblante: Coated.',
        precio: 59408,
    },
    {
        id: 1,
        imagen: 'imagenes/Guitarra electrica.jpg',
        producto: 'Guitarra eléctrica',
        detalle: 'Combo Guitarra Eléctrica + Amplificador 10w + Accesorios. Incluye: (Guitarra eléctrica - Amplificador de 10 Watts - Correa - Funda - Cable - Palanca - Púas. Características de la guitarra: Cuerpo de tilo - Diapasón de rosewood - Mástil de maple - 21 trastes de alpaca - Clavijas diecast cromadas - Cejuela de hueso sintético - Puente cromado con palanca de trémolo - 3 micrófonos de bobina simple - Cuerdas .009).',
        precio: 18250,
    },
    {
        id: 2,
        imagen: 'imagenes/Saxo.jpg',
        producto: 'Saxofón Alto',
        detalle: 'Ocean Saxo Alto Oas190. Saxo alto. Boquilla genérica de buena calidad apropiada para el primer tiempo de estudio, afinada sonido centrado y con facilidad de emisión. Incluye estuche, guante y boquilla. Marca: Ocean - Modelo: OAS190 - Tipo de saxofón: Alto - Dureza de las cañas: 2 - Estuche: Sí - Altura: 75 cm.',
        precio: 45362,
    },
    {
        id: 3,
        imagen: 'imagenes/Bajo.jpg',
        producto: 'Bajo eléctrico',
        detalle: 'Combo Bajo Eletrico + Amplificador + Accesorios Envío Gratis. Descripción del producto: Bajo Kansas - Modelo: EGPPB10 BKAN - de 4 cuerdas - 22 trastes - Colores disponibles: Negro / Azul y Bordó - Afinador cromatico led , clip ,digital - Puas x 3 unidades - Amplificador kansas 10 watts - Cable de guitarra plug a plug - Funda de bajo , con cierres y correa.',
        precio: 24599,
    },
    {
        id: 4,
        imagen: 'imagenes/Sintetizador.png',
        producto: 'Sintetizador',
        detalle: 'Novation Mininova 37 Teclas Sintetizador Con Vocoder. Motores de sonido y efectos extremadamente potentes del emblemático sintetizador UltraNova. Nueva característica VocalTune con vocoder y micrófono con flexo. Arpegiador con edición de ejecución de ritmo en tiempo real. Función Animate para modificar y moldear el sonido mientras se toca. 256 patches de sonido de fábrica incluídos y espacio para otros 128 patches de sonido del usuario. Teclado sintetizador de 37 mini teclas. Polifonía de hasta 18 voces. Mono-timbre. 256 Presets. 5 Efectos por Parche. VocalTune con vocoder y micrófono con flexo. Vocoder de doce bandas. Arpegiador con edición de ejecución de ritmo en tiempo real. Función Animate para modificar y moldear el sonido mientras se toca.',
        precio: 58680,
    },
    {
        id: 5,
        imagen: 'imagenes/Guitarra.jpg',
        producto: 'Guitarra acústica',
        detalle: 'Guitarra Electroacústica Fender Cc-140sce Con Estuche Rígido. La CC-140SCE amplía las características de su hermana con la electrónica mejorada Fishman® Presys, la parte posterior y los lados de palisandro y la adición de un estuche rígido. El cuerpo del tamaño de un solo corte y la tapa de pícea maciza proporcionan una voz articulada, y el mástil fácil de tocar es cómodo para todos los estilos. Complementado con un pickguard carey, la CC-140SCE está lista para lo que sea que le arrojes, ya sea en casa o en el escenario.',
        precio: 67858,
    },
];

//Recorrida del carrito de compras:
for (let i = 0; i < aProductos.length; i++) {  

    //Div de cada Producto:
    let mainDivProducto = document.createElement('div');

    //Imagen:
    let imgDelProducto = document.createElement('img');
    imgDelProducto.src = aProductos[i].imagen;
    imgDelProducto.className = 'imgDelproducto';
    imgDelProducto.alt = aProductos[i].producto;

    imgDelProducto.onclick = function () {
        verElModal(aProductos[i]);
    }

    mainDivProducto.appendChild(imgDelProducto);

    //Producto:
    let h3DelProducto = document.createElement('h3');
    h3DelProducto.innerHTML = aProductos[i].producto;
    mainDivProducto.appendChild(h3DelProducto);

    //Precio:
    let pPrecio = document.createElement('p');
    pPrecio.innerHTML = '$ ' + aProductos[i].precio;
    mainDivProducto.appendChild(pPrecio);

    //Botón de la compra:
    let botonDeLaCompra = document.createElement('button');
    mainDivProducto.appendChild(botonDeLaCompra);
    botonDeLaCompra.innerHTML = 'Comprar instrumento';

    botonDeLaCompra.onclick = function () {
        agregarElProducto(aProductos[i].id)
    }

    divDeLosProductos.appendChild(mainDivProducto);
}

//Agregar producto al carrito:
function agregarElProducto(id) {
    aCarrito.push(aProductos[id]);
    let idDelCarrito = document.querySelector('#minicarrito'); 
    idDelCarrito.firstElementChild.firstElementChild.innerHTML = aCarrito.length;
    idDelCarrito.children[1].children[0].innerHTML = obtenerElTotal();
}


//La suma total del producto:
function obtenerElTotal () {
    let precio = 0;
    for (let i = 0; i < aCarrito.length; i++) {
        precio += aCarrito[i].precio;
    }
    return precio;
}


function verElModal(producto) {


    //div principal del modal:
    let divDelModal = document.createElement('div');
    divDelModal.className = 'modal';
    divDelModal.id = 'modalProducto';

    let imgDelProducto = document.createElement('img');
    imgDelProducto.src = producto.imagen;
    imgDelProducto.alt = producto.producto;
    imgDelProducto.className = 'imgDelProducto';

    imgDelProducto.onclick = function () {
        verElModal(producto);
    }

    divDelModal.appendChild(imgDelProducto);

    //Producto:
    let h3DelProducto = document.createElement('h3');
    h3DelProducto.innerHTML = producto.producto;
    divDelModal.appendChild(h3DelProducto);

    //Precio:
    let pPrecio = document.createElement('p');
    pPrecio.innerHTML = '$ ' + producto.precio;
    divDelModal.appendChild(pPrecio);
    let pAclaracion = document.createElement('p');
    pAclaracion.innerHTML = producto.detalle;
    divDelModal.appendChild(pAclaracion);

    //Botón de la compra:
    let botonDeLaCompra = document.createElement('button');
    divDelModal.appendChild(botonDeLaCompra);
    botonDeLaCompra.innerHTML = 'Agregar';

    botonDeLaCompra.onclick = function () {
        agregarElProducto(producto.id);
        contadorDelProducto ++;
    }

    // X para cerrar:
    let aX = document.createElement('a');
    aX.href = 'javascript:void(0)';
    aX.innerHTML = 'X';

    aX.onclick = function () {
        divDelModal.remove();
    }

    divDelModal.appendChild(aX);
    let body = document.querySelector('body');
    body.appendChild(divDelModal);
    
}


    document.querySelector('#minicarrito').lastElementChild.onclick = function () {
        mostrarElCarrito();
    }


function mostrarElCarrito () {

    let modalDivCarrito = document.createElement('div');
    modalDivCarrito.className = 'modal';
    modalDivCarrito.id = 'modalProducto';
    let aX = document.createElement('a');
    aX.href = 'javascript:void(0)';
    aX.innerHTML = 'X';

    aX.onclick = function () {
        modalDivCarrito.remove();
    }


    for (let i = 0; i < aCarrito.length ; i++) {

        let productoDelUl = document.createElement('ul');
        let productoDelLi = document.createElement('li');
        let precioDelSpan = document.createElement('span');
        let span = document.createElement('span');
        let sacarSpan = document.createElement('span');
        productoDelLi.innerHTML = 'Producto';
        precioDelSpan.innerHTML = '$ ' + aCarrito[i].precio;
        modalDivCarrito.appendChild(productoDelUl);
        productoDelUl.appendChild(productoDelLi);
        productoDelLi.appendChild(precioDelSpan);
        productoDelLi.appendChild(span);
        productoDelLi.appendChild(sacarSpan);

        sacarSpan.innerHTML = 'Quitar del carrito';

    }



    modalDivCarrito.appendChild(aX);

    let body = document.querySelector('body');

    body.appendChild(modalDivCarrito);
}







