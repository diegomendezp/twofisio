import React from 'react'

const Technique = ({name, description}) => {
  return (
    <div className="technique">
      <p>- <span className="treatment-name">{name}: </span>{description}</p>
    </div>
  )
}

export default Technique
