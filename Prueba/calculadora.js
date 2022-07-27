//TODO: Calculadora basica
const interface = require('readline-sync');
const {execSync} = require('child_process');

do{
console.log("|------------------------------------------------------------------|");
console.log("|                            ° Menu °                              |");
console.log("|------------------------------------------------------------------|");
console.log("|  1. Sumar Valores               |   2. Restar valores            |");
console.log("|  3. Multiplicar valores         |   4. Dividir valores           |");
console.log("|  5. Salir                       |                                |");
console.log("|------------------------------------------------------------------|");
response = interface.question("Que opcion deseas realizar: ");
let firtsNumber;
let secondNumber;

if(response > 0 && response < 5)
{
    firtsNumber = interface.question("Ingrese el primer numero: "); //Leemos lo que el usuario ingresa en ese campo
    secondNumber = interface.question("Ingrese el segundo numero: ");
}
switch(response){
       case  "1":
        let suma = parseInt(firtsNumber) + parseInt(secondNumber);
        console.log("El resultado de la suma es: " + suma);
        break;
    case "2":
        let resta = parseInt(firtsNumber) - parseInt(secondNumber);
        console.log("El resultado de la resta es: " + resta);
        break;
    case "3":
        let multiplica = parseInt(firtsNumber) * parseInt(secondNumber);
        console.log("El resultado de la multiplicacion es: " + multiplica);
        break;
    case "4":
        let divide = parseInt(firtsNumber) / parseInt(secondNumber);
        if(isNaN(divide)) // Si el resultado de la division da como resultado NaN, nos imprima operacion incorrecta
        {
            console.log("Operacion incorrecta");
        }else {
            console.log("El resultado de la division es: " + divide);
        }
        break;
    case "5":
        console.log("Finalizando programa");
        break;
        default: 
        console.log("Digite la opcion correcta!!");
            break;
 } 
 execSync("sleep 2"); // Al finalizar la operacion el espera 2 segundos para cargar o cerrar el programa
 console.clear();
}while(response != "5");  

