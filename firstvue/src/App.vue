<template>
  <div id="app">
    <!-- <nav class="navbar">
      <h1 class="navbar-header">Recipe portal</h1>
      <ul class="navbar-list">
        <li><router-link to="/" class="navbar-link">Home</router-link></li>
        <li><router-link to="/uhm" class="navbar-link">Uhm</router-link></li>
      </ul>
    </nav> -->

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  #app {
    font-family: Arial;
    color: #2c3e50;
  }
</style>
