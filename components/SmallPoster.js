import Image from 'next/image'
import style from '../styles/smallPoster.module.css'

export default function SmallPoster({img}) {
    return (
        <Image className={style.img}
            src={img}
            alt="Bar"
        />
    )
};
