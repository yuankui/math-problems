import {useSelector} from "react-redux";
import {Strategy} from "../strategy/Strategy";

export interface AppStore {
    math: {
        strategy: Strategy,
    }
}

export function useAppStore() {
    return useSelector(state => state) as AppStore;
}