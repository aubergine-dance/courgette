import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { MathJaxContext } from 'better-react-mathjax';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MathJaxContext>
      <RouterProvider router={router} />
    </MathJaxContext>
  </StrictMode>,
);
