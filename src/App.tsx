import React, {useEffect, useState} from 'react';
import './App.scss';
import {range} from 'rxjs';
import {bufferCount, catchError, map, toArray} from 'rxjs/operators'
import QuizView from "./app/QuizView";
import {generateQuiz} from "./strategy/quizGenerator";
import StrategyView from "./strategy/StrategyView";
import {useDispatch} from "react-redux";
import {UpdateStrategyCommand} from "./redux/command/math/UpdateStrategyCommand";
import {useAppStore} from "./redux/AppStore";

export interface Quiz {
    num1?: number,
    operator: string,
    num2?: number,
    num3?: number,
}

function App() {
    const [problems, setProblems] = useState<Array<Array<Quiz>>>([]);
    let dispatch = useDispatch();

    const {strategy} = useAppStore()?.math;

    const columns = 7;
    useEffect(() => {
        range(0, strategy.quizLine * columns)
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
            <StrategyView value={strategy} onChange={value => {
                dispatch(new UpdateStrategyCommand(value));
            }}/>
            {cube}
        </div>
    );
}

export default App;
