import { useState } from 'react';
import styles from './Cardapio.module.scss'
import logo from 'assets/logo_pepe.png'
import Buscador from 'pages/Buscador';
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
                <h3>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}