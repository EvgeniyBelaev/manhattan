import style from '../styles/sideMenu.module.css'
import Link from "next/link";

export default function SideMenu({activeState}) {
    return (
        <div className={`${activeState ? `${style.sideMenu}`: `${style.sideMenuHidden}`}`}>
            <Link href={'/'}>Главная</Link>
            <Link href={'/menu'}>Меню</Link>
            <Link href={'/poster'}>Афиша</Link>
            <Link href={'/content'}>Сотрудничество</Link>
            <Link href={'/gallery'}>Галерея</Link>
            <Link href={'/news'}>Новости</Link>
        </div> 
    )
};
