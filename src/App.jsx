import React from 'react'
import AppRoute from './RouteApp/AppRoute'
import { UserContextProvider } from './Contexts/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <UserContextProvider>
      <ToastContainer/>
      <AppRoute/>
    </UserContextProvider>
  )
}
