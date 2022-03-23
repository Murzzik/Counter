import React from 'react';
import s from './Cbutton.module.css'

type ButtonType = {
    increaseCount: () => void
    resetCount: () => void
    count: number
}

const CounterButton = (props: ButtonType, count: number) => {

    return (
        <div className={s.counterButtonBorder}>
            <button disabled={props.count === 5} className={props.count === 5 ? s.counterButtonError : s.counterButton}
                    onClick={props.increaseCount}>inc
            </button>
            <button disabled={props.count === 0} className={props.count === 0 ? s.counterButtonError : s.counterButton}
                    onClick={props.resetCount}>reset
            </button>
        </div>
    );
};

export default CounterButton;