import {useContext} from 'react';
import {AppContext} from "./App";
import Select from "./Select";
import Input from "./Input";

export default () => {

    const context = useContext(AppContext);

    return (
    <div>
       <div className='header'>
               What is your favorite {context.questions[context.index]}?
       </div>
        {
            context.index === 2 ? <Select/> : <Input/>
        }
        <div className='footer'>Question {context.index + 1} of 3</div>
    </div>

)

}
