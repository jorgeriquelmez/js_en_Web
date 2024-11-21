let cantidad = 0;
let precioBase = 400000; 
let valorTotal = 0;
document.querySelector('.precio-inicial').innerHTML = precioBase;

function sumar() {
  cantidad++;
  document.querySelector('.cantidad').innerHTML = cantidad;
  calcularTotal();
}

function restar() {
  if (cantidad > 0) {
    cantidad--;
  }
  document.querySelector('.cantidad').innerHTML = cantidad;
  calcularTotal();
}

function calcularTotal() {
  valorTotal = cantidad * precioBase;
  document.querySelector('.valor-total').innerHTML = valorTotal;
}

