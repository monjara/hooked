const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
  return (
    <div className="movie" >
      <h2>{movie.title}</h2>
      <img width={200} src={poster} alt={movie.title} />
      <p>{movie.Year}</p>
    </div>
  )
}

export default Movie
