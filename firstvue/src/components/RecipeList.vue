<!-- <template>
    <div class="recipe-list">
      <RecipeItem v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
</template>
  
<script>
    import RecipeItem from './RecipeItem.vue';
    
    export default {
        components: {
        RecipeItem,
    },

    props: ['recipes', 'searchQuery'],
    computed: {
      filteredRecipes() {
        if (this.searchQuery) {
          return this.recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return this.recipes;
      },
    },
  };
</script>
  
<style scoped>
    .recipe-list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
</style>
   -->