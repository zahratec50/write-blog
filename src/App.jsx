import routes from './routes'
import { useRoutes } from 'react-router-dom'

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
