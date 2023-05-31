import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import PagenotFound from './pages/PagenotFound';
import MovieDetail from './pages/MovieDetail';
import MoviesList from './pages/MoviesList';
import Popular from './pages/Popular';
import Top from './pages/Top';
import Upcoming from './pages/Upcoming';
import Root from './pages/Root';
import { loader as singleLoader } from './pages/MovieDetail';
import {upcomingLoader,moviesLoader,topLoader,popularLoader} from './pages/index'
const router=createBrowserRouter([
  {
    
    path:'/',element:<Root />,errorElement:<PagenotFound/>,children:[
      {
        index:true,element:<MoviesList />,loader:moviesLoader
      },
      {
        path:'movies/:moviedetail',element:<MovieDetail />,loader:singleLoader
      },
      {
        path:'movies/popular',element:<Popular />, loader:popularLoader
      },
      {
        path:'movies/upcoming',element:<Upcoming />, loader:upcomingLoader
      },
      {
        path:'movies/top',element:<Top />, loader:topLoader
      },
      {
        path:'search',element:<Search />
      },
      // {
      //   path:'*',element:<PagenotFound />
      // },
    ]
  }
  
])
function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
