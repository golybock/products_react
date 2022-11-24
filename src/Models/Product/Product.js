// модель класса Product для работы с Api
class Product{
    constructor(id, name, currentPrice, category, sale) {
        this.id = id;
        this.name = name;
        this.currentPrice = currentPrice;
        this.category = category;
        this.sale = sale;
        this.productPrices = null;
        this.productPhotos = null;
        this.productBrands = null;
    }
}

export default Product