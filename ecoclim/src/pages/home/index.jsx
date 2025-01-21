import React from "react";
import "./style.css";
import SliderComponent from "../../components/slider/SliderComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/home/img1.jpg";
import fallbackImage from "../../assets/images/fallback/fallback.jpg"

import service1 from "../../assets/images/home/service1.jpg";
import service2 from "../../assets/images/home/service2.jpg";
import service3 from "../../assets/images/home/service3.png";
import service4 from "../../assets/images/home/service4.jpg";

import icon1 from "../../assets/images/icons/residential.png";
import icon2 from "../../assets/images/icons/restaurant.png";
import icon3 from "../../assets/images/icons/health-clinic.png";
import icon4 from "../../assets/images/icons/skyscrapper.png";
import icon5 from "../../assets/images/icons/storage.png";
import icon6 from "../../assets/images/icons/institution.png";
import PartnersSlider from "../../components/partnersSlider/PartnersSlider";

export const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onAbout = () => {
        navigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onService = () => {
        navigate('/service');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paragraphs = [
        {
            title: t('home.we_provide'),
            items: [t('home.comfort')]
        }
    ];

    const services = [
        {
            img: service1,
            title: t('home.ventilation'),
            description: t('home.ventilation_description')
        },
        {
            img: service2,
            title: t('home.heating_cooling'),
            description: t('home.heating_cooling_description')
        },
        {
            img: service3,
            title: t('home.smoke_extraction'),
            description: t('home.smoke_extraction_description')
        },
        {
            img: service4,
            title: t('home.water_supply_sewerage'),
            description: t('home.water_supply_sewerage_description')
        }
    ];

    const items = [
        { icon: icon1, key: 'home.residentialComplexes' },
        { icon: icon2, key: 'home.hotelRestaurantComplexes' },
        { icon: icon3, key: 'home.medicalCenters' },
        { icon: icon4, key: 'home.businessCenters' },
        { icon: icon5, key: 'home.productionSpaces' },
        { icon: icon6, key: 'home.educationalInstitutions' },
    ];

    
   
    return (
        <div>
            <SliderComponent />
            <div className="home1">
                <img 
                    className="home1_img" 
                    src={img1} 
                    alt="" 
                    onError={(e) => e.target.src = fallbackImage} 
                />
                <div className="home1_content">
                    <h2>{t('home.comfort_message')}</h2>
                    <p>{t('home.service_description')}</p>
                    <div className="home_service">
                        {paragraphs.map((section, index) => (
                            <div className="home1_content1" key={index}>
                                <h3>{section.title}</h3>
                                {section.items.map((item, itemIndex) => (
                                    <p key={itemIndex}>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button onClick={onAbout}>{t('home.learnMore')}</button>
                </div>
            </div>

            <div className="home2_content">
                <h2>{t('navBar.service')}</h2>
                <div className="home2_service">
                    {services.map((service, index) => (
                        <div className="home2_service_item" key={index}>
                            <img 
                                src={service.img} 
                                alt={`Service ${index + 1}`} 
                                onError={(e) => e.target.src = fallbackImage} 
                            />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button onClick={onService}>{t('home.learnMore')}</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="home4_content" >
                <h2>{t('home.whoCanApplyTo')}</h2>
                <div className="home4_content_text">
                    {items.map((item, index) => (
                        <div className="home4_text" key={index}>
                            <img 
                                src={item.icon} 
                                alt={`icon ${index + 1}`} 
                                onError={(e) => e.target.src = fallbackImage} 
                            />
                            <p>{t(item.key)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <PartnersSlider />
        </div>
    );
};
