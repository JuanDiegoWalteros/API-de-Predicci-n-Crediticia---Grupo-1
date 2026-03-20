# Frontend de Predicción Crediticia

Aplicación web desarrollada con **React + Vite** para consumir la API de predicción crediticia basada en un **Perceptrón Multicapa (MLP)**. La interfaz permite ingresar los datos del solicitante, enviar una petición HTTP al endpoint del backend y mostrar el resultado de la evaluación de riesgo en una vista clara, moderna y profesional.

## Objetivo del taller

Diseñar un frontend que permita integrar un modelo de Deep Learning con una aplicación web, consumiendo la API de scoring crediticio desarrollada previamente en clase.

## Tecnologías utilizadas

- React 18
- Vite 5
- JavaScript (ES Modules)
- CSS3
- FastAPI (backend consumido)
- Docker (para ejecución del backend según el video del docente)

## Hallazgos validados en el proyecto original

A partir de los archivos del proyecto y del video **"Correr proyecto Credito .mp4"**, se confirmó lo siguiente:

- La API está implementada con **FastAPI**.
- El endpoint real de inferencia es **`POST /mlp_demo`**.
- La base local usada en las pruebas del video es **`http://localhost:8000`**.
- El backend redirige la raíz `/` hacia **`/docs`**.
- En Postman se muestra una respuesta como:

```json
{
  "prediction": "good",
  "probability": 0.5772708654403687
}
```

## JSON esperado por la API

```json
{
  "Age": 42,
  "Sex": "male",
  "Job": 3,
  "Housing": "own",
  "Saving accounts": "rich",
  "Checking account": "rich",
  "Credit amount": 5000,
  "Duration": 12,
  "Purpose": "car"
}
```

## Respuesta esperada

```json
{
  "prediction": "good",
  "probability": 0.5772708654403687
}
```

## Características del frontend

- Formulario alineado con los campos reales del backend
- Envío del JSON exacto requerido por la API
- Visualización clara del resultado
- Cálculo y despliegue amigable de la probabilidad
- Manejo de errores cuando la API no responde o retorna fallo
- Diseño limpio, moderno y responsive
- Botón para cargar el ejemplo exacto mostrado en el video
- Enlace rápido a Swagger `/docs`

## Estructura del proyecto

```text
credit-scoring-frontend/
├── src/
│   ├── components/
│   │   ├── ApiGuide.jsx
│   │   ├── CreditForm.jsx
│   │   └── ResultCard.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── formatters.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación del proyecto frontend

```bash
git clone <URL_DEL_REPOSITORIO>
cd credit-scoring-frontend
npm install
```

Crea el archivo `.env` tomando como base `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8000
```

## Ejecución del frontend

```bash
npm run dev
```

La aplicación quedará disponible en:

```text
http://localhost:8080
```

> Se configuró el frontend en el puerto **8080** porque el backend analizado permite CORS para `http://localhost:8080`.

## Cómo levantar el backend según el proyecto revisado

### Opción 1: ejecución local con Uvicorn

Ubícate en `python/credit_scoring/` y ejecuta:

```bash
uvicorn src.server.app:app --reload --host 0.0.0.0 --port 8000
```

### Opción 2: flujo mostrado en el video con Docker

Desde la carpeta `python/credit_scoring/`:

```bash
docker build -t credit_scoring_service .
docker run -d -p 8000:8000 --name credit-scoring-service credit_scoring_service
```

Luego abre:

```text
http://localhost:8000/docs
```

## Ejemplo de uso

1. Levanta primero el backend.
2. Ejecuta el frontend con `npm run dev`.
3. Ingresa o carga el ejemplo del video.
4. Presiona **Evaluar solicitud**.
5. Observa el resultado de predicción y probabilidad.

## Buenas prácticas aplicadas

- Componentes reutilizables
- Separación de responsabilidades
- Servicio dedicado para consumo HTTP
- Variables de entorno para la URL del backend
- Código limpio y legible
- Interfaz responsive
- Manejo visual de errores y estados de carga

## Recomendación para el repositorio Git

Sube este frontend en un repositorio con commits claros, por ejemplo:

```bash
git init
git add .
git commit -m "feat: estructura inicial del frontend credit scoring"
git commit -m "feat: integración con endpoint mlp_demo"
git commit -m "style: mejora visual y manejo de estados"
```

## Integrantes del grupo

Completar con los nombres reales:

- Integrante 1
- Integrante 2
- Integrante 3

## URL de la API utilizada

- Local: `http://localhost:8000/mlp_demo`
- Swagger: `http://localhost:8000/docs`
- Producción: `https://TU-SERVICIO/mlp_demo`
