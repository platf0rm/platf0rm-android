import { Container, Drawer, Header, Button, Left, Right, Body, Icon, Input } from 'native-base';
import { connect } from 'react-redux';
import * as PropTypes from 'react/lib/ReactPropTypes';
import * as Rx from 'rxjs';
import { bindActionCreators } from 'redux';
import React from 'react';
import DrawerContent from './DrawerContent';
import { Tabs } from '../navigation/tabs';
import * as searchAction from '../redux/actions/search';

const drawerStyles = {
  drawer: { backgroundColor: '#fff' },
};

class App extends React.Component {
  componentWillMount() {
    const filter = 'platf0rm';
    this.searchSubject = new Rx.Subject();
    this.searchSubject
        .debounceTime(500)
        .subscribe(searchText => this.props.fetchThreads(searchText));

    this.searchSubject.next(filter);
  }

  render() {
    const closeDrawer = () => {
      this._drawer._root.close();
    };
    const openDrawer = () => {
      this._drawer._root.open();
    };
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<DrawerContent />}
        styles={drawerStyles}
        onClose={() => closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => { openDrawer(); }}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Input
                style={{ minWidth: 500, color: '#fff' }}
                onChangeText={(text) => {
                  this.searchSubject.next(text);
                }}
              >
                Platf0rm
              </Input>
            </Body>
            <Right >
              <Button
                transparent onPress={() => {
                  const navigate = this.props.navigation.navigate;
                  navigate('NewThread', { title: 'NewThread' });
                }}
              >
                <Icon name="add" />
              </Button>
            </Right>
          </Header>

          <Tabs />
        </Container>
      </Drawer>
    );
  }
}

// noinspection Eslint
App.propTypes = {
  fetchThreads: PropTypes.func,
  navigation: PropTypes.any,
};

App.defaultProps = {
  fetchThreads: () => {},
  navigation: {},
};

export default connect(
    state => state,
    dispatch => (
        bindActionCreators(searchAction, dispatch)
    ),
)(App);
