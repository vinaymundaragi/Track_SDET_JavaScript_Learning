//Question 23: Calculate the total price of products using reduce()

const products = [
    { name: "Keyboard", price: 1000 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 7000 }
];

const totalPrice = products.reduce(((acc, product) => acc + product.price) ,0);

console.log(totalPrice);