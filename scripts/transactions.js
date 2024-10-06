// transactions.js: Manages transaction generation and updates

// Generate a random mock transaction
function generateMockTransaction() {
    const tickers = ['AAPL', 'TSLA', 'GOOGL', 'AMZN', 'MSFT', 'FB'];
    const types = ['Buy', 'Sell'];
    const randomTicker = tickers[Math.floor(Math.random() * tickers.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const amount = (Math.floor(Math.random() * 1000) + 100).toLocaleString(); // Random amount
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
  
    return `<tr><td>${formattedDate}</td><td>${randomTicker}</td><td>${randomType} $${amount}</td></tr>`;
  }
  
  // Append a new transaction to the table
  function addNewTransaction() {
    const transactionBody = document.getElementById('transaction-body');
    transactionBody.innerHTML += generateMockTransaction();
  }
  
  // Export the functions
  export { generateMockTransaction, addNewTransaction };
  