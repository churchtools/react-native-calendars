import XDate from 'xdate';
import { Component } from 'react';
import { Theme } from '../types';
import { CalendarProps } from '../calendar';
export declare type CalendarListItemProps = CalendarProps & {
    item: any;
    calendarWidth?: number;
    calendarHeight?: number;
    horizontal?: boolean;
    theme?: Theme;
    scrollToMonth?: (date: XDate) => void;
};
declare type CalendarListItemState = {
    hideArrows: boolean;
    hideExtraDays: boolean;
};
declare class CalendarListItem extends Component<CalendarListItemProps, CalendarListItemState> {
    static displayName: string;
    static propTypes: any;
    static defaultProps: {
        hideArrows: boolean;
        hideExtraDays: boolean;
    };
    style: any;
    constructor(props: CalendarListItemProps);
    shouldComponentUpdate(nextProps: CalendarListItemProps): boolean;
    onPressArrowLeft: (method: () => void, month: XDate) => void;
    onPressArrowRight: (method: () => void, month: XDate) => void;
    getCalendarStyle: (this: any, width: any, height: any, style: any) => any[];
    render(): JSX.Element;
}
export default CalendarListItem;
