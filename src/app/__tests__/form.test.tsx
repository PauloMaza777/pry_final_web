import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../Component/form';
import '@testing-library/jest-dom';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks(); // Limpiar los mocks después de cada test
});

describe('Formulario', () => {
  test('envía los datos correctamente al servicio web', async () => {
    render(<Form />);

    // Simula el llenado del formulario
    fireEvent.change(screen.getByLabelText(/Título del Tema/i), { target: { value: 'Test Tema' } });
    fireEvent.change(screen.getByLabelText(/Autor del Tema/i), { target: { value: 'Test Autor' } });
    fireEvent.change(screen.getByLabelText(/Fecha de Publicación/i), { target: { value: '2024-05-30' } });
    fireEvent.change(screen.getByLabelText(/Descripción del Tema/i), { target: { value: 'Test Descripcion' } });

    // Encuentra y clickea el botón de enviar
    // fireEvent.click(screen.getByText(/Agregar Tema/i));

    // Espera a que se haga la llamada fetch y verifica sus parámetros
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(5));
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3100/foros', expect.objectContaining({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tituloTema: 'Test Tema',
        nombreAutor: 'Test Autor',
        fecha_creacion: '2024-05-30',
        descripcion: 'Test Descripcion',
      }),
    }));
  });

  test('renderiza el formulario con los datos esperados', () => {
    render(<Form />);

    // Verifica que los elementos del formulario estén presentes en el DOM
    expect(screen.getByLabelText(/Título del Tema/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Autor del Tema/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de Publicación/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descripción del Tema/i)).toBeInTheDocument();
  });
});
