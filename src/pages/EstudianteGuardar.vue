<template>
  <h1>GUARDAR ESTUDIANTE</h1>
  <EstudianteReutilizable boton="Insertar"/>
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
  color: rgb(66, 71, 157);
}
</style>