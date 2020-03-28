import React, { FunctionComponent } from 'react';

interface Props {
    title: string
}

const FieldLabel: FunctionComponent<Props> = (props) => {
    return <div className='form-label'>
        <div className='title'>{props.title}</div>
        <div>
            {props.children}
        </div>
    </div>;
};

export default FieldLabel;
