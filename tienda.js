var productos = [
    {
        imagen: '1x/producto-1.jpg',
        titulo: 'PANTALÓN PINZAS LIMITED EDITION',
        precio: 349000
    },
    {
        imagen: '1x/producto-2.jpg',
        titulo: 'PANTALÓN ABERTURAS LIMITED EDITION',
        precio: 399000
    },
    {
        imagen: '1x/producto-3.jpg',
        titulo: 'PANTALÓN COMBINADO LIMITED EDITION',
        precio: 150000
    },
    {
        imagen: '1x/producto-4.jpg',
        titulo: 'CHAQUETA REGULAR CUERO',
        precio: 380000
    },
    {
        imagen: '1x/producto-5.jpg',
        titulo: 'PANTALON GROGGY',
        precio: 230000
    },
    {
        imagen: '1x/producto-6.jpg',
        titulo: 'GORRA OLIVER',
        precio: 90000
    },
    {
        imagen: '1x/producto-7.jpg',
        titulo: 'CHAQUETA BOMPER CLAY',
        precio: 270000
    },
    {
        imagen: '1x/producto-8.jpg',
        titulo: 'CHAQUETA DE CUERO CLASSIC',
        precio: 360000
    },
    {
        imagen: '1x/producto-9.jpg',
        titulo: 'VESTIDO CLOR VENTE',
        precio: 480000
    }
]
//-----------------------------------------------

let pop = document.querySelector(".pop")
let imagenProducto = document.querySelector(".imagen")
let descripcion = document.querySelector(".descripcion")
document.querySelector("#cerrar").addEventListener("click", () => Cerrar())

//-----------------------------------------------
function Cerrar(){
    pop.style.display="none"
}

//-----------------------------------------------
var crearProductos = ""
for (var i = 0 ; i < productos.length; i++){
    var crearProductos = crearProductos + "<li data-lugar='" + i +"'><div class='hover'><h3></h3></div><img src='" + productos[i].imagen + "'>" +
    "<h4>" + productos[i].titulo + "</h4>$" + productos[i].precio.toLocaleString('de-DE') + "</li>";

    document.querySelector(".productos").innerHTML = crearProductos;
}


//-----------------------------------------------

const productosCarrito = []
var productoAgregado = ""
var suma = 0
class producto {
    constructor(nombre,valor,foto,cantidad,total) {
      this.producto = nombre;
      this.precio = valor;
      this.items = cantidad;
      this.imagen = foto;
      this.valorF = total;
    }
    agregarProducto() {
        productosCarrito.push({imagen: this.imagen,
        titulo: this.producto,
        precio: this.precio,items: this.items,total: this.valorF})
        productoAgregado += `<li><div class='img-carrito'><img src="${this.imagen}"></div><div class='descripcion-carrito'><h3>${this.producto}</h3><p>CANTIDAD:${this.items}</p><h4>$${this.precio.toLocaleString('de-DE')}</h4></div></li>`;
        document.querySelector(".productos-carrito").innerHTML = productoAgregado
        var suma = 0
        for (var i = 0 ; i < productosCarrito.  length; i++){
        suma += productosCarrito[i].total
}
document.querySelector(".total").innerHTML= "TOTAL :<br>$" + suma.toLocaleString('de-DE')
    }
  }
//-----------------------------------------------

  var lista = document.querySelectorAll("li")
  lista.forEach(productoLi => productoLi.addEventListener("click",() => agregarCantidad(productoLi.dataset.lugar)))

//-----------------------------------------------

  function agregarCantidad(x){

    pop.style.display="flex"
    imagenProducto.innerHTML=`<img src="${productos[x].imagen}">`
    descripcion.innerHTML=`<h1>${productos[x].titulo}<h1><h2>$${productos[x].precio.toLocaleString('de-DE')}</h2><input class="cantidad" type="number" min="0" value="0"><button class="finalizar">Agregar</button>`
    //---------------------------------------------
    //---------------------------------------------

    descripcion.querySelector("button").addEventListener("click",() => anadirFinal()
    )
    function anadirFinal(){
        let cantidades = descripcion.querySelector(".cantidad")
        var nuevoProducto = new producto(productos[x].titulo, productos[x].precio,productos[x].imagen,cantidades.value,productos[x].precio*cantidades.value)
        nuevoProducto.agregarProducto()
        Cerrar()
    }
    
  }