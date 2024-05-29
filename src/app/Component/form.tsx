// src/app/Component/form.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './form.module.css';

export default function Form() {
    const [tituloTema, setTitulo] = useState('');
    const [nombreAutor, setAutor] = useState('');
    const [fecha_creacion, setFechaPublicacion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const tema = { tituloTema, nombreAutor, fecha_creacion, descripcion };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            ...tema
        });

        var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3100/foros", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        console.log('Datos del tema:', tema);

        // Mostrar mensaje de alerta
        alert('Se agregaron correctamente los datos');

        // Limpiar los campos del formulario
        setTitulo('');
        setAutor('');
        setFechaPublicacion('');
        setDescripcion('');
    };

    return (

        <div className={styles.container}>
            <img src='/logo2.jpg' alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>AGREGAR TEMA</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="titulo" className={styles.label}>Título del Tema</label>
                    <input
                        type="text"
                        id="titulo"
                        value={tituloTema}
                        onChange={(e) => setTitulo(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="autor" className={styles.label}>Autor del Tema</label>
                    <input
                        type="text"
                        id="autor"
                        value={nombreAutor}
                        onChange={(e) => setAutor(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="fechaPublicacion" className={styles.label}>Fecha de Publicación</label>
                    <input
                        type="date"
                        id="fechaPublicacion"
                        value={fecha_creacion}
                        onChange={(e) => setFechaPublicacion(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="descripcion" className={styles.label}>Descripción del Tema</label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className={styles.textarea}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.button}>Agregar Tema</button>
            </form>
            <Link href="/" className={styles.link}>
                REGRESAR
            </Link>
        </div>
    );
}
