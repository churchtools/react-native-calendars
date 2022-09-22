import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import styleConstructor from './style';
import {Theme} from '../../../types';

export interface DotProps {
    theme?: Theme;
    color?: string;
    marked?: boolean;
    selected?: boolean;
    disabled?: boolean;
    inactive?: boolean;
    today?: boolean;
}

const Dot = React.memo(({theme, marked, disabled, inactive, color, today, selected}: DotProps) => {
    const style = useRef(styleConstructor(theme));
    const dotStyle = useMemo(() => {
        const newStyle = [style.current.dot] as object[];
        if (!marked) {
            return newStyle;
        }
        newStyle.push(style.current.visibleDot);

        if (today) {
            newStyle.push(style.current.todayDot);
        }

        if (disabled) {
            newStyle.push(style.current.disabledDot);
        }

        if (inactive) {
            newStyle.push(style.current.inactiveDot);
        }

        if (selected) {
            newStyle.push(style.current.selectedDot);
        }

        if (color) {
            newStyle.push({backgroundColor: color});
        }
        return newStyle;
    }, [marked, today, disabled, inactive, selected,color]);

    return <View style={dotStyle}/>;
});

export default Dot;
