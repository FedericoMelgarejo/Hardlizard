const fs = require('fs');
let enCartelera = {
    bd: './data/movies.json',
    titulo: "En Cartelera",
    JSONparseado: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.JSONparseado().total_movies
    }
}
module.exports = enCartelera