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

fetchDatiDaAPI()