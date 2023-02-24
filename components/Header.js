import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import logo from '../public/static/images/logo.png'
import style from '../styles/header.module.css'

export default function Header() {
    const [activeState, setActiveState] = useState(false)
    

    function clickHandler() {
        setActiveState(prev => !prev)
        
    }

    return(
        <>
            <header className={style.header}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={158}
                    height={40}
                />
                <div className={style.navbar}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/menu'}>Меню</Link>
                    <Link href={'/poster'}>Афиша</Link>
                    <Link href={'/content'}>Сотрудничество</Link>
                    <Link href={'/gallery'}>Галерея</Link>
                    <Link href={'/news'}>Новости</Link>
                </div>
                <button className={style.headerBtn}>бронирование</button>

                <div className={` ${activeState ? `${style.active}` : `${style.burger}`}`} onClick={clickHandler}>
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                    <div className={style.line3}></div>
                </div>
                
            </header>
            <div className={`${activeState ? `${style.sideMenu}`: `${style.sideMenuHidden}`}`}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/menu'}>Меню</Link>
                    <Link href={'/poster'}>Афиша</Link>
                    <Link href={'/content'}>Сотрудничество</Link>
                    <Link href={'/gallery'}>Галерея</Link>
                    <Link href={'/news'}>Новости</Link>
            </div>
        </>
    )
};
