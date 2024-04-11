export class Print{
  constructor( array, table ){
    this._array = array;
    this._table = table;
  }

  showTableProducts(){
    const array = this._array;
    const tabla = this._table;
    
    array.forEach(element => {
      tabla.innerHTML+=`<div class="card card-product mb-3">
        <div scope="row" class="row  d-flex justify-content-center" >
            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample" >
                <span class="row text-card-product">
                    <p class="col-1 bi bi-caret-down-fill"></p>
                    <p class="col-8">${element.name}</p>
                    <p class="col-3 ">${element.precio}</p>    
                </span>
            </a>
            <div class="collapse" id="${element.indice}">
                <div class="card card-body">${element.descripcion}</div>
            </div>
        </div>
        
        <div class="container">
            <div class="row  p-0 d-flex justify-content-center">   
                <div class=" col-1 "> 
                    <button class="btn btn-sm btn-danger btn-menos" value="${element.indice}" id="menos${element.indice}"> - 
                    </button>
                </div> 
                <div class="col-1 "> 
                    <input type="number" min="0" class="btn-cant-car bg-light" id="cantidad${element.indice}"readonly onkeydown="return false;"> 
                </div>
                <div class=" col-1 "> 
                    <button class="btn btn-sm btn-success botonmas boton-mas" value="${element.indice}" id="mas${element.indice}"> + 
                    </button>
                </div>    
                
                
            </div>
        </div>
    </div>`;
    });
  }

  showTableCard(){
    const array = this._array;
    const tabla = this._table;

    if (array.length !== 0 ) {   
        array.forEach(element => {
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
}