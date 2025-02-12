import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { sponsorsLogo } from '../util/constants'
import styles from './Sponsor.module.css'

const Sponsor = () => {
  const levels = ['gold', 'silver', 'bronze']
  const { promoters, sponsors, supports, organizer } = sponsorsLogo

  return (
    <section className={styles.containerSponsors}>
      <p>{promoters.title}</p>
      <div className={styles[promoters.className]}>
        {promoters.brands.map(({ name, src, href, width, height, className }) => (
          <Link key={name} href={href} target='_blank'>
            <Image
              className={classnames(styles.imgSponsors, {[styles[className]]: className})}
              src={src}
              alt={name}
              width={width}
              height={height}
            />
          </Link>
        ))}
      </div>
      <p>{sponsors.title}</p>
      <div className={styles[sponsors.className]}>
        {levels.map((level) => (
          <div key={level} className={styles[level]}>
            <p className={styles.title}>{sponsors.level[level].title}</p>
            <hr className={styles.hr3}></hr>
            <div className={styles.sponsorsBox}>
              {sponsors.level[level].brands.map(({ name, src, href, width, height, className }) => (
                <Link key={name} href={href} target='_blank'>
                  <Image
                    className={classnames(styles.imgSponsors, {[styles[className]]: className})}
                    src={src}
                    alt={name}
                    width={width}
                    height={height}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>{supports.title}</p>
      <div className={styles[supports.className]}>
        {supports.brands.map(({ name, src, href, width, height, className }) => (
          <Link key={name} href={href} target='_blank'>
            <Image
              className={classnames(styles.imgSponsors, {[styles[className]]: className})}
              src={src}
              alt={name}
              width={width}
              height={height}
            />
          </Link>
        ))}
      </div>
      <p>{organizer.title}</p>
      <div className={styles[organizer.className]}>
        {organizer.brands.map(({ name, src, href, width, height, className }) => (
          <Link key={name} href={href} target='_blank'>
            <Image
              className={classnames(styles.imgSponsors, {[styles[className]]: className})}
              src={src}
              alt={name}
              width={width}
              height={height}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Sponsor
