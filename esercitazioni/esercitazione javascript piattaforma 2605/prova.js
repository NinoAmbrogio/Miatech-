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

  gestionepromessa(true)
