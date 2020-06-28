const fs = require('fs')
let sucursales = {
    bd: './data/theaters.json',
    titulo: "Nuestras Sucursales",
    JSONparseado: function() {
        let sucJson = fs.readFileSync(this.bd, 'utf-8');
        let suc = JSON.parse(sucJson);
        return suc
    },
    totalSalas: function() {
        return this.JSONparseado().total_theaters
 },
}
 module.exports=sucursales