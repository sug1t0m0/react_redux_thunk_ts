import {AnyAction} from "redux";

export interface State {
    value: number
}

export const ADD = 'ADD'

// TODO
// export const RESET = 'RESET'

export const add = (): AnyAction => {
    return {
        type: ADD,
    };
};

export interface ActionHandlers {
    [key: string]: (state: State, action: AnyAction) => State;
}

const ACTION_HANDLERS: ActionHandlers = {
    [ADD]: (state: State) => {
        return {
            ...state,
            value: state.value + 1,
        }
    },
}

export const initialState: State = {
    value: 0
}

export const Reducer = (state = initialState, action: AnyAction): State => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
