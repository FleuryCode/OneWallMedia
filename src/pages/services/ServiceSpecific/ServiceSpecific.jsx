import React from "react";
import './ServiceSpecific.styles.scss';
import { useParams } from "react-router-dom";
import { ServiceList } from "../../../ServiceList";
import { RealEstatePhotos, TwilightPhotos, DronePhotos, MatterportPhotos, VirtualStagingPhotos, PortraitPhotos, EventPhotos, ProductPhotos } from "../../../PortfolioImages";

const ServiceSpecific = () => {

    let params = useParams();

    let serviceObject = {
        serviceName: '',
        serviceId: null,
        servicePricing: '',
        servicesIncludes: [],
        mainImageUrl: '',
        serviceLink: ''
    }
    let { serviceName, serviceId, servicePricing, servicesIncludes, mainImageUrl, serviceLink } = serviceObject;
    for (let i = 0; i < ServiceList.length; i++) {
        if (ServiceList[i].linkAddress === params.serviceLink) {
            serviceName = ServiceList[i].service;
            serviceId = ServiceList[i].id;
            servicePricing = ServiceList[i].pricing;
            servicesIncludes = ServiceList[i].services;
            mainImageUrl = ServiceList[i].mainImageUrl;
            serviceLink = ServiceList[i].linkAddress;
        }
    }

    let images = [];
    let mainKey = RealEstatePhotos;
    switch (params.serviceLink) {
        case 'real-estate-photography':
            mainKey = RealEstatePhotos;
            break;
        case 'twilight-photography':
            mainKey = TwilightPhotos;
            break;
        case 'drone-photography':
            mainKey = DronePhotos;
            break;
        case '360-matterport':
            mainKey = MatterportPhotos;
            break;
        case 'virtual-staging':
            mainKey = VirtualStagingPhotos;
            break;
        case 'portraits':
            mainKey = PortraitPhotos;
            break;
        case 'live-events':
            mainKey = EventPhotos;
            break;
        case 'product-photography':
            mainKey = ProductPhotos;
            break;
        default:
            break;
    }

    let keys = Object.keys(mainKey);
    keys.forEach((key, index) => {
        images.push(mainKey[key]);
    });


    // HOW TO DO THIS JUST FOR IMAGE PORTFOLIOS
    // const test5 = false;
    // test5 ? 
    //                         images.map(image => (
    //                             <div key={image} className="col-4">
    //                                 <img src={image} alt="" />
    //                             </div>
    //                         ))
    //                      : console.log('hello')


    // !!!!!!! This works. Will need to do this for every page though. Including the title information. But it works. !!!!!!
    document.querySelector('meta[name="description"]').setAttribute("content", 'Testing out this feature.');

    return (
        <div className="serviceSpecificContainer">
            <div style={{ backgroundImage: mainImageUrl }} className="serviceHeader container-fluid p-0">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="text-center service-title">{serviceName}</h1>
                    </div>
                </div>
            </div>
            <div className="serviceInfo container-fluid">
                <div className="row d-flex justify-content-center pt-4">
                    <div className="col-12 col-md-5 p-3">
                        <h4>Service Information</h4>
                        <div className="services-included-container">
                            {
                                servicesIncludes.map(service => (
                                    <p key={service}>{`\u2022 ${service}`}</p>

                                ))
                            }
                        </div>
                        <h6>{servicePricing}</h6>
                    </div>
                    <div className="col-12 col-md-7 px-5 my-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis beatae cupiditate eum tenetur praesentium, itaque iusto! Vel, dolore nisi ad quidem nobis repudiandae placeat id ut eligendi magnam eius.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis voluptates autem rerum laborum architecto tenetur sequi expedita non, libero officiis dolore eum exercitationem quam eius officia ut. Ducimus, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores aperiam id, neque nisi maxime quod sint corrupti officiis sed, delectus rem vitae vero qui excepturi animi tenetur. Magni, maxime!</p>
                    </div>
                </div>
                <div className="row gallery">
                    {
                        images.map(image => (
                            <div key={image} className="col-4">
                                <img src={image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );

}

export default ServiceSpecific;