let cipolla = Math.random ();

function paperino(){
  return new Promise((resolve,reject) => {
    if (cipolla > 0.5){resolve(cipolla)}
    else{
      reject(new Error())
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