import React from 'react';
import './PricingPage.styles.scss';
import { ServiceList } from '../../ServiceList';
import PricingModule from '../../components/Pricing/PricingModule.component';

class PricingPage extends React.Component {
    render() {
        return (
            <div className="pricingContainer container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <h1>OUR PRICING</h1>
                    </div>
                </div>
                <div className="row px-2">
                    {
                        ServiceList.map(service => (
                            // Change these to links. Need page in services too.
                            <div key={service.id} className="col-12 col-md-4 col-lg-3 my-4 p-3">
                                <PricingModule name={service.service} services={service.services} price={service.pricing} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default PricingPage;