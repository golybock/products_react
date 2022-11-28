import Cookie from '../Cookie/Cookie'

class Api{

    static async login(login, password) {
        let token = await fetch('https://localhost:44356/api/Login/login?login=' + login + '&password=' + password + '&key=KJHGajesuj13', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'content-tpye': 'application/x-www-form-urlencoded'
            }
        }).then(res => {return res.json()});
        if(token != null){
            Cookie.setToken(token)
        }
    }

    // получения списка продуктов
    static getProducts(){
        return fetch("https://localhost:44356/api/Order/GetOrders", {
            headers: {
                Accept: "*/*",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhYm9iYSIsImV4cCI6MTY2OTk3ODM3OSwiaXNzIjoiYWJvYmEiLCJhdWQiOiJhYm9iYSJ9.lcTLMWQvRvxG5tuNYIxuIuTNN-dZqaDdvI_XnQS0tww"
            }
        });
    }


    // удаление продукта по его id
    static deleteProduct(id) {
         return fetch('https://localhost:44356/api/Products/DeleteProduct?id=' + id, {
             method: 'POST',
             headers: {
                 'accept': '*/*',
                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhYm9iYSIsImV4cCI6MTY2OTk3ODM3OSwiaXNzIjoiYWJvYmEiLCJhdWQiOiJhYm9iYSJ9.lcTLMWQvRvxG5tuNYIxuIuTNN-dZqaDdvI_XnQS0tww',
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         }).then(res => {return res.status});
    }

    // добавление продукта
    static addProduct(product) {
        try{
             return fetch("https://localhost:44356/api/Order/AddOrder", {
                 body: JSON.stringify(product),
                 headers: {
                 Accept: "*/*",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhYm9iYSIsImV4cCI6MTY2OTk3ODM3OSwiaXNzIjoiYWJvYmEiLCJhdWQiOiJhYm9iYSJ9.lcTLMWQvRvxG5tuNYIxuIuTNN-dZqaDdvI_XnQS0tww",
                    "Content-Type": "application/json"
            },
            method: "POST"
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