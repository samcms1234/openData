import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';


const Protected = ( props ) => {
    
    const { Component } = props;
    const navigate = useNavigate();
    const { isLoggedIn, credentials } = useContext(LoginContext);

    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/signin');
        }
    })

  return (
    <div>
        <Component  />
    </div>
  )
}

export default Protected