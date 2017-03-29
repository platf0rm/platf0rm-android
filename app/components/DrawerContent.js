import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text } from 'react-native'
import styles from './DrawerContentStyles'
import Images from '../themes/Images'
import {
    Content,
    Separator,
    ListItem,
    Right,
    Badge,
    Icon
} from 'native-base';
class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer();
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <Content style={styles.container}>
        <Image resizeMode='contain' source={{uri: 'http://nativebase.io/assets/img/front-page-icon.png'}} style={{flex: 1, height: 120}} />
        <Separator bordered style={styles.header}>
          <Text>Anonymous Account</Text>
        </Separator>
        <ListItem first>
          <Text>Notifications</Text>
          <Right>
            <Badge info>
              <Text style={styles.badge}>2</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem last>
          <Text>Messages</Text>
          <Right>
            <Badge info>
              <Text style={styles.badge}>0</Text>
            </Badge>
          </Right>
        </ListItem>
        <Separator bordered style={styles.header}>
          <Text>Subscriptions</Text>
        </Separator>
        <ListItem first>
          <Text>Usapang Tambay</Text>
        </ListItem>
        <ListItem >
          <Text>Philippine Politics a.k.a Circus</Text>
        </ListItem>
        <ListItem last>
          <Text>Sumbong Mo</Text>
        </ListItem>

      </Content>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
};

export default DrawerContent
