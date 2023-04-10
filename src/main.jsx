import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import Jobs from './Components/Jobs/Jobs'
import Blogs from './Components/Blogs/Blogs'
import JobDetails from './Components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'home',
        element:<Home></Home>,
        loader:()=> fetch('./../public/data.json')
      },
      {
        path:'/job-details/:id',
        element:<JobDetails></JobDetails>,
        loader:({params}) => fetch(`./../public/detailsData${params.id}.json`)
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
