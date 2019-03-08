import React from 'react';

const displayDescription = (description) => { 
  return description.map((element, i) => <li key={i}>{element}</li>)
}
const Treatment = ({name, description}) => {
  return (
    <React.Fragment>
      <p>{name}</p>
      {displayDescription(description)}
    </React.Fragment>
  );
};

export default Treatment;
