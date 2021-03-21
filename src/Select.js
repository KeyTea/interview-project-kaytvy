import * as React from "react";
import {useContext, useState} from "react";
import {AppContext} from "./App";

export default () => {
    const choice = ['play tennis', 'swim', 'play golf', 'dance', 'ride a bike'];
    const context = useContext(AppContext);
    const [inp, setInp] = useState( choice[0]);

    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
        <select value={inp} onChange={e => {
            setInp(e.target.value);
            console.log(e.target.value);
        }}>
            {choice.map((c,i) => <option value={c} key={i}>{c}</option>)}
    </select>
            <button type="submit"
                   onClick={() => {
                       context.inc();
                       context.add(inp);
                   }}>Submit</button>
        </form>
    )
}
