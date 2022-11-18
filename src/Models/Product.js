// модель класса Product для работы с Api
// можно получать модели от апи, лучше переделать
class Product{
    constructor(id, name, price, photoUrl, categoryId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.photoUrl = photoUrl;
        this.categoryId = categoryId;
    }
}

export default Product