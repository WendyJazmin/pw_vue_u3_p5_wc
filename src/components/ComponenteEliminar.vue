<!--TAREA 13-->
<template>
   <h1>ELIMINAR ESTUDIANTE</h1>

    <input  v-model="id" type="text" placeholder="ingrese ID">
    <button @click="eliminar">Eliminar</button>

</template>

<script>
    import {eliminarFachada} from "../helpers/clienteEstudiante.js"

    export default {

        data(){
            return{
            id:null
            };
         },

    methods:{
        async eliminar(){
        await eliminarFachada(this.id);
    }
}

}   

</script>

<style scoped>

h1{
    font-family: "Quicksand", sans-serif;
    font-weight: 750;/**grosor de la fuente */
    color: rgb(134, 1, 1);
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