import { initializeAuthProxy } from '@propelauth/auth-proxy'

// Retrieve secrets from environment variables
const authUrl = process.env.AUTH_URL;
const apiKey = process.env.API_KEY;
const urlWhereYourProxyIsRunning = process.env.URL_WHERE_PROXY_IS_RUNNING;
const proxyPort =process.env.PROXY_PORT;
const targethost= process.env.TARGET_HOST;
const targetport = process.env.TARGET_PORT;
const targetprotocol = process.env.TARGET_PROTOCOL;


if (!authUrl || !apiKey) {
    throw new Error("AUTH_URL and API_KEY environment variables must be set");
}

// Initialize the auth proxy with the environment variables
await initializeAuthProxy({
    authUrl: authUrl,
    integrationApiKey: apiKey,
    proxyPort: proxyPort,
    urlWhereYourProxyIsRunning: urlWhereYourProxyIsRunning,
    target: {
        host: targethost,
        port: targetport,
        protocol: targetprotocol,
    },
});
