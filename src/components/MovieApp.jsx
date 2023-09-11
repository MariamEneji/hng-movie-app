
import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import logo from '../assets/Logo.svg'
import searchImg from '../assets/Search.svg'
import menu from '../assets/Menu.svg'
import Header from './Header'


const MovieApp = () => {

  // Hero Random Movie

  

  // Search Functionality
  const [searchKey, setSearchKey ] = useState('')

  const searchMovies = (e) => {
      e.preventDefault()
      fetchMovies(searchKey)
  }



    const API_URL  = "https://api.themoviedb.org/3"
    const [movies, setMovies] = useState([])
  
    const fetchMovies = async (searchKey) =>  {

      const type = searchKey ? "search" : "discover"
  
      // const {data: {results}} = await axios.get(`${API_URL}/discover/movie/`, {
        
      //   params: {
      //     api_key: '4e98374803b820c06025e2176dacb03d'
      // }

      
    // })

    const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
        
      params: {
        api_key: '4e98374803b820c06025e2176dacb03d',
        query: searchKey
    }

    
  })

    
  
    
    setMovies(results)
    }
  
    useEffect (() => {
      fetchMovies()
    }, [])
  
  const renderMovies = () => {
    return  movies.map(movie => (
          <MovieCard 
          key={movie.id}
          movie={movie}
       />
      ));
  };

  return (
    <div className=' '>
      <header className='' >

        
      <div className='p-6 transparent text-white flex justify-between items-center w-full backdrop-blur   fixed '>

        
<img src={logo} alt="" />
<form className='flex  justify-between border rounded-md p-2 w-[50%]'
onSubmit={searchMovies}>
    <input type="text" className='bg-inherit text-white   rounded-md w-[80%]' 
    placeholder='What do you want to watch?'
    onChange ={(e) => setSearchKey (e.target.value)}

    
    />
    <button type='submit'><img src={searchImg} alt="" /></button>
    
    
</form>






<div className="sign flex gap-2 items-center">
    <h1 className=''>Sign In</h1>
   
    <img src={menu} alt="" />
</div>
</div>
<Header />
      </header>

      <div className="flex justify-between items-center my-4 p-8">
      <h1 className='text-3xl'>Featured Movies</h1>

      <h3 className='text-xl text-red-600'>See More </h3>
      </div>
          <div className="container max-w-[1200px] mx-auto grid gap-2 grid-cols-4">
            
        {renderMovies()}
    </div>
    </div>
  )
}

export default MovieApp