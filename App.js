import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, ListItem, List, Switch, Thumbnail } from 'native-base';

export default class App extends React.Component {
    render() {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Usapang Tambay</Title>
                </Body>
                <Right />
            </Header>

            <Content>

                <List dataArray={items} renderRow={(data) =>
                        <ListItem avatar>
                    <Left>
                        <Thumbnail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
                    </Left>
                    <Body>
                    <Text>{data.name}</Text>
                    <Text note>{data.title}</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                    } />

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
const items = [{name: `John Doe`, title: `Doing what you like will always keep you happy.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`},
    {name: `John Smith`, title: `Don't let small minds convince you that your dreams are too big.`}
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
