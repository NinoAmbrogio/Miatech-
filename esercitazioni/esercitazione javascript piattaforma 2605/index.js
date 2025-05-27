//funzione base con callback

function paolo(a,b,franco){
franco(a+b) 

}

function pietro(somma){
    console.log(somma);    
}
paolo(1,2,pietro)

 function giorgio(num1,num2,gianni){
if (num1 > num2){
    return gianni( num1+num2)
}
else{
    console.log("okkk");
    
}

 }

  giorgio(11,5,function(somma){console.log(somma)
  })
  //funzioni con callback e passaggio di parametri

  function gianpiero(c,d,barbara){
const result = c + d  ;
barbara(result)
  }

  gianpiero(3,4,function(sommona){console.log(sommona);
  })
  // callback annidati

  function piero(x,y,blu){
blu(x+y)

  }

  function pelu(z){
 const rosso= z * 2 
 console.log(rosso);
  
  }
  
  piero(1,2,pelu)
  //creare una promessa semplice
          
/* function messaggio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("La promessa e stata mantenuta dopo 2 secondi");
    }, 2000);
  });
}

messaggio().then((messaggio) => {
  console.log(messaggio);
});
*/

//gestione di promessa con catch 
function messaggio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("La promessa e' stata mantenuta dopo 2 secondi");
    }, ciao);
  });
}

messaggio()
  .then((messaggio) => {
    console.log(messaggio);
  })
  .catch((errore) => {
    console.error("l'errore e'", errore);
  });
//promessa con finally
function tappeto(){
  return new Promise((resolve,reject) =>{ 
       const successo = Math.random() > 0.5;

    if (successo) {
      resolve(" ciao");
    } else {
      reject(" franco");
    }
    
  })
}
tappeto()
.then((messaggio) => {
  console.log("then", messaggio);
})
.catch((errore) =>{
  console.log("catch",errore);
  
})
.finally(() => {console.log("finally");
})


//catena di promesse con condizioni

function roberto(){
  return new Promise((resolve)=>{
    setTimeout(() => {
     const numero = Math.floor(Math.random() * 100);
      resolve(numero);
    }, 1000);

  });
}
roberto().then((numero) => {console.log("numero generato", numero);
  if (numero % 2 === 0){
    return numero * 2 
  }
  else{
    return numero * 3 
  }
})
.then((francoooo) => {console.log("numero finale", francoooo);
})

//catena di promesse con gestione degli errori 
 //Creare una funzione che restituisca una promessa che può risolversi o essere rifiutata in base a un valore casuale. Utilizzare then per creare una catena di promesse che manipoli il risultato se la promessa si risolve e gestisca l'errore se la promessa viene rifiutata. Stampare i risultati finali o i messaggi di errore.
  
 function alberto(){
  return new Promise((resolve, reject) => {
   let pino = Math.random() > 0.5;
   if (pino){resolve("successo")}
   else{
    reject("errore")
   }
    
  })
 }

 alberto()
 .then((messaggio) => {
  console.log(messaggio);
  return messaggio.
  
 })