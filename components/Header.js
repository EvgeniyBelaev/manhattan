import Image from 'next/image'
import Link from "next/link";
import logo from '../public/static/images/logo.png'
import style from '../styles/header.module.css'

export default function Header() {
    return(
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
        </header>
    )
};
