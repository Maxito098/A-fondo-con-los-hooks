import React, { Component } from 'react';
import Genre from '../Genre/index';

class GenresInDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresList: [],
    };
  }

  componentDidMount() {
    fetch('/api/genres')
      .then(respuesta => {
        return respuesta.json();
      })
      .then(genres => {
        this.setState({ genresList: genres.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { genresList } = this.state;
    const { isHovered } = this.props;

    return (
      <React.Fragment>
        <div className="card-body fondoCaja">
          <div className="row">
            {genresList.map((genre, index) => {
              return <Genre {...genre} key={index} isHovered={isHovered} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GenresInDB;
