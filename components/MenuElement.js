import Image from "next/image"
import style from '../styles/menuElement.module.css'


export default function MenuElement({product}) {
    return (
        <div  className={style.mainContainer}>
            <Image className={style.image}
                src={product.image}
                alt="image"
            />
            <div>
                <div className={style.title}>
                    <h3 className={style.titleText}>{product.title}</h3>
                    <p className={style.titlePrice}>{product.price}&#8381;</p>
                </div>
                <p className={style.weight}>{product.weight} гр.</p>
                <p className={style.description}> {product.description}</p>
            </div>
        </div>
    )
};
