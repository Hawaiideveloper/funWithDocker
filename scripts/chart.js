// chart.js: Manages chart creation and configuration

export let profitData = [1000, 2000, 4000, 6000, 9000, 12000, 15000]; // Initial data

export function createProfitChart() {
  const canvas = document.getElementById('profitChart');
  
  // Check if canvas element exists
  if (!canvas) {
    console.error("Canvas element with ID 'profitChart' not found.");
    return null; // Return null if canvas is missing
  }

  const ctx = canvas.getContext('2d');

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ],
      datasets: [{
        label: 'Profits',
        data: profitData,
        borderColor: '#FFD700', // Bright gold color for line
        borderWidth: 3,
        fill: false,
        pointRadius: 6, // Increase size of points
        pointBackgroundColor: 'rgba(255, 223, 0, 1)', // Gold points
        pointBorderColor: 'rgba(255, 215, 0, 0.7)', // Slightly transparent border
        pointBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: Math.max(...profitData) + 1000,
          ticks: {
            color: 'white'
          }
        },
        x: {
          ticks: {
            color: 'white'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white' // Make the legend text white
          }
        }
      }
    }
  });
}

