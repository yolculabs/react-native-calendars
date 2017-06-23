import React, {
  PureComponent
} from 'react';
import { View, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const borderDotCount = (width) / 12;

class Dot extends PureComponent {
  constructor(){
    super();
    this.borders = [];
    for (let i = 0; i < borderDotCount; i++) {
      this.borders.push(<View
        key={`border-${i}`}
        style={{
          width: 6,
          height: 6,
          backgroundColor: "#E5E5E5",
          borderRadius: 6,
        }}
      />);
    }
  }
  render() {
    return (
      <View style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 15,
        marginBottom: 15
      }}>
        {this.borders}
      </View>
    );
  }
}

export default Dot;