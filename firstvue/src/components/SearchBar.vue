<!-- SearchBar.vue -->
<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        :placeholder="placeholder"
        @input="onSearch"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Search recipes...',
      },
    },
    data() {
      return {
        query: '',
      };
    },
    methods: {
      onSearch() {
        this.$emit('search', this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    text-align: center;
  }
  
  .search-bar input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  