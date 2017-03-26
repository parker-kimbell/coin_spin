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
import Icon from 'react-native-vector-icons/FontAwesome';

// colored button with default theme (configurable)
const AddCoin = MKButton.coloredFab()
  .build();

const SubtractCoin = MKButton.coloredFab()
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
        <View style={{ flex : 1 }}>
          <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
            <AddCoin onPress={this.props.store.increaseNumberOfFlips}>
              <Icon name="plus" style={{color : 'white', fontSize : 20}}/>
            </AddCoin>
            <View style={{ marginHorizontal : 20}}>
              <Text>
                {this.props.store.numberOfFlips}
              </Text>
            </View>
            <SubtractCoin onPress={this.props.store.decreaseNumberOfFlips}>
              <Icon name="minus" style={{color : 'white', fontSize : 20}}/>
            </SubtractCoin>
          </View>
          {/*<Surface width={300} height={200}>
            <SpinningCoin />
          </Surface>*/}
          <View style={{flexDirection:'row', alignItems : 'center', justifyContent : 'space-between'}}>
            <FlipAllCoins onPress={() => {
                this._appendFlipResult(this.props.store.flipAllCoins());
              }} />
            <FlipOne onPress={() => {
                this._appendFlipResult(this.props.store.flipSingleCoin());
              }} />
          </View>
        </View>
        <ScrollView style={{ flexGrow : 2, borderTopWidth : 0.5 }} ref='flipResults'>
          {this.state.pastFlips.map((flipResults, i) => {
            return (
              <View onLayout={(event) => {
                  if (i === this.state.pastFlips.length - 1) {
                    this.refs.flipResults.scrollTo({ y : event.nativeEvent.layout.height, animated : false});
                    this.refs.flipResults.scrollTo({ y : 0, animated : true});
                  }
                }} key={i} style={{paddingVertical : 10, borderBottomWidth : 1}}>
                <Text style={{fontWeight : 'bold'}}>
                  Flip {i + 1}
                </Text>
                <Text>
                  T: {flipResults.tails}
                </Text>
                <Text>
                  H: {flipResults.heads}
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
    justifyContent : 'flex-start',
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject
  },
});

export default Landing;
