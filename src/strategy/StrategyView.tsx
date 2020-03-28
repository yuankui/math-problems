import React, {CSSProperties, FunctionComponent, useState} from 'react';
import {Button} from "@material-ui/core";
import StrategyEditor from "./StrategyEditor";
import {Strategy} from "./Strategy";
import {Value} from "../common";

interface Props extends Value<Strategy> {
}

const visible = (v: boolean): CSSProperties => {
    if (v) {
        return {}
    } else {
        return {display: 'none'}
    }
};

const StrategyView: FunctionComponent<Props> = (props) => {
    const [editMode, setEditMode] = useState(false);

    let plusMinus;
    switch (props.value.operator) {
        case "+":
            plusMinus = "加法";
            break;
        case "-":
            plusMinus = '减法';
            break;
        default:
            plusMinus = '加减法';
    }

    const showText = `【${props.value.max}】以内【${plusMinus}】`;
    return <div className='strategy-view'>
        <div className='action-btn'>
            <Button variant="contained"
                    style={visible(!editMode)}
                    color="secondary"
                    onClick={event => {
                        setEditMode(true);
                    }}>编辑</Button>
            <Button variant="contained"
                    style={visible(editMode)}
                    onClick={e => {
                        setEditMode(false);
                    }}
                    color="secondary">保存</Button>
        </div>
        <div style={visible(editMode)}>
            <StrategyEditor value={props.value} onChange={props.onChange}/>
        </div>
        <h2 style={visible(!editMode)}>
            {showText}
        </h2>

    </div>;
};

export default StrategyView;
