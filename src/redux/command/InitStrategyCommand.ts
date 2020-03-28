import {AppCommand} from "./AppCommand";
import {AppStore} from "../AppStore";
import {Dispatch} from "redux";

export class InitStrategyCommand extends AppCommand {
    name(): string {
        return "Init/Strategy";
    }

    process(state: AppStore, dispatch: Dispatch<any>): AppStore {
        return {
            ...state,
            math: {
                ...state?.math,
                strategy:  {
                    levelUp: true,
                    space: 2,
                    operator: "+",
                    max: 100,
                }
            }
        }
    }
}