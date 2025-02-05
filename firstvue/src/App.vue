<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  body, html {
    font-family: "Montserrat", serif;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgb(250, 250, 250);
  }
/*
  #app {
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #2c3e50;
    min-height: 100%;
  }

  header {
    padding: 10px 0 0 50px;
    box-shadow: 0 1px 5px #bdbdbd;
  }

  header h1{
    font-size: 28px;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(0, 0, 0);
    padding: 10px 0 10px 0;
    height: 40px;

  }

  .nav-list {
    padding: 0;
    display: flex;
    list-style: none;
  }

  .navbar-link {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: 18px;
    transition: color 0.3s ease-in-out;
  }

  .nav-list li {
    margin-right: 20px;
  }

  .navbar-link:hover {
    color: #b3b3b3;
  } */
</style>
