import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utiles/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
    }
  ])
  return (
    <Provider store={store}>
    <div >
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>

  );
}

export default App;
