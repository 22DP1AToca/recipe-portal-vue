<template>
  <div class="recipe-item">
    <div class="image-container">
      <img :src="img" alt="">
      <h1>{{ name }}</h1>
      <div class="recipe-details">
        <span class="material-icons">schedule</span>
        <p class="detail-text">{{ minutes }} min</p>
        <StarRating :rating="rating"/>
      </div>
    </div>
    <!-- <div class="content">
      <h1>{{ name }}</h1> 
      <div class="recipe-details">
        <span class="material-icons">schedule</span>
        <p class="detail-text">{{ minutes }} min</p>
        <StarRating :rating="rating"/>
      </div>
    </div> -->
    
    <p class="ingredient-text">{{ ingredientsMissing }} missing ingredient{{ ingredientsMissing !== 1 ? 's' : '' }}...</p>
    <div class="relbar-container">
      <div class="relbar">
        <div
          class="relbar-fill"
          :style="{
            width: relbarPercentage + '%',
            backgroundColor: getColor(relbarPercentage)
          }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
  data() {
    return {
      relbarPercentage: 0, // Initial bar percentage
      ingredientsMissing: 0, // Initial number of missing ingredients
      userHasIngredients: 4, // Example number of ingredients user has
    };
  },
  components:{
    StarRating
  }
  ,
  watch: {
    // Watch for changes in the user's ingredient count and recalculate the bar and missing ingredients
    userHasIngredients(newAmount) {
      this.calculateBarPercentage(newAmount);
      this.updateMissingIngredients(newAmount);
    },
  },
  props: {
    id: Number,
    name: String,
    minutes: Number,
    ingredients: Number,
    rating: Number, // Total ingredients needed for the recipe
    img: String,
  },
  methods: {
    // Calculate the progress bar percentage
    calculateBarPercentage(userHas) {
      if (this.ingredients === 0) {
        return;
      }

      this.relbarPercentage = (userHas / this.ingredients) * 100;

      // Ensure percentage doesn't exceed 100%
      if (this.relbarPercentage > 100) {
        this.relbarPercentage = 100;
      }
    },
    // Update the number of missing ingredients
    updateMissingIngredients(userHas) {
      this.ingredientsMissing = Math.max(0, this.ingredients - userHas);
    },
    // Dynamically get color based on the percentage
    getColor(percentage) {
      if (percentage < 30) {
        return '#e76f51'; // Red
      } else if (percentage < 70) {
        return '#f4a261'; // Orange
      } else {
        return '#4caf50'; // Green
      }
    },
  },
  mounted() {
    // Initial calculation when the component is mounted
    this.calculateBarPercentage(this.userHasIngredients);
    this.updateMissingIngredients(this.userHasIngredients);
  },
};
</script>

<style scoped>
  .recipe-item {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .image-container{
    position: relative;
    width: auto;
    height: 90%;
  }

  .image-container img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .image-container h1{
    position: absolute;
    bottom: 6px;
    left: 7px;
    background-color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    padding: 5px;
  }
  /* .content{
    padding: 0 5px 5px 5px;
  } */

  /* .content h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 500;
  } */

  .recipe-details {
    position: absolute;
    bottom: 6px;
    left: 7px;

    background-color: #ffffff;
    margin: 0;
    padding-inline: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
  }

  .detail-text {
    margin: 0 10px 0 0;
    font-size: 12px;
    font-weight: 400;
    color: #9B9B9B;
  }

  .ingredient-text {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: #9B9B9B;
  }

  .relbar-container {
    margin-top: 10px;
  }

  .relbar {
    width: 100%;
    height: 7px;
    border-radius: 5px;
    box-shadow: 0 0 1px #656565;
  }

  .relbar-fill {
    height: 100%;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  /* .material-symbols-outlined {
    color: #FFE500;
    font-size: 20px;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  } */

  .material-icons {
    font-size: 16px;
    color: #9B9B9B;
  }
</style>
