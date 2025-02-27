const products = []; // Array to simulate database

class Product {
    static listAllProducts(){
        return products;  
    }

    static getProductById(id){
        console.log(id);
        return products.find(product => product.id == id);
    }

    static createProduct(product){
        product.id = products.length + 1; //Id unique
        products.push(product);
    }

    static updateProduct(id, updateDatas){
        const index = products.findIndex(product => product.id == id);
        if(index !== -1){
            products[index] = {...products[index], ...updateDatas} //mirroring operator - overwriting properties of the product chosen
        }
    }

    static deleteProduct(id){
        const index = products.findIndex(product => product.id == id);
        if(index !== -1){
            products.splice(index, 1) // "slice" - doesn't change the source array 
        }
    }
}
module.exports= Product; //export file as "Product" to be able to request