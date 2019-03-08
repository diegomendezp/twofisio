import React from 'react';

const displayDescription = (description) => { 
  return description.map((element, index) => <li>{element}</li>)
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
