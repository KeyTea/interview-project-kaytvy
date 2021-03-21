import React, {useContext, useState} from "react";
import {AppContext} from "./App";

export default () => {
    const [inp, setInp] = useState( '');
    const [isDisabled, changeStatus] = useState(true);
    const context = useContext(AppContext);

    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
        <input
            name='field'
            type='text'
            placeholder={context.questions[context.index]}
            value={inp}
            minLength={2}
            onChange={e => {
                setInp(e.target.value);
                changeStatus(e.target.value.length < 2);
            }}
        />
    <button disabled={isDisabled} onClick={
        () => {
            context.add(inp);
            context.inc();
            setInp('');
        }
    }>Next
    </button>
        </form>
    )
}
