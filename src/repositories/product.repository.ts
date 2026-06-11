import type { Product } from "../models/product.interface.js"


export class ProductRepository {
    private inventory: Product[] = [
        {id: 1, name: "bat", price: 20, stock: 2},
        {id: 2, name: "cake", price: 40, stock: 4},
    ]

    findAll(): Product[] {
        return this.inventory;
    }

    findById(id: number): Product | undefined {
        return this.inventory.find((p) => p.id === id);
    }

    create(product: Product): Product {
        this.inventory.push(product);
        return product;
    }

    updateStock(id: number, newStock:number): boolean {
        const product = this.inventory.find((p) => p.id === id);
        if(product) {
            product.stock = newStock;
            return true;
        }
        return false;
    }
}