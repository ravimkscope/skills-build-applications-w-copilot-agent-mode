"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express_1.default.json());
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
async function start() {
    try {
        await mongoose_1.default.connect(mongoUri);
        app.listen(port, () => {
            // Keep startup details explicit for quick validation in local/devcontainer.
            console.log(`OctoFit backend listening on http://localhost:${port}`);
            console.log(`MongoDB connection URI: ${mongoUri}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend service', error);
        process.exit(1);
    }
}
void start();
