import Image from "next/image";
import res1 from "../public/static/images/res1.jpeg"
import res2 from "../public/static/images/res2.jpeg"
import arrow from "../public/static/images/chevron-down-white.png"
import TechList from "./TechList";
import { List } from "Data/Techrider";
import style from '../styles/mainSectionFour.module.css'

export default function MainSectionFour() {
    return (
        <section className={style.section}>
            <h1 className={style.head}>Техрайдер</h1>
            <div className={style.container}>
                <div>
                    {List.map(item => <TechList item = {item} key={item.id} />)}
                </div>
                
                <div>
                    <h2 className={style.resTitle}>Звукорежиссеры клуба МАНХЭТТЕН</h2>
                    <div className={style.resItem}>
                        <div className={style.resItemCount}>
                        <Image
                            src={res1}
                            alt="res"
                            width={196}
                            height={210}
                        />
                        <h3 className={style.resName}>Изотов Константин</h3>
                        </div>
                        <div className={style.resItemCount}>
                        <Image
                            src={res2}
                            alt="res"
                            width={196}
                            height={210}
                        />
                        <h3 className={style.resName}>Давид Хозиев</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
