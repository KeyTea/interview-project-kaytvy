import {useContext} from 'react';
import {AppContext} from "./App";
import { Emojione } from 'react-emoji-render';
import Video from "./Video";
import Loader from "./Loader";

export default () => {
    const context = useContext(AppContext);
    const isPrime = () => {
       const length = context.answers.join('').length;
       const square = Math.floor(Math.pow(length, 0.5));
       let sum = 0;
        for (let i = 2; i <= 3; i++) {
            if (length % i === 0){
                sum++;
            }
        }
        if (sum > 0) {
            return false;
        }
       for (let i = 4; i <= square; i++){
           if ((i % 2 !== 0 || i % 3 !== 0) && length % i === 0){
               sum++;
           }
       }
       return sum > 0 ? false : true;
    }
    return (
        <div>
            <div className='header'>Answer</div>
            <Video/>
            <h4>Hi {context.answers[0]} lover, how is {context.answers[1]} are doing this year? Don’t forget to {context.answers[2]}!</h4>
            <div className='footer'>
                {isPrime() ? <Emojione text=":)"/> : <Emojione text=":("/>}
            </div>
        </div>
    )
}
