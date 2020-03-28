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
    const newSection = () => {
        let id = uuid();
        return <Section key={id}/>;
    };

    const [sections, setSections] = useState<Array<ReactNode>>([newSection()]);

    const addSection = () => {
        setSections([
            ...sections,
            newSection(),
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
