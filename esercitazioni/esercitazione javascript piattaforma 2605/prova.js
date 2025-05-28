fetch('http://example.com')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Errore nella fetch:', error));