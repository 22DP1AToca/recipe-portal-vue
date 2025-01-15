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
  <div>
    <p>This is the homepage</p>
    <img src="./assets/salad.jpg" alt="">
    <div>
      <!-- <div v-for="x in recipes" :key="x.id">
        Use the imported image paths in the src attribute 
        <img :src="x.image" :alt="x.name" />
        <p>{{ x.name }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    // Dynamically import the images
    this.recipes = [
      { id: 1, name: 'Healthy Rich Salad', description: 'A healthy salad.', image: require('@/assets/salad.jpg') },
      { id: 2, name: 'Chicken Curry', description: 'A spicy chicken dish.', image: require('@/assets/chicken-curry.jpg') },
      { id: 3, name: 'Meow Meow', description: 'A cute cat.', image: require('@/assets/nav.jpg') },
    ];
  },
};
</script>

<style scoped>
/* Add any styles you like here */
</style>
