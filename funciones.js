const tablaSalchipapa       = document.getElementById('bodyTableSalchipapa');

const tablaHamburguesa      = document.getElementById('bodyTableHamburguesa');

const tablaperro            = document.getElementById('bodyTablePerros')

const tablaChoriqueta       = document.getElementById('bodyTableChoriqueta');

const tablaBurritos         = document.getElementById('bodyTableBurritos');

const tablaPincho           = document.getElementById('bodyTablePincho');

const tablaPromociones      = document.getElementById('bodyTablePromociones');

const tablaPostre           = document.getElementById('bodyTablePostres');

const tablaAcompañamiento   = document.getElementById('bodyTableAcompañamiento');

const tablaAdicionales      = document.getElementById('bodyTableAdicionales');

const tablaBebidas          = document.getElementById('bodyTableBebidas');

const bodyModal             = document.getElementById('exampleModal');

const btncarrtio            = document.getElementById('btn-carrito');

const miVideo = document.getElementById('miVideo');

const pausarVideoButton = document.getElementById('pausarVideo');



const arraySalchipapas =[
    {
        indice:'unos',
        name:'SALCHIPAPA RAFITA',
        descripcion:"170gr de papa en cascos, 100gr de salchicha tipo ranchera, huevo cocinado, 30gr de queso costeño y exclusivas salsas de la casa",
        precio: '$ 11.9',
        precioNum: 11900
        
    },
    {
        indice:'doss',
        name:'SALCHIPAPA LUCHITO' ,
        descripcion:'170gr de papa en cascos, 100gr de salchicha tipo ranchera, huevo cocinado, 30gr de queso costeño, 140gr de guiso de la casa a base de carne desmechada, pollo, tocineta, cebolla caramelizada y exclusivas salsas de la casa' ,
        precio:'$ 15.9' ,
        precioNum: 15900
    },
    {
        indice:'tress',
        name:'SALCHIPAPA RAFA' ,
        descripcion:'340gr de papa en cascos, 200gr de salchicha tipo ranchera, 2 huevo cocinados, 60gr de queso costeño y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'cuatros',
        name:'SALCHIPAPA LUCHO' ,
        descripcion:'340gr de papa en cascos, 200gr de salchicha tipo ranchera, 2 huevo cocinados, 60gr de queso costeño, 280gr de guiso de la casa a base de carne desmechada, pollo, tocineta, cebolla caramelizada y exclusivas salsas de la casa' ,
        precio:'$ 29.9' ,
        precioNum: 29900
    }
]

const arrayHamburguesas =[
    {
        indice:'uno',
        name:'RANCHERA',
        descripcion:"Carne de 125 gr, pan bimbo, queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa",
        precio: '$ 10.9',
        precioNum: 10900
    },
    {
        indice:'dos',
        name:'SUPER RANCHERA' ,
        descripcion:'Carne de 170 gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 12.9' ,
        precioNum: 12900
    },
    {
        indice:'tres',
        name:'POLLO RANCHERA' ,
        descripcion:'Pechuga 170gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 12.9' ,
        precioNum: 12900
    },
    {
        indice:'cuatro',
        name:'CERDO RANCHERA' ,
        descripcion:'Pernil de cerdo fino de 160gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 13.9' ,
        precioNum: 13900
    },
    {
        indice:'cinco',
        name:'MEGA RANCHERA' ,
        descripcion:'Carne de 125 gr, pan bimbo , chorizo campesino 100gr, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 16.9' ,
        precioNum: 16900
    },
    {
        indice:'seis',
        name:'MEGA SUPER' ,
        descripcion:'Carne de 170 gr. pan bimbo , chorizo campesino 100gr, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 18.9' ,
        precioNum: 18900
    },
    {
        indice:'siete',
        name:'MEGA POLLO' ,
        descripcion:'Pollo de 170 gr, pan bimbo , chorizo campesino 100gr, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 18.9' ,
        precioNum: 18900
    },
    {
        indice:'ocho',
        name:'MEGA CERDO' ,
        descripcion:'Pernil de cerdo fino de 160 gr, pan bimbo , chorizo campesino 100gr, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 19.9' ,
        precioNum: 19900
    },
    {
        indice:'nueve',
        name:'MAXI RANCHERA' ,
        descripcion:'Doble carne de 125 gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 18.9' ,
        precioNum: 18900
    },
    {
        indice:'diez',
        name:'MAXI CERDO' ,
        descripcion:'Pernil de cerdo de 180 gr, carne 125 gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,
        precioNum: 20900
    },
    {
        indice:'once',
        name:'MAXI POLLO' ,
        descripcion:'Pollo de 170 gr, carne 125 gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,
        precioNum: 20900
    },
    {
        indice:'doce',
        name:'MAXI CERDO SUPER' ,
        descripcion:'Pernil de cerdo de 160 gr, carne 170gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'trece',
        name:'MAXI POLLO SUPER' ,
        descripcion:'Pollo de 170 gr, carne 170 gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'catorce',
        name:'MAXI POLLO CERDO' ,
        descripcion:'Pollo de 140 gr, cerdo 160 gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'pollopolH',
        name:'MAXI POLLO POLLO' ,
        descripcion:'Doble Pollo de 170 gr, pan bimbo , doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'quince',
        name:'MAXI SUPER' ,
        descripcion:'Doble carne 170 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 22.9' ,
        precioNum: 22900
    },
    {
        indice:'dieciseis',
        name:'MAXI MEGA' ,
        descripcion:'Doble carne 125 gr, chorizo campesino 100 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 26.9' ,
        precioNum: 26900
    },
    {
        indice:'diecisiete',
        name:'MAXI MEGA CERDO' ,
        descripcion:'Cerdo 160 gr, Carne 125 gr, Chorizo Campesino de 100 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 27.9' ,
        precioNum: 27900
    },
    {
        indice:'dieciocho',
        name:'MAXI MEGA POLLO' ,
        descripcion:'Pollo de 170 gr, Carne 170 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 27.9' ,
        precioNum: 27900
    },
    {
        indice:'diecinueve',
        name:'MAXI MEGA CERDO SUPER' ,
        descripcion:'Cerdo 160 gr. Carne 170 gr, Chorizo Campesino de 100 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$29.9' ,
        precioNum: 29900
    },
    {
        indice:'veinte',
        name:'MAXI MEGA POLLO SUPER' ,
        descripcion:'Pollo de 140 gr, Carne 170 gr, Chorizo campesino de 100 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$29.9' ,
        precioNum: 29900
    },
    {
        indice:'veintiunuo',
        name:'MAXI MEGA SUPER' ,
        descripcion:'Doble carne 170 gr, chorizo campesino 100 gr, pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$30.9' ,
        precioNum: 30900
    },
    {
        indice:'veintidos',
        name:'TRIFASICA' ,
        descripcion:'Carne de 125 gr,cerdo 160 gr. Pollo 170 gr, Chorizo Campesino de 100 gr, Tocineta ahumada pan bimbo, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$34.9' ,
        precioNum: 34900
    },
    {
        indice:'veintitres',
        name:'SUPER TRIFASICA' ,
        descripcion:'Carne de 170 gr,cerdo 160 gr.Pollo 170 gr, Chorizo Campesino de 100 gr,Tocineta ahumada pan bimbo, queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$36.9' ,
        precioNum: 36900
    },
];

const arrayPerros =[
    {
        indice:'unop',
        name:'PERRO MEDIANO',
        descripcion:"Salchicha tipo ranchera 80 gr. pan bimbo, queso, cebolla, papas cabello de angel y exclusivas salsas de la casa",
        precio: '$ 7.9',
        precioNum: 7900
    },
    {
        indice:'dosp',
        name:'PERRO RANCHERO' ,
        descripcion:'Salchicha tipo ranchera 100 gr, pan , doble queso, jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 10.9' ,
        precioNum: 10900
    },
    {
        indice:'tresp',
        name:'PERRO FRANKFURT' ,
        descripcion:'Salchicha tipo ranchera 120 gr, pan , queso, Jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 12.9' ,
        precioNum: 12900
    }
]

const arrayChoriqueta =[
    {
        indice:'unoc',
        name:'CHORIQUETA',
        descripcion:"Chorizo campesino 100 gr, Arepa, Tocineta, queso y exclusivas salsas de la casa",
        precio: '$ 7.9',
        precioNum: 7900       
    },
    {
        indice:'dosc',
        name:'SUPER CHORIQUETA' ,
        descripcion:'Chorizo campesino de 100gr, pan , tocineta, cebolla, queso, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 10.9',
        precioNum: 10900
    }
]    

const arrayBurritos =[
    {
        indice:'unobu',
        name:'BURRITO DE CERDO',
        descripcion:"Brocheta de cerdo 180 gr, triple queso,papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo",
        precio: '$ 16.9',
        precioNum: 16900       
    },
    {
        indice:'dosbu',
        name:'BURRITO DE ATUN' ,
        descripcion:'atun 110 gr, doble queso, papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo' ,
        precio:'$ 16.9' ,
        precioNum: 16900
    },
    {
        indice:'tresbu',
        name:'BURRITO DE POLLO' ,
        descripcion:'6 lomitos de pollo apanado, doble queso, papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo' ,
        precio:'$ 16.9' ,
        precioNum: 16900
    }
] 

const arraypinchos =[
    {
        indice:'unopi',
        name:'BROCHETA DE CERDO',
        descripcion:"Brocheta de cerdo de 180 gr, arepa antioqueña y salsa BBQ",
        precio: '$ 10.9',
        precioNum: 10900       
    }
]  

const arraypostres =[
    {
        indice:'unopos',
        name:'QUESADILLA',
        descripcion:"Tortilla bimbo, 100 gr de arequipe alpina, tres lonchas de queso tipo mozarela",
        precio: '$ 7.9',
        precioNum: 7900       
    }
]  

const arrayPromociones=[
    {
        indice:'unopr',
        name:'HAMBURGUESAS',
        descripcion:"2 hamburguesas de carne de res de 125 gr, pan bimbo , queso, jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa",
        precio: '$ 18.0',
        precioNum: 18000
    },
    {
        indice:'dospr',
        name:'PERROS MEDIANOS' ,
        descripcion:'2 perros con salchicha tipo ranchera americana de 80 gr, pan bimbo, cebolla, queso, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 15.0' ,
        precioNum: 15000
    },
    {
        indice:'trespr',
        name:'PERRO Y HAMBURGUESA' ,
        descripcion:'Hamburguesa carne de res 125gr, pan bimbo , cebolla, queso, jamón, papas cabello de angel y exclusivas salsa de la casa Perro mediano salchicha tipo ranchera americana de 80 gr, pan bimbo, cebolla, queso, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 16.5' ,
        precioNum: 16500
    }
]

const arrayAdiccionales =[
    {
        indice:'unoA',
        name:'TOCINETA',
        descripcion:"TOCINETA",
        precio: '$ 1.9',
        precioNum: 1900
    },
    {
        indice:'dosA',
        name:'QUESO' ,
        descripcion:'QUESO' ,
        precio:'$ 1.9' ,
        precioNum: 1900
    },
    {
        indice:'tresA',
        name:'JAMON' ,
        descripcion:'JAMON' ,
        precio:'$ 1.9' ,
        precioNum: 1900
    },
    {
        indice:'cuatroA',
        name:'JALAPEÑOS' ,
        descripcion:'JALAPEÑOS' ,
        precio:'$ 1.9' ,
        precioNum: 1900
    },
    {
        indice:'cincoA',
        name:'PEPINILLOS' ,
        descripcion:'PEPINILLOS' ,
        precio:'$ 1.9' ,
        precioNum: 1900
    },
    {
        indice:'seisA',
        name:'PAQUETE PAPAS' ,
        descripcion:'PAQUETE PAPAS con sabores como: Costilla BBQ, Hamburguesa artesanal y Naturales' ,
        precio:'$ 6.9' ,
        precioNum: 6900
    },
    {
        indice:'sieteA',
        name:'SALSA EXCLUSIVAS' ,
        descripcion:'COPA DE 15gr' ,
        precio:'$ 0.9' ,
        precioNum: 900
    }
]

const arrayBebidas =[
    {
        indice:'unob',
        name:'COCA COLA <br> 350 ML' ,
        descripcion:'COCA COLA 350' ,
        precio:'$ 2.4' ,
    },
    {
        indice:'dosb',
        name:'COCA COLA <br> PERSONAL 400 ML',
        descripcion:"COCA COLA PERSONAL 400 ML.",
        precio: '$ 2.9'
    },
    {
        indice:'quatrP',
        name:'QUATRO <br> PERSONAL 400 ML',
        descripcion:"QUATRO PERSONAL 400 ML.",
        precio: '$ 2.9'
    },
    {
        indice:'kolaP',
        name:'KOLA ROMAN <br> PERSONAL 400 ML',
        descripcion:"KOLA ROMAN PERSONAL 400 ML.",
        precio: '$ 2.9'
    },
    {
        indice:'tresb',
        name:'COCA COLA 1.5' ,
        descripcion:'COCA COLA 1.5' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'cuatrob',
        name:'JUGO DE VALLE <br> PERSONAL' ,
        descripcion:'JUGO DE VALLE SABORES:( Fresa, Mandarina, Mango, Mora, Naranja, Piña y Salpicon)' ,
        precio:'$ 2.9' ,
    },
    {
        indice:'valle2',
        name:'JUGO DE VALLE <br> CAJA' ,
        descripcion:'JUGO DE VALLE SABORES:( Fresa, Mandarina, Mango, Mora, Naranja, Piña y Salpicon)' ,
        precio:'$ 3.9' ,
    },
    {
        indice:'cincob',
        name:'HIT 1.5' ,
        descripcion:'HIT 1.5  SABORES:( Mango, Mora, Naranja, Piña y tropical)' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'qua1',
        name:'QUATRO 1.5 lts' ,
        descripcion:'QUATRO 1.5 lts' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'kola15',
        name:'KOLA ROMAN <br> 1.5 lts' ,
        descripcion:'KOLA ROMAN 1.5 lts' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'coc2',
        name:'COCA COLA <br> 2 lts' ,
        descripcion:'COCA COLA 2 lts, botella retornable' ,
        precio:'$ 6.9' ,
    },
    
    {
        indice:'qua2',
        name:'QUATRO 2 lts' ,
        descripcion:'QUATRO 2 lts' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'seisb',
        name:'CORONITA' ,
        descripcion:'CORONITA' ,
        precio:'$ 4.9' ,
    },
    {
        indice:'sieteb',
        name:'CORONA' ,
        descripcion:'CORONA' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'ochob',
        name:'BUDWEISER' ,
        descripcion:'BUDWEISER' ,
        precio:'$ 3.9' ,
    },
    {
        indice:'nueveb',
        name:'HEINEKEN' ,
        descripcion:'HEINEKEN' ,
        precio:'$ 3.9' ,
    },
    {
        indice:'aguilaLi',
        name:'AGUILA LIGTH <br> LITRO' ,
        descripcion:'AGUILA LIGTH LITRO' ,
        precio:'$ 7.9' ,
    },
    {
        indice:'diezb',
        name:'REDBULL' ,
        descripcion:'REDBULL' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'onceb',
        name:'BATIDOS EN <br> AGUA' ,
        descripcion:'BATIDOS NATURALES EN  AGUA sabores: Mango, Mora, Maracuya, Lulo, Guanabana ' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'doceb',
        name:'BATIDOS EN <br> LECHE' ,
        descripcion:'BATIDOS NATURALES EN  LECHE sabores: Mango, Mora, Maracuya, Lulo, Guanabana ' ,
        precio:'$ 6.9' ,
    }
]

const arrayAcompañamientos =[
    {
        indice:'unoAco',
        name:'PAPA FRANCESA' ,
        descripcion:'PORCION 160 GRAMOS, EXCLUSIVAS SALSAS' ,
        precio:'$ 5.9' ,
        precioNum: 5900
    },
    {
        indice:'dosAco',
        name:'ARITOS DE CEBOLLA' ,
        descripcion:'PORCION 8 UNIDADES, EXCLUSIVAS SALSAS ' ,
        precio:'$ 7.9' ,
        precioNum: 7900
    },
    {
        indice:'tresAco',
        name:'PALITOS DE YUCA' ,
        descripcion:'PORCION 12 UNIDADES, EXCLUSIVAS SALSAS ' ,
        precio:'$ 4.9' ,
        precioNum: 4900
    },    
    {
        indice:'cuatroAco',
        name:'LOMITOS DE POLLO' ,
        descripcion:'PORCION 6 UNIDADES, EXCLUSIVAS SALSAS' ,
        precio:'$ 6.9' ,
        precioNum: 6900
    },
    {
        indice:'seisAco',
        name:'DEDITOS HAWAIANOS' ,
        descripcion:'PORCION 4 UNIDADES, EXCLUSIVAS SALSAS' ,
        precio:'$ 4.9' ,
        precioNum: 4900
    },
]

const pedido = []

const tarjetaPedido = []

let stringPedido = '';

let valorTotalPedido = 0;


// Agrega un manejador de eventos al botón para pausar el video
pausarVideoButton.addEventListener('click', function () {
    if (!miVideo.paused) {

        console.log('hol');
        miVideo.pause();
    }
});


function imprimir(arreglo, tabla) {
    arreglo.forEach(element => {
        tabla.innerHTML+=`<tr>
        <td scope="row" >
            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample" >
                <h3><span class="desplegable"><i class="bi bi-caret-down-fill"></i></span> ${element.name}</h3>
            </a>
            <div class="collapse" id="${element.indice}">
                <div class="card card-body">${element.descripcion}</div>
            </div>
        </td>
        <td>
            <h3>${element.precio}</h3>
        </td>
        <td>
            <div class="row  p-0">        
                <div class="col-1 m-2"> <input type="number" min="0" class="btn-cant-car bg-light" id="cantidad${element.indice}"readonly onkeydown="return false;"> </div>
                <div class="col-1">
                    <div class=" btn-action-car"> 
                        <button class="btn btn-sm btn-success botonmas " value="${element.indice}" id="mas${element.indice}"> + 
                        </button>
                    </div>
                    <div class=" btn-action-car"> 
                        <button class="btn btn-sm btn-danger btn-menos" value="${element.indice}" id="menos${element.indice}"> - 
                        </button>
                    </div>
                </div>
            </div>
        </td>
    </tr>`;
    });

    // Función que devuelve una promesa 
}

function llamdoDeTablas() {
    imprimir(arraySalchipapas, tablaSalchipapa);
    imprimir(arrayHamburguesas, tablaHamburguesa);
    imprimir(arrayPerros, tablaperro);
    imprimir(arrayChoriqueta, tablaChoriqueta);
    imprimir(arrayBurritos, tablaBurritos);
    imprimir(arraypinchos, tablaPincho);
    imprimir(arrayPromociones, tablaPromociones);
    imprimir(arraypostres, tablaPostre);
    imprimir(arrayAcompañamientos, tablaAcompañamiento);
    imprimir(arrayAdiccionales, tablaAdicionales);
    imprimir(arrayBebidas, tablaBebidas);
}
window.onload=llamdoDeTablas();



function eventosDespuesDeCarga() {
    return new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    });
}
  
eventosDespuesDeCarga().then(() => {
// Aquí puedes productoCar tus eventos después de que la página haya cargado
    const botonMas = document.querySelectorAll('.botonmas');
    const botonMenos = document.querySelectorAll('.btn-menos');

    function sumarClic() {
        let productoCar = this.value; 
        let cantidad = 1;

        let sumarProducto = {
            indice: productoCar,
            cantidad: cantidad
        }

        if (pedido.length === 0) {
            pedido.push(sumarProducto);
        } else {
            const objetoEncontrado = pedido.find(objeto => objeto.indice === sumarProducto.indice);
            if (objetoEncontrado) {
                objetoEncontrado.cantidad = objetoEncontrado.cantidad + 1;
                //console.log('Cantidad modificada con éxito.');
            } else {
                pedido.push(sumarProducto);
                //console.log('El objeto no se encontró en el array.');
            }
            //console.log('El array no está vacío.');
        }

        inputValue(productoCar);
        
        //console.log(pedido);

        //alert(`¡Hiciste clic en ${productoCar} !`);
    }

    function restarClic() {
        let productoCar = this.value; 
        let cantidad = 1;

        let restarProducto = {
            indice: productoCar,
            cantidad: cantidad
        }

        if (pedido.length === 0) {
            alert('No hay productos en el carrito')
        } else {
            const objetoEncontrado = pedido.find(objeto => objeto.indice === restarProducto.indice && 
                                                           objeto.cantidad >=  1 );
            if (objetoEncontrado) {
                objetoEncontrado.cantidad = objetoEncontrado.cantidad - 1;

                const borrar = pedido.findIndex(objeto => objeto.indice === restarProducto.indice && 
                                                     objeto.cantidad ===  0 );
                
                if (borrar !== -1 ) {
                    pedido.splice(borrar, 1); 
                }                                                                              
                //console.log('Cantidad restada con éxito.');
            }
        }
        inputValue(productoCar);
        //console.log(pedido);
    }
        
    // Itera a través de los botones y agrega un evento "click" a cada uno
    botonMas.forEach(boton => {
        boton.addEventListener('click', sumarClic);
    });
    
    botonMenos.forEach(boton => {
        boton.addEventListener('click', restarClic);
    });

    function inputValue(productoCar) {
        let idInput         = 'cantidad' + productoCar;
        const muestCAntidad = document.getElementById(idInput);
    
        const objetoEncontrado = pedido.find(objeto => objeto.indice === productoCar);
        if (objetoEncontrado) {
            muestCAntidad.value = objetoEncontrado.cantidad;
        }else{
            muestCAntidad.value = '';
        }
    }
 

    btncarrtio.addEventListener('click', () => {
        pedido.forEach(element => {
            //console.log(element.indice);
            
            modificarInfoCarrito(arraySalchipapas, element.indice, element.cantidad);
            modificarInfoCarrito(arrayHamburguesas, element.indice, element.cantidad);
            modificarInfoCarrito(arrayPerros, element.indice, element.cantidad);
            modificarInfoCarrito(arrayChoriqueta, element.indice, element.cantidad);
            modificarInfoCarrito(arrayBurritos, element.indice, element.cantidad);
            modificarInfoCarrito(arraypinchos, element.indice, element.cantidad);
            modificarInfoCarrito(arraypostres, element.indice, element.cantidad);
            modificarInfoCarrito(arraypinchos, element.indice, element.cantidad);
            modificarInfoCarrito(arrayAdiccionales, element.indice, element.cantidad);
            modificarInfoCarrito(arrayBebidas, element.indice, element.cantidad);
            modificarInfoCarrito(arrayAcompañamientos, element.indice, element.cantidad);
            
        });
        

        const barraTotal = document.querySelector('.barratotal');
        
        function valorTotalShow() {
            let contador = 0;
            
            if (tarjetaPedido.length !== 0 ) {
                barraTotal.innerHTML = `<div class="row justify-center">
                    <div class="col-8  "><strong>Total a pagar</strong></div>
                    <div class="col-3 total">Total</div>
                </div> `;  
                
                const showTotal = document.querySelector('.total');
                tarjetaPedido.forEach(element => {
                    contador = contador + element.total;
                    valorTotalPedido = contador;
                    //console.log(contador);
                });
                showTotal.innerHTML = contador;  
            }else{
                barraTotal.innerHTML = ``;  
                contador = 0; 
                valorTotalPedido = contador;
            }
        }
        

    
        //---------inicio mensaje

       

        const btnEnviar = document.getElementById('enviar');
        btnEnviar.addEventListener('click', ()=>{
            //console.log('hola');
            stringPedido = 'Hola mi pedido de hoy es: ';
            
            tarjetaPedido.forEach(element => {
                let stringProducto = 'ufat' + element.cantidad + ' ' + element.name + ' Valor: ' + element.total + ' ' ;
                
                stringPedido = stringPedido + stringProducto; 
            });
            
            let stringTotal = 'ufat ufat ufat' + ' EL VALOR DEL PEDIDO ES: ' + valorTotalPedido;  
            stringPedido = stringPedido + stringTotal;
            //console.log(stringPedido);
            
            const encriptacion = texto => {
                return texto
                .replace(/ufat/g, "%0A")
                .replace(/ /g, "%20")
                .replace(/:/g, "%3A")
            }
            let url         = "https://wa.me/";
            let numeroCel   = "+573202974075?text="
            let encriptado  = encriptacion( stringPedido )
            window.location.href = url + numeroCel + encriptado;
            console.log(encriptacion( stringPedido ));
        });
        //---------fin    mensaje


        valorTotalShow();
        
        //console.log(tarjetaPedido);

        const modalBody = document.querySelector('.modal-body');    
        // Establece el contenido del cuerpo del modal
        imprimirTablaCarrito(tarjetaPedido, modalBody);
        
        const modal = new bootstrap.Modal(bodyModal);
        // Muestra el modal
        modal.show();

        //----------inicio eliminar item del carrito
        const botonDeleteIntem = document.querySelectorAll('.delete');
        botonDeleteIntem.forEach(boton => {
            boton.addEventListener('click', eliminarItem);
        });

        function eliminarItem() {
            let itemCar = this.value; 
            const borrarItem = pedido.findIndex(objeto => objeto.indice ===  itemCar);
            const borrarItem2 = tarjetaPedido.findIndex(objeto => objeto.indice ===  itemCar);

            if (borrarItem !== -1 ) {
                pedido.splice(borrarItem, 1); 
            } 
            if (borrarItem2 !== -1 ) {
                tarjetaPedido.splice(borrarItem2, 1); 
            } 

            modal.hide();
            inputValue(itemCar);
            modal.show();
            console.log(itemCar);
        }
        //----------fin eliminar item del carrito


    });

    //---------inicio cierra el modal del carrito
    const modalBodys = document.querySelector('.modal-body');    
        
    const modals = new bootstrap.Modal(bodyModal);

    bodyModal.addEventListener('hidden.bs.modal', function (event) {
        event.preventDefault();
        modals.hide();
        modalBodys.remove();
        const contenidoModal = document.querySelector('.newModal');
        contenidoModal.innerHTML = `
        <div class="modal-body" id="body-modal">
        
        </div>
        `;
        
        modals.hide();
    });
  
    //---------fin cierra el modal del carrito

    

    function imprimirTablaCarrito(arreglo, tabla) {
        if (arreglo.length !== 0 ) {   
            arreglo.forEach(element => {
                tabla.innerHTML+=`<div class="container  mt-2">
                <div class="row">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-12">
                                    <h4>${element.name}</h3>
                                    <button type="button" value="${element.indice}" class="btn-close float-end position-absolute top-0 end-0 p-2 delete" >                        
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Cant</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">${element.cantidad}</th>
                                        <td>
                                            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample" >
                                            <h6 class="negro"><span class="desplegable"><i class="bi bi-caret-down-fill"></i></span> ${element.name}</h6>
                                            </a>
                                            <div class="collapse" id="${element.indice}">
                                                <div class="card card-body">${element.descripcion}</div>
                                            </div>
                                        <td>${element.precioNum}</td>
                                        <td>${element.total}</td>
                                      </tr>
                                      
                                    </tbody>
                                  </table>
                            </div>
                        </div>
                      </div>
                </div>
            </div>`;
            });
        }else{
            tabla.innerHTML+=`<div class="container  mt-2">
                    <div class="row">
                        <div class="card">
                            <h3 class="text-center">Aun no hay productos en el carrito</h3>
                        </div>
                    </div> 
                </div>`;

        }

    }

    
    function modificarInfoCarrito(arrayproductos, indice, cantidad) {
        
        arrayproductos.forEach(productoinfo => {
            let indicePro = productoinfo.indice;
            
            if (indicePro == indice) {
                const objetoEncontrado = tarjetaPedido.find(objeto => objeto.indice === indicePro );
                if (!objetoEncontrado) {
                    productoinfo.cantidad = cantidad;
                    productoinfo.total    = productoinfo.precioNum * cantidad;
                    tarjetaPedido.push(productoinfo)
                    //console.log(tarjetaPedido);    
                }else{
                    objetoEncontrado.cantidad = cantidad;
                    objetoEncontrado.total    = productoinfo.precioNum * cantidad;
                    //console.log(tarjetaPedido);
                }
            }
        });    
    }

});
  





