<template>
  <div class="recipe-item">
    <div class="temp-img"></div>
    <div class="content">
      <h1>{{ name }}</h1>
      <div class="recipe-details">
        <span class="material-icons">schedule</span>
        <p class="detail-text">{{ minutes }} minutes</p>

        <div class="rating">
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
          <span class="material-symbols-outlined">star</span>
        </div>
      </div>
    </div>
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
export default {
  data() {
    return {
      relbarPercentage: 0, // Initial bar percentage
      ingredientsMissing: 0, // Initial number of missing ingredients
      userHasIngredients: 4, // Example number of ingredients user has
    };
  },
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
    ingredients: Number, // Total ingredients needed for the recipe
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
    width: 250px;
    height: 300px;
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
    align-items: center;
    height: 25px;
    width: 100%;
  }

  .detail-text {
    margin: 0 10px 0 0;
    font-size: 14px;
    font-weight: 400;
    color: #9B9B9B;
  }

  .content h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 500;
  }

  .ingredient-text {
    margin-bottom: 0;
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

  .material-symbols-outlined {
    color: #FFE500;
    font-size: 20px;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  }

  .material-icons {
    font-size: 18px;
    color: #9B9B9B;
  }
</style>
