import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../styles/FitnessForm.css';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function InstructorIa() {
  const [formData, setFormData] = useState({
    sexo: '',
    edad: '',
    altura: '',
    peso: '',
    nivel: '',
    dias: '',
    aparatos: '',
  });

  const [rutina, setRutina] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generarRutina = async (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `
      Soy un instructor de fitness IA. Generá una rutina personalizada para:
      - Sexo: ${formData.sexo}
      - Edad: ${formData.edad}
      - Altura: ${formData.altura} cm
      - Peso: ${formData.peso} kg
      - Nivel: ${formData.nivel}
      - Días disponibles: ${formData.dias}
      - ¿Tiene aparatos?: ${formData.aparatos}

      La rutina debe incluir ejercicios por día, recomendaciones de descanso, y consejos de alimentación si aplica.
    `;

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setRutina(text);
    } catch (error) {
      console.error('Error al generar rutina:', error);
      setRutina('Hubo un problema al generar la rutina ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Generador de Rutina Finess IA</h2>
      <form onSubmit={generarRutina} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Sexo</label>
          <select name="sexo" className="form-select" onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Edad</label>
            <input type="number" name="edad" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Altura (cm)</label>
            <input type="number" name="altura" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Peso (kg)</label>
            <input type="number" name="peso" className="form-control" onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Nivel de entrenamiento</label>
          <select name="nivel" className="form-select" onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Días disponibles para entrenar</label>
          <select name="dias" className="form-select" onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="2">2 días</option>
            <option value="3">3 días</option>
            <option value="4">4 días</option>
            <option value="5">5 días</option>
            <option value="6">6 días</option>
            <option value="7">Todos los días</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">¿Tenés aparatos para entrenar?</label>
          <select name="aparatos" className="form-select" onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>


        <button type="submit" className="btn btn-primary w-100">
          {loading ? 'Generando rutina...' : 'Generar rutina personalizada'}
        </button>
      </form>

      {rutina && (
        <div className="card mt-4 shadow-sm">
          <div className="card-header bg-primary text-white">
            Rutina personalizada
          </div>
          <div className="card-body">
            <pre style={{ whiteSpace: 'pre-wrap' }}>{rutina}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

