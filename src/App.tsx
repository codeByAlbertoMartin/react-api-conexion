import { lazy, Suspense } from 'react';
import './App.css'
//import ProblematicExample from './components/ProblematicExample/ProblematicExample'
//import PromiseErrorExample from './components/PromiseErrorExample/PromiseErrorExample'
//import UndefinedExample from './components/UndefinedExample/UndefinedExample'
// import CustomModal from './components/BasicExamplePortal/BasicExamplePortal'
// import TooltipExample from './components/TooltipExample/TooltipExample'
import ErrorBoundary from './ErrorBoundary'
// import { Providers } from './providers/Providers'
// import { AppRouter } from './App.router'

// const UndefinedExample = lazy(() => import('./components/UndefinedExample/UndefinedExample.tsx'));
// const ProblematicExample = lazy(() => import('./components/ProblematicExample/ProblematicExample.tsx'));
// const PromiseErrorExample = lazy(() => import('./components/PromiseErrorExample/PromiseErrorExample.tsx'));
//const Form = lazy(() => import('./components/Form/Form.tsx'));
const InterceptorExample = lazy(() => import('./components/InterceptorExample/InterceptorExample.tsx'));

function App() {
  //const [selection, setSelection] = useState(0)

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Cargando...</div>}>
            <InterceptorExample />
          </Suspense>
      </ErrorBoundary>
    </>
            
            // <Form/>
            // {/* <button onClick={()=> setSelection(1)}>Selecciona UndefinedExample</button>
            // <button onClick={()=> setSelection(2)}>Selecciona PromiseErrorExample </button>
            // <button onClick={()=> setSelection(3)}>Selecciona ProblematicExample</button>
            // {selection === 1 && <UndefinedExample />}
            // {selection === 2 && <PromiseErrorExample /> }
            // {selection === 3 && <ProblematicExample/> } */}
    // <CustomModal>hola soy la app </CustomModal>
      // <TooltipExample />
    //  <Providers>
    //   <AppRouter/>
    // </Providers>
    )
}

export default App
