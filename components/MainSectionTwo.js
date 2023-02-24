import style from '../styles/mainSectionTwo.module.css'
import { Product } from "../Data/Product.js"
import arrowLet from '../public/static/images/chevron-left-white.png'
import arrowRight from '../public/static/images/chevron-right-white.png'
import Image from 'next/image'
import MenuElement from './MenuElement'
import Link from 'next/link'

export default function MainSectionTwo() {
    return (
        <section className={style.section}>
            <Image className={style.arrow}
                src={arrowLet}
                alt="arrow"
                width={10}
                height={16}
            />
            <div className={style.center}>
                <h1 className={style.centerTitle}>Кухня</h1>
                <div className={style.products}>
                    {Product.map(product => <MenuElement product={product} key={product.id}/>)}
                </div>
                
                <button className={style.button}><Link href={'/menu'}> все меню </Link> </button>
            </div>
            <Image className={style.arrow}
                src={arrowRight}
                alt="arrow"
                width={10}
                height={16}
            />
        </section>
    )
};
