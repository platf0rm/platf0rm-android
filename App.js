import React from 'react';
import {Text} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    ListItem,
    List,
    Spinner,
    Thumbnail
} from 'native-base';

export default class App extends React.Component {

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
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Usapang Tambay</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    {this.state.loading? <Spinner /> : <List dataArray={this.state.results.items} renderRow={(data) =>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: data.owner.avatar_url}} />
                            </Left>
                            <Body>
                                <Text>{data.login}</Text>
                                <Text note>{data.full_name}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    }/>}

                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text style={{color: '#fff'}}>New Post</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}