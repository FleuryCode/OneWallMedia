import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({handleClick, page, text, ...otherProps}) => {
    return(
        <div className={`${page} buttonContainer`}>
            {text}
        </div>
    );
}

export default CustomButton;