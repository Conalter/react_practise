import React, {Component} from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id: 1, title: 'True Lies', showing: 'Tomorrow'},
        {id: 2, title: 'The Holy Mountain', showing: 'Forever'},
        {id: 3, title: 'The Shining', showing: 'redrum RedRum! REDRUM!!!'},
        // {id: 4, title: 'Betty Blue', showing: 'never'}
      ]
    };
  }

  render() {
    return (
      <div className='movie-box'>
        <h1>Movie List</h1>
        <MovieList data={this.state.data}/>
      </div>
    )
  }
}

export default MovieBox;
