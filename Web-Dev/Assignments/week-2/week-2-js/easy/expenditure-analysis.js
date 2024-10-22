/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an object to keep track of total spent per category.
  const categoryTotals = {};

  // Iterate through each transaction.
  transactions.forEach(transaction => {
    // If the category doesn't exist in the object, initialize it with the current 
    // transaction's price.
    if (!categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] = 0;
    }
    // Add the transaction's price to the respective category.
    categoryTotals[transaction.category] += transaction.price;
  });

  // Convert the object into an array of objects with 'category' and 'totalSpent'.
  const result = Object.keys(categoryTotals).map(category => ({
    category: category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
