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