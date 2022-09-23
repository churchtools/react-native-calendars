import {fireEvent, render} from '@testing-library/react-native';
export class ExpandableCalendarDriver {
  testID;
  element;
  renderTree;
  constructor(testID, element) {
    this.testID = testID;
    this.element = element;
    this.renderTree = this.render(element);
  }
  get knobTestID() {
    return `${this.testID}.knob`;
  }
  getDayTestID(date) {
    const [year, month] = date.split('-');
    return `${this.testID}.calendarList.item_${year}-${month}.day_${date}`;
  }
  render(element = this.element) {
    if (!element) throw 'Element is missing';
    this.renderTree = render(element);
    return this.renderTree;
  }
  getKnob() {
    return this.renderTree?.getByTestId(`${this.testID}.knob`);
  }
  getExpandableContainer() {
    return this.renderTree.getByTestId(`${this.testID}.expandableContainer`);
  }
  getDay(date) {
    return this.renderTree?.getByTestId(this.getDayTestID(date));
  }
  toggleKnob() {
    fireEvent(this.getKnob(), 'onPress');
  }
  isCalendarExpanded() {
    const calendarHeight = this.getExpandableContainer().props?.style?.height;
    return calendarHeight > 145;
  }
  selectDay(date) {
    fireEvent(this.getDay(date), 'onPress');
  }
}
