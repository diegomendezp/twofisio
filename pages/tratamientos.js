import React from 'react'
import treatments from '../content/treatments.json'
import Treatment from '../components/Member/Treatment.js';

const displayTreatments = () => {
  return treatments.map((treatment, i) => <Treatment key={i} {...treatment}/>)
}

const tratamientos = (props) => {
  return (
    <React.Fragment>
      {displayTreatments()}
    </React.Fragment>
  )
}



export default tratamientos

