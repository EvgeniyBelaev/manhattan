import ManhattanButton from "components/ManhattanButton";
import { MainLayout } from "../components/MainLayout";
import style from '../styles/content.module.css'

export default function Content() {
    return (
        <MainLayout title={'СОТРУДНИЧЕСТВО'}>
            <ManhattanButton title={'events'} />
            <h1 className={style.title}>корпоративы</h1>
            <h2 className={style.miniTitle}>корпоративы</h2>
            <div className={style.count}>
                <p className={style.countText}>Фуршетное меню от 1000 руб.<br/> на человека (до 150 человек).</p>
                <p className={style.countText}>Банкетное меню от 1500 руб. <br/> на человека (до 100 человек). </p>
            </div>
            <div>
                <h3 className={style.listHeader}>ПОЧЕМУ МЫ? </h3>
                <ul className={style.list}>
                    <li>Отдельный зал на 30 человек с профессиональной системой караоке </li>
                    <li>Удобная парковка и близость к трем станциям метро в центре города </li>
                    <li>Большие экраны </li>
                    <li>Танцпол с современной звуковой и световой аппаратурой</li> 
                    <li>Сцена с проекционным экраном.</li>
                </ul>
            </div>
        </MainLayout>
        
    )
};
