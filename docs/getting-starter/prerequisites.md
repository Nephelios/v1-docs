---
sidebar_position: 1
---

# Prerequisites for Installing Nephelios

## 🌳 Compatibility and Environment

Nephelios has been developed using **Rust 1.86.0** and has been tested on **Debian** and **Ubuntu** distributions. While it may function on other Linux environments, official support and stability are ensured on these platforms. It is strongly recommended to use a **64-bit Linux system** to guarantee full compatibility.

## 🚨 System Requirements

Before proceeding with the installation of Nephelios, ensure that your system meets the following prerequisites:

1. **Operating System**: A 64-bit version of **Debian** or **Ubuntu**.
2. **Rust Environment**: Ensure that **Rust 1.86.0** or later is installed.
3. **Docker Engine**: Nephelios relies on Docker Engine for containerization.

## 🪟 Windows Users: Running Nephelios with WSL

If you are using Windows, you can leverage **Windows Subsystem for Linux (WSL)** to create a compatible Linux environment for Nephelios. We recommend installing **WSL 2** with an Ubuntu distribution.

### Installing WSL and Ubuntu

1. **Enable WSL**:
   Open PowerShell as Administrator and run:

   ```powershell
   wsl --install
   ```

   This will install WSL and set up Ubuntu as the default distribution.

2. **Check WSL Version**:
   Ensure that WSL 2 is enabled by running:

   ```powershell
   wsl --list --verbose
   ```

   If your distribution is set to WSL 1, you can upgrade it to WSL 2 with:

   ```powershell
   wsl --set-version Ubuntu 2
   ```

3. **Launch Ubuntu**:
   Open Ubuntu from the Start Menu and complete the initial setup by creating a user account.

4. **Update and Install Dependencies**:
   Inside your Ubuntu terminal, update the package list:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
   You can now follow the Linux installation steps for **Rust** and **Docker** as described below.

For more details on WSL, refer to the [official Microsoft documentation](https://learn.microsoft.com/en-us/windows/wsl/install).

## 🦀 Installing Rust

To install Rust on your system, follow these steps:

1. **Download and Install Rust using Rustup**:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   Follow the on-screen instructions to complete the installation.

2. **Configure the Environment**:

   After installation, add Rust to your current shell session by running:

   ```bash
   source $HOME/.cargo/env
   ```

3. **Verify Installation**:

   Check that Rust is installed by running:

   ```bash
   rustc --version
   ```

   This should output the installed Rust version (e.g., `rustc 1.86.0`).

For additional installation options, refer to the official Rust documentation: [Rust Installation Guide](https://www.rust-lang.org/tools/install).

## 🐳 Installing Docker Engine

:::danger[Take care]

The following installation instructions are sourced from [the official Docker documentation](https://docs.docker.com/engine/install/). We do not take responsibility for any issues that may arise during the installation process. For the latest updates and troubleshooting, please refer to the official Docker documentation.

:::

### Ubuntu

To set up Docker Engine on Ubuntu, perform the following steps:

1. **Uninstall Conflicting Packages**: Remove any existing Docker packages that might conflict with the official Docker installation:

   ```bash
   for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
   ```

2. **Set Up Docker's APT Repository**:

   - Add Docker's official GPG key:

     ```bash
     sudo mkdir -p /etc/apt/keyrings
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.asc
     ```

   - Add the Docker repository to APT sources:

     ```bash
     echo \
       "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
       $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
       sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
     ```

   - Update the package index:

     ```bash
     sudo apt-get update
     ```

3. **Install Docker Packages**:

   - Install the latest version of Docker Engine and associated components:
     ```bash
     sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
     ```

4. **Verify Installation**:

   - Run the following command to ensure Docker is installed correctly:
     ```bash
     sudo docker run hello-world
     ```
     This command downloads and runs a test container, which prints a confirmation message upon successful execution.

### Debian

For Debian, the installation steps are similar but require slight modifications:

1. **Uninstall Conflicting Packages**:

   ```bash
   sudo apt-get remove docker.io docker-doc docker-compose podman-docker containerd runc
   ```

2. **Set Up Docker’s APT Repository**:

   ```bash
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.asc
   ```

   ```bash
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
     $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

   ```bash
   sudo apt-get update
   ```

3. **Install Docker Packages**:

   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

4. **Verify Installation**:
   ```bash
   sudo docker run hello-world
   ```

Ensuring that your system meets these prerequisites will facilitate a smooth installation and operation of Nephelios.
