# Todo tasks app

This is a simple Todo tasks application built with React (frontend) and a backend service provided by [morosystems/todo-be](https://github.com/morosystems/todo-be). This app allows users to manage their tasks by adding, editing, marking as complete/incomplete, and deleting tasks.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- Backend server from [morosystems/todo-be](https://github.com/morosystems/todo-be)

## Installation

### 1. Clone the frontend repository

Clone this frontend repository to your local machine:

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies

Once inside the project directory, install the required dependencies by running:

```
npm install
```

### 3. Setup and run the backend

The backend API for this Todo app is available at [morosystems/todo-be](https://github.com/morosystems/todo-be). Clone and set up the backend repository by following the steps outlined there.

- Navigate to the backend repository and follow the setup instructions to start the backend service.
- Ensure that the backend is running locally (usually on http://localhost:8080).

### 4. Run the app

To start the frontend development server, run:

```
npm run start
```

The app will run on http://localhost:3000, and it should communicate with the backend at http://localhost:8080 by default.

You can now view the Task Todo app in your browser.

### Backend API Configuration

If the backend API is running on a different port or URL, ensure that the frontend is configured to communicate with the correct API endpoint. You can update the API URL inside your frontend codebase wherever the API calls are made.

## Thanks for using the application!
