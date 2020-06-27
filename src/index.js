let homePage = require('./homePage.js')
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales')
let contacto = require('./contacto')
let preguntasFrecuentes= require("./preguntasFrecuentes")

let index ={
    homePage: function(res){
        res.write(homePage.titulo +'\n \n');

        res.write("Total: " + homePage.cantidad() + '\n \n');
        let titulos = homePage.listarPelis();
        for (titulo of titulos) {
            res.write(titulo)
            res.write('\n')
        }
        res.write('\n')
        res.write('Recorda que podes visitar las secciones: \n \n')
        res.write('I.En Carteleta \n')
        res.write('II.Mas Votadas \n')
        res.write('III.Sucursales \n')
        res.write('IV.Contacto \n')
        res.write('V.Preguntas Frecuentes')
        res.end()
    },
    enCartelera: function(res){

        res.write(enCartelera.titulo +'\n \n');
        res.write("Total: " + homePage.cantidad() + '\n \n');
        let pelis = enCartelera.JSONparseado();
        pelis.movies.forEach(function(dat){
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("Titulo: " + dat.title)  
            res.write("\n")
            res.write("Reseña:")                 
            res.write("\n")                      
            res.write(dat.overview)            
            res.write("\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n")
        })
        res.end();
    },
    masVotadas: function(res){
 
        res.write(masVotadas.titulo +'\n \n');
 
        res.write(`Total: ${masVotadas.cantidad()}\n \n`);
 
        res.write(`Promedio de Ratings: ${masVotadas.promedioRating()} \n \n`);
 
        let pelis = masVotadas.listarPelis();     
        
        pelis.forEach(function(dat){
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("Titulo: " + dat.title)             
            res.write("\n")
            res.write("Rating: " + dat.vote_average)      
            res.write("\n")
            res.write("Reseña:")                           
            res.write("\n")                              
            res.write(dat.overview)                      
            res.write("\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n")
        })
        res.end();
    },
    sucursales: function(res){
        //titulo
        res.write(sucursales.titulo +'\n \n');
        //cantidad de salas
        res.write("Total de Salas: " + sucursales.totalSalas() + '\n \n');
        //lista de salas: Nombre, Direccion y Descripcion
        let salas = sucursales.JSONparseado();           
        salas.theaters.forEach(function(datos){
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
        res.write("Nombre: " + datos.name)              //NOMBRE
        res.write("\n")
        res.write("Direccion: " + datos.address)        //DIRECCION
        res.write("\n")
        res.write("Descripcion:")                       //____________
        res.write("\n")                                 //DESCRIPCION |
        res.write(datos.description)                    //¨¨¨¨¨¨¨¨¨¨¨¨
        res.write("\n")
        res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
        res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n")
        })
        res.end();
    },
    contacto: function(res){
        
        res.write(contacto.titulo + "\n \n")
        
        res.write(contacto.contenido + "\n \n")
        
        res.end();
    },

    preguntasFrecuentes: function(res){
        //titulo
        res.write(preguntasFrecuentes.titulo + "\n \n")
        //total de preguntas
        res.write("Total de preguntas: " + preguntasFrecuentes.cantidadPreguntas() + "\n \n")
        //listado de preguntas y respuestas
        let preguntas = preguntasFrecuentes.JSONparseado();
        preguntas.faqs.forEach(function(PyR){
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("Pregunta: " + PyR.faq_title)
            res.write("\n \n")
            res.write("Respuesta: " + PyR.faq_answer)
            res.write("\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
            res.write("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n")
        })
        res.end();
    }
}
module.exports = index