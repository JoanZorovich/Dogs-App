import React from 'react';
import Form from './../../components/form/form'
import dogwow from './dogwow.gif'
import './create.css'

function Create () {
    return ( 
        <div className="createContainer">
            <Form/>
            <img src={dogwow} className="dogif" alt='logo' />
        </div>
     );
}
 
export default Create;