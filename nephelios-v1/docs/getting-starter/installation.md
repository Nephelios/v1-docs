---
sidebar_position: 2
---

# Nephelios Installation Guide

## Getting Started

To set up Nephelios, follow these steps to install both the back-end and front-end components.

### 1. Create a Working Directory

Before proceeding, create a dedicated directory to house all Nephelios-related repositories:

```sh
mkdir nephelios && cd nephelios
```

---

## Installing Nephelios (Back-End)

### 2. Clone the Repository

Clone the Nephelios back-end repository:

```sh
git clone https://github.com/Nephelios/nephelios.git
cd nephelios
```

### 3. Install Dependencies

Ensure you have Rust installed, then build the project:

```sh
cargo build --release
```

### 4. Configure the Environment

Copy the example environment file and **adjust configurations** as needed:

```sh
cp .env.example .env
```

### 5. Run the Agent

Start the Nephelios agent:

```sh
cargo run --release
```

---

## Installing Nephelios Front-End

### 6. Install Node.js

Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/) or install it via package managers:

```sh
sudo apt install nodejs npm
```

### 7. Clone the Front-End Repository

Clone the Nephelios front-end repository:

```sh
cd ..  # Move back to the parent directory nephelios/

git clone https://github.com/Nephelios/nephelios-front.git
cd nephelios-front
```

### 8. Install Dependencies

Run the following command to install necessary dependencies:

```sh
npm install
```

### 9. Build and Run the Front-End

To build and preview the application:

```sh
npm run build
npm run preview
```

---

Nephelios is now fully installed and running! 🎉

