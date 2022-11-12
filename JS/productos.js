class Productos{
    cliente
    item
    descripcion
    precio
    cantidad
    precio_total
    fecha
    hora
    constructor(cliente,item,descripcion,precio,cantidad, precio_total, fecha,hora){
        this.cliente = cliente;
        this.item = item;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = 1;
        this.precio_total = this.precio * this.cantidad;
        this.fecha = new Date();
        this.hora = hora;
        
    }
}