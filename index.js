let arrayVacio = [];

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

let arrayNumerosPares = [0,2,4,6,8];

let arrayBidimensional = [[0,1,2],['a','b','c']];

function suma(num1, num2) {
    return num1 + num2;
  }
const resultado = suma(60, 62);

function potenciacion(num1, num2){
    return Math.pow(num1,num2);
}

const resultado1 = potenciacion(39,4);

function separarPalabras(frase) {
  let palabras = frase.split(' ');
  return palabras;
}
var frase = "Hola que tal?";
var palabrasSeparadas = separarPalabras(frase);
console.log(palabrasSeparadas);

function repetirString(str, veces){
  let res = '';
  for(let i = 0; i < veces; i++){
    res += str;
  }
  return res;
}

function esPrimo(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i <= num; i++){
    if(num %i === 0){
      return false;
    }
    else{
      return true;
    }
  }
}

function ordenarArray(arrayNum){
  return arrayNum.sort((a,b) => a-b)
}

function obtenerPares(arrayNum){
  let arrayPar = [];
  for(let i = 0; i < arrayNum.length; i++){
    let num = arrayNum[i];
    if(num %2 === 0){
      arrayPar.push(num);
    }else{
      continue;
    }
  }
  return arrayPar;
}


/* function pintarArray(numeros) {
  return "[" + numeros.join() + " ]";
} */

function arrayMapi(arr, funcion){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    res.push(funcion(arr[i],i, arr));
  }
  return res;
}

function eliminarDuplicados(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    if(!res.includes(arr[i])){
      res.push(element);
    }
  }
  return res;
}

let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

let holaMundo = ['Hola','Mundo'];

let loGuardoTodo = ['hola','que',23, 42.33,'tal'];

let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']];

function multiplicacion(num1, num2){
  return num1 * num2;
}

function division(num1, num2){
  return num1 / num2;
}

function esPar(num){
  if(num%2 === 0){
    return true
  }else{
    return false;
  }
}

const arrayFunciones = [suma, resta, multiplicacion];

function suma(num1, num2){
  return num1+num2;
}

function resta(num1, num2){
  return num1-num2;
}

function multiplicacion(num1, num2){
  return num1*num2;
}

function ordenarArray2(arr){
  return arr.sort((a,b) => b-a)
}

function obtenerImpares(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0){
      res.push(arr[i]);
    }
  }
  return res;
}

function sumarArray(arr){
  let sumar = 0;
  for(let i = 0; i < arr.length; i++){
    sumar += arr[i];
  }
  return sumar;
}

function multiplicarArray(arr){
  let multiplicar = 1;
  for(let i = 0; i < arr.length; i++){
    multiplicar =  multiplicar * arr[i];
  }
  return multiplicar;
}