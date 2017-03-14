import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Navigator
} from 'react-native';
import Landing from './containers/Landing';

class CoinSpin extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
   return (
     <Navigator
       initialRoute={{ title: 'Coin Spin', index: 0 }}
       renderScene={(route, navigator) =>
         <Landing route={route} navigator={navigator} />
       }
       style={{padding: 100}}
     />
   );
  }
}

export default CoinSpin;
