import { formatPercent, getDecisionLabel } from '../utils/formatters';

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <section className="panel result-panel placeholder-card">
        <p className="eyebrow">Resultado</p>
        <h2>Esperando evaluación</h2>
        <p>Completa el formulario y envía la solicitud para visualizar la predicción del modelo MLP.</p>
      </section>
    );
  }

  const decision = getDecisionLabel(result.prediction);
  const riskLevel = result.prediction === 'good' ? 'Riesgo bajo / controlado' : 'Riesgo alto';

  return (
    <section className={`panel result-panel ${decision.tone}`}>
      <p className="eyebrow">Resultado del modelo</p>
      <h2>{decision.title}</h2>
      <p>{decision.description}</p>

      <div className="status-chip-row">
        <span className={`status-chip ${decision.tone}`}>{result.prediction === 'good' ? '✔ Aprobado' : '✖ Rechazado'}</span>
        <span className="status-chip neutral">MLP + FastAPI</span>
      </div>

      <div className="result-metrics">
        <article>
          <span>Predicción</span>
          <strong>{result.prediction}</strong>
        </article>
        <article>
          <span>Probabilidad</span>
          <strong>{formatPercent(result.probability)}</strong>
        </article>
        <article>
          <span>Nivel estimado</span>
          <strong>{riskLevel}</strong>
        </article>
      </div>
    </section>
  );
}
