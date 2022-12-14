import React from "react";
import ModalProduct from "./Modal/AddProductModal";
import './ProductList.css';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import Api from "../Api/Api";
import {Image} from "react-bootstrap";


class ProductComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modalActive:false,
            selectedProduct:null,
            edit:false,
            products: [],
            notFoundPhoto:"https://upload.wikimedia.org/wikipedia/ru/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"
        };
    }

    // коннект к апи, отрпавка запроса и вывод в атрибут класса
    // надо вынести fetch в класс Api
    componentDidMount() {
        this.refreshProductsList();
    }

    // обновляем список продуктов
    async refreshProductsList() {
        let result = await Api.getProducts();
        this.setState({products:result})
    }

    render() {
        return (
            <div>
                {/*Таблица с продуктами*/}
                {
                    this.state.products.length > 0 ?
                        <div className="ProductsData">
                            <ul>
                                {this.state.products.map(pr => (
                                    <li className="Card-item">
                                        <div className="Card-header">
                                            <h4>{pr.name}</h4>
                                            <h4>{pr.currentPrice}</h4>
                                            <Image
                                                src={pr.productPhotos.length > 0 ? (pr.productPhotos[0].photoPath !== "" ?
                                                    pr.productPhotos[0].photoPath : this.state.notFoundPhoto) : (this.state.notFoundPhoto)}
                                                width={100}
                                                height={100}/>
                                        </div>
                                    </li>
                                    ))}
                            </ul>
                            {/*<Table striped bordered hover>*/}
                            {/*    /!*Заголовки*!/*/}
                            {/*    <thead>*/}
                            {/*    <tr>*/}
                            {/*        <th width={'20%'}>Name</th>*/}
                            {/*        <th width={'10%'}>Price</th>*/}
                            {/*        <th width={'20%'}>Photo</th>*/}
                            {/*        <th width={'5%'}>CategoryId</th>*/}
                            {/*        <th width={'5%'}>Edit</th>*/}
                            {/*        <th width={'5%'}>Delete</th>*/}
                            {/*        <th width={'3%'}>*/}
                            {/*            <Button variant='primary' className="OpenModal"*/}
                            {/*                    onClick={() => {*/}
                            {/*                        // сбрасываем настройки для редактирования*/}
                            {/*                        this.setState({modalActive: true});*/}
                            {/*                        this.setState({edit:false});*/}
                            {/*                        this.setState({selectedProduct:null});*/}
                            {/*                    }}>*/}
                            {/*                Добавить*/}
                            {/*            </Button>*/}
                            {/*        </th>*/}
                            {/*    </tr>*/}
                            {/*    </thead>*/}

                            {/*    <tbody>*/}
                            {/*    /!*Вывод данных продукта в строку + кнопки*!/*/}
                            {/*    /!*Кнопка добавления продукта (Нужно сделать органичной)*!/*/}

                            {/*    {this.state.products.map(pr => (*/}
                            {/*        <tr key={pr.id}>*/}
                            {/*            <td>{pr.name}</td>*/}
                            {/*            <td>{pr.currentPrice}</td>*/}
                            {/*            <td>*/}
                            {/*
                            {/*            </td>*/}
                            {/*            <td>{pr.category.name}</td>*/}
                            {/*            <td>*/}
                            {/*                <Button variant="secondary" className="EditProduct"*/}
                            {/*                        onClick={() => {*/}
                            {/*                            // применяем настройки для редактирования*/}
                            {/*                            this.setState({modalActive:true});*/}
                            {/*                            this.setState({edit:true});*/}
                            {/*                            this.setState({selectedProduct:pr});*/}
                            {/*                        }}>*/}
                            {/*                    Изменить*/}
                            {/*                </Button>*/}
                            {/*            </td>*/}
                            {/*            <td>*/}
                            {/*                <Button variant="danger" className="DeleteProduct"*/}
                            {/*                        onClick={async() => {*/}
                            {/*                            // спрашиваем удалить ли данные*/}
                            {/*                            // eslint-disable-next-line no-restricted-globals*/}
                            {/*                            let result = confirm("Удалить?");*/}
                            {/*                            // пользователь подтвердил удаление*/}
                            {/*                            if (result) {*/}
                            {/*                                await Api.deleteProduct(pr.id);*/}
                            {/*                                await this.refreshProductsList();*/}
                            {/*                            }*/}
                            {/*                        }}> Удалить*/}
                            {/*                </Button>*/}
                            {/*            </td>*/}
                            {/*        </tr>*/}
                            {/*    ))}*/}
                            {/*    </tbody>*/}
                            {/*</Table>*/}
                    </div>
                        :
                        <h2>Продуктов нет</h2>
                }

                {/*Окно добавления/редактирвоания*/}
                {
                    // если активно, рендерим окно
                    this.state.modalActive &&
                    // обновляем при закрытии модального окна
                    <ModalProduct
                        active={this.state.modalActive}
                        onClose={async () => {
                            this.setState({modalActive: false});
                            await this.refreshProductsList();
                        }}
                        isEdit={this.state.edit}
                        product={this.state.selectedProduct}
                    />
                }

            </div>
        );
    }

}

export default ProductComponent