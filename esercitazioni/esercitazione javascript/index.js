/*Dichiarazione Variabili*/
const num1 = 1;
let num2 = 2;
console.log(num1, num2);
/*Cambio di valore*/
let numero = 5;
numero = 10;
console.log(numero);
/*ridefinizione variabili*/
let number = 22;
{
  let number = 25;
  console.log(number);
}
console.log(number);
/*Scoping Variabili*/
let outside = 12;
{
  let inside = 23;
  console.log(outside, inside);
}
/*console.log(outside,inside);--Non possibile inquanto è dentro il blocco e non lo prende*/
/*Genera numeri pari*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*numeri dispari decrescenti*/
let n = 10;

while (n >= 1) {
  if (n % 2 !== 0) {
    console.log(n);
  }
  n--;
}

/*prompt*/

/*let word = prompt('ciao')*/

/*lunghezza della parola*/
const parola = "supercalifragilistichespiralitoso";
console.log(parola.length);

/*richiesta di input corretto*/
/*-let word;

do {
  word = prompt('Inserisci una parola con almeno 5 caratteri:');
} while (word.length < 5);

console.log(word);     -*/

/* if & else*/
/*let numbers = 15;
if (numbers > 5) {
  console.log("la variabile è maggiore di 5");
} else {
  console.log("la variabile è minore di 5");
}*/

/*if else & elese if */
/*let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (score >= 90 && score <= 100) {
  console.log("voto ottimo");
} else if (score >= 70 && score <= 89) {
  console.log("voto buono");
} else if (score >= 60 && score <= 69) {
  console.log("voto sufficiente");
} else if (score <= 59) {
  console.log("voto insufficiente");
}*/
/*verifica il punteggio (switch case)*/
/*let score = parseInt(prompt("Inserisci il tuo punteggio:"));

switch (true) {
  case (score >= 90 && score <= 100):
    console.log("voto ottimo");
    break;
  case (score >= 70 && score <= 89):
    console.log("voto buono");
    break;
  case (score >= 60 && score <= 69):
    console.log("voto sufficiente");
    break;
  case (score <= 59):
    console.log("voto insufficiente");
    break;
  default:
    console.log("Valore non valido");
}
  */  
/*array di numeri*/
const array = [1,2,3,4,5]
/*somma i numeri*/
let numbers =array
let result = 0
for (let i = 0 ; i< numbers.length; i++){
  result += numbers[i]
}
console.log (result)
