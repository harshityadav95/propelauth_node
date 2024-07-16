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

## Reference
- https://www.propelauth.com/post/streamlit-authentication
