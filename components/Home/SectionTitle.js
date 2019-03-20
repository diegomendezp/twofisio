import React, { Component } from 'react'

export const SectionTitle = props => {

    return (
        <div className="sectionTitle">
            <h1 onClick={props.changeForm}>{props.title}</h1>
            <p>{props.body}</p>
            <a href={props.link}>+ Mas Info</a>
        </div>
    )
}

