import React, {FunctionComponent} from 'react';
import {Strategy} from "./Strategy";
import {Consumer} from "../common";
import {FormControlLabel, Radio, TextField} from "@material-ui/core";
import FieldLabel from "./FieldLabel";

interface Props {
    value: Strategy,
    onChange: Consumer<Strategy>,
}

const StrategyEditor: FunctionComponent<Props> = (props) => {
    const {max, operator, levelUp, space} = props.value;

    const checkSpace = (value?: 0 | 1 |2) => (e: any) => {
        props.onChange({
            ...props.value,
            space: value,
        })
    };

    const toInt = (str: string) => {
        try {
            return parseInt(str);
        } catch (e) {
            return 0;
        }
    };

    return <div className='form'>
        <div>
            <FieldLabel title={"数值范围"}>
                <div>
                    <TextField id="outlined-basic"
                               label="最大值"
                               variant="outlined"
                               onChange={e => {
                                   let v = toInt(e.target.value);
                                   props.onChange({
                                       ...props.value,
                                       max: v,
                                   })
                               }}
                               value={max}/>
                </div>
            </FieldLabel>
        </div>

        <div>
            <FieldLabel title={"加减法"}>
                <div>
                    <FormControlLabel control={<Radio
                        checked={operator === undefined}
                        onChange={(event, checked) => {
                            props.onChange({
                                ...props.value,
                                operator: undefined
                            })
                        }}
                        color="default"
                    />} label={"随机"}/>

                    <FormControlLabel control={<Radio
                        checked={operator === '+'}
                        onChange={(event, checked) => {
                            props.onChange({
                                ...props.value,
                                operator: "+"
                            })
                        }}
                        color="primary"
                    />} label={"加法"}/>

                    <FormControlLabel control={<Radio
                        checked={operator === '-'}
                        onChange={(event, checked) => {
                            props.onChange({
                                ...props.value,
                                operator: "-"
                            })
                        }}
                        color="secondary"
                    />} label={"减法"}/>


                </div>
            </FieldLabel>
        </div>
        <div>
            <FieldLabel title={"空格位置"}>
                <div>
                    <FormControlLabel control={<Radio
                        checked={space === undefined}
                        onChange={checkSpace(undefined)}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"随机"}/>
                    <FormControlLabel control={<Radio
                        checked={space === 0}
                        onChange={checkSpace(0)}
                        color="primary"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"左边"}/>

                    <FormControlLabel control={<Radio
                        checked={space === 1}
                        onChange={checkSpace(1)}
                        color="secondary"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"中间"}/>

                    <FormControlLabel control={<Radio
                        checked={space === 2}
                        onChange={checkSpace(2)}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"右边"}/>


                </div>
            </FieldLabel>
        </div>
        <div>
            <FieldLabel title={"进退位"}>
                <div>
                    <FormControlLabel
                        control={<Radio
                            checked={levelUp === undefined}
                            onChange={(event, checked) => {
                                props.onChange({
                                    ...props.value,
                                    levelUp: undefined,
                                })
                            }}
                            color="default"
                            name="radio-button-demo"
                            inputProps={{'aria-label': 'A'}}
                        />}
                        label={"随机"}
                    />

                    <FormControlLabel
                        control={<Radio
                            checked={levelUp === true}
                            onChange={(event, checked) => {
                                props.onChange({
                                    ...props.value,
                                    levelUp: true,
                                })
                            }}
                            color="primary"
                            name="radio-button-demo"
                            inputProps={{'aria-label': 'A'}}
                        />}
                        label={"进/退位"}
                    />
                    <FormControlLabel
                        control={<Radio
                            checked={levelUp === false}
                            onChange={(event, checked) => {
                                props.onChange({
                                    ...props.value,
                                    levelUp: false,
                                })
                            }}
                            color="secondary"
                            name="radio-button-demo"
                            inputProps={{'aria-label': 'A'}}
                        />}
                        label={"不进退位"}
                    />



                </div>
            </FieldLabel>
        </div>
    </div>;
};

export default StrategyEditor;
