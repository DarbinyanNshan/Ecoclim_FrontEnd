import React from "react";
import "./style.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AboutSlider from "../../components/aboutSlider/AboutSlider";

export const About = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onHome = () => {
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="about">
            <div className="about-img">
                <div className="about-text">
                    <h1>{t('navBar.about')}</h1>
                    <h6 onClick={onHome}>
                        <span>{t('navBar.home')}</span> / {t('navBar.about')}
                    </h6>
                </div>
            </div>

            <div className="about_content">
                <div className="about_text">
                    <h2>{t('about.title')}</h2>
                    <p>
                        {t('about.content')}
                    </p>

                    <h3>{t('about.experience')}</h3>
                    <p>
                    {t('about.experienceContent')}
                    </p>

                    <h3>  {t('about.priorities.title')}</h3>
                    <ul>
                        <li>
                        {t('about.priorities.items.quality')}
                        </li>
                        <li>
                        {t('about.priorities.items.individual_approach')}

                        </li>
                        <li>
                        {t('about.priorities.items.team')}

                        </li>
                        <li>
                        {t('about.priorities.items.timeliness')}

                        </li>
                    </ul>
                </div>
                <AboutSlider/>
            </div>
        </div>
    );
};
