import './App.css'
import MainLayout from './components/Layout/MainLayout'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>



    </>
  )
}

export default App
