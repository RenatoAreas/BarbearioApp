import React from 'react';
import { Appbar } from 'react-native-paper';

class Header extends React.Component {

    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title="Barbearia Rio Branco"
                    subtitle="Seja bem vindo ao aplicativo"
                />
            </Appbar.Header>
        )
    }

}

export default Header;
