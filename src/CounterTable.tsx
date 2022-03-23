import React from 'react';
import s from './Ctable.module.css'


type TableType = {
    count: number
}

const CounterTable = (props: TableType) => {
    return (
        <div className={props.count === 5 ? s.counterTableError : s.counterTable}>{props.count}</div>
    );
};

export default CounterTable;