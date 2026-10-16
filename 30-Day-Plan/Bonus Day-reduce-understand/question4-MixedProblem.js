
function analyzeSales(sales) {
    const grouped = sales.reduce((acc, sale) => {
        if (!acc.byCategory[sale.category]) {
            acc.byCategory[sale.category] = [];
        }

        acc.byCategory[sale.category].push(sale);

        acc.totalAmount += sale.amount;

        if (!acc.countByCategory[sale.category]) {
            acc.countByCategory[sale.category] = 0;
        }

        acc.countByCategory[sale.category]++;

        return acc;
    }, {
        byCategory: {},
        countByCategory: {},
        totalAmount: 0
    });

    return grouped;
}

const sales = [
    { product: "Laptop", category: "Electronics", amount: 50000 },
    { product: "Shirt", category: "Clothing", amount: 1200 },
    { product: "Mouse", category: "Electronics", amount: 800 },
    { product: "Jeans", category: "Clothing", amount: 2000 },
    { product: "Keyboard", category: "Electronics", amount: 1500 }
];

const result = analyzeSales(sales);
console.log(result);
