import React, {Component} from 'react'
import {Text} from 'react-native';
import moment from 'moment'
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

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: 'platf0rm',
            results: {
                items: []
            }
        }
    }

    search() {
        // Set loading to true when the search starts to display a Spinner
        this.setState({
            loading: true
        });

        const that = this;
        // TODO: Replace with our API
        return fetch('https://api.github.com/search/repositories?q=' + this.state.search)
            .then((response) => response.json())
            .then((responseJson) => {
                // Store the results in the state variable results and set loading to
                // false to remove the spinner and display the list of repositories
                that.setState({
                    results: responseJson,
                    loading: false
                });

                return responseJson.Search;
            })
            .catch((error) => {
                that.setState({
                    loading: false
                });

                console.error(error);
            });
    }

    componentDidMount() {
        this.search();
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

export default MainScreen
