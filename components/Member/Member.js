import React from 'react'

const displayCurriculum = (curriculum) => {
  return curriculum.map((element, i) => <li key={i}>{element}</li>)
}
const Member = ({name, number, curriculum}) => {
  return (
    <React.Fragment>
      <p>{name}</p>
      <img src="https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt={`${name}-photo`} />
      <p>NºColegiado: {number}</p>
      <ul>
        {displayCurriculum(curriculum)}
      </ul>
    </React.Fragment>
  )
}

export default Member;