import React from "react";

function App () {
  const title = "Mad Max";
  const posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"]

  return (
    <div className="App">
      <MovieCard title={title} posterSrc={posterURL} genres={genresArr} />
    </div>
  );
}

function MovieCard (title, posterSrc, genres) {
{
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
}

export default MovieCard;
