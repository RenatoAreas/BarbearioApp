import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import * as services from '../services/apiServices';

class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products_list: []
        };
    }

    componentDidMount() {

        services.getServico()
            .then(
                data => {
                    this.setState({
                        products_list: data
                    });
                }
            )
            .catch(
                e => {
                    Alert.alert(e.response);
                }
            )
    }

    render() {
        return (
            <View>
                <Card style={{ backgroundColor: '#eee' }}>
                    <Card.Content>
                        <Text style={{ fontSize: 18, 
                                       fontWeight: 'bold' }}>
                            Conheça nossos servços
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            Selecione os itens e faça o seu agendamento
                        </Text>
                        <Text style={{ fontSize: 14 }}>
                            {this.state.products_list.length} 
                            itens exibidos.
                        </Text>
                    </Card.Content>
                </Card>

                {
                    this.state.products_list.map(
                        function (item, i) {

                            return (
                                <Card key={i}>
                                    <Card.Title
                                        title={item.nome}
                                        subtitle={item.preco}
                                    />
                                    <Card.Content>
                                        <Text style={{ 
                                             fontWeight: 'bold', 
                                             fontSize: 13 }}>
                                        </Text>
                                        <Paragraph style={{ 
                                             marginBottom: 10}}>
                                            {item.descricao}
                                        </Paragraph>
                                    </Card.Content>
                                    <Card.Cover
                                        source={{ uri: services
                                             .getApiUrl() + item.foto }}
                                    />
                                    <Card.Actions>
                                        <Button style={{ fontWeight: 
                                            'bold'}}>
                                            Adicionar ao pedido
                                    </Button>
                                    </Card.Actions>
                                </Card>
                            )

                        }
                    )
                }

            </View>
        )
    }
}

export default Products;
