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
const array = [1, 2, 3, 4, 5];
/*somma i numeri*/
let numbers = array;
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(result);
/*inverted array*/
const invertedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  invertedArray.push(array[i]);
}
console.log(invertedArray);
/*popolamento array*/
/*const parole = [];
for (let i = 0; i < 5; i++) {
  let input = prompt(i + 1);
  parole.push(input);
}
console.log(parole);

for (let i = 0; i < parole.length; i++) {
  if (parole[i].length % 2 !== 0) {
    console.log(parole[i]);
  }

}*/
/* crea un oggetto*/
let person = {
  name: "giorgio",
  age: 22,
  city: "livorno",
};
console.log(person);
/*modifica la proprietà*/
person.age = 25;
console.log(person);
/*aggiungi una nuova proprieta(job)*/
person.job = "astronauta";
console.log(person);
/* iterazione delle proprieta*/
for (let key in person) {
  console.log(key + ":" + person[key]);
}
/*funzioni annidate*/
/*function outerfunction(x) {
  function innerfunction(y) {
    return x + y;
  }
  return innerfunction;
}

const addTen = outerfunction(10)
console.log(addTen(5))*/

/* persistenza delle variabili locali*/
function outerfunction(x,initialValue) {
  let result = initialValue
  function innerfunction(y) {
     result+=y
     return result
  }
  return innerfunction;
}


/* COUNTER */
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    }
  };
}

const counter = createCounter()



/*object keys*/
const student = {
  name: "luca",
  age: 17,
  grade: 10,
  school: "liceo dei d",
};
const keys = Object.keys(student);
console.log(keys);

/*object values*/

const values = Object.values(student);
console.log(values);

/*object entries*/
const entries = Object.entries(student);
console.log(entries);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/* foreachmap*/
const nmeri = [1, 2, 3, 4, 5];
nmeri.forEach((num) => {
  console.log(num * 2);
});
const quadrati = nmeri.map((num) => num * num);

console.log(quadrati);
/* filter & find */
const students = [
  { name: "Luca", grade: 75 },
  { name: "Maria", grade: 55 },
  { name: "Giovanni", grade: 85 },
  { name: "Elena", grade: 40 },
  { name: "Marco", grade: 60 },
];

const passedstudents = students.filter((student) => student.grade >= 60);
const failedStudent = students.find((student) => student.grade < 60);
console.log("Passed Students:", passedstudents);
console.log("Failed Student:", failedStudent);
/*reduce & sort */
const expenses=[12,10,15,20]
const totalexpenses= expenses.reduce((accumulator,currentvalue)=> accumulator + currentvalue, 0)
const words=["banana","apple", "cherry", "date"]
words.sort()

console.log(totalexpenses);
console.log(words);



