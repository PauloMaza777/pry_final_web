// src/app/Component/dash.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './dash.module.css';
import logo from '../../../public/logo2.jpg'; // Ajusta el camino según sea necesario

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
        fetch("https://t4-01-repositorio-del-proyecto2.vercel.app")
            .then(response => response.json())
            .then(data => setTemas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.container}>
            <img src='/logo2.jpg' alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>TEMAS NUEVOS</h1>
            <Link href="/form" className={styles.link}>AGREGAR TEMA NUEVO</Link>
            <div className={styles.temas}>
                {temas.map((tema) => (
                    <div key={tema.id} className={styles.tema}>
                        <img src={logo.src} /> {/* Replace with your icon */}
                        <div className={styles.temaContent}>
                            <h2>{tema.tituloTema}</h2>
                            <div className={styles.temaDetails}>
                                <p><strong>Autor:</strong> {tema.nombreAutor}</p>
                                <p className={styles.date}><strong>Fecha:</strong> {new Date(tema.fecha_creacion).toLocaleDateString()}</p>
                            </div>
                            <textarea
                                className={styles.description}
                                readOnly
                                value={tema.descripcion}
                                rows={5}
                                required
                            ></textarea>
                        </div>
                        
                    </div>
                ))}
            </div>
            {/* <h2>Cargando...</h2>    PRUEBA DEL TESTING*/}
        </div>
    );
}
