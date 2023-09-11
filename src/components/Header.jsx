import { useEffect, useState } from 'react';
import play from "../assets/Play.svg"
import axios from 'axios';

const Header = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; 

 
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchRandomMovie = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/movie/popular`, {
        params: {
          api_key: '4e98374803b820c06025e2176dacb03d',
          language: 'en-US',
          page: 1,
        }
      });

      // Randomly select a movie from the results array
      const randomIndex = Math.floor(Math.random() * results.length);
      const selectedMovie = results[randomIndex];
      setRandomMovie(selectedMovie);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);


  const backgroundStyle = {
    backgroundImage: randomMovie ? `url(${IMAGE_BASE_URL}${randomMovie.backdrop_path})` : 'none',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    minHeight: '300px', // Set a minimum height for the div
  };





  return (
    <div style={backgroundStyle} className='h-[100vh] flex  items-center -z-10'>
      {randomMovie && (
        <div className='w-[60%] md:w-[35%] text-white ml-16'>
          <h2 className='text-5xl font-bold mb-4'>{randomMovie.title}</h2>
          <p className='my-2'>{randomMovie.overview}</p>
          <p>Release Date: {randomMovie.release_date}</p>

          <button className='flex gap-2 items-center my-2 bg-red-600 p-2'><img src={play} alt="" />Play Now</button>
        </div>
      )}
    </div>
  );
};

export default Header;
