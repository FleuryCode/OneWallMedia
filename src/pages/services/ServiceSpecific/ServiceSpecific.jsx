import React, { useState } from "react";
import './ServiceSpecific.styles.scss';
import { useParams } from "react-router-dom";
import { ServiceList } from "../../../ServiceList";

const ServiceSpecific = () => {

    let params = useParams();

    let serviceObject = {
        serviceName: '',
        serviceId: null,
        servicePricing: '',
        servicesIncludes: [],
        mainImageUrl: ''
    }
    let { serviceName, serviceId, servicePricing, servicesIncludes, mainImageUrl } = serviceObject;
    for (let i = 0; i < ServiceList.length; i++) {
        if (ServiceList[i].linkAddress === params.serviceLink) {
            serviceName = ServiceList[i].service;
            serviceId = ServiceList[i].id;
            servicePricing = ServiceList[i].pricing;
            servicesIncludes = ServiceList[i].services;
            mainImageUrl = ServiceList[i].mainImageUrl;
        }
    }

    // !!!!!!! This works. Will need to do this for every page though. Including the title information. But it works. !!!!!!
    document.querySelector('meta[name="description"]').setAttribute("content", 'Testing out this feature.');
    return (
        <div className="serviceSpecificContainer">
            <div className="serviceHeader container-fluid p-0">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="text-center mt-5">{serviceName}</h1>
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

export default ServiceSpecific;