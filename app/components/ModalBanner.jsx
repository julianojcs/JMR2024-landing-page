'use client'
import { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ModalBanner.module.css';

const ModalBanner = ({ modalData = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBanners, setActiveBanners] = useState([]);
  const [isAutoRunning, setIsAutoRunning] = useState(false);
  const autoRunInterval = useRef(null);
  const autoRunSpeed = 5000; // 5 segundos por slide

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

  // Filtra banners ativos com base nas condições de tempo
  const filterActiveBanners = useCallback(() => {
    const now = new Date();
    return modalData.filter(banner => {
      // Verifica se o banner está explicitamente definido como não ativo
      if (banner.active === false) return false;

      // Verifica se o banner expirou
      if (banner.expireAt && new Date(banner.expireAt) < now) return false;

      // Verifica se a data de ativação ainda não chegou
      if (banner.activeAt && new Date(banner.activeAt) > now) return false;

      return true;
    });
  }, [modalData]);

  // Função para iniciar o autorun
  const startAutoRun = useCallback(() => {
    if (autoRunInterval.current) return; // Evita intervalos duplicados

    setIsAutoRunning(true);
    autoRunInterval.current = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === activeBanners.length - 1 ? 0 : prevIndex + 1
      );
    }, autoRunSpeed);
  }, [activeBanners.length, autoRunSpeed]);

  // Função para parar o autorun
  const stopAutoRun = useCallback(() => {
    if (autoRunInterval.current) {
      clearInterval(autoRunInterval.current);
      autoRunInterval.current = null;
    }
    setIsAutoRunning(false);
  }, []);

  // Modificar as funções de navegação
  const nextSlide = useCallback((isAuto = false) => {
    setCurrentIndex(prevIndex =>
      prevIndex === activeBanners.length - 1 ? 0 : prevIndex + 1
    );

    // Se não for chamada pelo autorun, pare o autorun
    if (!isAuto) {
      stopAutoRun();
    }
  }, [activeBanners.length, stopAutoRun]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? activeBanners.length - 1 : prevIndex - 1
    );

    // Parar o autorun quando o usuário navega manualmente
    stopAutoRun();
  }, [activeBanners.length, stopAutoRun]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    stopAutoRun();
  }, [stopAutoRun]);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    stopAutoRun();
  }, [stopAutoRun]);

  const handleMouseEnter = useCallback(() => {
    stopAutoRun();
  }, [stopAutoRun]);

  const handleMouseLeave = useCallback(() => {
    startAutoRun();
  }, [startAutoRun]);

  // Efeito para configurar o modal e autorun
  useEffect(() => {
    const filtered = filterActiveBanners();
    setActiveBanners(filtered);

    if (filtered.length > 0) {
      setIsModalOpen(true);
      // Começar o autorun após um breve delay
      const timer = setTimeout(() => {
        startAutoRun();
      }, 1000);

      return () => {
        clearTimeout(timer);
        stopAutoRun();
      };
    }
  }, [filterActiveBanners, startAutoRun, stopAutoRun]);

  // Cleanup ao desmontar o componente
  useEffect(() => {
    return () => {
      if (autoRunInterval.current) {
        clearInterval(autoRunInterval.current);
      }
    };
  }, []);

  // Se não tiver banners ativos ou modal fechado, não renderiza nada
  if (!isModalOpen || activeBanners.length === 0) {
    return null;
  }

  const currentBanner = activeBanners[currentIndex];
  const showNavigation = activeBanners.length > 1;

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </button>

        <div className={styles.content}>
          {currentBanner.title && (
            <h2 className={styles.title}>{currentBanner.title}</h2>
          )}

          <div className={styles.description}>
            {currentBanner.description &&
              currentBanner.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>

          {currentBanner.logos && currentBanner.logos.length > 0 && (
            <div className={styles.logos}>
              {currentBanner.logos.map((logo, index) => (
                <div
                  key={index}
                  data-has-bg={!!logo.bgcolor}
                  style={logo.bgcolor ? { '--logo-bg-color': logo.bgcolor } : {}}
                  className={styles.logoContainer}
                >
                  <Link
                    href={logo.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.logoLink}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt || 'Logo'}
                      width={logo.width || 140}
                      height={logo.height || 60}
                      className={styles.logo}
                    />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {showNavigation && (
          <>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevSlide}
              aria-label="Banner anterior"
            >
              <FaChevronLeft />
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextSlide}
              aria-label="Próximo banner"
            >
              <FaChevronRight />
            </button>

            <div className={styles.indicators}>
              {activeBanners.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Banner ${index + 1}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalBanner;