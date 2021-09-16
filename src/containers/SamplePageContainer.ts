import { connect } from "react-redux";
import {DispatchProps, SamplePage, StateProps} from "../pages/SamplePage";
import {AppState} from "../store";
import {Dispatch} from "redux";
import {add} from "../modules/counter";

const mapStateToProps = (appState: AppState): StateProps => {
    return {
        counter: appState.counterState
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        add: () => dispatch(add()),
        todo: () => dispatch({
            type: 'DUMMY', payload: {
                text: '対応するreducerはないよ, ダミーだし'
            }
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SamplePage)
