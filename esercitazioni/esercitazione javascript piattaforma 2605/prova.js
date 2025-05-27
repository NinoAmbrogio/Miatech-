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

Promise.all([pluto(), minnie()])
.then((risultati) => {
  console.log("tutte le promesse sono state risolte", risultati);
})

