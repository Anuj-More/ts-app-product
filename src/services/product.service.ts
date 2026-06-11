import type { Product } from "../models/product.interface.js";
import { ProductRepository } from "../repositories/product.repository.ts";


export class ProductService {
    private repo = new ProductRepository();

    getAllProducts(): Product[] {
        return this.repo.findAll();
    }

    getProductById(id: number): Product | undefined {
        return this.repo.findById(id);
    }

    addNewProduct(id: number, name: string, price: number, stock: number) {
        if(price <= 0){
            throw new Error("validation error: price must be greater than 0");
        }
        const existing = this.repo.findById(id);
        if(existing){
            throw new Error(`validation error: product with id ${id} already exists`);
        }

        const newProduct = {id, name, price, stock};
        this.repo.create(newProduct);
    }

    updateProductStock(id: number, newStock: number): void {
        if(isNaN(newStock) || newStock < 0){
            throw new Error("invalid stock amount");
        }

        const success = this.repo.updateStock(id, newStock);
        if(!success) {
            throw new Error(`Execution error: product with id ${id} does not exist`);
        }
    }
}