import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Queries from './pages/queries/Queries.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr></hr>
      <div className="app-content">
        <Sidebar/>
        <Queries />
      </div>
    </div>
  )
}

export default App;