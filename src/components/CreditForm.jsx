const sexOptions = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Femenino' },
];

const housingOptions = [
  { value: 'own', label: 'Propia' },
  { value: 'rent', label: 'Arriendo' },
  { value: 'free', label: 'Sin costo' },
];

const savingsOptions = [
  { value: 'NA', label: 'No aplica' },
  { value: 'little', label: 'Bajo' },
  { value: 'moderate', label: 'Moderado' },
  { value: 'quite rich', label: 'Alto' },
  { value: 'rich', label: 'Muy alto' },
];

const checkingOptions = [
  { value: 'NA', label: 'No aplica' },
  { value: 'little', label: 'Bajo' },
  { value: 'moderate', label: 'Moderado' },
  { value: 'rich', label: 'Alto' },
];

const purposeOptions = [
  { value: 'car', label: 'Vehículo' },
  { value: 'furniture/equipment', label: 'Muebles / equipos' },
  { value: 'radio/TV', label: 'Radio / TV' },
  { value: 'domestic appliances', label: 'Electrodomésticos' },
  { value: 'repairs', label: 'Reparaciones' },
  { value: 'education', label: 'Educación' },
  { value: 'business', label: 'Negocio' },
  { value: 'vacation/others', label: 'Vacaciones / otros' },
];

const jobOptions = [
  { value: '0', label: '0 - No calificado / no residente' },
  { value: '1', label: '1 - No calificado y residente' },
  { value: '2', label: '2 - Calificado' },
  { value: '3', label: '3 - Altamente calificado' },
];

export const exampleVideoFormData = {
  age: '42',
  sex: 'male',
  job: '3',
  housing: 'own',
  savingAccounts: 'rich',
  checkingAccount: 'rich',
  creditAmount: '5000',
  duration: '12',
  purpose: 'car',
};

export default function CreditForm({ formData, onChange, onSubmit, onReset, onLoadExample, isLoading }) {
  return (
    <form className="panel form-panel" onSubmit={onSubmit}>
      <div className="panel-header">
        <div>
          <p className="eyebrow">Formulario de evaluación</p>
          <h2>Datos del solicitante</h2>
          <p className="section-copy">
            Los nombres y valores fueron alineados con el esquema real del backend mostrado en el proyecto y en el video.
          </p>
        </div>
        <span className="pill">POST /mlp_demo</span>
      </div>

      <div className="form-grid">
        <label>
          <span>Edad</span>
          <input type="number" min="18" max="100" name="age" value={formData.age} onChange={onChange} required />
        </label>

        <label>
          <span>Sexo</span>
          <select name="sex" value={formData.sex} onChange={onChange} required>
            {sexOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Nivel de empleo</span>
          <select name="job" value={formData.job} onChange={onChange} required>
            {jobOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Tipo de vivienda</span>
          <select name="housing" value={formData.housing} onChange={onChange} required>
            {housingOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Cuenta de ahorros</span>
          <select name="savingAccounts" value={formData.savingAccounts} onChange={onChange} required>
            {savingsOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Cuenta corriente</span>
          <select name="checkingAccount" value={formData.checkingAccount} onChange={onChange} required>
            {checkingOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Monto del crédito</span>
          <input type="number" min="1" step="0.01" name="creditAmount" value={formData.creditAmount} onChange={onChange} required />
        </label>

        <label>
          <span>Duración (meses)</span>
          <input type="number" min="1" max="120" name="duration" value={formData.duration} onChange={onChange} required />
        </label>

        <label className="full-width">
          <span>Propósito</span>
          <select name="purpose" value={formData.purpose} onChange={onChange} required>
            {purposeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="actions">
        <button type="submit" className="primary-btn" disabled={isLoading}>
          {isLoading ? 'Analizando...' : 'Evaluar solicitud'}
        </button>
        <button type="button" className="secondary-btn" onClick={onLoadExample} disabled={isLoading}>
          Usar ejemplo del video
        </button>
        <button type="button" className="secondary-btn" onClick={onReset} disabled={isLoading}>
          Limpiar formulario
        </button>
      </div>
    </form>
  );
}
