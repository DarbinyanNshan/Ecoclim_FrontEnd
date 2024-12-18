import React, { useState } from 'react';
import "./style.css";

import { Pagination } from './Pagination';
import { Card } from './Card';
import { useTranslation } from 'react-i18next';

import img1 from "../../assets/images/product/katsa.png"
import img2 from "../../assets/images/product/hanqabambak.png"
import img3 from "../../assets/images/product/katsa24kw.png"
import img4 from "../../assets/images/product/kanalayinFankoyl.png"
import img5 from "../../assets/images/product/jrataqacucichCavalayin.png"
import img6 from "../../assets/images/product/martkoc.png"
import img7 from "../../assets/images/product/katsa32kw.png"
import img8 from "../../assets/images/product/mekuschXoxovak.png"
import img9 from "../../assets/images/product/uxordich.png"
import img10 from "../../assets/images/product/ankyunayinUxordich.png"
import img11 from "../../assets/images/product/metaxakanAmrak.png"
import img12 from "../../assets/images/product/inqnakpchunMekusich.png"
import img13 from "../../assets/images/product/chiler.png"
import img14 from "../../assets/images/product/odamxichKanalayin.png"
import img15 from "../../assets/images/product/kasetayinFankoyl.png"
import img16 from "../../assets/images/product/bak.png"

// import { MdClear } from "react-icons/md";


export const ProductCard = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const cards = [
    {
      title: t('product.fullName1'),
      description: t('product.description1'),
      image: img1,
    },
    {
      title: t('product.fullName2'),
      description: t('product.description2'),
      image: img2,
    }, 
    {
      title: t('product.fullName3'),
      description: t('product.description3'),
      image: img3,
    },
    {
      title: t('product.fullName4'),
      description: t('product.description4'),
      image: img4,
    },
    {
      title: t('product.fullName5'),
      description: t('product.description5'),
      image: img5,
    },
    {
      title: t('product.fullName6'),
      description: t('product.description6'),
      image: img6,
    },
    {
      title: t('product.fullName7'),
      description: t('product.description7'),
      image: img7,
    },
    {
      title: t('product.fullName8'),
      description: t('product.description8'),
      image: img8,
    },
    {
      title: t('product.fullName9'),
      description: t('product.description9'),
      image: img9,
    },
    {
      title: t('product.fullName10'),
      description: t('product.description10'),
      image: img10,
    },
    {
      title: t('product.fullName11'),
      description: t('product.description11'),
      image: img11,
    },
    {
      title: t('product.fullName12'),
      description: t('product.description12'),
      image: img12,
    },
    {
      title: t('product.fullName13'),
      description: t('product.description13'),
      image: img13,
    },
    {
      title: t('product.fullName14'),
      description: t('product.description14'),
      image: img14,
    },
    {
      title: t('product.fullName15'),
      description: t('product.description15'),
      image: img15,
    },
    {
      title: t('product.fullName16'),
      description: t('product.description16'),
      image: img16,
    }
  ];

  // const handleFullNameChange = (event) => {
  //   setFullName(event.target.value);
  //   setCurrentPage(1); 
  // };

  // const handleProfessionChange = (event) => {
  //   setProfession(event.target.value);
  //   setCurrentPage(1); 
  // };

  // const clearFullName = () => {
  //   setFullName('');
  // };

  // const clearProfession = () => {
  //   setProfession('');
  // };

  const filteredCards = cards.filter(card => {
    const nameMatches = card.title.toLowerCase().includes(fullName.toLowerCase());
    const professionMatches = card.description.toLowerCase().includes(profession.toLowerCase());
    return nameMatches && professionMatches;
  });

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    {/* <div className="search-inputs">
      <div className="search-input-container">
        <input
          type="text"
          placeholder={t('search.fullNameInputs')}
          value={fullName}
          onChange={handleFullNameChange}
          className={`search-input ${fullName ? 'active' : ''}`}
        />
        {fullName && (
          <button className="clear-input" onClick={clearFullName}><MdClear/></button>
        )}
      </div>
      <div className="search-input-container">
        <input
          type="text"
          placeholder={t('search.professionInputs')}
          value={profession}
          onChange={handleProfessionChange}
          className={`search-input ${profession ? 'active' : ''}`}
        />
        {profession && (
          <button className="clear-input" onClick={clearProfession}><MdClear/></button>
        )}
      </div>
    </div> */}
    <div className="card-container">
      {currentCards.length > 0 ? (
        currentCards.map((card, index) => (
          <Card key={index} content={card} />
        ))
      ) : (
        <p className="no-results">{t('noResults.message')}</p>
      )}
    </div>
    {totalPages > 1 && (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    )}
  </div>
  );
};
