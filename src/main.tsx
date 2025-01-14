import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app/styles/index.scss';
import ErrorBoundary from './app/styles/providers/ErrorBoundary/ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
    </ErrorBoundary>
)
