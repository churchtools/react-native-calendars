import { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Theme, DayState, DateData } from '../../../types';
import { MarkingProps } from '../marking';
export interface PeriodDayProps extends ViewProps {
    theme?: Theme;
    date?: string;
    marking?: MarkingProps;
    state?: DayState;
    onPress?: (date?: DateData) => void;
    onLongPress?: (date?: DateData) => void;
    accessibilityLabel?: string;
    testID?: string;
}
declare const PeriodDay: FunctionComponent<PeriodDayProps>;
export default PeriodDay;
