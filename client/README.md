# Admin Dashboard

The project involves creating a simple admin dashboard that displays a list of users and allows adding, editing, and deleting users.

## Features

- **User Authentication**: Login system with session management stored in `localStorage`.
- **CRUD Operations**: Create, Read, Update, and Delete users.
- **State Management**: Implemented using  Redux.
- **Form Validation**: Validations using  React Hook Form.
- **API Integration**: use axios .
- **Routing**: Implemented using React Router for page navigation.
- **Styling**: Designed with TailwindCSS for a clean and responsive UI.
- **Backend**: Node.js for login and signup functionality.
- **Database**: MongoDB for storing user data.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/hadiaasghar/Admin-Dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd adminpanel
   ```

3. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

4. Install dependencies for the backend:
   ```bash
   cd ../server
   npm install
   ```

5. Start the development servers:
   - Frontend:
     ```bash
     npm run dev
     ```
   - Backend:
     ```bash
     npm run start
     ```
