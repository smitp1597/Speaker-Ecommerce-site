import './red.css';
import React from 'react';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import speaker from '../speaker.jpg';
import { Link } from 'react-router-dom';
import { useAudioPlayer } from "react-use-audio-player"

const Red = ({file}) => {

    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: file,
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })

    return (
        <div className="red-container">
            <CustomCursor
                targets={['.red-container']}
                customClass='custom-cursor'
                dimensions={40}
                fill='#FFF'
                smoothness={{
                    movement: 1,
                    scale: 1,
                    opacity: 1,
                }}
                targetOpacity={0.7}
            />
            <img src={speaker} className="speaker" onClick={togglePlayPause} />
            <Link to="/pricing" className="try-btn"> <p className="try-text"> TRY IT NOW </p> </Link>
            <p className="header">SUPERIOR SOUND</p>
            <p className="textt"> Experience live versions of your favourite songs. </p>
            <p className="clickk"><p className="click-txt"> click speaker </p></p>
            <button className="demo-btn"> <p className="demo-txt"> SEE DEMO </p> </button>
        </div>
    );
}

export default Red;