import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  observer
} from 'mobx-react/native';
import { MKButton } from 'react-native-material-kit';

// colored button with default theme (configurable)
const AddCoin = MKButton.coloredButton()
  .withText('Add coin')
  .build();

const SubtractCoin = MKButton.coloredButton()
  .withText('Subtract coin')
  .build();

const FlipAllCoins = MKButton.coloredButton()
  .withText('Flip all coins')
  .build();

@observer
class Landing extends Component {
  render() {
    console.log('in landing ', this.props.store.numberOfFlips)
    return (
      <View style={styles.container}>
        <Text> Individual and group settings </Text>
        <AddCoin onPress={this.props.store.increaseNumberOfFlips} />
        <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 20}}>
          <Text>
            {this.props.store.numberOfFlips}
          </Text>
        </View>
        <SubtractCoin onPress={this.props.store.decreaseNumberOfFlips} />

        <View style={{flex : 1, alignItems : 'center', justifyContent : 'flex-end'}}>
          <FlipAllCoins onPress={this.props.store.flipAllCoins} />
          <Text>
            Tails: {this.props.store.flipResultsTails}
          </Text>
          <Text>
            Heads: {this.props.store.flipResultsHeads}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject
  },
});

export default Landing;
