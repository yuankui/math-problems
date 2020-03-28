import React, {ReactNode, useCallback, useMemo, useState} from 'react';
import './App.scss';
import {Button} from "@material-ui/core";
import Section from "./app/Section";
import {v4 as uuid} from 'uuid';

export interface Quiz {
    num1?: number,
    operator: string,
    num2?: number,
    num3?: number,
}

function App() {
    const [sections, setSections] = useState<Array<ReactNode>>([]);
    const addSection = () => {
        let id = uuid();
        setSections([
            ...sections,
            <Section key={id}/>
        ]);
    };

    return (
        <div>
            {sections}
            <Button color={'primary'} onClick={addSection}>增加题目</Button>
        </div>
    );
}

export default App;
