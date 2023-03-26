import { MainLayout } from "components/MainLayout";
import Link from "next/link";
import style from '../styles/error.module.css'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={style.title}>Страница не найдена!</h1>
            <p className={style.text}>Вернуться на <Link href={'/'}>главную</Link> </p>
        </MainLayout>
    )
};
