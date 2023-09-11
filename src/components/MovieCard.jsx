/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

  return (
    <div className='' data-testid='movie-card'>


      
      <Link to={`/movie/${movie.id}`}>
      {movie.poster_path ? <img className="w-full h-46 md:h-[80%]" data-testid="movie-poster"  src={`${IMAGE_PATH}${movie.poster_path}`} alt="" /> 
        : null
        
        }
      </Link>

        

<h1 className="font-bold" data-testid ="movie-title">{movie.title}</h1>


<h1 data-testid='movie-release-date'>{movie.release_date}</h1>
<h1>{movie.rating}</h1>
       
    </div>
  )
}


export default MovieCard