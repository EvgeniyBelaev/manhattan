import Image from "next/image";
import style from '../styles/bigPoster.module.css'

export default function BigPoster({img}) {
    return (
        <Image className={style.img}
            src={img}
            alt='img'

            
        />
    )
};
