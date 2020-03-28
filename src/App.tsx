import React, {useEffect, useState} from 'react';
import './App.scss';
import {range} from 'rxjs';
import {map, toArray, bufferCount} from 'rxjs/operators'
import Row from "./app/Row";
import StrategyView from "./strategy/StrategyView";
import {Strategy} from "./strategy/Strategy";

export interface Quiz {
    num1: number,
    operator: string,
    num2: number,
}

const randomInt = (max: number) => {
    const num = parseInt(String(Math.random() * max));
    return num;
};

function App() {
    const [problems, setProblems] = useState<Array<Array<Quiz>>>([]);

    useEffect(() => {
        range(0, 100)
            .pipe(
                map(() => {
                    const num1 = randomInt(100);
                    const operator = randomInt(100) % 2 === 0 ? '+' : '-';
                    const num2 = randomInt(100);

                    if (operator === '-') {
                        return {
                            num1: Math.max(num1, num2),
                            operator: '-',
                            num2: Math.min(num2, num1),
                        }
                    }
                    const q: Quiz = {
                        num1,
                        operator,
                        num2,
                    };
                    return q;
                }),
                bufferCount(7),
                toArray(),
                // windowCount(100),
            )
            .subscribe(value => {
                setProblems(value);
            })

    }, []);

    const cube = problems.map((row,i) => {
        return <Row key={i} problems={row}/>
    });

    const defSt : Strategy = {
        levelUp: true,
        space: "first",
        append: {
            plus: true,
            minus: false,
        },
        max: 100,
        min: 10,
    };

    const [strategy, setStrategy] = useState(defSt);
    return (
        <div>
            <StrategyView value={strategy} onChange={setStrategy}/>
            {cube}
        </div>
    );
}

export default App;
