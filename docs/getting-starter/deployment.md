---
sidebar_position: 4
---

# First Deployment

Now that the Nephelios stack is up and running, you can deploy your first application directly through the web interface.

---

## 👉 Deployment Requirements

Before deploying, make sure your application meets the following conditions:

### Public or Accessible Repository

The source code **must be hosted in a public Git repository** (e.g., on GitHub or GitLab). If the repository is private, it must still be accessible from the Nephelios host machine (for example, via SSH keys or access tokens configured on the host).

### NodeJS 20 Runtime

Currently, applications are deployed and run using **Node.js version 20**.

> ⚠️ Lower versions of Node.js may result in unexpected behavior or incompatibilities. Make sure your app is compatible with **Node.js 20**.

You can check your app’s version compatibility by inspecting your `package.json`:

```json
"engines": {
  "node": ">=20"
}
```

### Fixed Port Binding: `3000`

All deployed applications must **listen on port `3000`**.

This is a strict requirement due to how Nephelios routes network traffic between containers.

In your app, make sure the server is configured like this:

```js
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
```

---

## 🌐 Deploying via the Web Interface

:::info

If your repository contains a `Dockerfile`, Nephelios will use it to build the container image. Otherwise, it will use the default build process.

:::

Once you meet the above conditions:

1. Open the Nephelios web interface at [http://localhost:4173](http://localhost:4173)

2. Click on **Deploy Application**

3. Fill in the required fields:

   - **Application Name** (e.g., "my-app")
   - **Repository URL** (must be Git-compatible)
   - **Application Type** (e.g., "NodeJS")

4. Special field:

   - **Workdir** (e.g., "/app") : the working directory in your repository.
   - **Build Command** (e.g., "npm run build") : the command to build your application. If your application does not require a build step, **leave this field empty**.
   - **Start Command** (e.g., "npm run start") : the command to start your application.

5. (Optional) **Environment Variables** : add any environment variables your application requires.

6. Submit the form and monitor the deployment status in real time.

Nephelios will:

- Clone the repository
- Build and containerize the application
- Start the app inside the cluster and expose it through Traefik

Once deployed, your app will be accessible via a generated subdomain `https://<your-app>.nephelios.localhost`.

---

✅ You’re now ready to start deploying microservices, prototypes, or full apps in seconds!
