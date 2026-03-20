export function buildApiPayload(formData) {
  return {
    Age: Number(formData.age),
    Sex: formData.sex,
    Job: Number(formData.job),
    Housing: formData.housing,
    'Saving accounts': formData.savingAccounts,
    'Checking account': formData.checkingAccount,
    'Credit amount': Number(formData.creditAmount),
    Duration: Number(formData.duration),
    Purpose: formData.purpose,
  };
}

export function getDecisionLabel(prediction) {
  if (prediction === 'good') {
    return {
      title: 'Crédito aprobado',
      tone: 'success',
      description: 'El modelo identifica un perfil con buen riesgo crediticio.',
    };
  }

  return {
    title: 'Crédito rechazado',
    tone: 'danger',
    description: 'El modelo detecta un nivel de riesgo que no recomienda aprobación.',
  };
}

export function formatPercent(value) {
  return `${(Number(value) * 100).toFixed(2)}%`;
}
