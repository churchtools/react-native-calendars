import React, { useEffect, useRef } from 'react';
/**
 * This hook avoid calling useEffect on the initial value of his dependency array
 */
export const useDidUpdate = (callback, dep) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            callback();
        }
        else {
            isMounted.current = true;
        }
    }, dep);
};
export const useCombinedRefs = (...refs) => {
    const targetRef = React.useRef();
    React.useEffect(() => {
        refs.forEach(ref => {
            if (!ref) {
                return;
            }
            if (typeof ref === 'function') {
                ref(targetRef.current);
            }
            else {
                // @ts-expect-error
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
};
export const useMemoCompare = (next, compare) => {
    // Ref for storing previous value
    const previousRef = useRef();
    const previous = previousRef.current;
    // Pass previous and next value to compare function
    // to determine whether to consider them equal.
    // If not equal update previousRef to next value.
    // We only update if not equal so that this hook continues to return
    // the same old value if compare keeps returning true.
    if (!compare(previous, next)) {
        previousRef.current = next;
    }
    // Finally, if equal then return the previous value
    return previousRef.current;
};
