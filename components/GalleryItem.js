import Image from "next/image";
import style from '../styles/galleryItem.module.css'

export default function GalleryItem({img}) {
    return (
        <Image className={style.img}
            src={img}
            alt='gallery'

        />
    )
};
