
interface Product {
    id:  number;
    name: string;
    price: number;
    stock: number;
};

let inventory: Product[] = [
    {id: 1, name: "Keyboard", price: 500, stock: 4},
    {id: 2, name: "Bat", price: 200, stock: 7},
];

function displayInventory(): void{
    console.log("\n=====Current Inventory=====");
    inventory.forEach(product => {
        console.log(`ID: ${product.id} | ${product.name} | ${product.price} | ${product.stock}`);
    })
    console.log("===========================");
}

function addProduct(newProduct: Product): void{
    inventory.push(newProduct);
}

function updateStock(id: number, newStock: number){
    const product = inventory.find(p => p.id === id);

    if(product){
        product.stock = newStock;
    } else {
        console.log("error: product of that id not found");
    }
}
displayInventory();

// Test Task 1: Add a product
addProduct({id: 4, name: "Sony WH-1000XM4", price: 24000, stock: 5});

// Test Task 2: Update stock of an existing product (ID: 2)
updateStock(2, 25);

// Test Error Handling: Try updating a product ID that doesn't exist
updateStock(99, 10);

// Print the inventory again to see the changes!
displayInventory();
