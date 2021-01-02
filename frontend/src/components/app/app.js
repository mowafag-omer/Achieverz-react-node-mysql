import Routes from '../../routes'
import UserContextProvider from '../../contexts/userContext';
import './app.css'

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </div>
  )
}

export default App;
