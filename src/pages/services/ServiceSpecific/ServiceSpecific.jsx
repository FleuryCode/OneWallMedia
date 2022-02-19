import React from "react";
import './ServiceSpecific.styles.scss';

class ServiceSpecific extends React.Component {
    render() {
        return (
            <div className="serviceSpecificContainer">
                <div className="serviceHeader container-fluid p-0">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <h1 className="text-center mt-5">Real Estate Photography</h1>
                        </div>
                    </div>
                </div>
                <div className="serviceInfo container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis beatae cupiditate eum tenetur praesentium, itaque iusto! Vel, dolore nisi ad quidem nobis repudiandae placeat id ut eligendi magnam eius.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis voluptates autem rerum laborum architecto tenetur sequi expedita non, libero officiis dolore eum exercitationem quam eius officia ut. Ducimus, dolorum!</p>
                        </div>
                        <div className="col-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis beatae cupiditate eum tenetur praesentium, itaque iusto! Vel, dolore nisi ad quidem nobis repudiandae placeat id ut eligendi magnam eius.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis voluptates autem rerum laborum architecto tenetur sequi expedita non, libero officiis dolore eum exercitationem quam eius officia ut. Ducimus, dolorum!</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ServiceSpecific;