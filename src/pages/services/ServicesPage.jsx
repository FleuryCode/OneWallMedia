import React from "react";
import './ServicesPage.styles.scss';
import { ServiceList } from '../../ServiceList';
import ServiceModule from "../../components/ServiceModule/SerivceModule.component";

class ServicesPage extends React.Component {
    render() {
        return(
            <div className="servicesContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Our Services</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        ServiceList.map(service => (
                            <div className="col-4 p-4">
                                <ServiceModule serviceName={service.service} imageUrl={service.mainImageUrl} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ServicesPage;