import arrow from "../public/static/images/chevron-down-white.png"
import Image from "next/image";
import style from '../styles/techList.module.css'
import { useState } from "react";

export default function TechList({item}) {
    const[active, setActive] =  useState(false)
    function clickHandler() {
        setActive(prev => !prev)
    }

    return (
        <div className={active ? `${style.active}` : `${style.techCont}`} onClick={clickHandler}>
            <div className={style.techName}>
                <h2>{item.title}</h2>
                <Image className={active ? `${style.rotate}` : ''}
                    src={arrow}
                    alt="arrow"
                    width={12}
                    height={12}
                />
            </div>                    
                {active ? <ul className={style.techItem}>
                    {item.list.map(listItem => <li>{listItem}</li>)}
                </ul> : ""}
        </div>
        
    )
};
