// src/app/Component/form.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './form.module.css';
import logo from '../../../public/logo2.jpg'

export default function Form() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const tema = { titulo, autor, fechaPublicacion, descripcion };

        // Aquí se agrera la lógica para enviar los datos a una API
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
            <img src={`${logo}`} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>AGREGAR TEMA</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="titulo" className={styles.label}>Título del Tema</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
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
                        value={autor}
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
                        value={fechaPublicacion}
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
