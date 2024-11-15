import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Default import from App.tsx
import App from './App.tsx';
import './index.css';

// Render the app to the root element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
