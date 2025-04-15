---
sidebar_position: 1
---

# Introduction to Nephelios

## What is Nephelios?

**Nephelios** is an open-source **Platform-as-a-Service (PaaS)** designed to simplify the deployment, scaling, and management of containerized applications. Built on top of **Docker Engine**, Nephelios provides an automated, efficient, and developer-friendly solution for orchestrating cloud-native applications.

By leveraging the power of **Docker Swarm**, **Traefik**, and **automated provisioning**, Nephelios ensures seamless application lifecycle management while abstracting the complexities of infrastructure handling. Whether you are deploying a simple web application or a distributed microservices architecture, Nephelios adapts to your needs with minimal configuration.

## Key Features

- **Automated Deployment**: Deploy applications with minimal setup using declarative configurations.
- **Scalability & High Availability**: Scale your applications dynamically across multiple nodes.
- **Built-in Load Balancing**: Uses **Traefik** for intelligent traffic routing and automatic HTTPS management.
- **Multi-Tenant Support**: Manage multiple applications across different teams and environments.
- **Real-time Monitoring**: WebSocket-based deployment status updates for real-time feedback.
- **Lightweight & Extensible**: Designed for efficiency with a modular architecture.

## Why Choose Nephelios?

Nephelios is built for **developers, DevOps engineers, and IT administrators** who need an intuitive and scalable PaaS without the overhead of complex configurations. Unlike traditional PaaS solutions, Nephelios offers:

- **Seamless integration with Docker Swarm**, avoiding the need for additional orchestration layers.
- **A streamlined deployment process** that reduces manual intervention.
- **Support for custom application types** such as Node.js, Python, and more.
- **A modern, extensible API** for automation and external integrations.

## Use Cases

Nephelios is particularly useful for:

- **Self-hosting applications**: Easily deploy and manage services in your own infrastructure without relying on third-party cloud providers.
- **Developers without operational expertise**: Simplifies the deployment process for developers who want to focus on coding rather than managing infrastructure.
- **Small to medium-sized teams**: Provides a lightweight alternative to complex Kubernetes-based solutions while still offering scalability and automation.
- **Prototyping and testing**: Quickly spin up environments to test applications before production deployment.

## Getting Started

Nephelios provides a quick and straightforward installation process. To get started, follow these steps:

1. **Ensure** [**Docker Engine**](https://docs.docker.com/engine/install/) **is installed**
2. **Install Nephelios**

To begin using Nephelios, follow these steps:

***Set up the core platform:***
```bash
git clone https://github.com/Nephelios/nephelios.git
cd nephelios
```

***Run the docker compose:***
```bash
docker compose up
```
3. **Deploy your first application Using** the Nephelios Web Interface or Nephelios API.

Nephelios makes deploying and managing applications as simple as possible, enabling you to focus on building great software rather than managing infrastructure.
