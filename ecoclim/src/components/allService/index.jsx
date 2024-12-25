import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

import service1 from "../../assets/images/home/service1.jpg";
import service2 from "../../assets/images/home/service2.jpg";
import service3 from "../../assets/images/home/service3.png";
import service4 from "../../assets/images/home/service4.jpg";

import fallbackImage from "../../assets/images/fallback/fallback.jpg";

export const ServiceContent = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      name: t("home.ventilation"),
      img: service1,
      content: t("home.services.ventilation.content"),
      text1: t("home.services.ventilation.text1"),
      text2: t("home.services.ventilation.text2"),
      text3: t("home.services.ventilation.text3"),
      text4: t("home.services.ventilation.text4"),
    },
    {
      id: 2,
      name: t("home.heating_cooling"),
      img: service2,
      content: t("home.services.heating_cooling.content"),
      text1: t("home.services.heating_cooling.text1"),
      text2: t("home.services.heating_cooling.text2"),
      text3: t("home.services.heating_cooling.text3"),
      text4: t("home.services.heating_cooling.text4"),
      text5: t("home.services.heating_cooling.text5"),
    },
    {
      id: 3,
      name: t("home.smoke_extraction"),
      img: service3,
      content: t("home.services.smoke_extraction.content"),
      text1: t("home.services.smoke_extraction.text1"),
      text2: t("home.services.smoke_extraction.text2"),
      text3: t("home.services.smoke_extraction.text3"),
      text4: t("home.services.smoke_extraction.text4"),
    },
    {
      id: 4,
      name: t("home.water_supply_sewerage"),
      img: service4,
      content: t("home.services.water_supply_sewerage.content"),
      text1: t("home.services.water_supply_sewerage.text1"),
      text2: t("home.services.water_supply_sewerage.text2"),
      text3: t("home.services.water_supply_sewerage.text3"),
    },
  ];

  const handleServiceClick = (id) => {
    setSelectedService((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <div className="service_content_section">
        <div className="allService_title">
          <div className="allService_content">
            {services.map((service) => (
              <div
                className={`allService_content_item ${selectedService === service.id ? "active" : ""
                  }`}
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
              >
                <h3>{service.name}</h3>
                <p>{service.content}</p>

                {selectedService === service.id && (
                  <div className="service_content">
                    <img
                      src={service.img}
                      alt="Service"
                      className="service-image"
                      onError={(e) => {
                        e.target.src = fallbackImage;
                      }}
                    />
                    <div>
                      <h3>{service.name}</h3>
                      <p>{service.text1}</p>
                      <p>{service.text2}</p>
                      <p>{service.text3}</p>
                      <p>{service.text4}</p>
                      <p>{service.text5}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
