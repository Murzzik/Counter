import React, {useState} from 'react';
import s from './App.module.css';
import CounterTable from "./CounterTable";
import CounterButton from "./CounterButton";


function App() {

    const [count, setCount] = useState<number>(0)

    const increaseCount = () => {
        if (count === 5) {
            return
        }
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={s.counterMain}>
            <div className={s.counterBorder}>
                <CounterTable count={count}/>
                <CounterButton increaseCount={increaseCount} resetCount={resetCount} count={count}/>
            </div>
        </div>
    );
}

export default App;
