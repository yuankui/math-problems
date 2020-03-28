import React, {FunctionComponent} from 'react';
import {Quiz} from "../App";

interface Props {
    problems: Array<Quiz>,
}

const Row: FunctionComponent<Props> = (props) => {
    const ps = props.problems.map(p => {
        return <div>
            <div>{p.num1}</div>
            <div className='operator'>{p.operator}</div>
            <div>{p.num2}</div>
            <div className='eq'> = </div>
            <div> ___</div>
        </div>;
    });
    return <div className='row'>
        {ps}
    </div>;
};

export default Row;
