import React, {Component} from 'react'
import {Text} from 'react-native';
import moment from 'moment'
import * as searchAction from '../redux/actions/search';
import {store} from '../index'

import {
    Content,
    Left,
    Right,
    Body,
    Button,
    ListItem,
    List,
    Spinner,
    Thumbnail,
    Row
} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PropTypes from "react/lib/ReactPropTypes";
let currentValue;

class ThreadListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: props.results
        };
        store.subscribe(() => {
            currentValue = this.select(store.getState());
            this.setState({
                results: currentValue,
                loading: false
            });
        });
    }

    select(state) {
        return state.search.threads;
    }

    componentWillMount() {
        // this.search();
    }

    search() {
        // Set loading to true when the search starts to display a Spinner
        this.setState({
            loading: true
        });
    }

    render() {
        return (
            <Content>
                { this.state.loading ? <Spinner /> : <List dataArray={this.state.results.items} renderRow={(data) =>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{uri: data.owner.avatar_url}} />
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
                }/> }
            </Content>
        )
    }

}

ThreadListScreen.propTypes = {
    results: PropTypes.any
};

export default connect(
    state => ({
        // searchTerm: state.search.searchTerm,
        results: state.search.threads
    }),
    dispatch => bindActionCreators(searchAction, dispatch)
)(ThreadListScreen)
