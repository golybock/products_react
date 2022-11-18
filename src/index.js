import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductComponent from './components/ProductList'



const root = ReactDOM.createRoot(document.getElementById('root'));

// рендерим страницу продуктов
root.render(
    <React.StrictMode>
        <ProductComponent/>
    </React.StrictMode>
);

