import React from "react";
import './PricingModule.styles.scss';

const PricingModule = ({ name, services, price }) => {
    return (
        <div className="pricingModuleContainer container-fluid p-3">
            <div className="row name-container m-0">
                <div className="col-12">
                    <h4>{name}</h4>
                </div>
            </div>
            <div className="row d-flex justify-content-center m-0">
                <div className="col-12 divider"></div>
            </div>
            <div className="row services-container">
                <div className="col-12 mt-3 px-4">
                    {
                        services.map(service => (
                            <p key={service}>{`${'\u2022'} ${service}`}</p>
                        ))
                    }
                </div>
            </div>
            <div className="row price-container mx-0">
                <div className="col-12 mt-5">
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    );
}

export default PricingModule;