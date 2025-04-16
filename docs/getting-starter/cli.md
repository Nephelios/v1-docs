---
sidebar_position: 2
---

# Nephelios CLI – Installation & Usage

The Nephelios CLI is a lightweight command-line tool that simplifies the deployment and management of your Nephelios platform.

---

## 📦 Installation

### 1. Clone CLI

```bash
git clone https://github.com/Nephelios/nephelios-cli.git
cd nephelios-cli
```

### 2. Build CLI

```bash
cargo build
```

### 3. Install CLI

```bash
cargo install --path .
```

### 4. Verify Installation

```bash
nephelios-cli --version
```

---

## 🚀 Usage

Once installed, the CLI offers simple commands to manage the full Nephelios stack.

### 1. Start Nephelios

```bash
nephelios-cli up
```

This command:

- Pulls and starts the Nephelios Docker stack (back-end + front-end)
- Automatically configures networking
- Prints useful logs and status in the terminal

You can now access the application at [http://localhost:4173](http://localhost:4173).

### 2. Stop Nephelios

```bash
nephelios-cli down
```

This command:

- Gracefully shuts down the Nephelios stack
- Cleans up associated resources
