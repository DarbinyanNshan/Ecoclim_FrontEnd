import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PartnersSlider.css';

import logo1 from '../../assets/images/logo/logo1.png';
import logo2 from '../../assets/images/logo/logo2.png';
import logo3 from '../../assets/images/logo/logo3.png';
import logo4 from '../../assets/images/logo/logo4.png';
import logo5 from '../../assets/images/logo/logo5.png';
import logo6 from '../../assets/images/logo/logo6.png';
import logo7 from '../../assets/images/logo/logo7.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const partners = [
    { name: 'Partner 1', logo: logo1 },
    { name: 'Partner 2', logo: logo2 },
    { name: 'Partner 3', logo: logo3 },
    { name: 'Partner 4', logo: logo4 },
    { name: 'Partner 5', logo: logo5 },
    { name: 'Partner 5', logo: logo6 },
    { name: 'Partner 5', logo: logo7 },
];

const PartnersSlider = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    const onContact = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="partners">
            <h2>{t("home.partners")}</h2>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index}>
                        <img src={partner.logo} alt={partner.name} className='partners_img' />
                    </div>
                ))}
            </Slider>
            <button onClick={onContact}>{t("home.partnersBtn")}</button>
        </div>
    );
};

export default PartnersSlider;
