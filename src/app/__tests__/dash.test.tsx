import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dash from '../Component/dash';

beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        tituloTema: 'Test Tema',
                        nombreAutor: 'Test Autor',
                        fecha_creacion: '2024-05-30',
                        descripcion: 'Test Descripcion',
                    },
                ]),
        }) as unknown as Promise<Response>
    );
});

afterEach(() => {
    jest.clearAllMocks(); // Limpiar los mocks después de cada test
});

test('Cargando...', async () => {
    await act(async () => {
        render(<Dash />);
    });

    // Verifica que el mensaje de "Cargando..." se muestra inicialmente
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();

    // Espera a que los datos sean cargados y verificados en el DOM
    // await waitFor(() => expect(screen.getByText(/Test Tema/i)).toBeInTheDocument());
    // expect(screen.getByText(/Test Autor/i)).toBeInTheDocument();
    // expect(screen.getByText(/30\/05\/2024/i)).toBeInTheDocument(); // Ajusta el formato de la fecha según sea necesario
    // expect(screen.getByText(/Test Descripcion/i)).toBeInTheDocument();
});
