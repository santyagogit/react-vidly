import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  showingMovies() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.deletingMovie(movie)}
        >
          Danger
        </button>
      </tr>
    ));
  }

  showingTitle() {
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database.</p>;
    return <p>Showing 9 movies in the database.</p>;
  }

  render() {
    return (
      <React.Fragment>
        {this.showingTitle()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>{this.showingMovies()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  deletingMovie(movie) {
    const { movies } = this.state;
    let index = movies.indexOf(movie);
    movies.splice(index, 1);
    this.setState({ movies: movies });
  }
}

export default Movies;
