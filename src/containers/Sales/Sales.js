import React, { Component } from 'react';
import Product from '../../components/Product/Product';


export class Sales extends Component
{

    state = {
        products: []
    };

    render()
    {
        let products = <h1>No hay productos disponibles</h1>;
        if(this.state && this.state.products.length > 0)
        {
            products = [...this.state.products];
            products = products.map(product => <Product key={product.id} {...product}/> );
        }

        return <>
                <h1>Sales</h1>
                {products}
            </>;
    }
}

export default Sales;