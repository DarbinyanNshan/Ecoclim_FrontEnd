import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductCard } from "../../components/productContent/ProductCard";


export const Product = () => {
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
        <div className="product">
            <div className="product-img">
                <div className="product-text">
                    <h1>{t('navBar.product')}</h1>
                    <h6 onClick={onHome}><span>{t('navBar.home')}</span> / {t('navBar.product')}</h6>
                </div>
            </div>
            <ProductCard/>
        </div>
    );
};