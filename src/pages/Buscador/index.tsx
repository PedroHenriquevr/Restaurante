import style from './Buscador.module.scss'

type props = {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: props) {

    return(
        <div className={style.buscador}>
            <input className={style.input} value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            type='text'
            />
        </div>
    )
}