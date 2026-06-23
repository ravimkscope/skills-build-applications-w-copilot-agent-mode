import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/config', (_req, res) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  res.json({
    apiBaseUrl: baseUrl,
    frontendPort: 5173,
    backendPort: 8000,
    mongoPort: 27017,
  });
});

async function start(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
      // Keep startup details explicit for quick validation in local/devcontainer.
      console.log(`OctoFit backend listening on http://localhost:${port}`);
      console.log(`MongoDB connection URI: ${mongoUri}`);
    });
  } catch (error) {
    console.error('Failed to start backend service', error);
    process.exit(1);
  }
}

void start();
