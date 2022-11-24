class Api{
    // везде возвращаем ответ сервера

    // получения списка продуктов
    static getProducts(){
        return fetch('https://localhost:44356/api/Products/GetProducts')
            .then((res) => { return res.json()
            });
    }


    // удаление продукта по его id
    static deleteProduct(id) {
         return fetch('https://localhost:44356/Products/DeleteProduct?productId=' + id, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {return res.status});
    }

    // добавление продукта
    static addProduct(product) {
        try{
             return fetch('https://localhost:44356/Products/AddProduct', {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(res => {return res.status});
        }
        catch (Ex){
        }
    }

    // обновление данных о продукте
    static updateProduct(product) {
        try{
            return fetch('https://localhost:44356/Products/UpdateProduct', {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(res => {return res.status});
        }
        catch (Ex){
        }
    }

    static getCategories(){
        return fetch('https://localhost:44356/api/Products/GetCategories')
            .then((res) => { return res.json()
            });
    }

}

export default Api