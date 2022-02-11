import React from "react";
import './CustomMessage.styles.scss';

const CustomMessage = ({message, display, isError, ...otherProps}) => {
    return(
        <div className={`${display ? 'display' : 'noDisplay'} ${isError ? 'error' : 'noError'} messageContainer`}>
            <h3>{message}</h3>
        </div>
    );
}

export default CustomMessage;