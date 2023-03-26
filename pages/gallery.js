import GalleryItem from "components/GalleryItem";
import ManhattanButton from "components/ManhattanButton";
import { MainLayout } from "../components/MainLayout";
import {gallery} from '../Data/GalleryImg.js'
import style from '../styles/gallery.module.css'

export default function Gallery() {
    return(
        <MainLayout title={'ГАЛЕРЕЯ'}>
            <ManhattanButton title={'photo'} />
            <h1 className={style.title}>галерея</h1>
            <div className={style.container}>
                {gallery.map(item => <GalleryItem img={item.img} key={item.id} />)}
            </div>
            <ManhattanButton title={'place'} />
        </MainLayout>
        
    )
};
