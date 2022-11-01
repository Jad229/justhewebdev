import React from 'react';

function Button(props){
    return <div className="nav-btn"><a href={props.href}>{props.text}</a></div>
}
export default Button;