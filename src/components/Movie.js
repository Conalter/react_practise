import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='title'>
        <h4
          className='showing'>{this.props.title}
        </h4>
        <p>Showing: {this.props.children}</p>
      </div>
    )
  }
}

export default Movie;
