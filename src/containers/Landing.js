import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  observer
} from 'mobx-react/native';
import { MKButton } from 'react-native-material-kit';
import SpinningCoin from '../components/SpinningCoin';
import {Surface} from 'gl-react-native';

// colored button with default theme (configurable)
const AddCoin = MKButton.coloredButton()
  .withText('Add coin')
  .build();

const SubtractCoin = MKButton.coloredButton()
  .withText('Subtract coin')
  .build();

const FlipAllCoins = MKButton.coloredButton()
  .withText('Flip all')
  .withStyle({ marginTop : 40})
  .build();

const FlipOne = MKButton.coloredButton()
  .withText('Flip one')
  .withStyle({ marginTop : 40})
  .build();

@observer
class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pastFlips : []
    };
  }

  _appendFlipResult(flipResult) {
    let pastFlips = [...this.state.pastFlips, flipResult];
    this.setState({pastFlips});
  }

  render() {
    console.log('in landing ', this.props.store.numberOfFlips)
    return (
      <View style={styles.container}>
        <AddCoin onPress={this.props.store.increaseNumberOfFlips} />
        <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 20}}>
          <Text>
            {this.props.store.numberOfFlips}
          </Text>
        </View>
        <SubtractCoin onPress={this.props.store.decreaseNumberOfFlips} />
        {/*<Surface width={300} height={200}>
          <SpinningCoin />
        </Surface>*/}
        <View style={{flex : 1, flexDirection:'row', alignItems : 'center', justifyContent : 'space-between'}}>
          <FlipAllCoins onPress={() => {
              this._appendFlipResult(this.props.store.flipAllCoins());
            }} />
          <FlipOne onPress={() => {
              this._appendFlipResult(this.props.store.flipSingleCoin());
            }} />
        </View>
        <ScrollView>
          {this.state.pastFlips.map((flipResults, i) => {
            return (
              <View key={i} style={{paddingVertical : 10, borderBottomWidth : 1}}>
                <Text style={{fontWeight : 'bold'}}>
                  Flip {i + 1}
                </Text>
                <Text>
                  Tails: {flipResults.tails}
                </Text>
                <Text>
                  Heads: {flipResults.heads}
                </Text>
                <Text>
                  Total coins: {flipResults.heads + flipResults.tails}
                </Text>
              </View>
            );
          }).reverse()}
        </ScrollView>
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
