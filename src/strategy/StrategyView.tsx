import React, {FunctionComponent} from 'react';
import {Strategy} from "./Strategy";
import {Consumer} from "../common";
import {Checkbox, FormControlLabel, Radio, TextField} from "@material-ui/core";
import FieldLabel from "./FieldLabel";

interface Props {
    value: Strategy,
    onChange: Consumer<Strategy>,
}

const StrategyView: FunctionComponent<Props> = (props) => {
    const {min, max, append, levelUp, space} = props.value;

    const checkSpace = (value: "first" |"second" |"third") => (e: any) => {
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
                               label="最小"
                               variant="outlined"
                               onChange={e => {
                                   let v = toInt(e.target.value);
                                   if (v > max) {
                                       v = max;
                                   }
                                   props.onChange({
                                       ...props.value,
                                       min: v,
                                   })
                               }}
                               value={min}/>
                    <TextField id="outlined-basic"
                               label="最大值"
                               variant="outlined"
                               onChange={e => {
                                   let v = toInt(e.target.value);
                                   if (v < min) {
                                       v = min;
                                   }
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
                    <FormControlLabel control={<Checkbox
                        checked={append.plus}
                        onChange={(event, checked) => {
                            props.onChange({
                                ...props.value,
                                append: {
                                    ...append,
                                    plus: checked,
                                }
                            })
                        }}
                        color="primary"
                    />} label={"加法"}/>

                    <FormControlLabel control={<Checkbox
                        checked={append.minus}
                        onChange={(event, checked) => {
                            props.onChange({
                                ...props.value,
                                append: {
                                    ...append,
                                    minus: checked,
                                }
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
                        checked={space === 'first'}
                        onChange={checkSpace("first")}
                        value="第一"
                        color="primary"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"左边"}/>

                    <FormControlLabel control={<Radio
                        checked={space === 'second'}
                        onChange={checkSpace("second")}
                        value="第二"
                        color="secondary"
                        name="radio-button-demo"
                        inputProps={{'aria-label': 'A'}}
                    />} label={"中间"}/>

                    <FormControlLabel control={<Radio
                        checked={space === 'third'}
                        onChange={checkSpace("third")}
                        value="第三"
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

                </div>
            </FieldLabel>
        </div>
    </div>;
};

export default StrategyView;
