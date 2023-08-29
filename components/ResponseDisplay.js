// file: /components/ResponseDisplay.js
// import Image from "next/image";
import Link from "next/link";
const ResponseDisplay = ({ data, error, loading,movieName }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    content = (
      <div  className="movies">
        {movieName&&<h1>Movies that are similar to {movieName}</h1>}
        {data.result.movieSuggestions.map((movie) => (
          <div className="movieContainer">
            <p className="movieName">{movie.title}</p>
            <div className="movieDescription">{movie.description}</div>
            <Link href={movie.link} target="_blank" className="imdb">Imdb link</Link>
            <div className="moviePoints"> <p>Ratings: {movie.ratings}/10</p>
            <p>Genre: {movie.essentialInfo}</p></div>
           
          </div>
        ))}
      </div>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
