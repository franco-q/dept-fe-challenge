import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@/pages/HomePage/HomePage'
import DetailPage from '@/pages/DetailPage/DetailPage'
import { FavsContextProvider } from '@/context/FavsContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/launch/:id',
    element: <DetailPage />
  }
])

const App = () => {
  return (
    <React.StrictMode>
      <FavsContextProvider>
        <RouterProvider router={router} />
      </FavsContextProvider>
    </React.StrictMode>
  )
}

export default App
