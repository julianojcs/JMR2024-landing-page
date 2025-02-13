import Image from 'next/image'
import saveTheDate from '/public/save_the_date.png'
import { imagem, container, content, footer } from './page.module.css'

export const metadata = {
  title: 'Save the date'
}

const Home = () => {
  return (
    <div className={container}>
      <div className={content}>
        <Image
          src={saveTheDate}
          alt="Save the date"
          className={imagem}
          priority
        />
      </div>
      <div className={footer}>
      </div>
    </div>
  )
}

export default Home