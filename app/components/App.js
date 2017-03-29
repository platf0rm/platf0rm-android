import React from 'react';
import {Text} from 'react-native';
import MainScreen from './ThreadListScreen'
import DrawerContent from './DrawerContent'
import { Tabs } from '../navigation/tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchAction from '../redux/actions/search';

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

class App extends React.Component {

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
                        <Right >
                            <Button transparent onPress={() =>{
                                const navigate = this.props.navigation.navigate;
                                navigate("NewThread", { title: 'NewThread' })
                            }}>
                                <Icon name='add'/>
                            </Button>
                        </Right>
                    </Header>

                    <Tabs />
                </Container>
            </Drawer>
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => (
        bindActionCreators(searchAction, dispatch)
    )
)(App);

const drawerStyles = {
    drawer: {  backgroundColor: '#fff' }
};
