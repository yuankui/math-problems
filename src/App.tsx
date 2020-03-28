import React, {useEffect, useState} from 'react';
import './App.scss';
import {range} from 'rxjs';
import {map, toArray, bufferCount, catchError} from 'rxjs/operators'
import QuizView from "./app/QuizView";
import StrategyEditor from "./strategy/StrategyEditor";
import {Strategy} from "./strategy/Strategy";
import {generateQuiz} from "./strategy/quizGenerator";

export interface Quiz {
    num1?: number,
    operator: string,
    num2?: number,
    num3?: number,
}


function App() {
    const [problems, setProblems] = useState<Array<Array<Quiz>>>([]);
    const defSt : Strategy = {
        levelUp: true,
        space: 2,
        operator: "+",
        max: 100,
    };
    const [strategy, setStrategy] = useState(defSt);

    useEffect(() => {
        range(0, 100)
            .pipe(
                map(() => {
                    return generateQuiz(strategy)
                }),
                bufferCount(7),
                toArray(),
                catchError((err, caught) => {
                    alert(err);
                    return [];
                })
            )
            .subscribe(value => {
                setProblems(value);
            })
    }, [strategy]);

    const cube = problems.map((row,i) => {
        return <QuizView key={i} problems={row}/>
    });

    return (
        <div>
            <StrategyEditor value={strategy} onChange={setStrategy}/>
            {cube}
        </div>
    );
}

export default App;
