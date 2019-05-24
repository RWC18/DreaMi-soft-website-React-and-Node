import React from 'react';
import ToTop from "../UI/ToTop/ToTop";

//styles
import './Services.scss';

//images
import graphArt from "../../img/Group 105.svg";
import websites from "../../img/Group 39.svg";
import translations from "../../img/Group 59.svg";

const Services = () => {
    return(
        <section className="services">
            <h2>Services</h2>
            <div className="services_img_section">
                <div className="services_images">
                    <img alt="DreaMi services" src={graphArt} />
                    <p>Graphic Design</p>
                </div>
                <div className="services_images">
                    <img alt="DreaMi services" src={websites} />
                    <p>Creating Websites</p>
                </div>
                <div className="services_images">
                    <img alt="DreaMi services" src={translations} />
                    <p>Translations & Content Writing</p>
                </div>
            </div>
            <ToTop/>
        </section>
    )
};

export default Services;