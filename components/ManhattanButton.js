import style from '../styles/manhattanButton.module.css'

export default function ManhattanButton({title = ' '}) {
    return (
        <div className={style.cont}>
            <button className={style.button}>Top “Manhattan” {title}</button>
        </div>
        
    )    
};
