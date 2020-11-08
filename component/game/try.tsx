import { memo } from 'react';
import * as React from 'react';

export interface TryInfo {
    try: string;
    result: string;
}

export interface TryProps {
    tryInfo: TryInfo;
}

const Try: React.FunctionComponent<TryProps> = memo(({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}&nbsp; :&nbsp;&nbsp;</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;