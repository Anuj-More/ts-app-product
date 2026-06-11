import express from 'express';

const app = express();

// import readline from 'readline-sync';
// import { ProductService } from "./services/product.service.js";
// import type { Product } from './models/product.interface.js';


// const service = new ProductService();

// function start() {
//     let running = true;
//     while(running){
//         console.log("----Choose an option----");
//         console.log("1. View inventory");
//         console.log("2. Add a product");
//         console.log("3. Update Stock");
//         console.log("4. Exit");

//         const choice = readline.question("\nEnter your choice: ");
//         let stock;
//         let price;

//         switch(choice){
//             case "1":
//                 const products = service.getAllProducts();
//                 console.log(products);                
//                 break;
//             case "2":
//                 const name = readline.question("Enter the name of the product: ");
//                 price = parseFloat(readline.question("Enter the price: "));
//                 stock = parseInt(readline.question("Enter the stock: "));

//                 if(!name || !price || !stock){
//                     console.log("Invalid input/s");
//                     break;
//                 }

//                 const allProducts = service.getAllProducts();
//                 const totalProducts: number = allProducts.length;
//                 const lastProduct: Product | undefined = totalProducts > 0 ? allProducts[totalProducts-1] : undefined;
//                 const newId: number = lastProduct ? lastProduct.id+1 : 0;

//                 try{
//                     service.addNewProduct(newId, name, price, stock);
//                     console.log("Product Added");
//                 } catch(e){
//                     console.log("Action failed with error: " + e);
//                 }
//                 break;
//             case "3":
//                 const id = parseInt(readline.question("Enter id of the product to update stock: "));
//                 stock = parseInt(readline.question("Enter the updated stock: "));

//                 try{
//                     service.updateProductStock(id, stock);
//                     console.log("Stock updated");
//                 } catch (e) {
//                     console.log("Action failed with error: " + e);
//                 }
//                 break;
//             case "4":
//                 console.log("\n\nExiting");      
//                 running = false;          
//                 break;
//             default:
//                 console.log("Invalid choice");
//         }
        
//         if(running){
//             readline.question("\n\nPress Enter to return to menu");
//             console.clear();
//         }
//     }
// }

// start();
