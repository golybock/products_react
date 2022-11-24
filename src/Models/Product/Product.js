// модель класса Product для работы с Api
class Product{
    constructor(id, name, currentPrice, category, sale, productPrices, productPhotos, productBrands) {
        this.id = id;
        this.name = name;
        this.currentPrice = currentPrice;
        this.category = category;
        this.sale = sale;
        this.productPrices = productPrices;
        this.productPhotos = productPhotos;
        this.productBrands = productBrands;
    }
}

export default Product