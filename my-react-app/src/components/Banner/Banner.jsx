import "./Banner.css"
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useEffect, useState } from "react";

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response=>{
            console.log(response.data.results[0])
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[randomIndex]);
        }))
    }, [])
  return (
    <div
    style={{backgroundImage: `url(${movie && imageUrl+movie.backdrop_path})`}}
    className="banner">
        <div className="content">
            <h1 className="title">
                {/* {movie?.name} */}
                {movie && movie.name}
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
            <h1 className="description">{movie?.overview}</h1>
        </div>
        <div className="fade_bottom">
            Fade Content Bottom . To be styled.
        </div>
    </div>
  )
}

export default Banner