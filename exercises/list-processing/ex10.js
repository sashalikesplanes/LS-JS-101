let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

const transactionsFor = (id, txList) => {
  return txList.filter((tx) => tx.id === id);
};

// loop over all matching transactions
// sum up quantities
// return true if sum > 0

const isItemAvailable = (item, txList) => {
  const totalQuantity = transactionsFor(item, txList).reduce((totalQ, item) => {
    if (item.movement === "in") return totalQ + item.quantity;
    else if (item.movement === "out") return totalQ - item.quantity;
    else return totalQ;
  }, 0);
  return totalQuantity > 0;
};

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));
