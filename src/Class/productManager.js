import { privateDecrypt } from 'node:crypto';
import fs from 'node:fs';

class ProductManager {
    constructor(path) {
        this.path = path;
        this.dbProduct = [];
        this.prodId = 0;
    }

    productFactory(id, {title, description, code, price, status, stock, category}) {
        return {
            id,
            title,
            description,
            code,
            price,
            status,
            stock,
            category
        }
    }

    async getProducts() {
        const list = await fs.promises.readFile(this.path, 'utf-8')
        this.dbProduct = [... JSON.parse(list).data]
        return [... this.dbProduct]
    }

    async getProductById(productId) {
        await this.getProducts()
        productId = Number(productId) //Convertimos el queryparams de string a number
        const productFound = this.dbProduct.find(product => product.id === productId)
        console.log()
        return productFound;
    }

    async addProduct(product) {
        await this.getProducts();
        this.prodId++;
        const newProduct = this.productFactory(this.prodId, product)
        this.dbProduct.push(newProduct)
        await fs.promises.writeFile(this.path, JSON.stringify({data: this.dbProduct })); 
    }
}

export default ProductManager;