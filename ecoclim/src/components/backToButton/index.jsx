import React, { useEffect, useState } from "react";
import "./style.css";
import { IoIosArrowRoundUp } from "react-icons/io";


function BackToTopButton() {

  const [BackToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return <>
    {
      BackToTopButton && (
        <button
          className="top-btn"
          onClick={scrollUp}
        ><IoIosArrowRoundUp /></button>
      )}
  </>
}

export default BackToTopButton;