import type { ReactNode } from 'react';
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import { Dashboard } from './dashboard/Dashboard';
import { About } from './about/About';
import PrivateGuard from './PrivateGuard';


interface Props {
  children?: ReactNode;
}

export const Router = ({ children }: Props) => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<PrivateGuard><Dashboard/></PrivateGuard>} />
            <Route path="/about" element={<About />} />
            <Route path='*' element = {<Navigate to="/about" replace />} />
        </Routes>
        {children}
  </BrowserRouter>
  )
}

