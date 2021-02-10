// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
// bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto

var app = new Vue({
  el: '#film',
  data:{
    textUser: '',
    apikey:'2440848574e245be0482427477ace718',
    lang:'it-IT'
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
          console.log(result.data);

        })
        .catch((error) => alert('ci sono errori'));
    }
  }
});
