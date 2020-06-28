const fs = require('fs')
let masVotadas = {
    bd: './data/movies.json',
    titulo: "Mas Votadas",
    JSONparseado: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        let pelis = this.JSONparseado();
        let masVotadas = pelis.movies.filter(function(dat){
            return dat.vote_average >= 7;
        })
        return masVotadas.length

    },
    listarPelis: function() {
        let pelis = this.JSONparseado();
        let masVotadas = pelis.movies.filter(function(dat){
            return dat.vote_average >= 7;
        })
        return masVotadas

    },
    promedioRating: function(){
        let pelis = this.listarPelis();
        let promedio=0;
        pelis.forEach(function(dat){
            promedio += dat.vote_average
        })
        return Math.round(promedio / pelis.length)
    }
    //aporte de facu vara, rating promediado mas exacto con metodo .reduce
    
    /*promedioRating: function(){
        let movies = this.listarPelis()
        let rating = []
        movies.forEach(movie => {
            rating.push(movie.vote_average) 
        });
        let ratingSumado = rating.reduce(function(acum,num){
            return acum + num
        })
        return (ratingSumado / movies.length)
        },*/
}
module.exports=masVotadas