<!-- <template>
  <div class="home">
    <h1>Recipe Portal</h1>
     <SearchBar @search="handleSearch" /> 
    <RecipeList :recipes="recipes" :searchQuery="searchQuery" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import RecipeList from '@/components/RecipeList.vue';

export default {
  components: {
    SearchBar,
    RecipeList,
  },
  data() {
    return {
      recipes: [],
      searchQuery: '',
    };
  },
  created() {
    // Sample static recipe data for illustration
    this.recipes = [
      { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian dish.', image: 'spaghetti.jpg' },
      { id: 2, name: 'Chicken Curry', description: 'A spicy chicken dish.', image: 'chicken-curry.jpg' },
      { id: 3, name: 'Meow meow', description: 'A cat cat.', image: 'nav'},
      // Add more recipes here
    ];
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style> -->

<template>
  <p>this is homepage</p>
</template>

<script>
 
</script>

<style>

</style>