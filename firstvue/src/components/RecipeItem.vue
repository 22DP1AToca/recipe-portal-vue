<template>
  <div class="recipe-item">
    <div class="temp-img"></div>
    <div class="content">
      <h1>{{name}}</h1>
      <div class="recipe-details">
          <span class="material-icons">schedule</span>
          <p class="detail-text">{{minutes}} minutes</p>
 
          <div class="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </div>
      </div>
    </div>
    <p class="ingredient-text">1 missing ingredient...</p>
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
        relbarPercentage: 0, // Change this value to adjust the percentage
        userHasIngredients: 4
      };
    },
    watch: {
       // Watch for changes in the amount of ingredients user has
      userHas(newAmount) {
        this.calculateBarPercentage(newAmount);
      },
    },
    props: {
      id: Number,
      name: String,
      minutes: Number,
      ingredients: Number,
      img: String
    },

    methods: {
      calculateBarPercentage(userHas) {
      if (this.ingredientAmountNeeded === 0) return;
      
      // Calculate the percentage of ingredients the user has
      this.barPercentage = (userHas / this.ingredientAmountNeeded) * 100;
      // Ensure it doesn't go above 100% (in case user has more ingredients than needed)
      if (this.barPercentage > 100) {
        this.barPercentage = 100;
      }
      },
      getColor(percentage) {
        if (percentage < 30) {
          return '#e76f51'; // Red
        } else if (percentage < 70) {
          return '#f4a261'; // Orange
        } else{
          return '#4caf50'; // Green
        }
      }
    }
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

  .time-content .material-icons {
    font-size: 18px;
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
    transition: background-color 0.3s ease; /* Smooth transition for color change */
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
