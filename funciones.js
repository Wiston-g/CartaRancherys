const tablaHamburguesa = document.getElementById('bodyTableHamburguesa');

const tablaperro = document.getElementById('bodyTablePerros')

const tablaChoriqueta = document.getElementById('bodyTableChoriqueta');

const tablaBurritos = document.getElementById('bodyTableBurritos');

const tablaPincho = document.getElementById('bodyTablePincho');

const tablaPromociones = document.getElementById('bodyTablePromociones');

const tablaPostre = document.getElementById('bodyTablePostres');

const tablaAcompañamiento = document.getElementById('bodyTableAcompañamiento');

const tablaAdicionales= document.getElementById('bodyTableAdicionales');

const tablaBebidas= document.getElementById('bodyTableBebidas');


const arrayHamburguesas =[
    {
        indice:'uno',
        name:'RANCHERA',
        descripcion:"Carne de 125 gr, pan bimbo, queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa",
        precio: '$ 9.9'
        
    },
    {
        indice:'dos',
        name:'SUPER RANCHERA' ,
        descripcion:'Carne de 170 gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 11.9' ,
    },
    {
        indice:'tres',
        name:'POLLO RANCHERA' ,
        descripcion:'Pechuga 170gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 11.9' ,
    },
    {
        indice:'cuatro',
        name:'CERDO RANCHERA' ,
        descripcion:'Pernil de cerdo fino de 160gr, pan bimbo , queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 12.9' ,
    },
    {
        indice:'cinco',
        name:'MEGA RANCHERA' ,
        descripcion:'Carne de 125 gr, pan bimbo , chorizo campesino 100gr, arepa antioqueña, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 14.9' ,
    },
    {
        indice:'seis',
        name:'MEGA SUPER' ,
        descripcion:'Carne de 170 gr. pan bimbo , chorizo campesino 100gr, arepa antioqueña, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 16.9' ,
    },
    {
        indice:'siete',
        name:'MEGA POLLO' ,
        descripcion:'Pollo de 170 gr, pan bimbo , chorizo campesino 100gr, arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 16.9' ,
    },
    {
        indice:'ocho',
        name:'MEGA CERDO' ,
        descripcion:'Pernil de cerdo fino de 160 gr, pan bimbo , chorizo campesino 100gr, arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 17.9' ,
    },
    {
        indice:'nueve',
        name:'MAXI RANCHERA' ,
        descripcion:'Doble carne de 125 gr, pan bimbo , arepa, queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 16.9' ,
    },
    {
        indice:'diez',
        name:'MAXI CERDO' ,
        descripcion:'Pernil de cerdo de 180 gr, carne 125 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 18.9' ,
    },
    {
        indice:'once',
        name:'MAXI POLLO' ,
        descripcion:'Pollo de 170 gr, carne 125 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 18.9' ,
    },
    {
        indice:'doce',
        name:'MAXI CERDO SUPER' ,
        descripcion:'Pernil de cerdo de 160 gr, carne 170gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,
    },
    {
        indice:'trece',
        name:'MAXI POLLO SUPER' ,
        descripcion:'Pollo de 170 gr, carne 170 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,
    },
    {
        indice:'catorce',
        name:'MAXI POLLO CERDO' ,
        descripcion:'Pollo de 140 gr, cerdo 160 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,//-----------
    },
    {
        indice:'quince',
        name:'MAXI SUPER' ,
        descripcion:'Doble carne 170 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 20.9' ,
    },
    {
        indice:'dieciseis',
        name:'MAXI MEGA' ,
        descripcion:'Doble carne 125 gr, chorizo campesino 100 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 23.9' ,
    },
    {
        indice:'diecisiete',
        name:'MAXI MEGA CERDO' ,
        descripcion:'Cerdo 160 gr, Carne 125 gr, Chorizo Campesino de 100 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 24.9' ,
    },
    {
        indice:'dieciocho',
        name:'MAXI MEGA POLLO' ,
        descripcion:'Pollo de 170 gr, Carne 170 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 24.9' ,
    },
    {
        indice:'diecinueve',
        name:'MAXI MEGA CERDO SUPER' ,
        descripcion:'Cerdo 160 gr. Carne 170 gr, Chorizo Campesino de 100 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$26.9' ,
    },
    {
        indice:'veinte',
        name:'MAXI MEGA POLLO SUPER' ,
        descripcion:'Pollo de 140 gr, Carne 170 gr, Chorizo campesino de 100 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$26.9' ,
    },
    {
        indice:'veintiunuo',
        name:'MAXI MEGA SUPER' ,
        descripcion:'Doble carne 170 gr, chorizo campesino 100 gr, pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$27.9' ,
    },
    {
        indice:'veintidos',
        name:'TRIFASICA' ,
        descripcion:'Carne de 125 gr,cerdo 160 gr. Pollo 170 gr, Chorizo Campesino de 100 gr, Tocineta ahumada pan bimbo , arepa, doble queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$31.9' ,
    },
    {
        indice:'veintitres',
        name:'SUPER TRIFASICA' ,
        descripcion:'Carne de 170 gr,cerdo 160 gr.Pollo 170 gr, Chorizo Campesino de 100 gr,Tocineta ahumada pan bimbo , doble arepa, queso, jamón, vegetales frescos, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$33.9' ,
    },
];

const arrayPerros =[
    {
        indice:'unop',
        name:'PERRO MEDIANO',
        descripcion:"Salchicha tipo ranchera 80 gr. pan bimbo, queso, cebolla, papas cabello de angel y exclusivas salsas de la casa",
        precio: '$ 6.9'
        
    },
    {
        indice:'dosp',
        name:'PERRO RANCHERO' ,
        descripcion:'Salchicha tipo ranchera 100 gr, pan , doble queso, jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 9.9' ,
    },
    {
        indice:'tresp',
        name:'PERRO FRANKFURT' ,
        descripcion:'Salchicha tipo ranchera 120 gr, pan , queso, Jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 11.9' ,
    }
]

const arrayChoriqueta =[
    {
        indice:'unoc',
        name:'CHORIQUETA',
        descripcion:"Chorizo campesino 100 gr, Arepa, Tocineta, queso y exclusivas salsas de la casa",
        precio: '$ 6.9'       
    },
    {
        indice:'dosc',
        name:'SUPER CHORIQUETA' ,
        descripcion:'Chorizo campesino de 100gr, pan , tocineta, cebolla, queso, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 9.9',
    }
]    

const arrayBurritos =[
    {
        indice:'unobu',
        name:'CERDO',
        descripcion:"Brocheta de cerdo 180 gr, triple queso,papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo",
        precio: '$ 14.9'       
    },
    {
        indice:'dosbu',
        name:'ATUN' ,
        descripcion:'atun 110 gr, doble queso, papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo' ,
        precio:'$ 14.9' ,
    },
    {
        indice:'tresbu',
        name:'POLLO' ,
        descripcion:'6 lomitos de pollo apanado, doble queso, papas cabello de angel vegetales frescos, guacamole y exclusivas salsas de la casa, todo embuelto en una deliciosa tortilla bimbo' ,
        precio:'$ 14.9' ,
    }
] 

const arraypinchos =[
    {
        indice:'unopi',
        name:'BROCHETA DE CERDO',
        descripcion:"Brocheta de cerdo de 180 gr, arepa antioqueña y salsa BBQ",
        precio: '$ 9.9'       
    }
]  

const arraypostres =[
    {
        indice:'unopos',
        name:'QUESADILLA',
        descripcion:"Tortilla bimbo, 100 gr de arequipe alpina, tres lonchas de queso tipo mozarela",
        precio: '$ 7.9'       
    }
]  

const arrayPromociones=[
    {
        indice:'unopr',
        name:'HAMBURGUESAS',
        descripcion:"2 hamburguesas de carne de res de 125 gr, pan bimbo , queso, jamón, cebolla, papas cabello de angel y exclusivas salsas de la casa",
        precio: '$ 16.0'
        
    },
    {
        indice:'dospr',
        name:'PERROS MEDIANOS' ,
        descripcion:'2 perros con salchicha tipo ranchera americana de 80 gr, pan bimbo, cebolla, queso, papas cabello de angel y exclusivas salsas de la casa' ,
        precio:'$ 13.0' ,
    },
    {
        indice:'trespr',
        name:'PERRO Y HAMBURGUESA' ,
        descripcion:'Hamburguesa carne de res 125gr, pan bimbo , cebolla, queso, jamón, papas cabello de angel y exclusivas salsa de la casa Perro mediano salchicha tipo ranchera americana de 80 gr, pan bimbo, cebolla, queso, papas cabello de angel y exclusivas salsa de la casa' ,
        precio:'$ 14.5' ,
    }
]

const arrayAdiccionales =[
    {
        indice:'unoA',
        name:'TOCINETA',
        descripcion:"TOCINETA",
        precio: '$ 1.6'
        
    },
    {
        indice:'dosA',
        name:'QUESO' ,
        descripcion:'QUESO' ,
        precio:'$ 1.2' ,
    },
    {
        indice:'tresA',
        name:'JAMON' ,
        descripcion:'JAMON' ,
        precio:'$ 1.2' ,
    },
    {
        indice:'cuatroA',
        name:'JALAPEÑOS' ,
        descripcion:'JALAPEÑOS' ,
        precio:'$ 1.2' ,
    },
    {
        indice:'cincoA',
        name:'PEPINILLOS' ,
        descripcion:'PEPINILLOS' ,
        precio:'$ 1.2' ,
    },
    {
        indice:'seisA',
        name:'PAQUETE PAPAS' ,
        descripcion:'PAQUETE PAPAS con sabores como: Costilla BBQ, Hamburguesa artesanal y Naturales' ,
        precio:'$ 5.9' ,
    }
]

const arrayBebidas =[
    {
        indice:'unob',
        name:'COCA COLA 350' ,
        descripcion:'COCA COLA 350' ,
        precio:'$ 2.4' ,
    },
    {
        indice:'dosb',
        name:'COCA PERSONAL 400 ML',
        descripcion:"COCA PERSONAL 400 ML.",
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
        name:'JUGO DE VALLE PERSONAL' ,
        descripcion:'JUGO DE VALLE SABORES:( Fresa, Mandarina, Mango, Mora, Naranja, Piña y Salpicon)' ,
        precio:'$ 2.9' ,
    },
    {
        indice:'valle2',
        name:'JUGO DE VALLE CAJA' ,
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
        indice:'coc2',
        name:'COCA COLA 2 lts' ,
        descripcion:'COCA COLA 2 lts, botella retornable' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'qua1',
        name:'QUATRO 1.5 lts' ,
        descripcion:'QUATRO 1.5 lts' ,
        precio:'$ 5.9' ,
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
        indice:'diezb',
        name:'REDBULL' ,
        descripcion:'REDBULL' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'onceb',
        name:'BATIDOS EN AGUA' ,
        descripcion:'BATIDOS NATURALES EN  AGUA sabores: Mango, Mora, Maracuya, Lulo, Guanabana ' ,
        precio:'$ 5.2' ,
    },
    {
        indice:'doceb',
        name:'BATIDOS EN LECHE' ,
        descripcion:'BATIDOS NATURALES EN  LECHE sabores: Mango, Mora, Maracuya, Lulo, Guanabana ' ,
        precio:'$ 5.9' ,
    }
]

const arrayAcompañamientos =[
    {
        indice:'unoAco',
        name:'PAPA FRANCESA' ,
        descripcion:'PORCION 160 GRAMOS, EXCLUSIVAS SALSAS' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'dosAco',
        name:'ARITOS DE CEBOLLA' ,
        descripcion:'PORCION 8 UNIDADES, EXCLUSIVAS SALSAS ' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'tresAco',
        name:'PALITOS DE YUCA' ,
        descripcion:'PORCION 12 UNIDADES, EXCLUSIVAS SALSAS ' ,
        precio:'$ 4.9' ,
    },
    {
        indice:'cuatroAco',
        name:'LOMITOS DE POLLO' ,
        descripcion:'PORCION 6 UNIDADES, EXCLUSIVAS SALSAS' ,
        precio:'$ 6.9' ,
    },
    {
        indice:'cincoAco',
        name:'HASH BROWNS' ,
        descripcion:'PORCION 6 UNIDADES, EXCLUSIVAS SALSAS' ,
        precio:'$ 5.9' ,
    },
    {
        indice:'seisAco',
        name:'DEDITOS DE QUESO' ,
        descripcion:'PORCION 4 UNIDADES, EXCLUSIVAS SALSAS' ,
        precio:'$ 4.9' ,
    },
]

function imprimir(arreglo, tabla) {
    arreglo.forEach(element => {
        tabla.innerHTML+=`<tr>
        <td scope="row" >
            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample">
                <h3><span class="desplegable">+</span> ${element.name}</h3>
            </a>
            <div class="collapse" id="${element.indice}">
                <div class="card card-body">${element.descripcion}</div>
            </div>
        </td>
        <td>
            <h3>${element.precio}</h3>
        </td>
    </tr>`;
    });

    
}


function llamdoDeTablas() {
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