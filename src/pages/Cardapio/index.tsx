import styles from './Cardapio.module.scss'
import logo from 'assets/logo_pepe.png'
export default function Cardapio() {

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
        </main>
    )
}