import React  from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ProjectsContent } from "../../components/projectsContent";

export const Projects = () => {
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
    <>
      <div className="projects">
        <div className="projects-img">
          <div className="projects-text">
            <h1>{t('navBar.projects')}</h1>
            <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.projects')}</h6>
          </div>
        </div>
        <ProjectsContent />
      </div>
    </>
  );
};
