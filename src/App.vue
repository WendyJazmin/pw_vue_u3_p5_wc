<template>
  <!--<EstudiantePagina></EstudiantePagina>-->
  <h1>Universidad Central del Ecuador</h1>
  <NavBar/>
  <router-view /><!--Permite mostrar las páginas que se encuentran en el router.js-->
  
</template>

<script>
import EstudiantePagina from './pages/EstudiantePagina.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    EstudiantePagina,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
    
    font-family: "Quicksand", sans-serif;
    font-weight: 750;/**grosor de la fuente */
   
  }
</style>
