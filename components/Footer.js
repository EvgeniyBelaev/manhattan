import style from '../styles/footer.module.css'

export default function Footer() {
    return(
        <div>
            <h1 className={style.footerHead}>контакты</h1>
            <div className={style.container}>
                <div className={style.containerLeft}>
                    <h3>Адрес</h3>
                    <p>Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)</p>
                    <h3>телефон</h3>
                    <p>+7 (812) 713-1945</p>
                    <h3>режим работы</h3>
                    <p>Ежедневно с 12:00 до 06:00</p>
                    <hr className={style.line}/>
                    <h3>директор</h3>
                    <p>Лидия Эмильевна, +7(921) 963-55-50</p>
                    <h3>арт-директор</h3>
                    <p>Илиния Ионашко, +7(981) 989-43-30</p>
                </div>
                
                <iframe className={style.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada5bd9a6536116451973e4a61fc61e63efe30eaa6cad9bc24bc7eb51939262db&amp;source=constructor" width="856" height="656" frameborder="0"></iframe>
            </div>
            <hr className={style.line}/>
            <div className={style.footerBottom}>
                <p>Copyright © 2022. Все права защищены.</p>
                <p>Разработано d-e-n.ru</p>
            </div>
        </div>
    )
};
