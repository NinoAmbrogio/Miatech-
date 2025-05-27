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