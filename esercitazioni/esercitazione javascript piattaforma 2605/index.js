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
    console.error("error:", errore);
  });

  //utilizzare promise all
  //  Creare due funzioni che restituiscano promesse che si risolvono dopo tempi diversi.
  //  Utilizzare Promise.all per eseguire entrambe le promesse in parallelo e stampare i risultati quando entrambe sono risolte.
            
function pluto (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ("promessa risolta dopo 3 secondi")
    }, 3000);
  })
};

/*function minnie (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promessa risolta dopo 5 secondi")
    }, 5000);
  } )
};

Promise.all([pluto(), minnie()])
.then((risultati) => {
  console.log("tutte le promesse sono state risolte", risultati);
})
*/
//utilizzare promise.race
function pluto (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ("promessa risolta dopo 3 secondi")
    }, 3000);
  })
};

function minnie (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promessa risolta dopo 5 secondi")
    }, 5000);
  } )
};

Promise.race([pluto(), minnie()])
.then((risultati) => {
  console.log("la prima promessa e'stata risolta", risultati);
});

//utilizzare promise con all.Settled

//Creare tre funzioni che restituiscano promesse, due delle quali si risolvono e una viene rifiutata.
 ///Utilizzare Promise.allSettled per eseguire tutte le promesse in parallelo e stampare i risultati quando tutte sono state completate, indipendentemente dal fatto che siano state risolte o rifiutate.
            
function olly(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("prima promessa risolta")
    }, 2000);
  })

};

function benji(){
  return new Promise((reject) => 
    setTimeout(() => {
    reject("la seconda promessa non si e risolta")
  }, 1000))
};

function checampioni(){
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("terza promessa risolta")
  }, 3000);
})
}

Promise.allSettled([olly(), benji(), checampioni()])
.then((risultati) => {console.log("tutti i risultati", risultati);
})

// funzione asincrona semplice

function promessalow(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promessa risolta")
    }, 2000);
  })
};

async function execute(){
  console.log("promessa in attesa");
  let messaggio = await promessalow();
  console.log("risultato", messaggio);

}
execute()
//gestione errory con try e catch

            
function francesco(risolvi){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (risolvi){
        resolve("promessa risolta")
      }
      else {reject ("la promessa non si e risolta")}
    
  }, 1000);})
}
  async function gestionepromessa(resolve){
    try{
      const result = await francesco(resolve);
      console.log(result);
    }
    catch (errore){
      console.error(errore);
    }
  }

  gestionepromessa()

  // Creare due funzioni asincrone che restituiscano promesse che si risolvono dopo tempi diversi.
  //  Creare una terza funzione asincrona che utilizzi await per chiamare le prime due funzioni in serie e stampare i risultati quando entrambe sono risolte.
  
   async function claudio(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        resolve("risolta dopo 2 secondi")
      }, 2000);
    })
  
  }

  async function bisio(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve("risolta dopo 1 secondo")
      }, 1000);
    })
  }

  async function eseguientrambe(){

    const risultatobisio = await bisio();
    console.log(risultatobisio);
    
    const risultatoclaudio = await claudio();
    console.log(risultatoclaudio);
  }

  eseguientrambe()

  // esegui una richiesta get semplice

  function fetchDatiDaAPI(){
    fetch('https://dummyjson.com/products?limit=12&skip=12')

    .then(response => {
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
      return response.json(); 
    })
    .then(dati => {
      console.log("Dati ricevuti:", dati); 
    })
    .catch(errore => {
      console.error("Si è verificato un errore:", errore.message);
    });
}
//eseguire richiesta post

const post = {
    userId: 1,
    id: 1,
    title: 'Lorem ipsum',
    completed: 'true'
}


async function postData(url){
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        });
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.error(error);
    }
}

postData("https://jsonplaceholder.typicode.com/todos");

//gestione degli errori con async e await

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

async function getData(){
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('errore')
    }
 const dati = await response.json();
    console.log('Dati ricevuti:', dati);
  } catch (errore) {
    console.error('Si è verificato un errore durante la richiesta:', errore.message);
  }
}

getData()

// comprendere un errore cors
fetch('http://example.com')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Errore nella fetch:', error));