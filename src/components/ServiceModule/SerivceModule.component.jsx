import React from "react";
import './ServiceModule.styles.scss';
import { Link } from "react-router-dom";

const ServiceModule = ({serviceName, imageUrl, link}) => {
    return(
        <Link to={`/services/${link}`} className="link" >
            <div className="serviceModuleContainer container-fluid" style={{backgroundImage: imageUrl}}>
                <div className="info-container">
                    <h4>{serviceName}</h4>
                </div>
            </div>
        </Link>
    );
}

export default ServiceModule;