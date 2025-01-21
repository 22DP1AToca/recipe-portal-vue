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
    <div class="content">
      <h1>Butter chicken</h1>
      <ul class="recipe-details">
        <li>
          <span class="material-icons">schedule</span>
          <span>15</span>
          <span>minutes</span>
        </li>
        <li>
          <span class="material-icons">person</span>
          <span>2</span>
          <span>servings</span>
        </li>
        <li>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
        </li>
      </ul>
    </div>
    <div class="relbar-container">
      <div class="relbar">
        <div class="relbar-fill" style="width: 25%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    
  }
</script>

<style scoped>
.recipe-item {
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 400px;
  padding: 5px 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.temp-img {
  width: 100%;
  height: 250px;
  background-color: grey;
}

.recipe-details {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
}

.recipe-details li {
  display: flex;
  align-items: center;
}

.time-content .material-icons {
  font-size: 18px;
}

.relbar-container {
  margin-top: auto;

}

.relbar {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #e76f51;
}

.relbar-fill {
  height: 100%;
  width: 25%;
  border-radius: 5px;
  background-color: #e76f51;
}

</style>