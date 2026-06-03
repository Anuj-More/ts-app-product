
import * as readline from 'readline-sync';

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

function startApp(){
    let running = true;
    while(running){
        console.log("\n====E-commerce manager====");
        console.log("1. View Inventory");
        console.log("2. Add Product");
        console.log("3. Update Product Stock");
        console.log("4. Exit");

        const choice = readline.question("Choose an option (1-4): ");
        switch(choice){
            case "1":
                displayInventory();
                break;
            case "2":
                const name = readline.question("Enter name: ");
                const price = parseFloat(readline.question("Enter price: "));
                const stock = parseInt(readline.question("Enter stock: "));

                if(!name || isNaN(price) || isNaN(stock)){
                    console.log("invalid inputs");
                    break;
                }
                addProduct(name, price, stock);
                break;
            case "3":
                break;
            case "4":
                console.log("Exiting");
                running = false;
                break;
            default:
                break;
        }
    }
}

function displayInventory(): void{
    console.log("\n=====Current Inventory=====");
    inventory.forEach(product => {
        console.log(`ID: ${product.id} | ${product.name} | ${product.price} | ${product.stock}`);
    })
    console.log("===========================");
}

function addProduct(name: string, price: number, stock: number): void{
    const totalItems = inventory.length;
    const lastProduct = totalItems > 0 ? inventory[totalItems - 1] : null;
    const lastProductId = lastProduct ? lastProduct.id : 0;
    const newProductId = lastProductId + 1;

    const newProduct: Product = {
        name,
        price,
        stock,
        id: newProductId
    }
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

startApp();
