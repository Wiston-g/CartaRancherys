export class Message {

  constructor(id, tarjetaPedido, valorTotalPedido){
    this._id = id,
    this._tarjetaPedido = tarjetaPedido,
    this._valorTotalPedido = valorTotalPedido,
    this._url         = "https://wa.me/",
    this._numeroCel   = "+573202974075?text="
  }
  
  botonEnviar(){ 
    const btnEnviar = document.getElementById(this._id)
    btnEnviar.addEventListener('click', ()=>{
      let stringPedido = 'Hola mi pedido de hoy es: ';
    
      this._tarjetaPedido.forEach(element => {
          let stringProducto = 'ufat' + element.cantidad + ' ' + element.name + ' Valor: ' + element.total + ' ' ;             
          stringPedido = stringPedido + stringProducto; 
      });
      
      let stringTotal = 'ufat ufat ufat' + ' EL VALOR DEL PEDIDO ES: ' + this._valorTotalPedido;  
      stringPedido = stringPedido + stringTotal;
      //console.log(stringPedido);
      
      const encriptacion = texto => {
          return texto
          .replace(/ufat/g, "%0A")
          .replace(/ /g, "%20")
          .replace(/:/g, "%3A")
      }

      let encriptado  = encriptacion( stringPedido )
      window.location.href = this._url + this._numeroCel + encriptado;
      //console.log(encriptacion( stringPedido ));
      localStorage.clear();
      }
    )
  }
}