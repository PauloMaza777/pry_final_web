// src/app/Component/dash.tsx

import Link from 'next/link';
import styles from './dash.module.css';

export default function Dash() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the DASHBOARD</h1>
            <Link href="/form" className={styles.link}>
                AGREGAR TEMA NUEVO
            </Link>
        </div>
    );
}
