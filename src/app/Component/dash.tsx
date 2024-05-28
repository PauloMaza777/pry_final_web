// src/app/Component/dash.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './dash.module.css';

interface Tema {
    id: number;
    tituloTema: string;
    nombreAutor: string;
    fecha_creacion: string;
    descripcion: string;
}

export default function Dash() {
    const [temas, setTemas] = useState<Tema[]>([]);

    useEffect(() => {
        fetch("http://localhost:3100/foros")
            .then(response => response.json())
            .then(data => setTemas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the DASHBOARD</h1>
            <Link href="/form" className={styles.link}>
                AGREGAR TEMA NUEVO
            </Link>
            <div className={styles.temas}>
                {temas.map((tema) => (
                    <div key={tema.id} className={styles.tema}>
                        <h2>{tema.tituloTema}</h2>
                        <p><strong>Autor:</strong> {tema.nombreAutor}</p>
                        <p><strong>Fecha de Publicación:</strong> {tema.fecha_creacion}</p>
                        <p><strong>Descripción:</strong> {tema.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
