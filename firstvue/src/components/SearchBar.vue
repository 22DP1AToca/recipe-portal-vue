<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        placeholder="Search for a recipe..."
        @input="onSearch"
      />
    </div>
</template>
  
<script>
    export default{
        data() {
            return {
                query: '',
            }
        },
    methods: {
        onSearch() {
            this.$emit('search', this.query);
        },}
    }
</script>
  
<style scoped>
    .search-bar input {
        padding: 10px;
        width: 300px;
        font-size: 16px;
    }
</style>
  