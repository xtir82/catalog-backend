import fs from 'node:fs';

class CartManager {
    constructor(path) {
        this.path = path;
        this.dbCart = [];
    }

    async getProducts() {
        const list = await fs.promises.readFile(this.path, 'utf-8')
        this.dbProduct = [... JSON.parse(list).data]
        return [... this.dbProduct]
    }

    async getProductById(productId) {
        await this.getProducts()
        const productFound = this.dbProduct.find(product => prod.id === productId)
        return productFound;
    }

    async addProduct(product) {
        await this.getProducts();
        this.dbProduct.push(product)
        await fs.promises.writeFile(this.path, JSON.stringify({data: this.dbProduct })); 
    }
}

export default CartManager;