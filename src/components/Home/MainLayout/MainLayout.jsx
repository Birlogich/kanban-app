import { Outlet } from 'react-router-dom'
import Main from '../Main/Main'

const MainLayout = () => {
  return (
    <>
    <Main/>
    <Outlet/>
    </>
  )
}

export default MainLayout