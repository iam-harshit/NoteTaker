import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './services/auth';
import { NotesProvider } from './contexts/NotesContext';
import ErrorBoundary from './components/ErrorBoundary';
import NoteDetail from './components/NoteDetail';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ViewNotes from './components/ViewNotes';
import ProtectedRoute from './components/ProtectedRoutes';

const App = () => (
  <AuthProvider>
    <NotesProvider>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/note/:id"
              element={
                <ProtectedRoute>
                  <NoteDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-note"
              element={
                <ProtectedRoute>
                  <CreateNote />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-notes"
              element={
                <ProtectedRoute>
                  <ViewNotes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditNote />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ErrorBoundary>
    </NotesProvider>
  </AuthProvider>
);

export default App;
