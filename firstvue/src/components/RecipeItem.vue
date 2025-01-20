<!-- <template>
    <div class="recipe-item">
      <img :src="recipe.image" alt="Recipe Image" />
      <h3>{{ recipe.name }}</h3>
      <p>{{ recipe.description }}</p>
      <button @click="viewRecipe">View Recipe</button>
    </div>
</template>
  
<script>
  export default {
    props: ['recipe'],
    methods: {
      viewRecipe() {
        this.$router.push({ name: 'recipe-detail', params: { id: this.recipe.id } });
      },
    },
  }
</script>
  
<style scoped>
    .recipe-item {
        border: 1px solid #ddd;
        padding: 15px;
        margin: 10px;
        width: 200px;
        text-align: center;
    }

    .recipe-item img {
        width: 100%;
        height: auto;
    }
</style>
   -->

<template>
  <div class = "recipe-item">
    <div class="temp-img"></div>
    <h1>Chicken</h1>
    <p></p>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style scoped>
  .recipe-item{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    height: 300px;
    padding: 5px 10px 5px 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .temp-img{
    width: 100%;
    height: 200px;
    background-color: grey;
  }
</style>