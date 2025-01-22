<template>
  <div id="app">
    <div>
      <header>
        <h1>Recipe Portal</h1>
        <nav class="navbar">
          <ul class="nav-list">
              <li><router-link to="/" class="navbar-link">Home</router-link></li>
              <li><router-link to="/uhm" class="navbar-link">Uhm</router-link></li>
          </ul>
        </nav>
      </header>
    </div>
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
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #2c3e50;
    min-height: 100%;
  }

  header {
    padding-left: 50px;
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
  }

  main {
    padding: 20px;
  }
</style>
