import {AppCommand} from "./AppCommand";
import {AppStore} from "../AppStore";
import {Dispatch} from "redux";
import {UpdateStrategyCommand} from "./math/UpdateStrategyCommand";

export class InitCommand extends AppCommand {
    name(): string {
        return "InitApp";
    }

    async process(state: AppStore, dispatch: Dispatch): Promise<any> {
        dispatch(new UpdateStrategyCommand({
            levelUp: true,
            space: 2,
            operator: "+",
            max: 100,
        }));
    }

}