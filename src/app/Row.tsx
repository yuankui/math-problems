import React, {FunctionComponent} from 'react';
import {Quiz} from "../App";

interface Props {
    problems: Array<Quiz>,
}

const Row: FunctionComponent<Props> = (props) => {
    const ps = props.problems.map(p => {
        return <div>{p.num1} {p.operator} {p.num2} = __</div>;
    });
    return <div className='row'>
        {ps}
    </div>;
};

export default Row;
