import React, {FunctionComponent, useEffect, useState} from 'react';
import {Strategy} from "../strategy/Strategy";
import {range} from "rxjs";
import {bufferCount, catchError, map, toArray} from "rxjs/operators";
import {generateQuiz} from "../strategy/quizGenerator";
import QuizView from "./QuizView";
import StrategyView from "../strategy/StrategyView";
import {Quiz} from "../App";

interface Props {
}

const Section: FunctionComponent<Props> = (props) => {
    const [strategy, setStrategy] = useState<Strategy>({
        levelUp: true,
        space: 2,
        operator: "+",
        max: 100,
        quizLine: 10,
    });
    const [problems, setProblems] = useState<Array<Array<Quiz>>>([]);

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
        <div className='quiz-section'>
            <StrategyView value={strategy} onChange={value => {
                setStrategy(value);
            }}/>
            {cube}
        </div>
    );
};

export default Section;
