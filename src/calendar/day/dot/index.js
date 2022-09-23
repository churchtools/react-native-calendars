import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import styleConstructor from './style';
const Dot = React.memo(({theme, marked, disabled, inactive, color, today, selected}) => {
  const style = useRef(styleConstructor(theme));
  const dotStyle = useMemo(() => {
    const newStyle = [style.current.dot];
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
  }, [marked, today, disabled, inactive, selected, color]);
  return <View style={dotStyle} />;
});
export default Dot;
