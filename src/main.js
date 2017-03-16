import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Navigator
} from 'react-native';
import Landing from './containers/Landing';
import coinFlipStore from './flipCoin';

class CoinSpin extends React.Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    return (
      <route.component {...route.passProps} navigator={navigator} />
    );
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render () {
   return (
     <Navigator
       initialRoute={{
         title: 'Coin Spin',
         index: 0,
         component : Landing,
         passProps : {
           store : coinFlipStore
         }
       }}
       renderScene={this.renderScene.bind(this)}
       configureScene={this.configureScene.bind(this)}
       style={{padding: 100}}
     />
   );
  }
}

export default CoinSpin;
