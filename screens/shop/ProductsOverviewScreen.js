import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductSOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
return <FlatList 
            data = {products}
            renderItem = {itemData => <Text>{itemData.item.title}</Text>} 
        />;
};

ProductSOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductSOverviewScreen