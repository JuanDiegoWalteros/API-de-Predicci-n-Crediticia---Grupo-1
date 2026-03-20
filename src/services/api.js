const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export async function predictCreditRisk(payload) {
  const response = await fetch(`${API_BASE_URL}/mlp_demo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const rawText = await response.text();
  let data = null;

  try {
    data = rawText ? JSON.parse(rawText) : null;
  } catch {
    data = null;
  }

  if (!response.ok) {
    const detail = data?.detail || 'No fue posible procesar la solicitud.';
    throw new Error(detail);
  }

  return data;
}
