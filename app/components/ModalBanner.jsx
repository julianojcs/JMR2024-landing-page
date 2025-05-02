'use client'
import { useState, useEffect } from 'react'
import { modal, backdrop, content, closeButton, title, description, logos, logo as lg, logoContainer, logoLink } from './ModalBanner.module.css'
import Image from 'next/image'

const CloseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 1L1 13M1 1L13 13"
      stroke="#0E1D59"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ModalBanner = ({ modalData }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Return early if modalData doesn't exist, is not active, or has expired
  if (!modalData || !modalData.active || isExpired(modalData.expireAt)) return null

  // Function to check if the modal has expired
  function isExpired(expireAtDate) {
    if (!expireAtDate) return false; // If no expiration date, don't expire

    const currentDate = new Date();
    const expirationDate = new Date(expireAtDate);

    return currentDate > expirationDate;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className={backdrop}>
      <div className={modal}>
        <button className={closeButton} onClick={handleClose}>
          <CloseIcon />
        </button>

        <div className={content}>
          <h2 className={title}>{modalData.title}</h2>

          <div className={description}>
            {modalData.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className={logos}>
            {modalData.logos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={logoLink}
                data-has-bg={!!logo.bgcolor}
                style={logo.bgcolor ? { '--logo-bg-color': logo.bgcolor } : undefined}
              >
                <div
                  className={logoContainer}
                  style={{ width: logo.width, height: logo.height }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt || `Logo ${logo.name}`}
                    className={lg}
                    fill
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalBanner