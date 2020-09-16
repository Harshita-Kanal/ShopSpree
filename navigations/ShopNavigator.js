import  {createStackNavigator} from 'react-navigation-stack'
import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: 
    {
     screen :ProductsOverviewScreen,
     navigationOptions: {
       headerStyle: {
          backgroundColor: Colors.primary, 
       },
       headerTintColor: 'white'

    },
   }
})


export default createAppContainer(ProductsNavigator);