const fs = require('fs')
let preguntasFrecuentes = {
    bd: './data/faqs.json',
    titulo: "Preguntas Frecuentes",
    JSONparseado: function() {
        let faqsJson = fs.readFileSync(this.bd, 'utf-8');
        let faqs = JSON.parse(faqsJson);
        return faqs
    },
    cantidadPreguntas: function() {
        return this.JSONparseado().total_faqs
    },
}

module.exports= preguntasFrecuentes