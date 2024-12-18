import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css';

import Armenia from "../assets/images/flag/armenia.jpg";
import Russian from "../assets/images/flag/russian.jpg";
import English from "../assets/images/flag/english.jpg";

const flags = {
    en: English,
    ru: Russian,
    hy: Armenia,
};

const LanguageSwitcher = ({ setIsOpen }) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLanguage = i18n.language;
    const currentFlag = flags[currentLanguage] || English;

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsOpen]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isOpen)}
                style={{ backgroundImage: `url(${currentFlag})` }}
                title={`Language: ${currentLanguage.toUpperCase()}`}
            />
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <img
                    src={Armenia}
                    alt="Հայերեն"
                    onClick={() => changeLanguage("hy")}
                    className="dropdown-item"
                />
                <img
                    src={English}
                    alt="English"
                    onClick={() => changeLanguage("en")}
                    className="dropdown-item"
                />
                <img
                    src={Russian}
                    alt="Русский"
                    onClick={() => changeLanguage("ru")}
                    className="dropdown-item"
                />
            </div>
        </div>
    );
};

export default LanguageSwitcher;


// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import './LanguageSwitcher.css';

// const languageLabels = {
//     en: "EN",
//     ru: "РУ",
//     hy: "ՀԱ",
// };

// const LanguageSwitcher = ({ setIsOpen }) => {
//     const { i18n } = useTranslation();
//     const [isOpen, setIsDropdownOpen] = useState(false);

//     const currentLanguage = i18n.language;
//     const currentLabel = languageLabels[currentLanguage] || "EN";

//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng);
//         setIsDropdownOpen(false);
//         setIsOpen(false);
//     };

//     return (
//         <div className="language-switcher">
//             <button
//                 className="dropdown-toggle"
//                 onClick={() => setIsDropdownOpen(!isOpen)}
//                 title={`Language: ${currentLabel}`}
//             >
//                 {currentLabel}
//             </button>
//             <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
//                 <div
//                     onClick={() => changeLanguage("hy")}
//                     className="dropdown-item"
//                 >
//                     ՀԱ
//                 </div>
//                 <div
//                     onClick={() => changeLanguage("en")}
//                     className="dropdown-item"
//                 >
//                     EN
//                 </div>
//                 <div
//                     onClick={() => changeLanguage("ru")}
//                     className="dropdown-item"
//                 >
//                     РУ
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LanguageSwitcher;

