# Notes-Taker App

## Project Brief

The **Notes-Taker** app is a simple, user-friendly application built with React that allows users to create, view, and manage their notes. It provides essential functionality for writing, editing, and organizing personal notes. The application leverages **Auth0** for user authentication and **React Context API** for managing the state of the notes across different components.

## Features

- **User Authentication**: Secure login and logout functionality using Auth0.
- **Create Notes**: Users can add new notes with titles and content.
- **View Notes**: Users can view a list of their saved notes and their details.
- **Edit Notes**: Users can edit their notes anytime.
- **Search Notes**: Filter notes based on the title with a search bar.
- **Persistent Data**: Notes are stored in the local state, and the user’s session persists across page refreshes.

## Setup Guide

To get the application up and running on your local machine, follow these steps:

### 1. **Clone the Repository**
        git clone https://github.com/iam-harshit/NoteTaker.git
        cd NoteTaker
### 2. **Install Dependencies**
        yarn install
### 3. **Setup Auth0**
1. Go to Auth0 and sign up (or log in if you already have an account).
   
2. Create a new application
   2.1. Choose "Single Page Web Applications".
   2.2. Name your app and choose "React" as the platform.

3. Copy the Client ID and Client Secret once the app is created.
   
4. Go to your Auth0 dashboard and set the Allowed Callback URLs and Allowed Logout URLs. For localhost, use the URL of your local development server (e.g., http://localhost:3000). For production, use your deployed app's URL (e.g., https://yourdomain.com).
   
5. In your project directory, create a .env file in the root and add the following variables:
    ```bash
    VITE_APP_AUTH0_DOMAIN=your-auth0-domain
    VITE_APP_AUTH0_CLIENT_ID=your-auth0-client-id
    VITE_APP_AUTH0_REDIRECT_URI=your-auth0-redirect-uri
### 4. **Run the App**
        npm run dev
        



