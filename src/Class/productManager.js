import fs from 'node:fs';

class ProductManager {
    constructor(path) {
        this.path = path;
        this.dbProduct = [];
        this.idProduct = 0;
    }

    productFactory({title, description, code, price, status, stock, category}) {
        const newProduct = {id: this.dbProduct.length + 1, 
            title,
            description,
            code,
            price,
            status,
            stock,
            category}
        return newProduct
    }

    async getProducts() {
        const list = await fs.promises.readFile(this.path, 'utf-8')
        this.dbProduct = [... JSON.parse(list).data]
        return [... this.dbProduct]
    }

    async getProductById(productId) {
        await this.getProducts();
        const productFound = this.dbProduct.find(product => product.id === productId)

        return productFound;
    }

    async addProduct(product) {
        await this.getProducts();
        this.idProduct = this.dbProduct.length + 1
        const newProduct = this.productFactory(product)
        this.dbProduct.push(newProduct)
        await fs.promises.writeFile(this.path, JSON.stringify({data: this.dbProduct })); 
    }

    async editProduct(product) {
        await this.getProducts();
        const searchIndex = this.dbProduct.findIndex((prod) => prod.id === product.id)
        this.dbProduct[searchIndex] = product

        await fs.promises.writeFile(this.path, JSON.stringify({data: this.dbProduct })); 
    }

}

export default ProductManager;