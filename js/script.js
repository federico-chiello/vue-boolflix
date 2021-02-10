var app = new Vue({
  el: '#film',
  data:{
    textUser: '',
    apikey:'2440848574e245be0482427477ace718',
    lang:'it-IT',
    movies:[],
    seriesTv: []
  },
  methods:{
    searchMovieTvSeries(){
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params:{
            api_key: this.apikey,
            language: this.lang,
            query: this.textUser
          }
        })
        .then((result) =>{
          this.movies = result.data.results;
          // console.log(this.movies);
        })
        .catch((error) => alert('ci sono errori'));
        axios
          .get('https://api.themoviedb.org/3/search/tv', {
            params:{
              api_key: this.apikey,
              language: this.lang,
              query: this.textUser
            }
          })
          .then((result) =>{
            this.seriesTv = result.data.results;
            // console.log(this.movies);
          })
          .catch((error) => alert('ci sono errori'));
    }
  }
});



// *******  Milestone 1: ********
// Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
// bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto
// ******** Milestone 3: **********
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
// Dovremo prendere quindi l’URL base delle immagini di TMDB:
// https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link:
// https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400 ) per poi aggiungere la parte finale dell’URL passata dall’API.
