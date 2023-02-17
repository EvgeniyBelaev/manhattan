import Image from 'next/image'
import imgeOne from '../public/static/images/poster.png'
import style from '../styles/mainSectionOne.module.css'
import {images} from '../Data/Poster.js'
import SmallPoster from './SmallPoster'


export default function MainSectionOne() {
    return (
        <section className={style.section}>
            <Image
                src={imgeOne}
                alt="Bar"
                width={856}
                height={540}
            />
            <div className={style.rightContainer}>
                <div className={style.buttonSection}>
                    <button>Ближайшие</button>
                    <button>скоро</button>
                </div>
                <div className={style.imgContainer}>
                    {images.map(item => <SmallPoster img={item.img} key={item.id} />)}
                </div>
            </div>
        </section>
    )
};
