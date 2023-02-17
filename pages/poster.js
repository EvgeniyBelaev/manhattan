import BigPoster from "components/BigPoster";
import ManhattanButton from "components/ManhattanButton";
import { MainLayout } from "../components/MainLayout";
import {images} from '../Data/Poster.js'
import style from '../styles/poster.module.css'

export default function Poster() {
    return (
        <MainLayout title={'АФИША'}>
            <ManhattanButton title={'party'} />
            <h1 className={style.title}>афиша</h1>
            <div className={style.container}>
                {images.map(item => <BigPoster img={item.img} key={item.id} className={style.img}/> )} 
                {images.map(item => <BigPoster img={item.img} key={item.id} className={style.img}/> )} 
                {images.map(item => <BigPoster img={item.img} key={item.id} className={style.img}/> )} 
            </div>
            <ManhattanButton title={'place'} />
            
            
        </MainLayout>
        
    )
};
