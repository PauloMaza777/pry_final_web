import Link from "next/link";
import styles from './form.module.css';

export default function Form() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>FORMULARIO</h1>
            <h2 className={styles.subtitle}>Agregar Tema</h2>
            <Link href="/dash" className={styles.link}>
                REGRESAR
            </Link>
        </div>
    );
}
