import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

import service1 from "../../assets/images/home/service1.jpg";
import service2 from "../../assets/images/home/service2.jpg";
import service3 from "../../assets/images/home/service3.jpg";
import service4 from "../../assets/images/home/service4.jpg";

export const ServiceContent = () => {
  const [selectedService, setSelectedService] = useState("all");
  const { t } = useTranslation();

  const services = [
    { id: "all", name: "service.allService" },
    {
      id: 1, name: t("home.ventilation"), img: service1, content: `Ջրամատակարարման համակարգի հաջողությունը կախված է դրա հուսալիությունից ու արդյունավետությունից, և մենք դա գիտենք լավագույնս։‍
      ‍
      🔧 Նորագույն տեխնոլոգիաներ և բարձրակարգ նյութեր‍
      Մենք օգտագործում ենք առաջատար լուծումներ և միայն որակյալ նյութեր՝ ապահովելու համար ձեր ջրամատակարարման համակարգի երկարաժամկետ և անխափան աշխատանքը։‍
      ‍
      🤝 Անհատականացված նախագծեր՝ ըստ ձեր կարիքների‍
      Մեր թիմը մասնագիտացած է ջրամատակարարման համակարգերի նախագծման և տեղադրման գործում, որոնք կատարյալ համապատասխան են ձեր պահանջներին ու ակնկալիքներին։‍
      ‍
      💡 Ձեր հարմարավետությունը՝ մեր գլխավոր նպատակն է‍
      Ընտրե´ք մեզ՝ որակյալ և վստահելի ծառայություն ստանալու համար։` },
    {
      id: 2, name: t("home.heating_cooling"), img: service2, content: `Ջրամատակարարման համակարգի հաջողությունը կախված է դրա հուսալիությունից ու արդյունավետությունից, և մենք դա գիտենք լավագույնս։‍
      ‍
      🔧 Նորագույն տեխնոլոգիաներ և բարձրակարգ նյութեր‍
      Մենք օգտագործում ենք առաջատար լուծումներ և միայն որակյալ նյութեր՝ ապահովելու համար ձեր ջրամատակարարման համակարգի երկարաժամկետ և անխափան աշխատանքը։‍
      ‍
      🤝 Անհատականացված նախագծեր՝ ըստ ձեր կարիքների‍
      Մեր թիմը մասնագիտացած է ջրամատակարարման համակարգերի նախագծման և տեղադրման գործում, որոնք կատարյալ համապատասխան են ձեր պահանջներին ու ակնկալիքներին։‍
      ‍
      💡 Ձեր հարմարավետությունը՝ մեր գլխավոր նպատակն է‍
      Ընտրե´ք մեզ՝ որակյալ և վստահելի ծառայություն ստանալու համար։` },
    {
      id: 3, name: t("home.smoke_extraction"), img: service3, content: `Ծխահեռացման համակարգերը նախատեսված են հրդեհի ժամանակ ծխի արագ և արդյունավետ հեռացման համար՝ նվազեցնելով ռիսկերը և ապահովելով անվտանգությունը։
      Անհատական լուծումներ՝ ձեր տարածքի համար
      Մեր փորձառու ինժեներները կմշակեն լավագույն համակարգը՝ համապատասխանեցնելով այն ձեր տարածքի առանձնահատկություններին և պահանջներին։
      Անվտանգության առաջատար տեխնոլոգիաներով մենք ստեղծում ենք լուծումներ, որոնք պաշտպանում են մարդկանց կյանքն ու գույքը։
      Հրդեհաշիջման համակարգերը նախատեսված են ապահովելու ձեր, ձեր աշխատակիցների և ձեր տարածքի անվտանգությունը՝ կանխարգելելով աղետալի հետևանքները։
      ❗️ Կարևոր է որակը
      Հրդեհաշիջման համակարգի արդյունավետությունը կախված է դրա ճիշտ նախագծումից և տեղադրումից։ Մեր թիմը երաշխավորում է աշխատանքների բարձր որակ՝ հիմնված մասնագիտական փորձի վրա։
      🤝 Մեզ հետ դուք կստանաք հուսալի և առաջադեմ համակարգեր, որոնք համապատասխան են միջազգային չափանիշներին և ձեր տարածքի առանձնահատկություններին։
      💡Ընտրեք պրոֆեսիոնալ լուծումներ ձեր անվտանգության համար。` },
    {
      id: 4, name: t("home.water_supply_sewerage"), img: service4, content: `Ջրամատակարարման համակարգի հաջողությունը կախված է դրա հուսալիությունից ու արդյունավետությունից, և մենք դա գիտենք լավագույնս։‍
      ‍
      🔧 Նորագույն տեխնոլոգիաներ և բարձրակարգ նյութեր‍
      Մենք օգտագործում ենք առաջատար լուծումներ և միայն որակյալ նյութեր՝ ապահովելու համար ձեր ջրամատակարարման համակարգի երկարաժամկետ և անխափան աշխատանքը։‍
      ‍
      🤝 Անհատականացված նախագծեր՝ ըստ ձեր կարիքների‍
      Մեր թիմը մասնագիտացած է ջրամատակարարման համակարգերի նախագծման և տեղադրման գործում, որոնք կատարյալ համապատասխան են ձեր պահանջներին ու ակնկալիքներին։‍
      ‍
      💡 Ձեր հարմարավետությունը՝ մեր գլխավոր նպատակն է‍
      Ընտրե´ք մեզ՝ որակյալ և վստահելի ծառայություն ստանալու համար։` },
  ];

  const service = [
    {
      id: 1,
      title: t("home.ventilation"),
      description: t("home.ventilation_description"),
    },
    {
      id: 2,
      title: t("home.heating_cooling"),
      description: t("home.heating_cooling_description"),
    },
    {
      id: 3,
      title: t("home.smoke_extraction"),
      description: t("home.smoke_extraction_description"),
      img: service3,
    },
    {
      id: 4,
      title: t("home.water_supply_sewerage"),
      description: t("home.water_supply_sewerage_description"),
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {services.map((service) => (
            <li
            key={service.id}
            className={`${
              service.id === "all" ? "unique-class" : ""
            } ${selectedService === service.id ? "active" : ""}`}
            onClick={() => setSelectedService(service.id)}
          >
            {t(service.name)}
          </li>
          ))}
        </ul>
      </div>

      <div className="allService_content">
        {selectedService === "all" ? (
          <div className="allService_title">
            <h2>
              {t("home.our")} {t("navBar.service")}
            </h2>
            <div className="allService_content">
              {service.map((item) => (
                <div
                  className="allService_content_item"
                  key={item.id}
                  onClick={() => setSelectedService(item.id)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="service_content">
            {services.find((service) => service.id === selectedService)?.img && (
              <img
                src={services.find((service) => service.id === selectedService)?.img}
                alt="Service"
                className="service-image"
              />
            )}
            <div>
              <h3>
                {services.find((service) => service.id === selectedService)?.name}
              </h3>
              <p>
                {services.find((service) => service.id === selectedService)?.content}
              </p>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};
