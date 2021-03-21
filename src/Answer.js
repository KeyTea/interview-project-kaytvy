import {useContext} from 'react';
import {AppContext} from "./App";
import { Emojione } from 'react-emoji-render';
import Video from "./Video";
// import * as React from "react";

export default () => {

    // var player;
    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('player', {
    //         height: '360',
    //         width: '640',
    //         videoId: 'M7lc1UVf-VE',
    //         events: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //         }
    //     });
    // }

    const context = useContext(AppContext);
    // const url = `http://www.youtube.com/embed/?listType=search&list=${context.answers[0]}`;
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
            <h2>Answer</h2>
            <Video/>
            {/*<iframe id="player" type="text/html" width="640" height="360"*/}
            {/*        src={url}*/}
            {/*        frameBorder="0"></iframe>*/}
            {/*<iframe id="ytplayer" type="text/html" width="720" height="405"*/}
            {/*        src="https://www.youtube.com/embed/M7lc1UVf-VE"*/}
            {/*        frameBorder="0" allowFullScreen>*/}

            <h4>Hi {context.answers[0]} lover, how is {context.answers[1]} are doing this year? Don’t forget to {context.answers[2]}!</h4>
            <h3>{isPrime() ? <Emojione size={50} text=":)"/> : <Emojione size={50} text=":("/>}</h3>
            <div className='footer'>Answer</div>
        </div>
    )
}
