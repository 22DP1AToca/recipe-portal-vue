<template>
  <div id="app">
    <header>
      <h1>Recipe Portal</h1>
      <nav class="navbar">
        <ul class="nav-list">
            <li><router-link to="/" class="navbar-link">Home</router-link></li>
            <li><router-link to="/uhm" class="navbar-link">Uhm</router-link></li>
        </ul>
      </nav>
    </header>
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

  body{
    margin: 0;
    padding: 0;
  }

  .navbar{
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    top: 0px;
    background-blend-mode: darken;
    background-size: cover;
    color: rgb(0, 0, 0);
    padding: 10px 0 10px 0;
    height: 40px;
  }
  
  header{
    padding-left: 50px;
    background: #fff;
    box-shadow: 1px 6px 5px 0px rgba(0, 0, 0, 0.19);
  }

  .nav-list {
    padding: 0;
    display: flex;
    list-style: none;
  }

  .navbar-link{
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
</style>
