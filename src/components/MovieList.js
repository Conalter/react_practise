import React, {Component} from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const movieNodes = this.props.data.map(movie => {
      return (<Movie title={movie.title} key={movie.id}>
        {movie.showing}
      </Movie>
    )
  })

  return (
    <div className='showing'>{movieNodes}</div>
  )
}
}

export default MovieList;
