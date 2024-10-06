// main.js: Central script to coordinate all modules
import { createProfitChart, profitData } from './chart.js';
import { updateAccountBalance } from './updateData.js';
import { addShimmerEffect } from './effects.js';
import { addNewTransaction } from './transactions.js';
import { setupInvestButton } from './investButton.js';

// Set up the Invest More button event handler
setupInvestButton();

// Initialize the chart using the chart module
console.log("Initializing chart...");
const profitChart = createProfitChart();

if (!profitChart) {
  console.error("Chart failed to initialize. Exiting script.");
} else {
  console.log("Chart initialized successfully.");
}

// Simulate real-time profit updates every 15 seconds
setInterval(() => {
  console.log("Updating data...");

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
  console.log("Chart updated successfully with new data:", profitData);

  // Add a new mock transaction to the transaction history
  addNewTransaction();

  // Trigger shimmer effect
  addShimmerEffect();
}, 15000); // Update every 15 seconds
