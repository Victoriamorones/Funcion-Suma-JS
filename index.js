// Funcion de suma
function suma(x,y){
    return x() + y();
}
function x(){
    return 3;
} function y(){
    return 2;
}
console.log(suma(x,y))
    


// function saludar (nombre) {
//     console.log("Hola " + nombre);
//     console.log("Este es un saludo");
//     alert("Bienvenido"+nombre)
// }
// function suma(n1,n2){
//     const resultado = n1 + n2;
//     return resultado;

// }
// const ingresaNombre = prompt("Ingresa nombre: ");

// const numero1 = parseInt(prompt("Ingresa un numero"));
// const numero2 = parseInt(prompt("Ingresa otro numero"));
// const suma = suma (numero1 + numero2);

// saludar(ingresaNombre);
// alert(suma)