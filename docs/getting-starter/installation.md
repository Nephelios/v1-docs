---
sidebar_position: 3
---

# Nephelios Manual Installation

## 🕹️ Getting Started

To begin using Nephelios, follow these steps:

### 1. Create a Working Directory

Create a dedicated directory to house all Nephelios-related repositories:

```bash
mkdir nephelios && cd nephelios
```

---

## 📦 Installing Nephelios (Back-End)

### 2. Clone the Repository

Clone the Nephelios core platform:

```bash
git clone https://github.com/Nephelios/nephelios.git
cd nephelios
```

---

### 3. Run the Back-End with Docker

Use Docker Compose to start the full back-end stack:

```bash
docker compose up
```

---

## 📦 Installing Nephelios Front-End

### 4. Install Node.js and pnpm

Ensure you have Node.js (v18 or higher) installed. You can download it from the [Node.js Official Website](https://nodejs.org/) or install it via a package manager:

```bash
sudo apt install nodejs npm
```

Then install `pnpm` (recommended for better performance):

```bash
npm install -g pnpm
```

---

### 5. Clone the Front-End Repository

Clone the Nephelios front-end repository:

```bash
cd ..  # Move back to the parent directory nephelios/

git clone https://github.com/Nephelios/nephelios-front.git
cd nephelios-front
```

---

### 6. Install Dependencies

Install the project dependencies using `pnpm`:

```bash
pnpm install
```

---

### 7. Set Up Environment Variables

Create a `.env` file in the root directory of the project with the following content:

```env
REACT_APP_NEPHELIOS_BACKEND_URL=http://localhost
REACT_APP_NEPHELIOS_BACKEND_PORT=3030
```

---

### 8. Start the Development Server

To run the app in development mode:

```bash
pnpm dev
```

The application will be available at: [http://localhost:5173](http://localhost:5173)

---

### 9. Build for Production

To build the application for production:

```bash
pnpm build
```

The built files will be located in the `dist` directory.

---

### 10. Docker Deployment

Nephelios front-end can also be deployed using Docker:

```bash
# Build the Docker image
docker build -t nephelios-frontend .

# Run the container
docker run -p 4173:4173 --name nephelios-frontend zuhowks/nephelios-frontend:latest
```

This will serve the front-end on [http://localhost:4173](http://localhost:4173).
