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
   RecipeItem
 },
 data() {
   return {
     recipes: [],
   };
 },
 created() {
   // Dynamically import the images
   this.recipes = [
     { id: 1, name: 'Healthy Rich Salad', img: '@/assets/salad.jpg', minutes: 12, ingredients: 6},
     { id: 2, name: 'Butter chicken', img: '@/assets/chicken-curry.jpg', minutes: 15, ingredients: 4},
     { id: 3, name: 'Eggs and bacon', img: '@/assets/chicken-curry.jpg', minutes: 10, ingredients: 8},
     { id: 4, name: 'Kikas special', img: '@/assets/chicken-curry.jpg', minutes: 60, ingredients: 9},
     { id: 5, name: 'recipe', img: '0', minutes: 0, ingredients: 0},
     { id: 6, name: 'recipe', img: '0', minutes: 0, ingredients: 0},
     { id: 7, name: 'recipe', img: '0', minutes: 0, ingredients: 0},
   ];
 },
};
</script>

<style scoped>
 main {
   padding: 50px 0 0 50px;
 }

 .recipe-container {
   display: grid; /* Use grid layout */
   grid-template-columns: repeat(6, 1fr); 
   gap: 20px; /* Spacing between items */
   justify-items: center; /* Center items horizontally */
   padding: 20px;
 }
</style>
