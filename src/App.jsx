import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'

function App() {

  return (
    <>
   <Routes>
      {routes.map(({path,element})=>(
        <Route path={path} key={path} element={element} />
      ))}
    </Routes>
    </>
  )
}

export default App
