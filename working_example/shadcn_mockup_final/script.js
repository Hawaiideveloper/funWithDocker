// Mock JavaScript for handling invest button
document.querySelector('.invest-button').addEventListener('click', function() {
  alert('Investment feature coming soon!');
});

// Line chart showing increasing profits over time in gold
let profitData = [1000, 2000, 4000, 6000, 9000, 12000, 15000];
const ctx = document.getElementById('profitChart').getContext('2d');
const profitChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Profits',
          data: profitData,
          borderColor: 'gold',
          borderWidth: 3, // Thicker line for better visibility
          fill: false,
          pointRadius: 4, // Larger points for visibility
          pointBackgroundColor: 'gold' // Color for points
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              max: Math.max(...profitData) + 1000, // Set max Y value based on profit data
              ticks: {
                  color: 'white'  // Make y-axis labels white
              }
          },
          x: {
              ticks: {
                  color: 'white'  // Make x-axis labels white
              }
          }
      }
  }
});

// Function to update account balance display
function updateAccountBalance(newBalance) {
  document.querySelector('.balance-card p').innerText = `$${newBalance.toLocaleString()}`;
}

// Function to generate a mock transaction
function generateMockTransaction() {
  const tickers = ['AAPL', 'TSLA', 'GOOGL', 'AMZN', 'MSFT', 'FB'];
  const types = ['Buy', 'Sell'];
  const randomTicker = tickers[Math.floor(Math.random() * tickers.length)];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const amount = (Math.floor(Math.random() * 1000) + 100).toLocaleString(); // Random amount between 100 and 1100
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return `<tr><td>${formattedDate}</td><td>${randomTicker}</td><td>${randomType} $${amount}</td></tr>`;
}

// Function to add shimmering effect
function addShimmerEffect() {
  const chartCanvas = document.getElementById('profitChart');
  chartCanvas.classList.add('shimmer-effect');

  setTimeout(() => {
      chartCanvas.classList.remove('shimmer-effect');
  }, 1000); // Duration of the shimmer effect
}

// Simulate real-time profit updates every 15 seconds
setInterval(() => {
  const lastProfit = profitData[profitData.length - 1];
  const newProfit = lastProfit + Math.floor(Math.random() * 1000) + 500;
  profitData.push(newProfit);

  // Update the account balance to reflect the total profits
  updateAccountBalance(newProfit);

  // Keep the last 10 data points on the chart
  if (profitData.length > 10) {
      profitData.shift(); // Remove the oldest data point
      profitChart.data.labels.shift();
  }

  // Update the chart with new data
  profitChart.update();

  // Add a new mock transaction to the transaction history
  const transactionBody = document.getElementById('transaction-body');
  transactionBody.innerHTML += generateMockTransaction();

  // Trigger shimmer effect
  addShimmerEffect();
}, 15000); // Update every 15 seconds
