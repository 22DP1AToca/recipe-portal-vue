<template>
  <nav>
    <div class="nav-content">
      <div class="logo">
        <a href="/">RecipeFridge</a>
      </div>
      <SearchBar @search="handleSearch" />
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/uhm">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  methods: {
    handleSearch(query) {
      this.$emit('search', query);
    },
  },
};
</script>

<style scoped>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    z-index: 1;
    
    }
    nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: rgb(250, 250, 250);
    transition: all 0.4s ease;
    }
    nav.sticky{
    padding: 15px 20px;
    background: #4070f4;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    nav .nav-content{
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    nav .logo a{
    font-weight: 600;
    font-size: 35px;
    color: #000000;
    }
    nav.sticky .logo a{
    color: #fff;
    }
    .nav-content .nav-links{
    display: flex;
    }
    .nav-content .nav-links li{
    list-style: none;
    margin: 0 8px;
    }
    .nav-links li a{
    text-decoration: none;
    color: #0E2431;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 4px;
    transition: all 0.3s ease;
    }
    .nav-links li a:hover{
    color: #f44040;
    }
    nav.sticky .nav-links li a{
    color: #fff;
    transition: all 0.4s ease;
    }
    nav.sticky .nav-links li a:hover{
    color: #0E2431;
    }
    .home{
    height: 100vh;
    width: 100%;
    background: url("images/background.png") no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
    }
    h2{
    font-size: 30px;
    margin-bottom: 6px;
    color: #4070f4;
    }
    .text{
    text-align: justify;
    padding: 40px 80px;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
    }
</style>