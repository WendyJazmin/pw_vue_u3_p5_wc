<template>
  <h1>ACTUALIZAR ESTUDIANTE</h1>
  <EstudianteReutilizable boton="Actualizar"/>
</template>

<script>

import EstudianteReutilizable from "../components/EstudianteReutilizable.vue"

export default {
    components: {
      EstudianteReutilizable
  },
};
</script>

<style scoped>

  h1{
    
    font-family: "Quicksand", sans-serif;
    font-weight: 750;/**grosor de la fuente */
    color: rgb(157, 5, 168);
  }
</style>