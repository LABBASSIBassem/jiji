import React from 'react'
import './card.css'
import PropTypes from 'prop-types';


const Card = (props) =>{
    return(
        <>
        <div class="property-card">
          <a href="#">
            <div class="property-image">
            </div></a>
          <div class="property-description">
            <h5>{props.name}</h5>
            <p>{props.disc}
            <p>{props.children}</p>
            </p>
          </div>
          <a href="#">
            <div class="property-social-icons">
            </div>
          </a>
        </div>

        </>
    )
}

Card.defaultProps={
    name:'loading'
}

Card.propTypes = {
    name: PropTypes.string
}


export default Card