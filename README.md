

# EAS DevTool & EAS React SDK

This project is built on top of the Ethereum Attestation Service (EAS). The problem with EASScan is that it doesn't allow users to view their own schemas and attestations in one centralized place—everything is scattered. The role of explorers should be to provide essential stats and easy access to key information.

## This project has two main components:

1. **DevTool**: A platform where you can manage, view, and attest data. It provides a comprehensive interface to interact with your schemas and attestations.
2. **EAS React SDK**: A plug-and-play React component designed to create and attest schemas seamlessly. Think of it as the WalletConnect button, but for EAS.

## Technology Stack

- **Ethereum Attestation Service SDK**: The core of the Ethereum Attestation Service, enabling easy interaction with the EAS protocol.
- **React**: A popular JavaScript library for building user interfaces.
- **Wagmi**: React hooks for Ethereum, helping with wallet connection and other Ethereum-related functionalities.
- **ethers**: A complete Ethereum wallet implementation and utilities in JavaScript (and TypeScript).
- **GraphQL Client**: For fetching and managing data efficiently from the EAS GraphQL API.

## Features

### DevTool

- **Manage**: A centralized place to manage all your schemas and attestations.
- **View**: Easily view your schemas and attestations without the hassle of navigating through scattered information.
- **Attest**: Attest data with a simple and intuitive interface.

### EAS React SDK

It uses [Ethereum Attestation Service SDK](https://github.com/ethereum-attestation-service/eas-sdk) under the hood to provide the following features:

- **Plug-and-Play**: Integrate the EAS React SDK into your React application with ease.
- **Create Schemas**: Easily create new schemas within your application.
- **Attest Schemas**: Attest schemas directly from the EAS React SDK, simplifying the process for end-users.

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

### Screenshots
<img width="1782" alt="Screenshot 2024-08-11 at 3 24 41 AM" src="https://github.com/user-attachments/assets/4b587dde-e774-47da-b889-45e84cd31b50">
<img width="1792" alt="Screenshot 2024-08-11 at 3 18 59 AM" src="https://github.com/user-attachments/assets/cce4caad-1b25-43bb-b3be-e1a0c13602eb">
<img width="1782" alt="Screenshot 2024-08-11 at 3 23 50 AM" src="https://github.com/user-attachments/assets/b68d8419-0398-43b6-b935-b9a8a04e8b83">
<img width="1782" alt="Screenshot 2024-08-11 at 3 24 41 AM" src="https://github.com/user-attachments/assets/bf2a1b61-2bcd-444f-9e8e-21566d342fcc">
<img width="1782" alt="Screenshot 2024-08-11 at 3 25 56 AM" src="https://github.com/user-attachments/assets/df492018-9e7c-4af7-94ba-25be8ae8fc83">


### Usage

- **DevTool**: Navigate to the `/devtool` path to manage, view, and attest your EAS data.
- **EAS React SDK**: Import and integrate the EAS React SDK into your React components to enable schema creation and attestation.

## Contributions

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Make sure to follow the project's coding guidelines and standards.

### Developers

**Koushith Amin**

- **Twitter**: [@koushith](https://twitter.com/koushithamin)
- **LinkedIn**: [Koushith Amin](https://www.linkedin.com/in)
- **GitHub**: [koushith](https://github.com/koushith)

**Sweta Shaw**

- **Twitter**: [@sweta](https://twitter.com/swetashaw_)
- **LinkedIn**: [Sweta Shaw](https://www.linkedin.com/sweta-shaw)
- **GitHub**: [swetashaw](https://github.com/swetshaw)

