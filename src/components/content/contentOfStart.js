import s from "./content.module.css"
let ContentOfStart = () => {
    return <div>
        <div className={s.header}>У ПРИРОДЫ НЕТ ПЛОХОЙ ПОГОДЫ</div>
        <div className={s.contentWr}>
            <div className={s.content}><span>
                 «Готэм-сити Бэтмена находится на Манхэттене ниже
                Четырнадцатой улицы в одиннадцать минут после полуночи в самую холодную ночь в ноябре».
            </span>
            </div>
        </div>
    </div>
}

export default ContentOfStart;
