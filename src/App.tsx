import './App.css'
//import ProblematicExample from './components/ProblematicExample/ProblematicExample'
//import PromiseErrorExample from './components/PromiseErrorExample/PromiseErrorExample'
import UndefinedExample from './components/UndefinedExample/UndefinedExample'
// import CustomModal from './components/BasicExamplePortal/BasicExamplePortal'
// import TooltipExample from './components/TooltipExample/TooltipExample'
import ErrorBoundary from './ErrorBoundary'
// import { Providers } from './providers/Providers'
// import { AppRouter } from './App.router'

function App() {
  return (
    <>
      <ErrorBoundary>
          <UndefinedExample />
      </ErrorBoundary>
    </>
        //<PromiseErrorExample />
        //<ProblematicExample/>
        
    // <CustomModal>hola soy la app </CustomModal>
      // <TooltipExample />
    //  <Providers>
    //   <AppRouter/>
    // </Providers>
    )
}

export default App
