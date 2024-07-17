import './sass/importIcons.scss'
import './sass/importClasses.scss'
import './sass/importComponents.scss'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/404/NotFound.jsx';
import Movie from './pages/Movie/Movie.jsx'
import Search from './pages/Search/Search.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"movie/:id",
        element: <Movie/>
      },
      {
        path:"search",
        element: <Search/>
      }
    ]
  }
],
{
  basename: "/movies-react"
}
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
