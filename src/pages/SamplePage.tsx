import React from 'react';
import {State as Counter} from "../modules/counter";
import {Button} from "../components/Button";

export interface StateProps {
    counter: Counter
}

export interface DispatchProps {
    todo: () => void;
    add: () => void;
}

type Props = StateProps & DispatchProps

export const SamplePage: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p>this is sample page</p>
            <p>{props.counter.value}</p>
            <Button handleClick={props.add} text={"add"}/>
        </div>
    );
}
