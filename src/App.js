import logo from './logo.svg';
import './App.css';
import React from "react";
import {Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProductComponent from './components/ProductList';

class MainApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            productPageActive:false
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-header-logo">
                        <Image className="App-logo" src={logo}></Image>
                    </div>
                    <div className="Navigation">
                        <a className="Navbar-item" onClick={()=>{
                            this.setState({productPageActive:true})
                        }}>Products</a>
                        <a className="Navbar-item" onClick={()=>{

                        }}>Customers</a>
                        <a className="Navbar-item" onClick={()=>{

                        }}>Orders</a>
                        <a className="Navbar-item" onClick={()=>{

                        }}>Brands</a>
                    </div>
                </header>
                <body>
                {
                    this.state.productPageActive ? <ProductComponent/> : <h1>Пусто</h1>
                }
                </body>
            </div>
        );
    }
}

export default MainApp;
