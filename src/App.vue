<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <h1>Colegio Tamachtliani</h1>

    <nav>
      <RouterLink to="/">Nosotros</RouterLink>
      <RouterLink to="/programas">Programas</RouterLink>
      <RouterLink to="/instalaciones">Instalaciones</RouterLink>
      <RouterLink to="/ubicacion">Ubicación</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(58, 146, 235);
  color: rgb(247, 246, 246);
}

nav a {
  color: #fff;
  margin-right: 5px;
  font-size: 1.5rem;
  text-decoration: none;
}

nav a:hover {
  color: #111111;
}
</style>