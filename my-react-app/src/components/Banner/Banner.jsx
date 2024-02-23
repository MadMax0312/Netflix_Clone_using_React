import "./Banner.css"
import axios from '../../axios'
// import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import YouTube from 'react-youtube';

function Banner(props) {

    const [movie, setMovie] = useState();

    useEffect(()=>{
        axios.get(props.url).then((response=>{
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            console.log(response.data.results.map(item=>item.name))
            setMovie(response.data.results[randomIndex]);
        }))
    }, [])


  return (
    <div
    style={{backgroundImage: `url(${movie && imageUrl+movie.backdrop_path})`}}
    className="banner">
        <div className="content">
            <h1 className="title">
            {movie && movie.name ? movie.name : props.name}
            </h1>
            <h1 className="description">{movie?.overview}</h1>
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
        </div>
    </div>
  )
}

Banner.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

export default Banner