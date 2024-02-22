import './Rowpost.css'
import {useEffect, useState} from 'react'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'

function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results)
    }).catch(err=>{
      alert('Network Error',err)
    })
  }, [])
  
  return (
    <div className="row">
        <h2 className='row_title'>Popular on Netflix</h2>
        <div className="posters">
            <img className='poster' src="https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w" alt="poster" />
        </div>
    </div>
  )
}

export default RowPost