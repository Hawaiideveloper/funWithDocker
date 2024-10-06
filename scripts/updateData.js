// updateData.js: Handles updating the account balance and chart data
import { profitData } from './chart.js';

// Update the account balance display in the UI
function updateAccountBalance(newBalance) {
  document.querySelector('.balance-card p').innerText = `$${newBalance.toLocaleString()}`;
}

// Export the function to make it available to other files
export { updateAccountBalance };
