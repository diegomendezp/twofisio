import React from 'react'
import team from '../content/team.json'
import Member from '../components/Member/Member.js';

const displayTeam = () => {
  return team.map((member, i) => <Member key={i} {...member} />)
}

const nosotros = (props) => {
  return (
    <React.Fragment>
      {displayTeam()}
    </React.Fragment>
  )
}



export default nosotros

