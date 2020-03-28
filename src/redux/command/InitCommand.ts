import {AppCommand} from "./AppCommand";
import {AppStore} from "../AppStore";
import {InitStrategyCommand} from "./math/InitStrategyCommand";
import {Dispatch} from "redux";

export class InitCommand extends AppCommand {
    name(): string {
        return "InitApp";
    }

    async process(state: AppStore, dispatch: Dispatch): Promise<any> {
        await dispatch(new InitStrategyCommand());
    }

}