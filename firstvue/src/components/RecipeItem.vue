<template>
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
  