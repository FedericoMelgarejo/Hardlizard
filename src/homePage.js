const fs = require('fs')
let homePage = {
    bd: './data/movies.json',
    titulo: "Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mejor que Netflix, Cuevana y PopCorn",
    JSONparseado: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.JSONparseado().total_movies
    },
    listarPelis: function() {
        let movies = this.JSONparseado();
        let titulosMovies = []
        movies.movies.forEach(function(movie) {
            titulosMovies.push(movie.title)
        })
        titulosMovies.sort()
        return titulosMovies
    }
}
module.exports = homePage
