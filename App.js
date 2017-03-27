import React from 'react';
import {Text} from 'react-native';
import MainScreen from './app/containers/MainScreen'
import DrawerContent from './app/containers/DrawerContent'
import {
    Container,
    Drawer,
    Header,
    Title,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
} from 'native-base';

export default class App extends React.Component {

    render() {
        closeDrawer = () => {
            this._drawer._root.close()
        };
        openDrawer = () => {
            this._drawer._root.open()
        };
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<DrawerContent/>}
                styles={drawerStyles}
                onClose={() => closeDrawer()}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => { openDrawer() }}>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Usapang Tambay</Title>
                        </Body>
                        <Right />
                    </Header>

                    <MainScreen/>

                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text style={{color: '#fff'}}>New Post</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {  backgroundColor: '#fff' }
};
