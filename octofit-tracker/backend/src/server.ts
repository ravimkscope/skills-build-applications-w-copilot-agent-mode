import express from 'express';
import { connectDatabase, mongoUri } from './config/database';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const host = '0.0.0.0';

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

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
});

async function start(): Promise<void> {
  try {
    await connectDatabase();
    app.listen(port, host, () => {
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
