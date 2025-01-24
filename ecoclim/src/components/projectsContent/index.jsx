import React, { useEffect, useState } from "react";
import "./style.css";

import { IoMdClose } from "react-icons/io";

import C_img1 from "../../assets/images/projects/aparatmentComplexesx/img1.png";
import C_img2 from "../../assets/images/projects/aparatmentComplexesx/img2.png";
import C_img3 from "../../assets/images/projects/aparatmentComplexesx/img3.png";
import C_img4 from "../../assets/images/projects/aparatmentComplexesx/img4.png";
import C_img5 from "../../assets/images/projects/aparatmentComplexesx/img5.png";
import C_img6 from "../../assets/images/projects/aparatmentComplexesx/img6.png";
import C_img7 from "../../assets/images/projects/aparatmentComplexesx/img7.png";

import HRC_img1 from "../../assets/images/projects/hotelRes/img1.png";
import HRC_img2 from "../../assets/images/projects/hotelRes/img2.png";
import HRC_img3 from "../../assets/images/projects/hotelRes/img3.png";
import HRC_img4 from "../../assets/images/projects/hotelRes/img4.png";
import HRC_img5 from "../../assets/images/projects/hotelRes/img5.png";

import MC_img1 from "../../assets/images/projects/medicCenter/img1.jpg";
import MC_img2 from "../../assets/images/projects/medicCenter/img2.jpg";
import MC_img3 from "../../assets/images/projects/medicCenter/img3.jpg";
import MC_img4 from "../../assets/images/projects/medicCenter/img4.jpg";
import MC_img5 from "../../assets/images/projects/medicCenter/img5.jpg";
import MC_img6 from "../../assets/images/projects/medicCenter/img6.jpg";

import F_img1 from "../../assets/images/projects/differentSectors/img1.jpg";
import F_img2 from "../../assets/images/projects/differentSectors/img2.jpg";
import F_img3 from "../../assets/images/projects/differentSectors/img3.jpg";
import F_img4 from "../../assets/images/projects/differentSectors/img4.jpg";
import F_img5 from "../../assets/images/projects/differentSectors/img5.jpg";
import F_img6 from "../../assets/images/projects/differentSectors/img6.jpg";

import { useTranslation } from "react-i18next";

export const ProjectsContent = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(null); 

    const complexes = [
        { img: C_img1, title: t("projects.complex.davitashenComplex") },
        { img: C_img2, title: t("projects.complex.arabkirComplex") },
        { img: C_img3, title: t("projects.complex.arabkirComplex") },
        { img: C_img4, title: t("projects.complex.arabkirComplex") },
        { img: C_img5, title: t("projects.complex.arabkirComplex") },
        { img: C_img6, title: t("projects.complex.nazarbekyanComplex") },
        { img: C_img7, title: t("projects.complex.manandyanComplex") },
    ];

    const hotelRes = [
        { img: HRC_img1, title: t("projects.hotelRes.hrashqAygi") },
        { img: HRC_img2, title: t("projects.hotelRes.vahagniHall") },
        { img: HRC_img3, title: t("projects.hotelRes.darlingHall") },
        { img: HRC_img4, title: t("projects.hotelRes.fenixComplex") },
        { img: HRC_img5, title: t("projects.hotelRes.qaravan") },
    ];
    const medicCenters = [
        { img: MC_img1, title: t("projects.medicCenters.kapan") },
        { img: MC_img2, title: t("projects.medicCenters.mexri") },
        { img: MC_img3, title: t("projects.medicCenters.qajaran") },
        { img: MC_img4, title: t("projects.medicCenters.stepanakert") },
        { img: MC_img5, title: t("projects.medicCenters.sevan") },
        { img: MC_img6, title: t("projects.medicCenters.exegnadzor") },
    ];
    const allSector = [
        { img: F_img1, title: t("projects.allSector.kilikia") },
        { img: F_img2, title: t("projects.allSector.polElyus") },
        { img: F_img3, title: t("projects.allSector.akvatek") },
        { img: F_img4, title: t("projects.allSector.airport") },
        { img: F_img5, title: t("projects.allSector.arevikMankapartez") },
        { img: F_img6, title: t("projects.allSector.gandzaqarDproc") },
    ];
 
    const openModal = (index, category) => {
        if (windowWidth > 900) {
            setCurrentCategory(category); 
            if (category === "complex") {
                setSelectedImage(complexes[index].img);
            } else if (category === "hotelRes") {
                setSelectedImage(hotelRes[index].img);
            } else if (category === "medicCenter") {
                setSelectedImage(medicCenters[index].img);
            } else if (category === "allSector") {
                setSelectedImage(allSector[index].img);
            }
            setCurrentIndex(index);
            setIsModalOpen(true);
        }
    };
    

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal")) {
            closeModal();
        }
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (
        <div className="projectsContent">
            <h2>{t("projects.completed")}</h2>
            <h3>{t("home.residentialComplexes")}</h3>
            <div className="complexContainer">
                {complexes.map((complex, index) => (
                    <div className="complex" key={index}>
                        <img
                            src={complex.img}
                            alt={`complex-${index}`}
                            onClick={() => openModal(index, "complex")}
                        />
                        <h5>{complex.title}</h5>
                    </div>
                ))}
            </div>

            <h3>{t("home.hotelRestaurantComplexes")}</h3>
            <div className="hotelResContainer">
                {hotelRes.map((hotelRes, index) => (
                    <div className="hotelRes" key={index}>
                        <img
                            src={hotelRes.img}
                            alt={`hotelRes-${index}`}
                            onClick={() => openModal(index, "hotelRes")}
                        />
                        <h5>{hotelRes.title}</h5>
                    </div>
                ))}
            </div>

            <h3>{t("home.medicalCenters")}</h3>
            <div className="medicCenterContainer">
                {medicCenters.map((medicCenter, index) => (
                    <div className="medicCenter" key={index}>
                        <img
                            src={medicCenter.img}
                            alt={`medicCent-${index}`}
                            onClick={() => openModal(index, "medicCenter")}
                        />
                        <h5>{medicCenter.title}</h5>
                    </div>
                ))}
            </div>

            <h3>{t("projects.diferSect")}</h3>
            <div className="allSectorContainer">
                {allSector.map((allSector, index) => (
                    <div className="allSector" key={index}>
                        <img
                            src={allSector.img}
                            alt={`allSector-${index}`}
                            onClick={() => openModal(index, "allSector")}
                        />
                        <h5>{allSector.title}</h5>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleModalClick}>
                    <div className="modalContent">
                        <button className="closeBtn" onClick={closeModal}>
                            <IoMdClose />
                        </button>
                        <img src={selectedImage} alt="large view" />
                    </div>
                </div>
            )}
        </div>
    );
};
