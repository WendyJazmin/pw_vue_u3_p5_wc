<template>
  <div>
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>


export default {
    
};
</script>

<style >

div a {
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: 1px solid;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: rgb(203, 215, 255);
}
.router-link-exact-active{
    background-color: white;
}
</style>