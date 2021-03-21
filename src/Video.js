import {AppContext} from "./App";
import {useContext, useState} from "react";
import Loader from "./Loader";

export default () => {
    const context = useContext(AppContext);
    const [isLoading, changeStatus] = useState(true);
    const videos =[];
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAS5BrVHp5GrL83anDK9tuC2QGgQ_SQUh8&maxResults=50&q=${context.answers[0]}`;
    // let src = 'https://www.youtube.com/embed/';
    let src;
    const getVideoId =(j) => {
        const json = JSON.stringify(j);
        console.log(json.indexOf('videoId'));
        console.log(json);
        let str = json.slice(json.indexOf('videoId') + 10, json.indexOf('videoId') + 22);
        let end = str.indexOf('"')
        if (end >= 0) {
           str = str.slice(0, end);
        }
        console.log(str);
        // const obj = JSON.parse(videos[0]);
        // obj.items.map(i => {
        //     videos.push(i.id);
        //     console.log(i.id);
        // });
        src = ('https://www.youtube.com/embed/').concat(str);
        console.log(src);
    }

    const getVideos = fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`Request error: status: ${response.status}`);
        })
        .then((json) => {
            console.log(json);
            // videos.push(json);
            getVideoId(json);

        })
        .then(() => changeStatus(false))
        .catch(error => {
            alert(error.message);
        });


        return (
            <div>
                {
                    isLoading ?
                        <Loader/>
                    :
                <iframe id="ytplayer" type="text/html" width='640px' height='360px' src={src}
            frameBorder="0" allowFullScreen>
                </iframe>
                }
            </div>
)
}
