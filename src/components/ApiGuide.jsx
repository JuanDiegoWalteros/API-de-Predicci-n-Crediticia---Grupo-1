export default function ApiGuide({ apiBaseUrl, payload }) {
  return (
    <section className="panel guide-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Integración</p>
          <h2>Configuración de consumo</h2>
        </div>
      </div>

      <div className="guide-list">
        <article>
          <span>Base URL</span>
          <strong>{apiBaseUrl}</strong>
        </article>
        <article>
          <span>Endpoint</span>
          <strong>/mlp_demo</strong>
        </article>
        <article>
          <span>Método</span>
          <strong>POST</strong>
        </article>
        <article>
          <span>Swagger</span>
          <strong><a href={`${apiBaseUrl}/docs`} target="_blank" rel="noreferrer">/docs</a></strong>
        </article>
      </div>

      <p className="mini-note">
        El backend validado usa FastAPI, Pydantic y nombres exactos como <code>Saving accounts</code>, <code>Checking account</code> y <code>Credit amount</code>.
      </p>

      <div className="json-preview">
        <span>JSON enviado</span>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </section>
  );
}
