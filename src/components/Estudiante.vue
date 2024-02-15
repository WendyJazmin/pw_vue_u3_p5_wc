<template>
  <h1>Componente Estudiante</h1>

  <input  v-model="id" type="text">
  <button @click="consultarPorId">Consultar</button>

  <input  v-model="nombre" type="text"/>
  <input  v-model="apellido" type="text"/>
  <button @click="insertar">Insertar</button>

</template>

<script>

import {consultarEstudianteFachada, insertarFachada} from "../helpers/clienteEstudiante.js"

export default {
    data(){
        return{
            id:null,
            nombre: null,
            apellido: null
        };
    },

    methods:{
        async consultarPorId(){
           const data = await consultarEstudianteFachada(this.id);
           console.log('Desde componente');
           console.log(data);
           this.nombre = data.nombre;
        },

       async insertar(){

            const estuBody = {
        
                nombre: "alison",
                apellido: this.apellido,
                genero: "femenino",
                fechaNacimiento: "2000-01-03T00:00:00",
                correoElectronico: "alisonperez@hotmail.com",
                numeroTelefono: "1212144",
                direccion: "Av. Amazonas",
                anioIngreso: 2019,
                carrera: "Diseño Gráfico"
            };

            await insertarFachada(estuBody);
        },
    }
};
</script>

<style>

</style>