import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router.tsx";
import { defaultTheme } from "./theme.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
