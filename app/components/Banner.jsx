import classnames from 'classnames'
import { container, banner, bannerText } from './Banner.module.css'
import CallToAct from './CallToAct'

const Banner = ({ data }) => {
  if (!data) return null
  if (!data.description) return null

  let caption = ''
  let link = ''
  if (data.button) {
    ({ caption, link } = data.button)
  }

  return (
    <section className={container}>
      <div className={classnames(banner)}>
        <div className={classnames(bannerText)}>
          {data.description?.map((txt, index) => (
            <p key={index}>{txt}</p>
          ))}
        </div>
      </div>
      {data.button &&
        <CallToAct caption={caption} link={link} selfCaption={true} />
      }
      {data.button &&
        <CallToAct caption={'Acesse o seu Trabalho Científico'} link={'https://paper.joindigitalsolutions.com.br/paper'} selfCaption={true} />
      }
    </section>
  )
}

export default Banner
