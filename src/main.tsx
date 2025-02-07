import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomField } from './components/custom-field.tsx'
import './index.css'
import { ComplexSchema } from './components/complex-schema.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomField />
    <ComplexSchema />
  </StrictMode>
)
