import arrow from "../public/static/images/chevron-down-white.png"
import Image from "next/image";
import style from '../styles/techList.module.css'

export default function TechList({item}) {
    let show = false

    return (
        <div className={style.techCont} onClick={() => {show = true}}>
            <div className={style.techName}>
                <h2>{item.title}</h2>
                <Image
                    src={arrow}
                    alt="arrow"
                    width={12}
                    height={12}
                />
            </div>                    
                {show ? <ul className={style.techItem}>
                    {item.list.map(listItem => <li>{listItem}</li>)}
                </ul> : ""}
        </div>
        
    )
};
