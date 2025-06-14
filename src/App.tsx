import './App.css'
import { UserProvider} from './context/user.context'
import { Dashboard } from './dashboard/Dashboard'

function App() {
  return (
    <>
    <UserProvider>
      <Dashboard/>
    </UserProvider>
    </>
  )
}

export default App
