//automobile, aggiungi metodi & proprietà
class Automobile {
  //contatore
  #contatorechiamate = 0;

  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;e
    this._chilometraggio = chilometraggio;
  }

  // Metodo privato
  #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - this.anno;
  }

  // Metodo pubblico
  mostraEtà() {
    return `L'automobile ha ${this.#calcolaEtà()} anni.`;
  }

  // Metodo protetto 
  _controllaChilometri() {
    if (this._chilometraggio > 100000) {
      return `Attenzione: chilometraggio elevato (${this._chilometraggio} km)`;
    }
    return null;
  }

  description() {
    return `Automobile: ${this.marca} ${this.modello}, anno ${this.anno}, chilometraggio: ${this._chilometraggio} km`;
  }

  mostraChilometraggio() {
    return `Chilometraggio: ${this._chilometraggio} km`;
  }

  aggiornaChilometraggio(nuovoChilometraggio) {
    if (nuovoChilometraggio >= this._chilometraggio) {
      this._chilometraggio = nuovoChilometraggio;
    } else {
      return "error";
    }
  }

  //getter
  get chilometraggio() {
    return this._chilometraggio;
  }

  //setter
  set chilometraggio(km) {
    if (km >= this._chilometraggio) {
      this._chilometraggio = km;
    } else {
      console.log("Non puoi ridurre il chilometraggio.");
    }
  }

  //aggiungi chilometri
  aggiungiChilometri(km) {
    this.#incrementocontatore();
    if (km > 0) {
      this._chilometraggio += km;
    } else {
      return "error";
    }
  }

  //incrementa contatore
  #incrementocontatore() {
    this.#contatorechiamate++;
  }

  mostraContatoreChiamate() {
    return `Il metodo 'aggiungiChilometri' è stato chiamato ${this.#contatorechiamate} volte.`;
  }

  //metodo static
  static confrontaChilometri(auto1, auto2) {
    if (auto1.chilometraggio > auto2.chilometraggio) {
      return `${auto1.marca} ${auto1.modello} ha più chilometri.`;
    } else if (auto2.chilometraggio > auto1.chilometraggio) {
      return `${auto2.marca} ${auto2.modello} ha più chilometri.`;
    } else {
      return "Le automobili hanno gli stessi chilometri.";
    }
  }
//verificaistanza
  static verificaistanza(obj,classe){
    if (obj instanceof classe){
      return "il veicolo è un " + classe.name
    }
    else {
      return "il veicolo non è un " + classe.name
    }
  }

}

// Sottoclasse Elettrica
class Elettrica extends Automobile {
  constructor(marca, modello, anno, chilometraggio, autonomia) {
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia;
  }

  description() {
    let descrizioneBase = super.description();
    let avviso = this._controllaChilometri();
    if (avviso) {
      descrizioneBase += ` | ${avviso}`;
    }
    return `${descrizioneBase}, autonomia: ${this.autonomia} km`;
  }

  ricarica(km) {
    if (km > 0) {
      this.autonomia += km;
    } else {
      return "error";
    }
  }
}


let auto1 = new Automobile("Fiat", "Panda", 2010, 120000);
console.log(auto1.description());
auto1.aggiungiChilometri(1234);
console.log(auto1.mostraChilometraggio());
console.log(auto1.mostraEtà());

let autoElettrica = new Elettrica("Tesla", "Model r", 2022, 105000, 450);
console.log(autoElettrica.description());
autoElettrica.ricarica(50);
console.log(autoElettrica.description());
console.log(autoElettrica.mostraEtà());

//saluta
Automobile.prototype.saluta = function () {
  return `Ciao! Sono una ${this.marca} ${this.modello}`;
};

auto1.aggiungiChilometri(1234);
auto1.aggiungiChilometri(1234);
console.log(auto1.saluta());
console.log(autoElettrica.saluta());
console.log(Automobile.confrontaChilometri(auto1, autoElettrica));
console.log(auto1.mostraContatoreChiamate());


auto1.chilometraggio = 200000;
console.log(auto1.chilometraggio);
auto1.chilometraggio = 100000;
console.log(auto1.chilometraggio);
//camion, carico massimo
class Camion extends Automobile {
  constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
    super(marca, modello, anno, chilometraggio);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = 0;
  }

  description() {
    return `${super.description()}, carico massimo: ${this.caricoMassimo} kg, carico attuale: ${this.caricoAttuale} kg`;
  }

  carica(kg) {
    if (this.caricoAttuale + kg > this.caricoMassimo) {
      console.log("Carico eccessivo!");
    } else {
      this.caricoAttuale += kg;
      console.log(`Caricati ${kg} kg. Totale carico: ${this.caricoAttuale} kg.`);
    }
  }
}
const latuainvidiaèlamiaforza= new Camion("iveco","casciabanco","1940",2000000,1000)

latuainvidiaèlamiaforza.carica(2000)
console.log(latuainvidiaèlamiaforza.description());

let auto2 = new Automobile ("opel","astra",2006,180000)
let camion = new Camion ("iveco","40", 1985,1000000)

console.log(Automobile.verificaistanza(auto2, Automobile));
console.log(Automobile.verificaistanza(auto2, Camion));
console.log(Automobile.verificaistanza(camion, Camion));
console.log(Automobile.verificaistanza(camion,Automobile));
