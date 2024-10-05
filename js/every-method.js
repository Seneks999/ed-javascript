// Масив об'єктів products (Array of products objects)
const products = [
  { name: 'apple', quantity: 2 },
  { name: 'orange', quantity: 5 },
  { name: 'plum', quantity: 0 },
];

// Метод .every() (The .every() method)
const hasEveryProduct = products.every(product => product.quantity > 0);

// Виведення результату (Displaying the result)
console.log(hasEveryProduct); //

// Виведення результату в елемент з id="score1"
document.getElementById('hasEveryProduct_id').textContent = hasEveryProduct;

// alert для виведення результату
// alert(`Ваш результат: ${hasEveryProduct}`);
