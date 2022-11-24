import React from "react";
import "./AddProductModal.css"
import Product from "../../Models/Product/Product"
import Api from "../../Api"
import {CloseButton, Modal, Button, FormSelect, InputGroup} from "react-bootstrap";


class ModalProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: this.props.product ?? new Product(0, "", 0, "", null),
            categories: []
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    // обновляем список продуктов
    async getCategories() {
        let result = await Api.getCategories();
        this.setState({categories:result})
    }


    render() {
        return (<div className="AddProduct">

            <Modal.Dialog className="AddProduct_modal_content">
                <Modal.Header>
                    <Modal.Title>Добавление/Изменение продукта</Modal.Title>
                    <CloseButton onClick={() => this.props.onClose()}/>
                </Modal.Header>

                <Modal.Body>
                    {/*Блоки для ввода данных(с заголовками)*/}
                    <div className="NameContainer" >
                        <h4>Имя</h4>
                        <input type="text"
                               id="productName"
                               value={this.state.product.name}
                               onChange={(e) => {
                                   this.setState({
                                       product: {                   // object that we want to update
                                           ...this.state.product,    // keep all other key-value pairs
                                           name: e.target.value       // update the value of specific key
                                       }
                                   })
                               }}
                        />
                    </div>

                    <div className="PriceContainer">
                        <h4>Цена</h4>
                        <input type="text"
                               id="productPrice"
                               value={this.state.product.price}
                               onChange={(e) => {
                                   this.setState({
                                       product: {                   // object that we want to update
                                           ...this.state.product,    // keep all other key-value pairs
                                           price: e.target.value       // update the value of specific key
                                       }
                                   })
                               }}
                        />
                    </div>

                    <div className="PhotoContainer">
                        <h4>Ссылка на фото</h4>
                        <input type="text"
                               id="productPhotoUrl"
                               value={this.state.product.photoUrl}
                               onChange={(e) => {
                                   this.setState({
                                       product: {                   // object that we want to update
                                           ...this.state.product,    // keep all other key-value pairs
                                           photoUrl: e.target.value       // update the value of specific key
                                       }
                                   })
                               }}
                        />
                    </div>

                    {/* при изменении сохраняет только 1 атрибут*/}

                    <div className="CategoryContainer">
                        <h4>Категория</h4>
                        <FormSelect placeholder={"Выберите категорию"}

                                onChange={(e) =>
                                {
                                    this.setState({
                                        product: {
                                            ...this.state.product,
                                            categoryId : e.target.options[e.target.selectedIndex].value
                                        }
                                    });
                                    console.log(this.state.product);
                                }
                                }
                        >
                            <option key={0} value={0} selected="selected">Выберите категорию</option>
                            {this.state.categories.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>)}
                        </FormSelect>

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    {/*Кнопка добавления*/}
                    <Button variant="success"
                            style={this.props.isEdit ? {display: 'none'} : {display: 'flex'}}
                            onClick={async () => {
                                try {
                                    // создаем новый объект класса из введенных данных
                                    console.log(this.state.product)
                                    // отправляем запрос на добавление данных и получаем ответ в виде статуса
                                    let resCode = await Api.addProduct(this.state.product);
                                    // оповещаем об ответе сервера
                                    if (resCode !== 400) {
                                        alert("Добавлено!");
                                        this.props.onClose();
                                    } else if (resCode === 400) {
                                        alert("Неверные данные!")
                                    }
                                } catch (Ex) {
                                    alert(Ex);
                                }

                            }}>
                        Добавить
                    </Button>

                    {/*Кнопка изменения*/}
                    <Button variant="success"
                            style={this.props.isEdit ? {display: 'flex'} : {display: 'none'}}
                            onClick={async () => {
                                // отправляем запрос на добавление данных и получаем ответ в виде статуса
                                console.log(this.state.product);
                                let resCode = await Api.updateProduct(this.state.product);
                                // оповещаем об ответе сервера
                                if (resCode !== 400) {
                                    alert("Изменено!");
                                    this.props.onClose();
                                } else if (resCode === 400) {
                                    alert("Неверные данные!")
                                }
                            }}>
                        Изменить
                    </Button>

                </Modal.Footer>


            </Modal.Dialog>
        </div>)
    }
}


export default ModalProduct
