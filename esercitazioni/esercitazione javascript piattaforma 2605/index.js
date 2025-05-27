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

let marco = true 

function messaggio() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(marco){resolve("La promessa e' stata mantenuta dopo 2 secondi")
      }
      else {reject("la promessa non e' stata mantenuta")
      }
    }, 2000);

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
  
 function alberto(){
  return new Promise((resolve, reject) => {
   let pino = Math.random();
   if (pino > 0.5 ){resolve(pino)}
   else{
    reject(new Error(" il numero e' troppo basso"))
   }
    
  })
 }

 alberto()
 .then((result) => {
  console.log(result);
  return result * 4
}).then(multiplied =>{
  return multiplied *2
}).then(finalresult =>{console.log(finalresult);
}).catch(error =>{console.error("errore", error.message)})
;

//gestione degli errori con catch
function mario() {
  return new Promise((resolve,reject) =>{
    let antonio = 12;
    if (antonio > 22){resolve(antonio)}
    else{
      reject(new Error("errato"))
    }
  })

}
mario()
.catch(error => {console.error("errore",error.message)})
//gestione degli errori con then e catch


function pomodoro(condition){
  return new Promise((resolve,reject) =>{
    if (condition){resolve("evviva si e' risolto")}
    else{
      reject(new Error("la condizione e' falsa "))
    }

  })
}

pomodoro(true)
.then(messaggio => {console.log("successo", messaggio);
})
.catch(errore => {
  console.error("errore",errore.message)
})

pomodoro(false)
.then(messaggio =>{ console.log("successo",messaggio)})
.catch(errore => {console.error("errore fatale", errore.message)})

//gestione di errori in una catena di promesse

let cipolla = Math.random ();

function paperino(){
  return new Promise((resolve,reject) => {
    if (cipolla > 5){resolve(cipolla)}
    else{
      reject(new Error("erroreee"))
    }
  } )
}

paperino()
.then((messaggio) => {
    console.log("Passo 1:", messaggio);
    return "Passo 2 completato.";
  })
  .then((messaggio2) => {
    console.log(messaggio2);
    return "Passo 3 completato.";
  })
  .then((messaggio3) => {
    console.log(messaggio3);
  })
  .catch((errore) => {
    console.error("Si è verificato un errore:", errore);
  });