//siempre se crea un cliente por servicio

import axios from "axios"; //siempre desde todo archivo cliente se debe hacer la importación de axios

//CONSULTAR ESTUDIANTE
const consultarEstudiante = async (id) => {

    //el axios ya tiene incluido implícitamente un await (await axios)
    //No hace falta declararlo, siempre lo tiene
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)//.get("URL de la capacidad") se envia la URL de la capacidad
    console.log(data);
    return data;
    // ``->"comillas simples invertidas", "comillas invertidas", o "backticks" 
}

//POST
const insertar = async (body) =>{
    // axios.post("URL de la capacidad",body(se pone como segundo argumento del post))
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,body).then(r => r.data)
    console.log(data)
}

//await -> es para esperar una respuesta
export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}


export const insertarFachada = async (body) =>{
    await insertar(body);
}
//se necesitan exportar varios métodos: se tiene que colocar export en cada método fachada