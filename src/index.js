import './css/index.scss';
const nombre = ["motz", "alejo", "cope", "teo", 5, 7]


function llamarA (nombre) { 
    nombre.forEach(element => {
        
        document.write (`<h3> Hola: <span> ${element} </span> </h3>  `)
    });

}
//llamarA (nombre)