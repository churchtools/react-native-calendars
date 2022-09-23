import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import testIDs from '../testIDs';

interface State {
  items?: AgendaSchedule;
}

export default class AgendaScreenHideEmpty extends Component<State> {
  state: State = {
    items: undefined
  };

  render() {
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2017-05-16'}
        renderItem={this.renderItem}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        hideEmptyDays={true}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
      />
    );
  }

  loadItems = (day: DateData) => {
    const generateItem = (dayNumber: number, month = day.month) => {
      const items = {...this.state.items} || {};

      for (let i = 1; i <= dayNumber; i++) {

        const date = new Date(day.year, month, i);
        const strTime = date.toISOString().split('T')[0];

        if (!items[strTime]) {
          items[strTime] = [];
          if (i === dayNumber) {
            items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      this.setState({items});
    };

    setTimeout(() => generateItem(2), 1000);
    setTimeout(() => generateItem(4), 1200);
    setTimeout(() => generateItem(6), 1400);
    setTimeout(() => generateItem(8), 1600);
    setTimeout(() => generateItem(10), 1800);
    setTimeout(() => generateItem(12), 2000);
    setTimeout(() => generateItem(16), 2200);
    setTimeout(() => generateItem(20), 2400);
    setTimeout(() => generateItem(24), 2600);

    let date = new Date(day.timestamp);
    let numberDays = date.getDate();
    setTimeout(() => generateItem(numberDays), 2800);

    setTimeout(() => generateItem(2, day.month + 1), 3000);
    setTimeout(() => generateItem(4, day.month + 1), 3200);
    setTimeout(() => generateItem(6, day.month + 1), 3400);
    setTimeout(() => generateItem(8, day.month + 1), 3600);
    setTimeout(() => generateItem(10, day.month + 1), 3800);
    setTimeout(() => generateItem(12, day.month + 1), 4000);
    setTimeout(() => generateItem(16, day.month + 1), 4200);
    setTimeout(() => generateItem(20, day.month + 1), 4400);
    setTimeout(() => generateItem(24, day.month + 1), 4600);

    date = new Date(day.year, day.month + 1, day.day);
    numberDays = date.getDate();
    setTimeout(() => generateItem(numberDays, day.month + 1), 4800);
  }

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  }

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
