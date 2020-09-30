import React from 'react'
import PropTypes from 'prop-types';

function ProfileComponent(props) {
    
    return (
        <div style={{textAlign:"center"}}>
            <p style={{color:"white",paddingTop:"20px"}} >My name is {props.fullName || '(please define it)'}, I'm a {props.bio || '(please define it)'} and work as a {props.profession || '(please define it)'}.</p>
            <button onClick={()=>props.handleName(props.fullName || '(please define it)')}>Click here</button>
            {props.children}
        </div>
    )
}

ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
export default ProfileComponent
