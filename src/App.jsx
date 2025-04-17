import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { db } from './components/firebase/firebase'
import { ref, push, onValue } from 'firebase/database'

import './App.css'

function App() {
  const routers = useRoutes(routes)

  return (
    <>
      {routers}
    </>
  )
}

export default App
