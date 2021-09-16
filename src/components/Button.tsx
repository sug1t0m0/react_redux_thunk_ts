import React from 'react';

interface Props {
    text: string,
    handleClick: () => void
}

export const Button: React.FC<Props> = (props: Props) => {
    return (
        <button
            onClick={props.handleClick}
        >
            {props.text}</button>
    );
}
