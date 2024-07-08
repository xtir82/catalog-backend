import fs from 'node:fs';

class CartManager {
cartId = 0;

    constructor(path) {
        this.path = path;
        this.dbCart = [];
    }

    cartFactory(id, {cart}) {
        id,
        productArray,
        quantity
    } 

    async getCarts() {
        const list = await fs.promises.readFile(this.path, 'utf-8')
        this.dbCart = [... JSON.parse(list).data]
        return [... this.dbCart]
    }

    async getCartById(cartId) {
        await this.getCarts()
        const productFound = this.dbCart.find(cart => cart.id === cartId)
        return productFound;
    }

    async addCart(cart) {
        await this.getCarts();
        this.dbCart.push(cart)
        await fs.promises.writeFile(this.path, JSON.stringify({data: this.dbCart })); 
    }
}

export default CartManager;