import './App.css'
import CustomModal from './components/BasicExamplePortal/BasicExamplePortal'
import TooltipExample from './components/TooltipExample/TooltipExample'
// import { Providers } from './providers/Providers'
// import { AppRouter } from './App.router'

function App() {
  return (
    <>
      <CustomModal>hola soy la app </CustomModal>
      <TooltipExample />
    </>
    //  <Providers>
    //   <AppRouter/>
    // </Providers>
    )
}

export default App
