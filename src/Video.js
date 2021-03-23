import {AppContext} from "./App";
import {useContext, useState, useEffect} from "react";
import Loader from "./Loader";

export default () => {
    const context = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBa-jed78hUNldiMvaPeXGnGgcvI2PVRs&maxResults=10&q=${context.answers[0]}`;
    let src = 'https://www.youtube.com/embed/';
    const getVideoId =(j) => {
        const json = JSON.stringify(j);
        let str = json.slice(json.indexOf('videoId') + 10, json.indexOf('videoId') + 22);
        let end = str.indexOf('"')
        if (end >= 0) {
           str = str.slice(0, end);
        }
        src = (src).concat(str);
        document.getElementById("ytplayer").setAttribute('src', src);
    }

        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoading(false);
                        getVideoId(result);
                    },
                    (error) => {
                        setIsLoading(false);
                        setError(error);
                    }
                )
        }, [])

        if (error) {
            alert(error.message);
            return <iframe id="ytplayer" type="text/html"
                    frameBorder="0" allowFullScreen src='https://www.youtube.com/embed/BaLHthRsqQk'>
            </iframe>;
        } else if (isLoading) {
            return <Loader/>;
        } else {
            return (
                <>
                    <div className='video'></div>
                <iframe id="ytplayer" type="text/html" frameBorder="0" allowFullScreen>
                </iframe>
                </>
            );
        }
    }

