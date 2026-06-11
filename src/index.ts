import express, { type Request, type Response } from 'express';
import { ProductService } from './services/product.service.ts';

const PORT = 3000;

const app = express();
app.use(express.json());

const service = new ProductService();

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome");
})

app.get('/products', (req: Request, res: Response) => {
    const products = service.getAllProducts();
    res.json(products);
})

app.get('/products/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = service.getProductById(id);

    res.status(200).json(product);
})

app.post('/products', (req, res) => {
    const {id, name, price, stock} = req.body;
    
    if(!name || !price || !stock){
        res.status(400).send("Invalid input")
    }
    service.addNewProduct(id, name, price, stock);
    res.status(201).send("Product created")
})


app.listen(PORT, () => {
    console.log("server started at port: " + PORT);
})
