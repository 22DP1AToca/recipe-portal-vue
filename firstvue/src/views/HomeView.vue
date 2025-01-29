<template>
  <main>
   <div class="recipe-container">
      <!-- Loop through the recipes array and pass each recipe to RecipeItem -->
     <RecipeItem 
       v-for="recipe in recipes" 
       :key="recipe.id" 
       :id="recipe.id" 
       :name="recipe.name" 
       :minutes="recipe.minutes" 
       :rating="recipe.rating"
       :ingredients="recipe.ingredients" 
       :img="recipe.img" 
     />
   </div>
 </main>
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue';

export default {
 components: {
   RecipeItem,
 },
 data() {
   return {
     recipes: [],
   };
 },
 created() {
   // Dynamically import the images
   this.recipes = [
     { id: 1, name: 'Healthy Rich Salad', img:'/src/assets/images/salad.jpg', minutes: 12, rating: 3, ingredients: 6},
    //  { id: 2, name: 'Butter chicken', img: '0', minutes: 15, rating: 4, ingredients: 4},
    //  { id: 3, name: 'Eggs and bacon', img: '0', minutes: 10, rating: 2, ingredients: 8},
     { id: 4, name: 'Kikas special', img: '/src/assets/images/kika-special.jpg', minutes: 60, rating: 6, ingredients: 9},
     { id: 5, name: 'recipe', img: '0', minutes: 0, rating: 0, ingredients: 0},
     { id: 6, name: 'recipe', img: '0', minutes: 0, rating: 0, ingredients: 0},
    // { id: 7, name: 'recipe', img: '0', minutes: 0, rating: 0, ingredients: 0},
   ];
 },
};
</script>

<style scoped>
 main {
   padding: 50px 50px 0 50px;
 }

 .recipe-container {
   display: grid; /* Use grid layout */
   grid-template-columns: auto auto auto auto; 
   gap: 10px; /* Spacing between items */
   justify-items: center; /* Center items horizontally */
   padding: 20px;
 }
</style>
