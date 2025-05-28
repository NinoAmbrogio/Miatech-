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