import Image from "next/image";
import ManhattanButton from "./ManhattanButton";
import image from "../public/static/images/football.png"
import style from "../styles/mainSectionThree.module.css"

export default function MainSectionThree() {
    return (
        <section className={style.section}>
            <div className={style.container}>
                <ManhattanButton title={'events'} />
                <h1 className={style.head}>Банкеты</h1>
                <p className={style.description}>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. </p>
                <p className={style.description}>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. </p> 
                <p className={style.description}> Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
                <button className={style.button}>Подробнее</button>
            </div>
            <Image 
                src={image}
                alt="football"
                width={416}
                height={560}
            />
            <div className={style.container}>
                <ManhattanButton title={'tourists'} />
                <h1 className={style.head}>Туристы</h1>
                <p className={style.description}>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. </p>
                <p className={style.description}>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. </p> 
                <p className={style.description}> Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
                <button className={style.button}>Подробнее</button>
            </div>
        </section>
    )
};
