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
        <Text>
          {this.props.store.numberOfFlips}
        </Text>
        <SubtractCoin onPress={this.props.store.decreaseNumberOfFlips} />
        <FlipAllCoins onPress={this.props.store.flipAllCoins} />
        <Text>
          Tails: {this.props.store.flipResultsTails}
        </Text>
        <Text>
          Heads: {this.props.store.flipResultsHeads}
        </Text>
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
