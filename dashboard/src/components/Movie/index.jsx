import React, { Component } from "react";
import PropTypes from "prop-types";
import DataMovie from "../MovieList/index";

export class Movies extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  moviesList: [],
            };
      }

      componentDidMount() {
            fetch('/api/movies')
                  .then(respuesta => respuesta.json())
                  .then(movies => {
                        this.setState({ moviesList: movies.data });
                  })
                  .catch(error => console.log(error));
      }

      render() {
            return (
                  <div className="card shadow mb-4">
                        <div className="card-body">
                              <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                          <thead>
                                                <tr>
                                                      <th>Titulo</th>
                                                      <th>Duración</th>
                                                      <th>Calificación</th>
                                                      <th>Premios</th>
                                                </tr>
                                          </thead>
                                          {this.state.moviesList.map((movie, index) => (
                                                <DataMovie key={index} data={movie} />
                                          ))}
                                    </table>
                              </div>
                        </div>
                  </div>
            );
      }
}

Movies.propTypes = {
      movies: PropTypes.arrayOf(
            PropTypes.shape({
                  title: PropTypes.string.isRequired,
                  length: PropTypes.string.isRequired,
                  rating: PropTypes.number.isRequired,
                  awards: PropTypes.number.isRequired,
            })
      ).isRequired,
};

export default Movies;