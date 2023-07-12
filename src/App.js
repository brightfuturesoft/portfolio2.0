import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routers/Route/Route';
import { useEffect, useState } from 'react';
import Loader from './pages/shared/Loader';

function App() {
   const [sppin, setSppin] = useState(false);


  useEffect(() => {
    setSppin(true);
    setTimeout(() => {
      setSppin(false);
    }, 2000);
  }, []);
  
  return (
    <div>
{sppin ? <Loader></Loader>: <RouterProvider router={route}></RouterProvider>}
    </div>
    
  );
}

export default App;
