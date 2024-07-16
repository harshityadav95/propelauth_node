import { initializeAuthProxy } from '@propelauth/auth-proxy'

// Retrieve secrets from environment variables
const authUrl = process.env.AUTH_URL;
const apiKey = process.env.API_KEY;

if (!authUrl || !apiKey) {
    throw new Error("AUTH_URL and API_KEY environment variables must be set");
}

// Initialize the auth proxy with the environment variables
await initializeAuthProxy({
    authUrl: authUrl,
    integrationApiKey: apiKey,
    proxyPort: 8000,
    urlWhereYourProxyIsRunning: 'http://localhost:8000',
    target: {
        host: 'localhost',
        port: 8501,
        protocol: 'http:'
    },
});
