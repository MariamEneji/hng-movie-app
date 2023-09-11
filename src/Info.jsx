
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Info = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      // Fetch movie details based on the ID
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
              params: {
                api_key: '4e98374803b820c06025e2176dacb03d',
              },
            }
          );
  
          setMovie(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchMovieDetails();
    }, [id]);

    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

  return (
    <div>
    {movie ? (
      <div>
        <div className=' h-[120vh] flex flex-col justify-center items-center p-12'>
        {movie.poster_path ? <img className="w-screen md:w-[30%] h-[70%]" data-testid="movie-poster"  src={`${IMAGE_PATH}${movie.poster_path}`} alt="" /> 
        : null
        
        }
        <h1 className='text-3xl font-bold py-2' data-testid='movie-title' >{movie.title}</h1>
        <p data-testid='movie-release-date'>{movie.release_date}</p>
        <p className='py-2 text-center'   data-testid='movie-overview'> {movie.overview}</p>
        <p data-testid='movie-runtime'>{movie.runtime}</p>
        </div>
       
        
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default Info