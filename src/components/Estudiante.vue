<template>
  <h1>Componente Estudiante</h1>

  <div class="container1">
    <p type = "ID:"><input  v-model="id" type="text"></p>
    <button @click="consultarPorId">Consultar</button>
  </div>
  
  <div class="container2">
    <!--DATOS DEL ESTUDIANTE-->
    <p type="Nombre: "><input v-model="nombre" type="text"></p>
    <p type ="Apellido:"><input v-model="apellido" type="text"/></p>
    <p type = "Género:"><input v-model="genero" type="text"/></p>
    <p type = "Fecha de Nacimiento:"><input v-model="fechaNacimiento" type="text"/></p>
    <p type = "Correo Electrónico:"> <input v-model="correoElectronico" type="text"/></p>
    <p type = "Número de Teléfono:"> <input v-model="numeroTelefono" type="text"/></p>
    <p type = "Dirección:"><input v-model="direccion" type="text"/></p>
    <p type = "Año de Ingreso:"><input v-model="anioIngreso" type="text"/></p>
    <p type = "Carrera:"><input v-model="carrera" type="text"/></p>
    
    <button @click="insertar">Insertar</button>
  </div>
  

</template>

<script>

import {consultarEstudianteFachada, insertarFachada} from "../helpers/clienteEstudiante.js"

export default {
    data(){
        return{
            id:null,
            nombre: null,
            apellido: null,
            genero: null,
            fechaNacimiento: null,
            correoElectronico: null,
            numeroTelefono: null,
            direccion: null,
            anioIngreso: null,
            carrera: null
        };
    },

    methods:{
        async consultarPorId(){
           const data = await consultarEstudianteFachada(this.id);
           console.log('Desde componente');
           console.log(data);

           this.nombre = data.nombre;
           this.apellido = data.apellido;
            this.genero = data.genero,
            this.fechaNacimiento = data.fechaNacimiento,
            this.correoElectronico = data.correoElectronico,
            this.numeroTelefono = data.numeroTelefono,
            this.direccion = data.direccion,
            this.anioIngreso = data.anioIngreso,
            this.carrera = data.carrera
        },

       async insertar(){

            const estuBody = {
        
                nombre: this.nombre,
                apellido: this.apellido,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                correoElectronico: this.correoElectronico,
                numeroTelefono: this.numeroTelefono,
                direccion: this.direccion,
                anioIngreso: this.anioIngreso,
                carrera: this.carrera
            };

            await insertarFachada(estuBody);
        },
    }
};
</script>

<style scope>

h1{
    font-family: "Quicksand", sans-serif;
    font-weight: 750;/**grosor de la fuente */
}

p{
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
}

.container1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background-color: rgb(207, 205, 251);
  border: solid 1px black;
  padding-bottom: 10px;
}

.container2{
    /*display: flex;*/
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  background: #dee8ed;
  margin: auto;
  border: solid 1px black;
  padding-bottom: 10px;
}

/*para visualizar las etiquetas*/
p:before{

    font-family:"Baloo 2", sans-serif;
    content: attr(type);
    display: block;/*se muestre el bloque completo*/
    font-size: 16px;
    color: #653090;
    font-weight: 600;
}

input {
    height: 25px;
    width: 200px; /* O un valor específico en px, como 300px */
    font-family: monospace;
    text-align: center;
    background: #d2efff;
    border: 1px solid rgba(41, 31, 90, 0.478);
    padding: 0; /* O ajusta según la necesidad */
}

button{
    font-family:"Quicksand", sans-serif;
    background-color: #543b69;
    color: #d7f2ff;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;/**grosor de la fuente */
}
</style>