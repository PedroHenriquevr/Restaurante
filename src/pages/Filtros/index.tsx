import  styles  from './Filtros.module.scss'
import filtros from './filtros.json'


type  IOpcao = typeof filtros[0]

export default function Filtros(opcao: IOpcao) {
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtro__filtro} key={opcao.id}>{opcao.label}</button>
            ))}
        </div>
    )
}