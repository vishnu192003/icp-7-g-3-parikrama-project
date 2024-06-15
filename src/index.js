import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
import Home from './views/Stays/Stays';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    
    {
        path: "/",
        element:<Home/>
    },
  //   {
  //     path: "/flights",
  //     element:<Flights/>
  // }
//   {
//     path: "/hotels",
//     element:<Hotels/>
// },
// {
//   path: "/rental",
//   element:<Rental/>
// },
// {
//   path: "/cars",
//   element:<Cars/>
// },
//   path: "/register",
//   element:<Register/>
    {
        path: "/",
        element: <Register/>
    }
]);
root.render(<RouterProvider router={router}/>
);