import { useState } from 'react';
import styles from './Cardapio.module.scss'
import logo from 'assets/logo_pepe.png'
import Buscador from 'pages/Buscador';
import Filtros from 'pages/Filtros';
export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img src={logo} className={styles.logo} alt="logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Pepe Delicinhas
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros/>
                </div>
            </section>
        </main>
    )
}