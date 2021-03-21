import {useContext} from 'react';
import {AppContext} from "./App";
// import * as React from "react";
import Select from "./Select";
import Input from "./Input";

export default () => {

// const [inp, setInp] = useState( '');
    // const quest = ['food', 'soccer team', 'sport activity'];
    // const choice = ['play tennis', 'swim', 'play golf', 'dance', 'ride a bike'];
    // const [count, setCount] = useState(0);
    const context = useContext(AppContext);

    return (
    <div>
       <h2>
               What is your favorite {context.questions[context.index]}?
       </h2>
        {
            context.index === 2 ? <Select/> : <Input/>
        }
        <div className='footer'>Question {context.index + 1} of 3</div>
    </div>

)

}
