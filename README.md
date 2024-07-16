# propelauth_node
Propelauth Proxy Server


## Set Environment Variables in Azure Web App:

### Using Azure Portal:

Navigate to your Azure Web App in the Azure Portal.
In the left-hand menu, select "Configuration" under "Settings".
Under the "Application settings" tab, add new settings for AUTH_URL and API_KEY with the corresponding values.
Save the settings and restart the web app.

### Using AZ cli
```
az webapp config appsettings set --name <YourAppName> --resource-group <YourResourceGroup> --settings AUTH_URL=<YourAuthUrl> API_KEY=<YourApiKey>
```

### Configure Environment Variables:
In your Azure Web App settings, navigate to “Configuration.”
Add the following environment variables:

- AUTH_URL: The URL for authentication.
- API_KEY: Your API key.
- URL_WHERE_PROXY_IS_RUNNING: The URL where your proxy is running.
- PROXY_PORT: The port for your proxy.
- TARGET_HOST: The target host for your app.
- TARGET_PORT: The target port for your app.
- TARGET_PROTOCOL: The protocol (HTTP/HTTPS) for your app.

## Reference
- https://www.propelauth.com/post/streamlit-authentication
