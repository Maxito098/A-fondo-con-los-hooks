import React from "react";

const DataMovie = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.data.title}</td>
                <td>{props.data.length}</td>
                <td>{props.data.rating}</td>
                <td>{props.data.awards}</td>
            </tr>
        </tbody>
    );
};

export default DataMovie;