import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import XDate from 'xdate';
import PropTypes from 'prop-types';
import styleConstructor from './style';
import { weekDayNames } from '../../dateutils';
import Dots from '../../calendar-list/dot';

class CalendarHeader extends Component {
  static propTypes = {
    theme: PropTypes.object,
    hideArrows: PropTypes.bool,
    month: PropTypes.instanceOf(XDate),
    addMonth: PropTypes.func,
    showIndicator: PropTypes.bool,
    firstDay: PropTypes.number,
    renderArrow: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
    this.addMonth = this.addMonth.bind(this);
    this.substractMonth = this.substractMonth.bind(this);
  }

  addMonth() {
    this.props.addMonth(1);
  }

  substractMonth() {
    this.props.addMonth(-1);
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.month.toString('yyyy MM') !==
      this.props.month.toString('yyyy MM')
    ) {
      return true;
    }
    if (nextProps.showIndicator !== this.props.showIndicator) {
      return true;
    }
    return false;
  }

  render() {
    let weekDaysNames = weekDayNames(this.props.firstDay);

    let indicator;
    if (this.props.showIndicator) {
      indicator = <ActivityIndicator />;
    }
    return (
      <View>
        { this.props.i !== "0" && <Dots /> }
        <View style={this.style.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={this.style.monthText}>
              {this.props.month.toString(this.props.monthFormat ? this.props.monthFormat : 'MMMM yyyy')}
            </Text>
            {indicator}
          </View>
        </View>
        <View style={this.style.week}>
          {weekDaysNames.map((day, idx) => (
            <Text key={idx} style={[this.style.dayHeader, (idx === 5 || idx === 6) && {fontWeight: "bold"}]}>{day}</Text>
            ))}
        </View>
      </View>
    );
  }
}

export default CalendarHeader;
