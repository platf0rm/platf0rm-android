import { Content, Left, Right, Body, Button, ListItem, List, Spinner, Thumbnail, Row } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'react/lib/ReactPropTypes';
import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import * as searchAction from '../redux/actions/search';
import { store } from '../index';

let currentValue;

class ThreadListScreen extends Component {
  static select(state) {
    return state.search.threads;
  }

  constructor(props) {
    super(props);
    this.state = {
      results: props.results,
    };
    store.subscribe(() => {
      currentValue = ThreadListScreen.select(store.getState());
      this.setState({
        results: currentValue,
        loading: false,
      });
    });
  }

  render() {
    return (
      <Content>
        { this.state.loading ? <Spinner /> : <List
          dataArray={this.state.results.items} renderRow={data =>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: data.owner.avatar_url }} />
              </Left>
              <Body>
                <Text note>{data.full_name}</Text>
                <Row>
                  <Text>{moment(data.created_at).fromNow()} - </Text>
                  <Text>{data.name}</Text>
                </Row>
              </Body>
              <Right>
                <Button info>
                  <Text>cute</Text>
                </Button>
              </Right>
            </ListItem>
                }
        /> }
      </Content>
    );
  }

}

ThreadListScreen.propTypes = {
  results: PropTypes.shape({
    items: PropTypes.array,
  }),
};

ThreadListScreen.defaultProps = {
  results: { items: [] },
};

export default connect(
    state => ({
      // searchTerm: state.search.searchTerm,
      results: state.search.threads,
    }),
    dispatch => bindActionCreators(searchAction, dispatch),
)(ThreadListScreen);
