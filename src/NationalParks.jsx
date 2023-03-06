import React from 'react';

const NationalParks = ({park}) => {
    return (
        <div className="parks">
          <div>
            <p>{park.fullName}</p>
          </div>
          <div>
            <img src = {park.images[0]["url"]} alt = {park.name}></img>
          </div>
          <div>
            <span>{park.designation}</span>
            <h3>{park.fullName}</h3>
          </div>
        </div>
    )
}

export default NationalParks;