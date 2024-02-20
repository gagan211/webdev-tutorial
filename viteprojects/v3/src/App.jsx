import './App.css'
import UserContextProvider from './Context/Usercontext'
import Login from './components/Login'
import Profil from './components/Profil'

function App() {

  return (
    <UserContextProvider>
      <h1>context api</h1>
          <Login/>
          <Profil/>
    </UserContextProvider>
  )
}

export default App
