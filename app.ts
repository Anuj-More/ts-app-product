
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

function displayInventory() {
    console.log("\n=====Current Inventory=====");
    inventory.forEach(product => {
        console.log(`ID: ${product.id} | ${product.name} | ${product.price} | ${product.stock}`);
    })
    console.log("===========================");
}

displayInventory();
