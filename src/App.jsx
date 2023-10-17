import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
// import About from './Pages/About/About';
// import Projects from './Pages/Projects/Projects';
// import NaturalStone from './Pages/NaturalStone/NaturalStone';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFount/NotFound';
import Photos from './Pages/Photos/Photos';
import Videos from './Pages/Videos/Videos';
import { SkeletonTheme } from 'react-loading-skeleton';
import Clients from './Pages/Clients/Clients';
const LazyAbout = React.lazy(() => import ('./Pages/About/About'));
const LazyProjects = React.lazy(() => import ('./Pages/Projects/Projects'))
const LazyNaturalStone = React.lazy(() => import ('./Pages/NaturalStone/NaturalStone'))



const App = () => {

  const router = createBrowserRouter([
    { 
    path: '', 
    element: <Layout/>, 
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <React.Suspense> <LazyAbout/> </React.Suspense>},
      {path: 'products', element: <Products/>},
      {path: 'projects', element: <React.Suspense> <LazyProjects/> </React.Suspense>},
      {path: 'photos', element: <Photos/>},
      {path: 'videos', element: <Videos/>},
      {path: 'blog', element: <Blog/>},
      {path: 'contactus', element: <ContactUs/>},
      {path: 'clients', element: <Clients/>},
      {path: 'naturalstone', element: <React.Suspense> <LazyNaturalStone/> </React.Suspense>},
      {path: '*', element: <NotFound/>}
  ]}])
  return (
    <>
    <SkeletonTheme baseColor="#C6A467" highlightColor="#B86C0C">
    <RouterProvider router={router}/>
    </SkeletonTheme>
    </>
  )
}

export default App
