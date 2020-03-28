import React, {FunctionComponent} from 'react';
import {Quiz} from "../App";

interface Props {
    problems: Array<Quiz>,
}

const Row: FunctionComponent<Props> = (props) => {
    const ps = props.problems.map((p, i) => {
        return <div key={i}>
            <div>{p.num1}</div>
            <div className='operator'>{p.operator}</div>
            <div>{p.num2}</div>
            <div className='eq'> = </div>
            <div> <div className='space-box'/></div>
        </div>;
    });
    return <div className='row'>
        {ps}
    </div>;
};

export default Row;
