import logo from './logo.svg';
import person from './person.svg';
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

const Home = () => <h2>Главная</h2>;

const Orders = () => <h2>Заказы</h2>;

const Customers = () => <h2>Продавцы</h2>;

const Profile = () => <h2>Профиль</h2>;

function Nav(){
    return <nav>
        <div className="Nav-panel">
            <Image src={logo} className="App-logo"></Image>
            <Link className="Navbar-item" to="/">Главная</Link>
            <Link className="Navbar-item" to="/orders">Заказы</Link>
            <Link className="Navbar-item" to="/products">Товары</Link>
            <Link className="Navbar-item" to="/customers">Продавцы</Link>
            <Link className="Navbar-item" to="/profile">
                <Image src={person} className="Navbar-item"/>
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
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default MainApp;
