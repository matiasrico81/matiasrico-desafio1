// calculadora

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const opcion1 = x => x * 0.05;
const opcion2 = x => x *0.20;
const opcion3 = x => x *0.29;
const opcion4 = x => x * 0.33;
const opcion5 = x => x *0.51;
     


let precioProducto =parseInt(prompt("Ingrese precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));
let opcion = parseInt(prompt(`Desea conocer precio en \n1-ahora 1 \n2-ahora 3 \n3-ahora 6 \n4-ahora 12 \n5-ahora 18`));
let nuevoPrecio = suma(resta(precioProducto, descuento) ,(opcion1(resta (precioProducto, descuento))));
let nuevoPrecio1 = suma(resta(precioProducto, descuento) ,(opcion2(resta (precioProducto, descuento))));
let nuevoPrecio2 = suma(resta(precioProducto, descuento) ,(opcion3(resta (precioProducto, descuento))));
let nuevoPrecio3 = suma(resta(precioProducto, descuento) ,(opcion4(resta (precioProducto, descuento))));
let nuevoPrecio4 = suma(resta(precioProducto, descuento) ,(opcion5(resta (precioProducto, descuento))));
if (opcion == 1) {alert(nuevoPrecio)
}else if(opcion ==2) {alert(nuevoPrecio1)
}else if(opcion ==3) {alert(nuevoPrecio2)
}else if(opcion ==4) {alert(nuevoPrecio3)
}else if(opcion ==5) {alert(nuevoPrecio4)
}else{alert("Los datos ingresados son incorrectos, intenta nuevamente")}

