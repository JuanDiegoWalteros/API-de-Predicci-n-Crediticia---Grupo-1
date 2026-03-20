import { useMemo, useState } from 'react';
import CreditForm, { exampleVideoFormData } from './components/CreditForm';
import ResultCard from './components/ResultCard';
import ApiGuide from './components/ApiGuide';
import { predictCreditRisk } from './services/api';
import { buildApiPayload } from './utils/formatters';

const initialFormData = {
  age: '35',
  sex: 'male',
  job: '2',
  housing: 'own',
  savingAccounts: 'little',
  checkingAccount: 'moderate',
  creditAmount: '2500',
  duration: '24',
  purpose: 'car',
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setResult(null);
    setError('');
  };

  const handleLoadExample = () => {
    setFormData(exampleVideoFormData);
    setResult(null);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const payload = buildApiPayload(formData);
      const response = await predictCreditRisk(payload);
      setResult(response);
    } catch (submitError) {
      setResult(null);
      setError(submitError.message || 'Ocurrió un error inesperado al consultar la API.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="hero panel hero-panel">
        <div>
          <p className="eyebrow">Taller frontend + deep learning</p>
          <h1>Predicción crediticia con MLP</h1>
          <p className="hero-copy">
            Interfaz web profesional para consumir la API de scoring crediticio construida con FastAPI.
            Permite diligenciar los datos del solicitante, enviar la petición HTTP en JSON y visualizar
            el resultado de forma clara, moderna y lista para sustentación.
          </p>

          <div className="hero-actions">
            <button type="button" className="secondary-btn" onClick={handleLoadExample}>
              Cargar ejemplo del video
            </button>
            <a className="ghost-link" href={`${apiBaseUrl}/docs`} target="_blank" rel="noreferrer">
              Abrir Swagger /docs
            </a>
          </div>
        </div>

        <div className="hero-badges">
          <span>React + Vite</span>
          <span>FastAPI</span>
          <span>POST /mlp_demo</span>
          <span>Puerto frontend 8080</span>
        </div>
      </section>

      {error ? (
        <section className="alert-banner" role="alert">
          <strong>Error:</strong> {error}
        </section>
      ) : null}

      <section className="content-grid">
        <CreditForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onLoadExample={handleLoadExample}
          isLoading={isLoading}
        />

        <div className="side-column">
          <ResultCard result={result} />
          <ApiGuide apiBaseUrl={apiBaseUrl} payload={buildApiPayload(formData)} />
        </div>
      </section>
    </main>
  );
}

export default App;
