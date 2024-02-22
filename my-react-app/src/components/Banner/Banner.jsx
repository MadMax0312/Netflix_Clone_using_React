import "./Banner.css"
import axios from '../../axios'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useEffect } from "react";

function Banner() {
    useEffect(()=>{
         axios.get()
    }, [])
  return (
    <div className="banner">
        <div className="content">
            <h1 className="title">
                Movie Name
            </h1>
            <div className="banner_buttons">
                <div className="play-button">
                    <span className="play-icon"><PlayArrowIcon/></span>
                    <p className="play-text">Play</p>
                </div>
                <div className="info-button">
                    <span className="info-icon"><InfoOutlinedIcon/></span>
                    <p className="info-text">More Info</p>
                </div>
            </div>
            <h1 className="description">Description</h1>
        </div>
        <div className="fade_bottom">
            Fade Content Bottom . To be styled.
        </div>
    </div>
  )
}

export default Banner