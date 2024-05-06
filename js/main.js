alert("Ingrese la opción del producto que desea llevar. Para salir ingrese 0");
let selecionarProductos = parseInt(prompt("1-Buzo $3000 \n2-Remera $1500 \n3-Jean $5000 \n4-Zapatillas $6000"));
let selecionarCantidad;
let total = 0;
function cantidad(cant, precio){
return cant * precio
}
while(selecionarProductos != 0){
switch(selecionarProductos){
    case 1:
        selecionarCantidad = parseInt(prompt("El producto selecionado es Buzo, ingrese la cantidad:"));
        total += cantidad(selecionarCantidad, 3000)
        break;
    case 2:
        selecionarCantidad = parseInt(prompt("El producto selecionado es Remera, ingrese la cantidad:"));
        total += cantidad(selecionarCantidad, 1500)
        break;
    case 3:
        selecionarCantidad = parseInt(prompt("El producto selecionado es Jean, ingrese la cantidad:"));
        total += cantidad(selecionarCantidad, 5000)
        break;
    case 4:
        selecionarCantidad = parseInt(prompt("El producto selecionado es Zapatillas, ingrese la cantidad:"));
        total += cantidad(selecionarCantidad, 6000)
        break;
        default:
            break;


}
selecionarProductos = parseInt(prompt("1-Buzo $3000 \n2-Remera $1500 \n3-Jean $5000 \n4-Zapatillas $6000"));
} 
alert("El total de la compra es de: " + total)

function envio(){
    if(total >= 10000){
alert("El envio es gratuito")
}else{
    total += 1000
    alert("El costo del envio es de 1000, el total es: " + total)
}
}
envio()