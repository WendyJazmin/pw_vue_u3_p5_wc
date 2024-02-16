//siempre se crea un cliente por servicio

import axios from "axios"; //siempre desde todo archivo cliente se debe hacer la importación de axios



//------------------------------------ FUNCIONES -----------------------------------

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

//ACTUALIZAR
//http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}
const actualizar = async (id, body) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,body).then(r => r.data);
    console.log(data);
}

//ELIMINAR
const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
    console.log(data);
}


//---------------------------------- FACHADAS --------------------------------------

//se necesitan exportar varios métodos: se tiene que colocar export en cada método fachada
//await -> es para esperar una respuesta

//BUSCAR
export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}

//INSERTAR
export const insertarFachada = async (body) => {
    await insertar(body);
}

//ACTUALIZAR
export const actualizarFachada = async (id,body) =>{
    await actualizar(id, body);
}

//ELIMINAR
export const eliminarFachada = async (id) => {
    await eliminar(id);
}