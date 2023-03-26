import Image from 'next/image'
import imgeOne from '../public/static/images/poster.png'
import style from '../styles/mainSectionOne.module.css'
import {images} from '../Data/Poster.js'
import SmallPoster from './SmallPoster'
import { useState } from 'react'


export default function MainSectionOne() {
    const [active, setActive] = useState(true)
    function clickHandler() {
        setActive(prev => !prev)
    }

    return (
        <section className={style.section}>
            <Image className={style.img}
                src={imgeOne}
                alt="Bar"
                
            />
            <div className={style.rightContainer}>
                <div className={style.buttonSection}>
                    <button className={`${active ? `${style.active}` : `${style.notActive}`}`} onClick={clickHandler}>Ближайшие</button>
                    <button className={`${active ? `${style.notActive}` : `${style.active}`}`} onClick={clickHandler}>скоро</button>
                </div>
                <div className={style.imgContainer}>
                    {images.map(item => <SmallPoster img={item.img} key={item.id} />)}
                </div>
            </div>
        </section>
    )
};
