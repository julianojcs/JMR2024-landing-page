import React from "react";
import styles from "./TravelAgency.module.css";
import Image from "next/image";
import Link from "next/link";

const TravelAgency = ({ data }) => {
  // Verifica se eventData.travelAgency existe e se está ativo
  if (!data || !data.active) {
    return null;
  }

  const { title, description, logo } = data;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <Link
        href={logo.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoContainer}
        style={{ width: logo.width, height: logo.height }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className={styles.logo}
        />
      </Link>
      <div className={styles.descriptionContainer}>
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p key={index} className={styles.description}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default TravelAgency;