import type { ReactNode } from 'react';
import { BrowserRouter,Navigate,Route} from 'react-router-dom';
import { About } from './public/about/About';
import { RoutesWithNotFound } from './providers/RoutesWithNotFound';
import { PrivateRouter } from './private/Private.router';
import PrivateGuard from './guards/PrivateGuard';
import { PrivateRoute } from './private/dashboard/models';

interface Props {
  children?: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return(
    <BrowserRouter>
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to ={PrivateRoute}/>} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateGuard/>} />
            <Route path={PrivateRoute + "/*"} element= {<PrivateRouter/>}/>
        </RoutesWithNotFound>
        {children}
  </BrowserRouter>
  )
}

