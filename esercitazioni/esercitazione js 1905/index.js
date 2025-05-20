//estrazione elementi base
//const numbers = [1,2,3,4,5];

//const [first, second] = numbers

//console.log(first,second);

// saltare elementi durante il destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(first, third);
// destructuring con valori predefiniti
const frutta = ["mela", "pera", "banana"]
const [prima = "vuoto", seconda = "vuoto", terza = "vuoto", quarta = "vuoto", quinta = "vuoto"] = frutta;

console.log("Prima:", prima);
console.log("Seconda:", seconda);
console.log("Terza:", terza);
console.log("Quarta:", quarta);
console.log("Quinta:", quinta);
//estrazione proprieta di base

/*const gruppo = {
    nome1 : "giorgio",
    nome2 : "paolo",
    nome3 : "giuseppe"

}
 const {nome1,nome2}= gruppo
console.log("Nome 1:", nome1);
console.log("Nome 2:", nome2); */
//destructuring con nomi di variabili diversi 
const gruppo = {
    nome1: "franco",
    nome2: "paolo",
    nome3: "giuseppe"
};

const { nome1: primo, nome2: secondo, nome3: terzo } = gruppo;

console.log("Primo:", primo);
console.log("Secondo:", secondo);
console.log("Terzo:", terzo);
//destructuring con valori predefiniti 2
const computer = {
    schedamadre: "buona",
    ram: "buone",
    processore: "buono"
}
const { schedamadre, ram, processore, gpu = "buona" } = computer

console.log(gpu);
//copia di un array
const gruppo2 = [1, 2, 3, 4, 5]
const newGruppo2 = [...gruppo2]
console.log(newGruppo2);

//unione di due array
const numeri = [1, 2, 3, 4, 5]
const numeri2 = [6, 7, 8, 9, 10]
const numeriuniti = [...numeri, ...numeri2]
console.log(numeriuniti);
//copia di un oggetto con proprieta aggiuntive
const giardino = {
    ortaggi: "patate",
    animali: "galline",
}
const giardinocopia = {
    ...giardino,
    fiori: "rose"
}
console.log(giardino);
console.log(giardinocopia);
// funzione con parametri variabili
function restoperator(...altrivalori) {
    return altrivalori.reduce((acc, curr) => acc + curr, 0)
}

console.log(restoperator(1, 2, 3));
// destructuring array con rest operator
const numeriarray = [1, 2, 3, 4, 5]
const [a, b, ...resto] = numeriarray
console.log(a);
console.log(b);
console.log([...resto]);
// destructuring oggetto con rest operator

const lavoratore = {
    eta: 22,
    annidiservizio: 3,
    ruolo: "operaio",
    stipendio: 1200
}
const { eta, annidiservizio, ...rest } = lavoratore;

console.log(eta);
console.log(annidiservizio);
console.log(rest);
// conversione di un oggetto in stringa json
const esercizio= {
    nome: "mario",
    eta: 22,
    hobby: "sollevatore di polemiche"
}

const eserciziojson= JSON.stringify(esercizio)
console.log(eserciziojson);
// manipolazione dati json 
const jsonPersone = `
[
  { "nome": "Luca", "eta": 25 },
  { "nome": "Anna", "eta": 30 }
]
`;
let persone= JSON.parse(jsonPersone);

persone.push({nome:"Marco" , eta:28})

const jsonAggiornato = JSON.stringify(persone);

console.log(jsonAggiornato);
// stringa semplice  e con template literals
 const name = "giulia";
 const surname = "rossi";

 const greeting = `il mio nome e' :${name} ${surname}`

console.log(greeting);
//stringa multilinea con template literals
let nome5 = "giuseppe"
let cognome= "bianchi"
let etaa = 22
let citta= "reggio emilia "

let presentazione = `
CIAO
Mi chiamo ${nome5} ${cognome},
ho ${etaa} anni
e vengo da ${citta}.
`;



console.log(presentazione);
//funzione e template literals 
const luigi = {
    nome: "luigi",
    anni: 22,
    occupazione : "passeggio la mattina per essere libero il pomeriggio"
}
 const descrizione =({nome,anni,occupazione}) => {
    return` ciao mi chiamo ${nome} ho ${anni} anni e ${occupazione}`
 }
 const descriz = descrizione(luigi)
 console.log(descriz);
 //utilizzare console.log

 let statosistema = "avviso";
 if(statosistema === "errore"){
    console.error("errore critico")
 }
 else if(statosistema === "avviso"){
    console.warn("attenzione il sistema potrebbe avere dei malfunzionamenti!")
 }
 else{
    console.log("Il sistema e' perfettamente funzionante");
    
 }
 //consoletable e consolegroup 
 const utenti= [
    {id:1,nome:"alice",mansione:"insegnante"},
    {id:2,nome:"giovanni",mansione:"insegnante"},
    {id:3,nome:"giorgio",mansione:"insegnante"}    
 ];
 console.group("log utenti")
 console.table(utenti)
 console.groupEnd("fine log utenti")
// utlizzare setTimeout

const timeout = () => {
    console.log("Questo messaggio appare dopo 2  secondi");

}
setTimeout(timeout, 2000)
 // setinterval
let contatore = 0
function interval(){
    contatore++;
    console.log(`messaggio n ${contatore}`);
    if (contatore === 5){
        clearInterval(intervallo)
    }
    
}
const intervallo = setInterval(interval, 4000);
 // interrompere setinterval con clearinterval 

 function stampamessaggio(){
    console.log("il mio messaggio ogni secondo");
 }
 const stampa = setInterval(stampamessaggio, 1000);
 setTimeout(() => {
clearInterval(stampa)    
 }, 5000);
 //gestione di un errore semplice

  function dividi(a,b){
    try{
        if(b === 0 || a === 0){
            throw new Error("non consentito")
        }
        let risultato = a / b;
        console.log(`risultato ${risultato}`);
    }
    catch (errore){
        console.log(`errore ${errore.message}`)
    }
  }
  dividi(0,5)