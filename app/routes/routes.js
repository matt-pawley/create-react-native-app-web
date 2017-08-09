import React from 'react';
import { Route, IndexRoute } from 'react-router-native';

import Template from './template.js';
import ProductList from './products/list.js';
import ProductDetail from './products/detail.js';
import NotFound from './not-found/index.js';

export default function getRoutes() {
    return (
        <Template>
            <Route exact path="/" component={ProductList} />
            <Route path="/product-detail" component={ProductDetail} />
        </Template>
    );
}
