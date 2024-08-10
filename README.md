Here’s a structured and polished README file based on your project description:

---

# EAS DevTool & UI Kit

## Overview

This project is built on top of the Ethereum Attestation Service (EAS). The problem with EASScan is that it doesn't allow users to view their own schemas and attestations in one centralized place—everything is scattered. The role of explorers should be to provide essential stats and easy access to key information.

This project has two main components:

1. **DevTool**: A platform where you can manage, view, and attest data. It provides a comprehensive interface to interact with your schemas and attestations.
2. **EAS UI Kit**: A plug-and-play React component designed to create and attest schemas seamlessly. Think of it as the WalletConnect button, but for EAS.

## Technology Stack

- **EAS SDK**: The core of the Ethereum Attestation Service, enabling easy interaction with the EAS protocol.
- **React**: A popular JavaScript library for building user interfaces.
- **Wagmi**: React hooks for Ethereum, helping with wallet connection and other Ethereum-related functionalities.
- **ethers**: A complete Ethereum wallet implementation and utilities in JavaScript (and TypeScript).
- **GraphQL Client**: For fetching and managing data efficiently from the EAS GraphQL API.

## Features

### DevTool

- **Manage**: A centralized place to manage all your schemas and attestations.
- **View**: Easily view your schemas and attestations without the hassle of navigating through scattered information.
- **Attest**: Attest data with a simple and intuitive interface.

### EAS UI Kit

- **Plug-and-Play**: Integrate the EAS UI Kit into your React application with ease.
- **Create Schemas**: Easily create new schemas within your application.
- **Attest Schemas**: Attest schemas directly from the UI Kit, simplifying the process for end-users.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm or yarn
- An Ethereum wallet (e.g., MetaMask)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/eas-devtool.git
   cd eas-devtool
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Usage

- **DevTool**: Navigate to the `/devtool` path to manage, view, and attest your EAS data.
- **EAS UI Kit**: Import and integrate the UI Kit into your React components to enable schema creation and attestation.

## Contributions

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Make sure to follow the project's coding guidelines and standards.

### Developers

Koushith Amin
Sweta Shaw
