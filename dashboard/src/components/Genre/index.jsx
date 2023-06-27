import React from 'react';

function Genre(props){
    const cardStyles = {
        backgroundColor: props.isHovered ? '#6610f2' : '#343a40',
      };
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card text-white shadow" style={cardStyles}>
                    <div className="card-body fondoCaja">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;