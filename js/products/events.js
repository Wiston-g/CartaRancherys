import { products } from "./products.js";
import { Message } from "./message.js";
import { Print } from "./print.js";

export async function eventsDom() {
  // Obtener la URL actual
  let currentUrl = window.location.href;
  let valorTotalPedido = 0;

  const tablaProductos = document.getElementById('bodyTableProducts');
  const bodyModal      = document.getElementById('exampleModal');
  const btncarrtio     = document.getElementById('btn-carrito');
  const pedido         = []
  const tarjetaPedido  = []

  /**
 * Todo:Lógica condicional basada en la URL 
 */
  if ( currentUrl.includes("picaranch.html") ) {
      await new Print( products.picaranch, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("salchipapa.html") ) {
      await new Print( products.salchipapas, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("salchipapa-crispy.html") ) {
      await new Print( products.salchipapasCrispy, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("hamburguesa.html") ) {
      await new Print( products.hamburguesas, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("perro.html") ) {
      await new Print( products.perros, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("choriqueta.html") ) {
      await new Print( products.choriqueta, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("burrito.html") ) {
      await new Print( products.burritos, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("pincho.html") ) {
      await new Print( products.pinchos, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("dias-felices.html") ) {
      await new Print( products.promociones, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("postres.html" ) ) {
      await new Print( products.postres, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("acompaniamientos.html") ) {
      await new Print( products.acompañamientos, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("adicionales.html") ) {
      await new Print( products.adiccionales, tablaProductos ).showTableProducts();
  } else if ( currentUrl.includes("bebidas.html") ) {
      await new Print( products.bebidas, tablaProductos ).showTableProducts();
  }

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

    const totalKeys = localStorage.length;
    // Iterar sobre todas las claves y mostrarlas
    for (let i = 0; i < totalKeys; i++) {
        let key = localStorage.key(i);
        inputValue(key);
        let datosRecuperadosJSON = localStorage.getItem(key);
        let datosRecuperados = JSON.parse(datosRecuperadosJSON);

        let recuperarPedido = {
            indice: datosRecuperados.indice,
            cantidad: datosRecuperados.cantidad
        }
        pedido.push(recuperarPedido);
    }   

    function sumarClic() {
        let productoCar = this.value; 
        console.log(productoCar);
        let cantidad = 1;

        let sumarProducto = {
            indice: productoCar,
            cantidad: cantidad
        }
        //console.log(pedido);

        if (pedido.length === 0) {
            pedido.push(sumarProducto);
            let datosJSON = JSON.stringify(sumarProducto);    
            // Guardar los datos en localStorage bajo la clave "usuario"
            localStorage.setItem(sumarProducto.indice, datosJSON);
        } else {
            const objetoEncontrado = pedido.find(objeto => objeto.indice === sumarProducto.indice);
            if (objetoEncontrado) {
                objetoEncontrado.cantidad = objetoEncontrado.cantidad + 1;
                //console.log('Cantidad modificada con éxito.');
                let datosRecuperadosJSON = localStorage.getItem(sumarProducto.indice);
                let datosRecuperados = JSON.parse(datosRecuperadosJSON);
                datosRecuperados.cantidad = datosRecuperados.cantidad + 1; // Nueva cantidad
                var datosActualizadosJSON = JSON.stringify(datosRecuperados);

                localStorage.setItem(sumarProducto.indice, datosActualizadosJSON);
            } else {
                pedido.push(sumarProducto);
                let datosJSON = JSON.stringify(sumarProducto);
                localStorage.setItem(sumarProducto.indice, datosJSON);
            }
            //console.log('El array no está vacío.');
        }
        inputValue(productoCar);
        //console.log(pedido);
        //alert(`¡Hiciste clic en ${productoCar} !`);
    }

    function restarClic() {
        let productoCar = this.value; 
        let cantidad = 0;

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

                let datosRecuperadosJSON = localStorage.getItem(restarProducto.indice);
                //console.log(datosRecuperadosJSON);
                let datosRecuperados = JSON.parse(datosRecuperadosJSON);
                datosRecuperados.cantidad = datosRecuperados.cantidad - 1; // Nueva edad
                let datosActualizadosJSON = JSON.stringify(datosRecuperados);

                localStorage.setItem(restarProducto.indice, datosActualizadosJSON);

                const borrar = pedido.findIndex(objeto => objeto.indice === restarProducto.indice && 
                                                     objeto.cantidad ===  0 );
                
                if (borrar !== -1 ) {
                    pedido.splice(borrar, 1); 
                    localStorage.removeItem(restarProducto.indice);
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
        
        if (muestCAntidad != null) {
            let datosJSON = localStorage.getItem(productoCar);
            let datos = JSON.parse(datosJSON);
            
            //console.log(datos);
            if (datos == null) {
                muestCAntidad.value = "";
            }else{
                let cantidad = parseInt(datos.cantidad);
                if (cantidad) {
                    muestCAntidad.value = cantidad;    
                }else{
                    muestCAntidad.value = '';
                }
            }
        }
    }
 

    btncarrtio.addEventListener('click', () => {
        // Obtener el número total de elementos almacenados en el localStorage
        const totalKeys = localStorage.length;

        for (let i = 0; i < totalKeys; i++) {
            let key = localStorage.key(i);
            let datosJSON = localStorage.getItem(key);
            let datos = JSON.parse(datosJSON);
            let cantidad = datos.cantidad;
            //console.log("Clave " + (i+1) + ": " + key);

            modificarInfoCarrito(products.picaranch, key, cantidad);
            modificarInfoCarrito(products.salchipapas, key, cantidad);
            modificarInfoCarrito(products.salchipapasCrispy, key, cantidad);
            modificarInfoCarrito(products.hamburguesas, key, cantidad);
            modificarInfoCarrito(products.perros, key, cantidad);
            modificarInfoCarrito(products.choriqueta, key, cantidad);
            modificarInfoCarrito(products.burritos, key, cantidad);
            modificarInfoCarrito(products.pinchos, key, cantidad);
            modificarInfoCarrito(products.postres, key, cantidad);
            modificarInfoCarrito(products.promociones, key, cantidad);
            modificarInfoCarrito(products.adiccionales, key, cantidad);
            modificarInfoCarrito(products.bebidas, key, cantidad);
            modificarInfoCarrito(products.acompañamientos, key, cantidad); 
        }
        

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
        valorTotalShow();

        //---------inicio mensaje
        const mensaje = new Message('enviar', tarjetaPedido, valorTotalPedido);
        mensaje.botonEnviar()
        //---------fin    mensaje

        const modalBody = document.querySelector('.modal-body');    
        // Establece el contenido del cuerpo del modal
        new Print( tarjetaPedido, modalBody ).showTableCard();
        
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
                localStorage.removeItem(itemCar);
            } 
            if (borrarItem2 !== -1 ) {
                tarjetaPedido.splice(borrarItem2, 1); 
                localStorage.removeItem(itemCar);
            } 

            modal.hide();
            inputValue(itemCar);
            modal.show();
            //console.log(itemCar);
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
    
    function modificarInfoCarrito(arrayproductos, indice, cantidad) {
        
        arrayproductos.forEach(productoinfo => {
            let indicePro = productoinfo.indice;
            
            if (indicePro == indice) {
                //const objetoEncontrado = localStorage.getItem(indicePro);
                //console.log(objetoEncontrado);
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
  
}