import React from 'react';

const displayDescription = (description) => { 
  return description.map((element, i) => <li key={i}>- {element}</li>)
}
const Treatment = ({name, description}) => {
  return (
    
      <div className="treatment">
        <p className="treatment-name">{name}</p>
        {displayDescription(description)}
      </div>
    
  );
};

export default Treatment;
