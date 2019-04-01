import React from 'react';

import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";


const displayDescription = (description) => { 
  return description.map((element, i) => <FontRegular key={i}>- {element}</FontRegular>)
}
const Treatment = ({name, description}) => {
  return (
    
      <div className="treatment">
        <FontRegular className="treatment-name">{name}</FontRegular>
        {displayDescription(description)}
      </div>
    
  );
};

export default Treatment;
