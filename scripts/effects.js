// effects.js: Manages visual effects like shimmering on the chart

// Add shimmer effect to the chart canvas
function addShimmerEffect() {
    const chartCanvas = document.getElementById('profitChart');
    chartCanvas.classList.add('shimmer-effect');
  
    setTimeout(() => {
      chartCanvas.classList.remove('shimmer-effect');
    }, 1000); // Duration of the shimmer effect
  }
  
  // Export the function
  export { addShimmerEffect };
  