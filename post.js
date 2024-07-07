function send() {
    password = prompt("Inserisci password")
    if (password == "password"){
        var articolo = document.getElementById('post').value;
        if (articolo) {
            var articoli = JSON.parse(localStorage.getItem('articoli')) || [];
            articoli.push(articolo);
            localStorage.setItem('articoli', JSON.stringify(articoli));
            document.getElementById('post').value = ''; // Pulisce l'input dopo l'inserimento
            alert('Articolo aggiunto con successo!');
        } else {
            alert('Per favore, inserisci un articolo.');
        }
    }else{
        alert("Password incorretta!")
    }
}
var inputBox = document.getElementById('post'); // get the input element
inputBox.addEventListener('inputBox', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(inputBox); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}