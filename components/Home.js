import React from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';

class Home extends React.Component {

    render() {
        return(
            <ScrollView>
                <Header/>
                <Products/>
            </ScrollView>
        )
    }
}

export default Home;
