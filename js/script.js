// URL dell'API
const API = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Prendo gli elementi dall'HTML
const btn = document.getElementById('generate');
const list = document.getElementById('emails');

// Al click del bottone genero le email
btn.addEventListener('click', function () {
    list.innerHTML = '';


    // Ciclo for 
    for (let i = 0; i < 10; i++) {
        axios.get(API).then(function (risposta) {
            const li = document.createElement('li');
            li.textContent = risposta.data.response;
            list.appendChild(li);

        });
    }
});