import {AppCommand} from "../AppCommand";
import {AppStore} from "../../AppStore";
import {Dispatch} from "redux";
import {InitMathCommand} from "./InitMathCommand";

export class InitStrategyCommand extends AppCommand {
    name(): string {
        return "Init/Strategy";
    }

    async process(state: AppStore, dispatch: Dispatch<any>): Promise<any> {
        dispatch(new InitMathCommand({
            strategy:  {
                levelUp: true,
                space: 2,
                operator: "+",
                max: 100,
            }
        }));
    }
}