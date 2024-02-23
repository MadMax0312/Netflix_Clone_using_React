import './Rowpost.css'
import {useEffect, useState} from 'react'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import PropTypes from 'prop-types';

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
    // .catch(err=>{
    //   alert('Network Error',err)
    // })
  }, [])
  
  return (
    <div className="row">
        <h4 className='row_title'>{props.title}</h4>
        <div className="posters">
        {movies.map((movie,index)=>
          <img key={index} className='poster' src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
        )}
        </div>
    </div>
  )
}

RowPost.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RowPost