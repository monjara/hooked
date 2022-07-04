import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Movie from './components/Movie'
import './App.css'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const api = axios.create({
  baseURL: API_BASE_URL
})

function App() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [errMsg, setErrMsg] = useState('')
  console.log(movies)

  useEffect(() => {
    const getDefaultMovie = async () => {
      setLoading(true)
      try {
        const res = await api.post(`/?s=man&apikey=${API_KEY}`)
        setMovies(res.data.Search)
      } catch (e) {
        setErrMsg(e)
      }
      setLoading(false)
    }

    getDefaultMovie();
  }, [])

  const searchMovie = async (searchValue) => {
    setLoading(true)
    try {
      const res = await api.post(`/?s=${searchValue}&apikey=${API_KEY}`)
      setMovies(res.Search)
    } catch (e) {
      setErrMsg(e)
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={searchMovie} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errMsg ? (
          <span>loading...</span>
        ) : errMsg ? (
          <div className="errorMessage">{errMsg}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App
