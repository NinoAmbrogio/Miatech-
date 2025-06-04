// Creare uno script che salvi, recuperi e rimuova un cookie. Stampare i valori nella console durante ogni operazione.

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; expires=" + expires + "; path=/";
        console.log(` Cookie salvato: ${cname} = ${cvalue}, scade il: ${expires}`);

}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let value = c.substring(name.length, c.length);
            console.log(`🔍 Cookie recuperato: ${cname} = ${value}`);
            return value;
        }
    }
    console.log(` Cookie '${cname}' non trovato`);
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 04 Jan 2016 00:00:00 UTC; path=/;";
        console.log(` Cookie rimosso: ${cname}`);

}



// Creare uno script che salvi, recuperi e rimuova un valore nel localStorage. Stampare i valori nella console durante ogni operazione.
    localStorage.setItem('nome','mario');
    console.log('salvato',localStorage.getItem('nome'));

    let nome = localStorage.getItem('nome');
    console.log('Recuperato', nome);

    localStorage.removeItem('nome');
    console.log('item rimosso', localStorage.getItem('nome'));
//Creare uno script che salvi, recuperi e rimuova un valore nel sessionStorage. Stampare i valori nella console durante ogni operazione.
        
    sessionStorage.setItem('nome','franco')
    console.log('salvato', sessionStorage.getItem('nome'));

    let nomee = sessionStorage.getItem('nome')
    console.log('recuperato', nomee);

    sessionStorage.removeItem('nome');
    console.log('item rimosso', sessionStorage.getItem('nome'));
//  Creare uno script che salvi valori sia nel localStorage che nel sessionStorage, li recuperi e li rimuova. Stampare i valori nella console durante ogni operazione.
            
localStorage.setItem('utente','giorgio');
sessionStorage.setItem('utente', 'giuseppe');
console.log('salvato in localstorage', localStorage.getItem('utente'));
console.log('salvato in sessionStorage', sessionStorage.getItem('utente'))

let localValue = localStorage.getItem('utente');
let sessionValue = sessionStorage.getItem('utente');
console.log('recuperato da localstorage', localValue);
console.log('recuperato da sessionstorage', sessionValue);

localStorage.removeItem('utente');
sessionStorage.removeItem('utente');
console.log('rimosso da local storage', localStorage.getItem('utente'));
console.log('rimosso da session storage', sessionStorage.getItem);

//  Crea un html con un paragrafo e stampa l'oggetto document.
    console.log(document);

// Creare uno script che selezioni un elemento della pagina HTML tramite getElementById

let lorem = document.getElementById('lorem')    
console.log(lorem);

// Creare uno script che selezioni un elemento della pagina HTML tramite querySelector
    let lorem2 = document.querySelector('.lorem2')
    console.log(lorem2);

    //   Crea un paragrafo e modificane il testo con innerText

    let modifica = document.getElementById('modifica')
    modifica.innerText = 'questo e il mio testo modificato' 
    
    //  Cambia lo stile del paragrafo modificando il background-color e il font-size tramite Javascript

    modifica.style.backgroundColor = 'red'
    modifica.style.fontSize = '20px'

    //  Modifica il contenuto HTML del paragrafo aggiungendo un bottone all'interno di esso usando innerHTML

    modifica.innerHTML += '<button>Clicca</button>'

    // Crea una lista non ordinata usando il metodo createElement()
    
   /* let ul = document.createElement('ul');

    let elements = ['franco','giorgio','paolo'];

    elements.forEach(function(elemento){
        let li = document.createElement('li');
        li.textContent = elemento;
        ul.appendChild(li);
    });

    document.getElementById('container').appendChild(ul);*/

//   Aggiungi 5 list items alla lista non ordinata creata in precedenza usando sempre il createElement()

 let ul = document.createElement('ul');

    let elements = ['franco','giorgio','paolo','giuseppe', 'antonio'];

    elements.forEach(function(elemento){
        let li = document.createElement('li');
        li.textContent = elemento;
        ul.appendChild(li);
    });

    document.getElementById('container').appendChild(ul);

    //Crea un form con 2 input di testo: nome e cognome. Crea un bottone di submit del form. Gestisci l'evento submit in modo che prima che venga inviato un form mostri un alert se i campi non sono compilati, se sono compilati potrà eseguire il submit del form.
    
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event){
        const nominativo = document.getElementById('nome').value.trim();
        const cognomee = document.getElementById('cognome').value.trim();

        if(nominativo === '' || cognomee === ''){
            alert('tutti i campi sono obbligatori');
            event.preventDefault()
        }

    });