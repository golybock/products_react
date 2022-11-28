import logo from './res/logo.svg';
import person from './res/person.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import ProductList from "./components/ProductList";
import {Image} from "react-bootstrap";
import Client from "./Models/Client/Client";
import Login from "./components/Login/Login";

const Home = () => <h2>Главная</h2>;

const Orders = () => <h2>Заказы</h2>;

const Customers = () => <h2>Продавцы</h2>;

const Profile = () => <h2>Профиль</h2>;

let client = new Client(0, "email", "12345678", "client", "client", "123456", "pass", "dffg");

function Nav(){
    return <nav>
        <div className="Nav-panel">
            <Image src={logo} className="App-logo"></Image>
            <Link className="Navbar-item" to="/">Главная</Link>
            <Link className="Navbar-item" to="/orders">Заказы</Link>
            <Link className="Navbar-item" to="/products">Товары</Link>
            <Link className="Navbar-item" to="/customers">Продавцы</Link>
            <Link className="Navbar-item" to={client.id === 0 ? "/login" : "/profile" }>
                <Image src={person} className="Navbar-item"/>
                <h6 className="Navbar-item">{client.id === 0 ? "Войти" : client.firstName}</h6>
            </Link>
        </div>
    </nav>;
}

class MainApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            productPageActive:false
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/orders" element={ <Orders />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/customers" element={<Customers/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default MainApp;
