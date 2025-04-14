import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Sponsor.module.css'

const Sponsor = ({sponsorShip}) => {
  const levels = ['gold', 'silver', 'bronze']
  const { promoters, sponsors, supports, organizer, institutionalSupports } = sponsorShip

  return (
    <section className={styles.containerSponsors}>
      {promoters && (
        <>
          <p>{promoters.title}</p>
          <div className={styles[promoters.className]}>
            {promoters.brands.map(({ name, src, href, width, height }) => (
              <Link
                key={name}
                href={href}
                target='_blank'
                rel="noopener noreferrer"
                className={styles.logoContainer}
                style={{ width: width, height: height }}
              >
                <Image
                  className={classnames(styles.imgSponsors)}
                  src={src}
                  alt={name}
                  fill
                />
              </Link>
            ))}
          </div>
        </>
      )}
      {sponsors && (
        <>
          <p>{sponsors.title}</p>
          <div className={styles[sponsors.className]}>
            {levels.map((level) => (
              <div key={level} className={styles[level]}>
                <p className={styles.title}>{sponsors.level[level].title}</p>
                <hr className={styles.hr3}></hr>
                <div className={styles.sponsorsBox}>
                  {sponsors.level[level].brands.map(({ name, src, href, width, height, rounded }) => (
                    <Link
                      key={name}
                      href={href}
                      target='_blank'
                      rel="noopener noreferrer"
                      className={styles.logoContainer}
                      style={{ width: width, height: height }}
                    >
                      <Image
                        className={styles.imgSponsors}
                        src={src}
                        alt={name}
                        fill
                        style={{ borderRadius: rounded ? '50%' : '0' }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {institutionalSupports && (
        <>
          <p>{institutionalSupports.title}</p>
          <div className={styles[institutionalSupports.className]}>
            {institutionalSupports.brands.map(({ name, src, href, width, height, className }) => (
              <Link
                key={name}
                href={href}
                target='_blank'
                rel="noopener noreferrer"
                className={styles.logoContainer}
                style={{ width: width, height: height }}
              >
                <Image
                  className={classnames(styles.imgSponsors, {[styles[className]]: className})}
                  src={src}
                  alt={name}
                  fill
                />
              </Link>
            ))}
          </div>
        </>
      )}
      {supports && (
        <>
          <p>{supports.title}</p>
          <div className={styles[supports.className]}>
            {supports.brands.map(({ name, src, href, width, height, className }) => (
              <Link
                key={name}
                href={href}
                target='_blank'
                rel="noopener noreferrer"
                className={styles.logoContainer}
                style={{ width: width, height: height }}
              >
                <Image
                  className={classnames(styles.imgSponsors, {[styles[className]]: className})}
                  src={src}
                  alt={name}
                  fill
                />
              </Link>
            ))}
          </div>
        </>
      )}
      {organizer && (
        <>
          <p>{organizer.title}</p>
          <div className={styles[organizer.className]}>
            {organizer.brands.map(({ name, src, href, width, height, className, rounded }) => (
              <Link
                key={name}
                href={href}
                target='_blank'
                rel="noopener noreferrer"
                className={styles.logoContainer}
                style={{ width: width, height: height }}
              >
                <Image
                  className={classnames(styles.imgSponsors, {[styles[className]]: className})}
                  src={src}
                  alt={name}
                  fill
                  style={{ borderRadius: rounded ? '50%' : '0' }}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Sponsor
