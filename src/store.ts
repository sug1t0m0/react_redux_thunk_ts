import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { Reducer as CounterReducer, State as CounterState } from './modules/counter'
import thunk from "redux-thunk"

export type AppState = {
    counterState: CounterState
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers<AppState>({
        counterState: CounterReducer
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store
