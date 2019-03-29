import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";

import React from 'react'

const Technique = ({name, description}) => {
  return (
    <div className="technique">
      <FontRegular>- <span className="treatment-name">{name}: </span>{description}</FontRegular>
    </div>
  )
}

export default Technique
