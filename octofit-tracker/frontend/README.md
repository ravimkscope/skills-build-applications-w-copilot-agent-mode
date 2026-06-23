# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

For Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` so the frontend can call the backend API on port `8000`:

```text
VITE_CODESPACE_NAME=your-codespace-name
```

The app builds API URLs as:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```

## Run

```bash
npm run dev --prefix octofit-tracker/frontend
```

## Build

```bash
npm run build --prefix octofit-tracker/frontend
```
