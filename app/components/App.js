import React from 'react';
import {Text} from 'react-native';
import MainScreen from './ThreadListScreen'
import DrawerContent from './DrawerContent'
import { Tabs } from '../navigation/tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchAction from '../redux/actions/search';
import * as Rx from "rxjs";
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
    Input
} from 'native-base';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let filter = 'platf0rm';
        this.searchSubject = new Rx.Subject();
        this.searchSubject
            .debounceTime(500)
            .subscribe((searchText) => this.props.fetchThreads(searchText));

        this.searchSubject.next(filter);
    }

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
                            <Input style={{minWidth: 500, color: '#fff'}}
                                   onChangeText={(text) => {
                                        this.searchSubject.next(text);
                                    }}>
                                Platf0rm
                            </Input>
                        </Body>
                        <Right >
                            <Button transparent onPress={() =>{
                                const navigate = this.props.navigation.navigate;
                                navigate('NewThread', { title: 'NewThread' })
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
