<template>

  <h1>CONSULTAR ESTUDIANTE</h1>
 
  <EstudianteReutilizable boton="Consultar"/>
  
</template>

<script>

import EstudianteReutilizable from "../components/EstudianteReutilizable.vue"

export default {

  created(){
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(THIS.$route.query.nombre)
    console.log(THIS.$route.query.apellido)
    
  },
  
  //
  methods:{
    consultar(){

    }
  },
    components: {
      EstudianteReutilizable
  },
};

</script>

<style scoped>


  h1{
    font-family: "Quicksand", sans-serif;
    font-weight: 750;/**grosor de la fuente */
    color: rgb(107, 33, 212);
  }
  
</style>


