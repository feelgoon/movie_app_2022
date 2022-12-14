import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
import './App.css';
import Home from "./routes/Home";

function App(){
  return <Home />
}

/*
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    this.setState({movies, isLoading: false});

    //console.log(movies);
  }

  componentDidMount(){
    // 영화데이터 로딩
    this.getMovies();

  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
        isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading......</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie)=>{
              return (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  title={movie.title} 
                  year={movie.year} 
                  summary={movie.summary} 

                  genres={movie.genres}
                  poster={movie.medium_cover_image} />
              );
            })}
          </div>
        )
      }
      
      </section>
    );
  };
}
*/
export default App;
