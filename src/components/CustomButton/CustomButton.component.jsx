import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({handleClick, page, text, messageSending, ...otherProps}) => {
    return(
        <div onClick={handleClick} className={`${page} buttonContainer`} {...otherProps}>
            {messageSending ? 'SENDING...' : text}
        </div>
    );
}

export default CustomButton;